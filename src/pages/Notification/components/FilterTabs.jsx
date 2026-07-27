import { Stack } from "react-bootstrap";

export function FilterTabs({
  FILTERS,
  setActiveFilter,
  filterCounts,
  activeFilter,
}) {
  return (
    <div
      className=" filter-tab d-flex gap-4 gap-lg-4"
      style={{ marginTop: "150px" }}
    >
      {FILTERS.map((f) => {
        return (
          <div
            onClick={() => setActiveFilter(f.key)}
            key={f.key}
            className=" p-4 py-2"
            style={{
              cursor: "pointer",
              borderRadius: "25px",
              border:
                activeFilter === f.key
                  ? "0.5px solid #facc15"
                  : "0.5px solid #fff",
              background: activeFilter === f.key ? "#352b02" : "",
              color: activeFilter === f.key ? "#facc15" : "",
            }}
          >
            <Stack
              className="align-items-center"
              direction="horizontal"
              gap={3}
            >
              {f.label}

              {FILTERS.types && (
                <div
                  className="p-2"
                  style={{ background: "#facc15", borderRadius: "50%" }}
                >
                  <p>{filterCounts[f.key] || 0}</p>
                </div>
              )}
            </Stack>
          </div>
        );
      })}
    </div>
  );
}
