
export default function FiltersSidebar() {
  return (
    <div className="filters">
      <h6>Categories</h6>
      <ul>
        <li>Phones</li>
        <li>Laptops</li>
        <li>Fashion</li>
      </ul>

      <h6>Price</h6>
      <input type="range" />
    </div>
  );
}