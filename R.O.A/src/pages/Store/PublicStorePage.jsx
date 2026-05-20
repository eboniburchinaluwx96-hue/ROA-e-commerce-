import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {STORE, STORE_PRODUCTS} from "../../js/store.js";
// import WhatsAppFloat from "./WhatsappFloat";
import ProductPage  from "./ProductPage.jsx";
import MainHeader from "../../components/MainHeader.jsx";


const CATEGORIES = ["All products","Basketball","Socks & Hosiery","Apparel","Footwear","Accessories","Outdoor & Camping", "Gym Equipment"];



export default function StorePublicPage() {
const [category, setCategory]   = useState("All products");
const [followed, setFollowed]   = useState(false);



const filtered = category === "All products" ? STORE_PRODUCTS : STORE_PRODUCTS.filter(p => p.category === category);

return (
<>
  <MainHeader />


  {/* ── HERO ── */}
  <section style={{ background:"linear-gradient(135deg,#0d1117 0%,#161b22 55%,#0d1117 100%)", padding:"5rem 0 4rem", position:"relative", overflow:"hidden" }}>
    <div style={{ position:"absolute", top:-110, right:-110, width:540, height:540, borderRadius:"50%", background:"radial-gradient(circle,rgba(196, 230, 0, 0.28) ,transparent 71%)", pointerEvents:"none" }} />
    <div style={{ position:"absolute", bottom:150, left:230, width:520, height:540, borderRadius:"50%", background:"radial-gradient(circle,rgba(180, 200, 0, 0.15),transparent 70%)", pointerEvents:"none" }} />
    <div style={{ position:"absolute", top:"5%", left:"-20%", width:"90%", height:"90%", borderRadius:"50%", background:"radial-gradient(circle,rgba(0,230,118,0.1)5% ,transparent 60%)", pointerEvents:"none" }} />
    <div style={{ position:"absolute", top:0, left:-380, width:"90%", height:"90%", borderRadius:"50%", background:"radial-gradient(circle,rgba(0,230,118,0.1) ,transparent 60%)", pointerEvents:"none" }} />

    <Container fluid>
      <div style={{ marginTop:"80px", padding:"0 20px" }}>
      <div style={{ display:"flex", justifyContent:"center" }}>
        <div className="hero-in" style={{ maxWidth:780, width:"100%", textAlign:"center" }}>

          {/* Badge pill */}
          <div style={{ marginBottom:"1.5rem" }}>
            <span style={{ background:"rgba(0,230,118,0.12)", color:"#00E676", border:"1px solid rgba(0,230,118,0.3)", borderRadius:20, padding:"10px 18px", fontWeight:700, fontSize:"13px", letterSpacing:1.4, fontFamily:"'Outfit',sans-serif", display:"inline-block" }}>
              ✦ &nbsp;VERIFIED SELLER &nbsp;·&nbsp; {STORE.handle}
            </span>
          </div>

          {/* Logo with glow ring + status dot */}
          <div style={{ position:"relative", display:"inline-block", marginBottom:"10px" }}>
            <div style={{ width:96, height:96, borderRadius:24, overflow:"hidden", margin:"0 auto", border:"2.5px solid rgba(0,230,118,0.35)", boxShadow:"0 0 0 5px rgba(0,230,118,0.07),0 18px 50px rgba(0,0,0,0.65)", background:"#111" }}>
              <img src={STORE.logo} alt={STORE.name} className="img-fluid" />
            </div>
            <span style={{ position:"absolute", bottom:4, right:4, width:16, height:16, borderRadius:"50%", background:STORE.isOpen?"#00E676":"#EF4444", border:"2.5px solid #0d1117"}} />
          </div>

          {/* Store name */}
          <h1 style={{ fontWeight:800, color:"#f0f6fc", fontSize:"clamp(2.7rem,6vw,3.8rem)", lineHeight:1.2, letterSpacing:"-0.99px", marginBottom:"11px" }}>
            {STORE.name}
          </h1>

          {/* Meta */}
          <p style={{ color:"rgba(255,255,255,0.67)", fontSize:"14px", marginBottom:"33px" }}>
            {STORE.handle} &nbsp;·&nbsp; 📍 {STORE.location} &nbsp;·&nbsp; Since {STORE.joined}
          </p>

          {/* Tagline */}
          <p style={{ color:"rgba(255,255,255,0.74)", fontSize:"20px", lineHeight:1.72, margin:"45px auto", maxWidth:480 }}>
            {STORE.tagline}
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:12, flexWrap:"wrap", marginBottom:"38px" }}>
            <button  style={{ background:"#00E676", border:"none", color:"#000", borderRadius:12, fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"0.92rem", padding:"15px", boxShadow:"0 8px 28px rgba(0,230,118,0.38)", cursor:"pointer", transition:"all 0.22s" }}
              onMouseEnter={e => e.currentTarget.style.transform="translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform="none"}>
              Shop All STORE_PRODUCTS
            </button>
            <button onClick={() => setFollowed(f => !f)}
              style={{ background:followed?"rgba(0,230,118,0.12)":"rgba(255,255,255,0.07)", border:`1px solid ${followed?"rgba(0,230,118,0.35)":"rgba(255,255,255,0.18)"}`, color:followed?"#00E676":"#fff", borderRadius:12, fontFamily:"'Outfit',sans-serif", fontWeight:600, fontSize:"0.92rem", padding:"15px 30px", cursor:"pointer", transition:"all 0.22s" }}>
              {followed ? "✓ Following" : "♡ Follow Store"}
            </button>
          </div>

          {/* Stats strip */}
          <div style={{ display:"flex", justifyContent:"center", gap:"22px", borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:"22px", lineHeight:"10px" }}>
            {STORE.stats.map(({ value, label }) => (
              <div key={label} style={{maxWidth:780}} >
                <div style={{ fontWeight:800, fontSize:"23px", color:"#f0f6fcf6", lineHeight:1 }}>{value}</div>
                <div style={{ color:"rgba(255, 255, 255, 0.53)", fontSize:"10px", marginTop:10, letterSpacing:"1px"}}>{label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
    </Container>
  </section>

  {/* ── TRUST STRIP ── */}
  
    <div className="trust-chip-container">
     
        {STORE.trust.map(t => <span key={t} className="trust-chip">✓ &nbsp;{t}</span>)}
      
    </div>
  

  {/* ── PROMO BANNER ── */}
  <div style={{ background:"linear-gradient(90deg,rgba(0,230,118,0.1),rgba(0,200,83,0.05),rgba(0,230,118,0.1))", borderBottom:"1px solid rgba(0,230,118,0.12)", padding:"20px 0", textAlign:"center" }}>
    <Container>
      <Row className="align-items-center">
        <Col className="col-7" style={{ color:"#00E676", fontFamily:"'Outfit',sans-serif", fontSize:"0.89rem", fontWeight:600, margin:0, lineHeight:"17px" }} >
          🔥 &nbsp;Flash Sale — Up to 30% off selected items this week only
        </Col>
        <Col style={{ color:"rgba(255,255,255,0.56)", fontSize:"0.85rem", fontFamily:"'Outfit',sans-serif" }} >
          Ends Sunday midnight
        </Col>
      </Row>
    </Container>
  </div>

  {/* ── STORE_PRODUCTS ── */}
  <section id="store-products" >
    <ProductPage setCategory={setCategory} category={category} filtered={filtered} CATEGORIES={CATEGORIES} />
  </section>

  {/* ── ABOUT ── */}
  <section style={{ background:"rgba(18,18,18,0.85)", borderTop:"1px solid rgba(255,255,255,0.06)", padding:"3.5rem 0" }}>
    <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:32, alignItems:"start" }}>
      <div>
        <span style={{ color:"#00E676", fontWeight:700, fontSize:"0.7rem", letterSpacing:2, textTransform:"uppercase", fontFamily:"'Outfit',sans-serif", display:"block", marginBottom:8 }}>About</span>
        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, color:"#fff", fontSize:"1.5rem", marginBottom:"1rem" }}>{STORE.name}</h3>
        <p style={{ color:"rgba(255,255,255,0.55)", fontFamily:"'Outfit',sans-serif", fontSize:"0.875rem", lineHeight:1.82, marginBottom:"1.4rem" }}>{STORE.about}</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
          {STORE.trust.map(t => <span key={t} className="trust-chip">✓ &nbsp;{t}</span>)}
        </div>
      </div>
      <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:20, padding:"1.6rem 1.5rem" }}>
        <h5 style={{color:"#fff", fontWeight:700, fontSize:"20px" }}>Store Information</h5>
        <p style={{ color:"rgba(255,255,255,0.28)", fontSize:"12.8px", margin:"13px 0" }}>Everything you need to know before you buy</p>
        {STORE.policies.map(({ label, value }) => (
          <div key={label} className="policy-row">
            <span style={{ color:"rgba(255,255,255,0.44)", fontSize:"15px" }}>{label}</span>
            <span style={{ color:"#fff", fontSize:"13.4px", fontWeight:500 }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* ── FOOTER ── */}
  <footer style={{ background:"#0d1117", borderTop:"1px solid rgba(255,255,255,0.06)", padding:"1.4rem 0" }}>
    <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
      <span style={{ color:"rgba(255,255,255,0.2)", fontSize:"0.75rem", fontFamily:"'Outfit',sans-serif" }}>© 2026 SHOPHAUS · Powering local stores online</span>
      <div style={{ display:"flex", gap:22 }}>
        {["Store Policies","Shipping Info","Report Store"].map(link => (
          <a key={link} href="#" style={{ color:"rgba(255,255,255,0.26)", fontSize:"0.75rem", fontFamily:"'Outfit',sans-serif", textDecoration:"none" }}
            onMouseEnter={e => e.currentTarget.style.color="#00E676"} onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.26)"}>{link}</a>
        ))}
      </div>
    </div>
  </footer>

  {/* <WhatsAppFloat store={STORE.whatsapp} /> */}
</>

);
}