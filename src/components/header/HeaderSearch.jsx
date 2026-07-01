import { FormControl } from "react-bootstrap";

const HeaderSearch = () => {
  return (
    <>
      {/* Desktop Search */}
      <div
        className="d-none d-sm-block search-bar me-3"
        style={{ flexShrink: 500 }}
      >
        <FormControl
          placeholder="Search products, stores..."
          className="text-light py-2 w-100"
        />
      </div>
    </>
  );
};

export default HeaderSearch;
