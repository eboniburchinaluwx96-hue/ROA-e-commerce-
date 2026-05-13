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
    <div style={{ position:"absolute", top:-110, right:-110, width:540, height:540, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,230,118,0.11) 0%,transparent 70%)", pointerEvents:"none" }} />
    <div style={{ position:"absolute", bottom:-80, left:-80, width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,200,83,0.07) 0%,transparent 70%)", pointerEvents:"none" }} />
    <div style={{ position:"absolute", top:"45%", left:"25%", width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,230,118,0.04) 0%,transparent 70%)", pointerEvents:"none" }} />

    <Container fluid>
      <div style={{ marginTop:"80px", padding:"0 20px" }}>
      <div style={{ display:"flex", justifyContent:"center" }}>
        <div className="hero-in" style={{ maxWidth:680, width:"100%", textAlign:"center" }}>

          {/* Badge pill */}
          <div style={{ marginBottom:"1.5rem" }}>
            <span style={{ background:"rgba(0,230,118,0.12)", color:"#00E676", border:"1px solid rgba(0,230,118,0.3)", borderRadius:20, padding:"6px 18px", fontWeight:700, fontSize:"0.72rem", letterSpacing:1.4, fontFamily:"'Outfit',sans-serif", display:"inline-block" }}>
              ✦ &nbsp;VERIFIED SELLER &nbsp;·&nbsp; {STORE.handle}
            </span>
          </div>

          {/* Logo with glow ring + status dot */}
          <div style={{ position:"relative", display:"inline-block", marginBottom:"1.4rem" }}>
            <div style={{ width:96, height:96, borderRadius:24, overflow:"hidden", margin:"0 auto", border:"2.5px solid rgba(0,230,118,0.35)", boxShadow:"0 0 0 7px rgba(0,230,118,0.07),0 18px 50px rgba(0,0,0,0.65)", background:"#111" }}>
              <img src={STORE.logo} alt={STORE.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
            </div>
            <span style={{ position:"absolute", bottom:4, right:4, width:16, height:16, borderRadius:"50%", background:STORE.isOpen?"#00E676":"#EF4444", border:"2.5px solid #0d1117", boxShadow:`0 0 8px ${STORE.isOpen?"rgba(0,230,118,0.75)":"rgba(239,68,68,0.75)"}` }} />
          </div>

          {/* Store name */}
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, color:"#f0f6fc", fontSize:"clamp(2.1rem,5vw,3.4rem)", lineHeight:1.1, marginBottom:"0.55rem", letterSpacing:"-0.5px" }}>
            {STORE.name}
          </h1>

          {/* Meta */}
          <p style={{ color:"rgba(255,255,255,0.42)", fontSize:"0.84rem", fontFamily:"'Outfit',sans-serif", marginBottom:"1rem" }}>
            {STORE.handle} &nbsp;·&nbsp; 📍 {STORE.location} &nbsp;·&nbsp; Since {STORE.joined}
          </p>

          {/* Tagline */}
          <p style={{ color:"rgba(255,255,255,0.62)", fontSize:"1.05rem", fontFamily:"'Outfit',sans-serif", lineHeight:1.72, margin:"0 auto 2rem", maxWidth:480 }}>
            {STORE.tagline}
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:12, flexWrap:"wrap", marginBottom:"2.8rem" }}>
            <button style={{ background:"#00E676", border:"none", color:"#000", borderRadius:12, fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"0.92rem", padding:"12px 30px", boxShadow:"0 8px 28px rgba(0,230,118,0.38)", cursor:"pointer", transition:"all 0.22s" }}
              onMouseEnter={e => e.currentTarget.style.transform="translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform="none"}>
              Shop All STORE_PRODUCTS
            </button>
            <button onClick={() => setFollowed(f => !f)}
              style={{ background:followed?"rgba(0,230,118,0.12)":"rgba(255,255,255,0.07)", border:`1px solid ${followed?"rgba(0,230,118,0.35)":"rgba(255,255,255,0.18)"}`, color:followed?"#00E676":"#fff", borderRadius:12, fontFamily:"'Outfit',sans-serif", fontWeight:600, fontSize:"0.92rem", padding:"12px 30px", cursor:"pointer", transition:"all 0.22s" }}>
              {followed ? "✓ Following" : "♡ Follow Store"}
            </button>
          </div>

          {/* Stats strip */}
          <div className="hero-stats" style={{ display:"flex", justifyContent:"center", gap:"2.8rem", borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:"2rem" }}>
            {STORE.stats.map(({ value, label }) => (
              <div key={label} className="stat-pill">
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.6rem", color:"#f0f6fc", lineHeight:1 }}>{value}</div>
                <div style={{ color:"rgba(255,255,255,0.38)", fontSize:"0.74rem", marginTop:6, fontFamily:"'Outfit',sans-serif" }}>{label}</div>
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
  <ProductPage setCategory={setCategory} category={category} filtered={filtered} CATEGORIES={CATEGORIES} />

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
        <h5 style={{ fontFamily:"'Syne',sans-serif", color:"#fff", fontWeight:700, fontSize:"1rem", margin:"0 0 4px" }}>Store Information</h5>
        <p style={{ color:"rgba(255,255,255,0.28)", fontSize:"0.72rem", fontFamily:"'Outfit',sans-serif", marginBottom:"1rem" }}>Everything you need to know before you buy</p>
        {STORE.policies.map(({ label, value }) => (
          <div key={label} className="policy-row">
            <span style={{ color:"rgba(255,255,255,0.38)", fontSize:"0.8rem" }}>{label}</span>
            <span style={{ color:"#fff", fontSize:"0.82rem", fontWeight:500 }}>{value}</span>
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