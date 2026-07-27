import { Container, Stack } from "react-bootstrap";
import { useNavigate } from "react-router";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaArrowLeft,
  FaCheckCircle,
  FaDownload,
  FaShoppingBag,
  FaStore,
} from "react-Icons/fa";
import { useState, useMemo, useEffect } from "react";
import { SummaryCard } from "./components/SummaryCard";
import { SearchBar } from "./components/Searchbar";
import { Filter } from "./components/Filter";
import { GroupedTransaction } from "./components/GroupedTransaction";
import { Selected } from "./components/Selected";

// transaction types config
const TX_CONFIG = {
  TOPUP: {
    Icon: FaArrowAltCircleDown,
    color: "#1D9E75",
    bg: "rgba(29,158,117,0.08)",
    label: "Wallet top up",
  },
  WITHDRAWAL: {
    Icon: FaArrowAltCircleUp,
    color: "#c9a84c",
    bg: "rgba(201,168,76,0.08)",
    label: "Withdrawal",
  },
  PURCHASE: {
    Icon: FaShoppingBag,
    color: "#c9a84c",
    bg: "rgba(201,168,76,0.08)",
    label: "Order payment",
  },
  REFUND: {
    Icon: FaCheckCircle,
    color: "#378ADD",
    bg: "rgba(55,138,221,0.08)",
    label: "Refund received",
  },
  SALE: {
    Icon: FaStore,
    color: "#1D9E75",
    bg: "rgba(29,158,117,0.08)",
    label: "Sale received",
  },
};

//filter name config
const FILTERS = [
  "All",
  "Top up",
  "Withdrawal",
  "Purchases",
  "Refunds",
  "Sales",
];

export function Transactions() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [txns, setTxns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState({
    balance: 0,
    moneyIn: 0,
    moneyOut: 0,
    inCount: 0,
    outCount: 0,
  });

  // fetch on mount
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/wallet/transactions");
        setTxns(data.transactions);
        setSummary(data.summary);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  // filter and search
  const filtered = useMemo(() => {
    return txns.filter((tx) => {
      const matchFilter =
        filter === "All"
          ? true
          : filter === "Top up"
            ? tx.type === "TOPUP"
            : filter === "Withdrawal"
              ? tx.type === "WITHDRAWAL"
              : filter === "Purchases"
                ? tx.type === "PURCHASE"
                : filter === "Refunds"
                  ? tx.type === "REFUND"
                  : filter === "Sales"
                    ? tx.type === "SALE"
                    : true;

      const matchSearch = search
        ? tx.title.toLowerCase().includes(search.toLowerCase()) ||
          tx.description.toLowerCase().includes(search.toLowerCase())
        : true;

      return matchFilter && matchSearch;
    });
  }, [txns, filter, search]);

  // group by date

  const grouped = useMemo(() => {
    const groups = {};

    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const today = new Date().toDateString();

    const sorted = [...filtered].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );

    sorted.forEach((tx) => {
      const date = new Date(tx.createdAt).toDateString("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const label =
        date === today ? "Today" : date === yesterday ? "Yesterday" : date;

      if (!groups[label]) groups[label] = [];
      groups[label].push(tx);
    });

    return groups;
  }, [filtered]);

  const isIncoming = (type) => ["TOPUP", "REFUND", "SALE"].includes(type);

  const isFailed = (type) => ["FAILED"].includes(type);

  return (
    <>
      <Container className="px-3 py-3 transaction">
        {/* Topbar */}

        <div
          className="mb-5 d-flex  align-items-center justify-content-between p-3 py-4 fixed-top"
          style={{ background: "#000", borderRadius: 12 }}
        >
          <div className="d-flex gap-3 gap-md-5 align-items-center">
            <div
              onClick={() => navigate(-1)}
              className="d-flex align-items-center "
              style={{
                background: "#ffffff42",

                borderRadius: "100%",
                padding: "10px",
              }}
            >
              <FaArrowLeft size={15} />
            </div>

            <h3 className="text-light">
              <b>Transactions</b>
            </h3>
          </div>

          <FaDownload className="fs-5" />
        </div>

        {/* Summary card */}

        <SummaryCard summary={summary} />

        {/* Search */}

        <SearchBar search={search} setSearch={setSearch} />

        {/* Filters */}

        <Filter filter={filter} setFilter={setFilter} FILTERS={FILTERS} />

        {/* Grouped transactions */}

        <GroupedTransaction
          grouped={grouped}
          TX_CONFIG={TX_CONFIG}
          isFailed={isFailed}
          isIncoming={isIncoming}
          setSelected={setSelected}
          loading={loading}
        />
      </Container>

      {/* Detail bottom sheet */}
      {selected && (
        <Selected
          show={() => setSelected(true)}
          setSelected={setSelected}
          TX_CONFIG={TX_CONFIG}
          isFailed={isFailed}
          isIncoming={isIncoming}
          selected={selected}
        />
      )}
    </>
  );
}
