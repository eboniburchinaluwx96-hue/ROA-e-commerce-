import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"

export function ProductDetailsSkeleton() {
  return (
    <div className="product-details">
      <Skeleton height={250} />
      <Skeleton height={30} className="mt-3" />
      <Skeleton height={20} width={100} />
      <Skeleton count={3} />
    </div>
  );
}