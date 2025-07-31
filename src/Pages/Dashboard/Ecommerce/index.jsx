import React, { Suspense } from "react";
import EcommerceCard from "@/Components/Ecommercedashboard/EcommerceCard";
import ProductsCards from "@/Components/Ecommercedashboard/ProductsCards";
// import OrdersCards from "@/Components/Ecommercedashboard/OrdersCards";
const OrdersCards = React.lazy(() =>
  import("@/Components/Ecommercedashboard/OrdersCards")
);

const Ecommerce = () => {
  return (
    <Suspense fallback="">
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="main-title">Amazon Dashboard</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <EcommerceCard />
          <ProductsCards />
        </div>
      </div>
    </Suspense>
  );
};

export default Ecommerce;
