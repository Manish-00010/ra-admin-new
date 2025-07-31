import React, { Suspense } from "react";
import { Link } from 'react-router-dom';
import D2CEcommerceCard from "@/Components/Ecommercedashboard/D2CEcommerceCard";
import D2CProductsCards from "@/Components/Ecommercedashboard/D2CProductsCards";
import CustomersCards from "@/Components/Ecommercedashboard/CustomersCards";
const OrdersCards = React.lazy(() => import("@/Components/Ecommercedashboard/OrdersCards"));

const D2CDashboard = () => {
  return (
    <Suspense fallback="">
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="main-title">D2C Dashboard</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <D2CEcommerceCard />
          <D2CProductsCards />
        </div>
      </div>
    </Suspense>
  );
};

export default D2CDashboard;
