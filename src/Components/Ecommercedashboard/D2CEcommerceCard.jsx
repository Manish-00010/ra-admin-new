import React from "react";
import {
  visitsChartData,
  orderChartData,
  activityChartData,
  salesChartData,
} from "../../Data/Charts/EcommerceChart";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

const EcommerceCard = () => {
  return (
    <>
      <div className="col-lg-12 col-xxl-12">
        <div className="row">
          {/* Clicks */}
          <div className="col-lg-4">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-primary h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-mouse"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Clicks</p>
                    <h5>
                      25,220 <span className="f-s-12 text-danger">-45%</span>
                    </h5>
                  </div>
                  <div className="visits-chart">
                    <Chart
                      options={visitsChartData}
                      series={visitsChartData.series}
                      type="line"
                      width={140}
                      height={120}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Payout */}
          <div className="col-lg-4">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-warning h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-bank"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Payout</p>
                    <h5>
                      &#8377; 48,500 <span className="f-s-12 text-success">+22%</span>
                    </h5>
                  </div>
                  <div className="sales-chart">
                    <Chart
                      options={salesChartData}
                      series={salesChartData.series}
                      type="bar"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Conversion Rate */}
          <div className="col-lg-4">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-dark h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-percent"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Conversion Rate</p>
                    <h5>
                      3.5% <span className="f-s-12 text-success">+0.5%</span>
                    </h5>
                  </div>
                  <div className="activity-chart">
                    <Chart
                      options={activityChartData}
                      series={activityChartData.series}
                      type="line"
                      width={140}
                      height={120}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Placed */}
          <div className="col-lg-4">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-secondary h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-shopping-cart"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center position-relative">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Order Placed</p>
                    <h5>
                      45,782 <span className="f-s-12 text-success">+65%</span>
                    </h5>
                  </div>
                  <div className="order-chart">
                    <Chart
                      options={orderChartData}
                      series={orderChartData.series}
                      type="line"
                      width={140}
                      height={120}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Order Shipped */}
          <div className="col-lg-4">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-info h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-truck"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Order Shipped</p>
                    <h5>
                      40,000 <span className="f-s-12 text-success">+60%</span>
                    </h5>
                  </div>
                  <div className="sales-chart">
                    <Chart
                      options={salesChartData}
                      series={salesChartData.series}
                      type="bar"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Order Delivered */}
          <div className="col-lg-4">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-success h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-package"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Order Delivered</p>
                    <h5>
                      38,500 <span className="f-s-12 text-success">+58%</span>
                    </h5>
                  </div>
                  <div className="sales-chart">
                    <Chart
                      options={salesChartData}
                      series={salesChartData.series}
                      type="bar"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommerceCard;
