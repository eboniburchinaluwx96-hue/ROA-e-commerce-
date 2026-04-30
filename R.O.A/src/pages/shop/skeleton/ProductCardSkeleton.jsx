import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export function ProductCardSkeleton() {
  return (
    <div className="product-card p-2">
      <Skeleton height={180} />
      <Skeleton height={20} className="mt-2" />
      <Skeleton width={80} />
    </div>
  );
}