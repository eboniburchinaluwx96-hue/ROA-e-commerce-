export function Filter({ filter, setFilter, FILTERS }) {
  return (
    <div className="filter mb-4 d-flex gap-3 gap-md-4">
      {FILTERS.map((f) => (
        <button
          className="px-3 "
          key={f}
          onClick={() => setFilter(f)}
          style={{
            borderRadius: 20,
            textWrap: "nowrap",
            transition: "all 0.15s",
            border: `0.5px solid ${filter === f ? "#f3f70094" : "rgba(255,255,255,0.08)"}`,
            background: filter === f ? "#3c3d078f" : "transparent",
          }}
        >
          <p>{f}</p>
        </button>
      ))}
    </div>
  );
}
