import { Form } from "react-bootstrap";
import { FaSearch } from "react-Icons/fa";

export function SearchBar({ search, setSearch }) {
  return (
    <div
      className="d-flex align-items-center  mt-5"
      style={{ marginBottom: "100px" }}
    >
      <div
        style={{
          background: "#fff",
          padding: "13.2px",
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      >
        <FaSearch size={25} color="black" />
      </div>
      <Form.Control
        placeholder="search transaction..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
      />
    </div>
  );
}
