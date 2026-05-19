import { Row, Col, Form } from "react-bootstrap";

function ProductFilter({ selectkeyword, setSelectedKeyword, keywords, selectedPrice, setSelectedPrice}) {
  
  return (

      <Row className="my-5 py-5 justify-content-center align-items-center text-center g-5" >

        <Col className="col-12 col-sm-2">
          <div style={{color:"#fff", fontSize:"20px", lineHeight:"1.2"}} className="fw-semibold">
              Filter by:
          </div>
        </Col>
        
        {/* Category Filter */}

        <Col className="col-12 col-sm-5" >

          <select className="cat-select" value={selectkeyword} onChange={e => setSelectedKeyword(e.target.value)}>
            <option value="">All Categories</option>
            { keywords.map(k => {
              return (<option key={k} value={k}>{k}</option>)
            })}
          </select>
          
        </Col>

        {/* Price Range Filter */}
        <Col className="col-12 col-sm-5" >
          <select className="cat-select" value={selectedPrice} onChange={e => setSelectedPrice(e.target.value)}>
            <option value="">All Prices</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200+">$200+</option>
          </select>
        </Col>

      </Row>
    
  );
}

export default ProductFilter;