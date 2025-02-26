import { Suspense } from "react";

import ShopLoading from "./loading";
import ShopContent from "../components/shop/ShopContent";

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoading />}>
      <ShopContent />
    </Suspense>
  );
}
