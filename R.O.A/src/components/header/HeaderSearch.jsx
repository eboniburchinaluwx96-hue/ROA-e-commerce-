import { Form, FormControl } from "react-bootstrap";

const HeaderSearch = () => {
  return (
    <>
      {/* Desktop Search */}
      <Form className="d-none d-md-flex w-50 mx-3 search-bar">
        <FormControl placeholder="Search products..." />
      </Form>

    </>
  );
};

export default HeaderSearch;