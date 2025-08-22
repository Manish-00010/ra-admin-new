import React from "react";
import {
  visitsChartData,
  detailedPageViewsChartData,
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
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-primary h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-cursor-click"></i>
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
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-success h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-eye"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Detailed Page <br /> Views</p>
                    <h5>
                      2,520 <span className="f-s-12 text-success">+12%</span>
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
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-warning h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-currency-dollar-simple"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Payout</p>
                    <h5>
                      $48,500 <span className="f-s-12 text-success">+22%</span>
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
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-info h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-trend-up"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Conversion <br /> Rate</p>
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
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-danger h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-shopping-cart"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center position-relative">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Add to Cart</p>
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
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-secondary h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-package"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center position-relative">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Orders</p>
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
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-success h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-currency-dollar"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Sale Amount</p>
                    <h5>
                      $63,987 <span className="f-s-12 text-success">+68%</span>
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
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card eshop-cards">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="bg-dark h-40 w-40 d-flex-center b-r-15 f-s-18">
                    <i className="ph-bold ph-coins"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-shrink-0 align-self-end">
                    <p className="f-s-16 mb-0">Earnings Per Click</p>
                    <h5>
                      $2.15 <span className="f-s-12 text-success">+0.12</span>
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
