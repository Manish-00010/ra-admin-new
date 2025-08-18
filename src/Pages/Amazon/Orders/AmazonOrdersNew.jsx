import React, { useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const AmazonOrders = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  // Sample Amazon orders data matching your specified structure
  const ordersData = [
    {
      date: "2025-07-23",
      affiliate: "All",
      clicks: 6545,
      addToCart: 0,
      sales: 96,
      saleAmount: "$11,798.98",
      unitsSold: 99,
      payout: "$1,165.55",
      payoutPerClick: "$0.18",
      revenue: "$11,798.98",
      profit: "$10,633.43",
    },
    {
      date: "2025-07-24",
      affiliate: "Amazon Associate - Prime",
      clicks: 4832,
      addToCart: 45,
      sales: 72,
      saleAmount: "$8,945.76",
      unitsSold: 78,
      payout: "$894.58",
      payoutPerClick: "$0.19",
      revenue: "$8,945.76",
      profit: "$8,051.18",
    },
    {
      date: "2025-07-25",
      affiliate: "Amazon Associate - Regular",
      clicks: 3245,
      addToCart: 28,
      sales: 54,
      saleAmount: "$6,789.45",
      unitsSold: 58,
      payout: "$678.95",
      payoutPerClick: "$0.21",
      revenue: "$6,789.45",
      profit: "$6,110.50",
    },
    {
      date: "2025-07-26",
      affiliate: "Amazon Fresh",
      clicks: 2156,
      addToCart: 18,
      sales: 38,
      saleAmount: "$4,523.67",
      unitsSold: 42,
      payout: "$452.37",
      payoutPerClick: "$0.21",
      revenue: "$4,523.67",
      profit: "$4,071.30",
    },
    {
      date: "2025-07-27",
      affiliate: "Amazon Prime Video",
      clicks: 1875,
      addToCart: 12,
      sales: 29,
      saleAmount: "$3,654.23",
      unitsSold: 31,
      payout: "$365.42",
      payoutPerClick: "$0.19",
      revenue: "$3,654.23",
      profit: "$3,288.81",
    },
  ];

  const totals = {
    clicks: 18653,
    addToCart: 103,
    sales: 289,
    saleAmount: "$35,712.09",
    unitsSold: 308,
    payout: "$3,556.87",
    avgPayoutPerClick: "$0.19",
    totalRevenue: "$35,712.09",
    totalProfit: "$32,155.22",
  };

  return (
    <>
      <style>{`
        .filter-slide-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          z-index: 1050;
          visibility: hidden;
          opacity: 0;
          transition: visibility 0.3s, opacity 0.3s;
        }

        .filter-slide-menu.open {
          visibility: visible;
          opacity: 1;
        }

        .filter-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }

        .filter-content {
          position: absolute;
          top: 0;
          right: 0;
          width: 400px;
          height: 100vh;
          background-color: white;
          box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          overflow: hidden;
        }

        .filter-slide-menu.open .filter-content {
          transform: translateX(0);
        }

        .filter-header {
          background-color: #f8f9fa;
          border-bottom: 1px solid #dee2e6;
        }

        @media (max-width: 576px) {
          .filter-content {
            width: 100%;
          }
        }

        .orders-table th {
          font-weight: 600;
          background-color: #f8f9fa;
          border-bottom: 2px solid #dee2e6;
          white-space: nowrap;
        }

        .orders-table td {
          vertical-align: middle;
          white-space: nowrap;
        }

        .profit-positive {
          color: #28a745;
          font-weight: 600;
        }

        .profit-negative {
          color: #dc3545;
          font-weight: 600;
        }
      `}</style>

      <Container fluid>
        <Row className="m-1">
          <Col xs={12}>
            <h4 className="main-title">Amazon Orders Report</h4>
            <ul className="app-line-breadcrumbs mb-3">
              <li>
                <Link to="/Amazon/Dashboard" className="f-s-14 f-w-500">
                  Dashboard
                </Link>
              </li>
              <li className="active">Orders</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <div className="search_head d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <p className="text-muted mb-0">Orders Report: {ordersData.length}</p>
                    <p className="text-muted mb-0">Page 1 of 1</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="search-wrapper">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search..."
                        style={{ width: "200px" }}
                      />
                    </div>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={toggleFilter}
                    >
                      <i className="ti ti-filter me-1"></i>
                      Filter
                    </button>
                    <button className="btn btn-outline-secondary">
                      <i className="ti ti-download me-1"></i> Export
                    </button>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0 orders-table">
                    <thead className="table-light">
                      <tr>
                        <th>Date</th>
                        <th>Affiliate</th>
                        <th>Clicks</th>
                        <th>Add to Cart</th>
                        <th>Sales</th>
                        <th>Sale Amount</th>
                        <th>Units Sold</th>
                        <th>Payout</th>
                        <th>Payout/Clicks</th>
                        <th>Revenue</th>
                        <th>Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ordersData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.date}</td>
                          <td>
                            <Link
                              to="#"
                              className="text-primary text-decoration-none"
                            >
                              {row.affiliate}
                            </Link>
                          </td>
                          <td>{row.clicks.toLocaleString()}</td>
                          <td>{row.addToCart}</td>
                          <td>{row.sales}</td>
                          <td className="fw-semibold">{row.saleAmount}</td>
                          <td>{row.unitsSold}</td>
                          <td className="fw-semibold text-success">{row.payout}</td>
                          <td>{row.payoutPerClick}</td>
                          <td className="fw-semibold">{row.revenue}</td>
                          <td className="profit-positive">{row.profit}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="table-secondary">
                      <tr className="fw-bold">
                        <td>Total</td>
                        <td>-</td>
                        <td>{totals.clicks.toLocaleString()}</td>
                        <td>{totals.addToCart}</td>
                        <td>{totals.sales}</td>
                        <td>{totals.saleAmount}</td>
                        <td>{totals.unitsSold}</td>
                        <td className="text-success">{totals.payout}</td>
                        <td>Avg: {totals.avgPayoutPerClick}</td>
                        <td>{totals.totalRevenue}</td>
                        <td className="profit-positive">{totals.totalProfit}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Filter Slide Menu */}
        <div className={`filter-slide-menu ${isFilterOpen ? "open" : ""}`}>
          <div className="filter-overlay" onClick={closeFilter}></div>
          <div className="filter-content">
            <div className="filter-header d-flex justify-content-between align-items-center p-3 border-bottom">
              <h5 className="mb-0">Filter Orders</h5>
              <button
                className="btn-close"
                aria-label="Close"
                onClick={closeFilter}
              ></button>
            </div>
            <div
              className="filter-body p-3"
              style={{ height: "calc(100vh - 80px)", overflowY: "auto" }}
            >
              <form className="filter-form">
                {/* Date Range */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Date Range
                  </label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="date"
                        className="form-control form-control-sm"
                        placeholder="From Date"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="date"
                        className="form-control form-control-sm"
                        placeholder="To Date"
                      />
                    </div>
                  </div>
                </div>

                {/* Affiliate Programs */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Affiliate Programs
                  </label>
                  <select className="form-select">
                    <option value="" disabled selected>
                      Select Affiliate Program
                    </option>
                    <option value="all">All Programs</option>
                    <option value="amazon-associate-prime">Amazon Associate - Prime</option>
                    <option value="amazon-associate-regular">Amazon Associate - Regular</option>
                    <option value="amazon-fresh">Amazon Fresh</option>
                    <option value="amazon-prime-video">Amazon Prime Video</option>
                  </select>
                </div>

                {/* Performance Metrics */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Show Metrics
                  </label>
                  <div className="border rounded p-3 bg-light">
                    <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="show-clicks"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="show-clicks">
                          Clicks
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="show-cart"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="show-cart">
                          Add to Cart
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="show-sales"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="show-sales">
                          Sales
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="show-sale-amount"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="show-sale-amount">
                          Sale Amount
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="show-units"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="show-units">
                          Units Sold
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="show-payout"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="show-payout">
                          Payout
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="show-payout-clicks"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="show-payout-clicks">
                          Payout/Clicks
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="show-revenue"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="show-revenue">
                          Revenue
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="show-profit"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="show-profit">
                          Profit
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sales Range Filter */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Sales Range
                  </label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        placeholder="Min Sales"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        placeholder="Max Sales"
                      />
                    </div>
                  </div>
                </div>

                {/* Other Options */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Display Options
                  </label>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="show-currency-usd"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="show-currency-usd"
                    >
                      Show amounts in USD
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="highlight-profit"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="highlight-profit"
                    >
                      Highlight profitable orders
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="group-by-affiliate"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="group-by-affiliate"
                    >
                      Group by affiliate program
                    </label>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="d-grid">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={closeFilter}
                  >
                    Apply Filters
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AmazonOrders;
