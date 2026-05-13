import { Form, FormControl } from "react-bootstrap";

const HeaderSearch = () => {
  return (
    <>
      {/* Desktop Search */}
      <Form className="d-none d-md-flex w-50 search-bar">
        <FormControl placeholder="Search products..." className="mx-4 text-light"/>
      </Form>

    </>
  );
};

export default HeaderSearch;