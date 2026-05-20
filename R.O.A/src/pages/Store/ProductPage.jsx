import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductGrid from "./ProductGrid";
import ProductDetails from "./ProductDetails";
import ProductDrawer from "./ProductDrawer";

export default function ProductPage({setCategory, category, filtered, CATEGORIES}) {
  const [selected, setSelected] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const selectProduct = (product) => {
    setSelected(product);
    setShowDetails(true);

    if (window.innerWidth < 768) {
      setShowDrawer(true);
      setShowDetails(false);
    };

  };

  return (
    <>
      <section style={{ padding:"2.8rem 0 5rem" }}>
        <Container >
          <div>
      
            {/* Toolbar */}
            <Row className="my-4" >
              <Col className="mb-5 text-sm-start text-center" >
                <div style={{ color:"#00E676", fontWeight:700, fontSize:"0.8rem", letterSpacing:1, textTransform:"uppercase", fontFamily:"'Outfit',sans-serif", display:"block", marginBottom:20 }} >
                  store catalogue
                </div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, color:"#fff", fontSize:"clamp(1.25rem,3vw,1.75rem)", margin:0, lineHeight:"0.85" }}>
                  {category}
                </div>
              </Col>
              <Col className="col-auto">
                <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>

                <span className="cat-label-item" >{filtered.length} item{filtered.length!==1?"s":""}</span>

                <label className="cat-label">Filter by:</label>

                <select className="cat-select" value={category} onChange={e => setCategory(e.target.value)}>
                  {CATEGORIES.map(c => {
                    return (<option key={c} value={c}>{c}</option>)
                  })}
                </select>
              </div>
              </Col>
            </Row>
      
            {/* Grid */}
            {filtered.length > 0 ? (
              <Row>
                {filtered.map((p) => (
                      <ProductGrid selectProduct={selectProduct} product={p} />
                ))}
              </Row>
            ) : (
              <div style={{ textAlign:"center", padding:"70px 0" }}>
                <p style={{ color:"rgba(255,255,255,0.36)", fontFamily:"'Outfit',sans-serif", fontSize:"1rem" }}>No Products in this category yet</p>
                <button onClick={() => setCategory("All products")} style={{ marginTop:12, background:"none", border:"1px solid rgba(0,230,118,0.3)", color:"#00E676", borderRadius:8, padding:"8px 20px", cursor:"pointer", fontFamily:"'Outfit',sans-serif", fontSize:"0.82rem" }}>View all Rroducts</button>
              </div>
            )}
          </div>
        </Container>

          {/* DETAILS (desktop animated switching) */}
            <div>
            
              {selected && (<ProductDetails 
              product={selected}
              show={showDetails} 
              onHide={()=> {setShowDetails(false)}} onClose={()=> setSelected(null)} />
              )}
            </div>

            {/* MOBILE DRAWER (drag enabled) */}
              {selected && (
                <ProductDrawer
              show={showDrawer}
              onHide={() => setShowDrawer(false)}
              product={selected}
              onClose={()=> setSelected(null)}
              />
              )}

        </section>
    </>
  );
}