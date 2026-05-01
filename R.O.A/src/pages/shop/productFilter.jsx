
export default function FiltersSidebar() {
  return (
   <>
     <div className="filters">
      <h6>Categories</h6>
      <ul>
        <li>Phones</li>
        <li>Laptops</li>
        <li>Fashion</li>
      </ul>
    </div>

    <div className="filters fw-bold me-4">
      <h6 className="fw-bold me-4">Price</h6>
      <input type="range" />
    </div>
   </>
  );
}