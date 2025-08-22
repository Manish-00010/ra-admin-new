import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";

const PerformanceReport = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState("Last Month");
  const [customDateRange, setCustomDateRange] = useState({
    startDate: "2025-07-01",
    endDate: "2025-07-31",
  });
  const [activeTab, setActiveTab] = useState("standard");

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const selectDateRange = (range) => {
    setSelectedDateRange(range);
    if (range !== "Custom") {
      setShowDatePicker(false);
    }
  };

  const handleCustomDateChange = (field, value) => {
    setCustomDateRange((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const applyCustomDate = () => {
    setSelectedDateRange(
      `${customDateRange.startDate} - ${customDateRange.endDate}`
    );
    setShowDatePicker(false);
  };

  // Close date picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showDatePicker &&
        !event.target.closest(".date-range-button-container")
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDatePicker]);

  // Sample performance data matching the table structure from your images
  const performanceData = [
    {
      campaign: "Mini Air Cooler By LivinH CPA - India**",
      date: "2025-07-29",
      goalName: "Order Shipped",
      clicks: 0,
      payout: "₹ 0",
      conversions: 11,
      conversionRate: "137.5",
      saleAmount: "₹ 21989",
      pendingConversions: 0,
      extendedConversions: 0,
      pendingPayout: "₹ 0",
    },
    {
      campaign: "Mini Air Cooler By LivinH CPA - India**",
      date: "2025-07-30",
      goalName: "Order Shipped",
      clicks: 0,
      payout: "₹ 0",
      conversions: 9,
      conversionRate: "100",
      saleAmount: "₹ 17991",
      pendingConversions: 0,
      extendedConversions: 0,
      pendingPayout: "₹ 0",
    },
    {
      campaign: "Mini Air Cooler By LivinH CPA - India**",
      date: "2025-08-03",
      goalName: "Order Placed",
      clicks: 102,
      payout: "₹ 0",
      conversions: 0,
      conversionRate: "0",
      saleAmount: "₹ 0",
      pendingConversions: 0,
      extendedConversions: 0,
      pendingPayout: "₹ 0",
    },
    {
      campaign: "Skimmylo Backless body shaper CPA - India",
      date: "2025-07-29",
      goalName: "Order Placed",
      clicks: 2,
      payout: "₹ 0",
      conversions: 0,
      conversionRate: "0",
      saleAmount: "₹ 0",
      pendingConversions: 0,
      extendedConversions: 0,
      pendingPayout: "₹ 0",
    },
    {
      campaign: "Mini Air Cooler By LivinH CPA - India**",
      date: "2025-08-02",
      goalName: "Order Delivered",
      clicks: 0,
      payout: "₹ 1520",
      conversions: 2,
      conversionRate: "0",
      saleAmount: "₹ 3998",
      pendingConversions: 0,
      extendedConversions: 0,
      pendingPayout: "₹ 0",
    },
  ];

  const totals = {
    clicks: 481.0,
    payout: "₹ 4,560.00",
    conversions: 44.0,
    avgConversionRate: "16.45%",
    totalSaleAmount: "₹ 91,954.00",
  };

  // Compact view data based on your attachment
  const compactData = [
    {
      campaign: "Mini Air Cooler By LivInH CPA - India**",
      goalName: "Order Placed",
      uniqueClicks: 806,
      clicks: 806,
      payout: "₹ 0",
      conversions: 32,
      conversionRate: 0,
      saleAmount: "₹ 67966",
    },
    {
      campaign: "Mini Air Cooler By LivInH CPA - India**",
      goalName: "Order Shipped",
      uniqueClicks: 0,
      clicks: 0,
      payout: "₹ 0",
      conversions: 26,
      conversionRate: 0,
      saleAmount: "₹ 51974",
    },
    {
      campaign: "Mini Air Cooler By LivInH CPA - India**",
      goalName: "Order Delivered",
      uniqueClicks: 0,
      clicks: 0,
      payout: "₹ 1520",
      conversions: 2,
      conversionRate: 0,
      saleAmount: "₹ 3998",
    },
  ];

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

        /* Date picker styles */
        .date-range-button-container {
          position: relative;
        }

        .date-range-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          min-width: 300px;
          margin-top: 4px;
        }

        .date-range-dropdown-header {
          padding: 12px 16px;
          border-bottom: 1px solid #eee;
          background-color: #f8f9fa;
          border-radius: 8px 8px 0 0;
        }

        .date-range-dropdown-body {
          padding: 16px;
        }

        .date-range-presets {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 16px;
        }

        .date-range-preset {
          padding: 8px 12px;
          border: none;
          background: none;
          text-align: left;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .date-range-preset:hover {
          background-color: #f8f9fa;
        }

        .date-range-preset.active {
          background-color: #007bff;
          color: white;
        }

        .custom-date-inputs {
          border-top: 1px solid #eee;
          padding-top: 16px;
        }

        .date-input-group {
          margin-bottom: 12px;
        }

        .date-input-group label {
          display: block;
          margin-bottom: 4px;
          font-weight: 500;
          font-size: 14px;
        }

        .date-input-group input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .date-range-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px solid #eee;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .date-range-dropdown {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            min-width: 90vw;
            max-width: 90vw;
            max-height: 70vh;
          }
        }

        @media (max-width: 480px) {
          .date-range-dropdown {
            min-width: 95vw;
            max-width: 95vw;
          }
        }
      `}</style>

      <Container fluid>
        <Row className="m-1">
          <Col xs={12}>
            <h4 className="main-title">D2C Performance Report</h4>
            <ul className="app-line-breadcrumbs mb-3">
              <li>
                <Link to="/D2C/Dashboard" className="f-s-14 f-w-500">
                  Dashboard
                </Link>
              </li>
              <li className="active">Performance Report</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                {/* Tab Navigation */}
                <Nav tabs className="mb-4 order-tabs">
                  <NavItem>
                    <NavLink
                      className={activeTab === "standard" ? "active" : ""}
                      onClick={() => setActiveTab("standard")}
                      style={{ cursor: "pointer" }}
                    >
                      Standard View
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "compact" ? "active" : ""}
                      onClick={() => setActiveTab("compact")}
                      style={{ cursor: "pointer" }}
                    >
                      Compact View
                    </NavLink>
                  </NavItem>
                </Nav>

                {/* Standard View Tab Content */}
                {activeTab === "standard" && (
                  <>
                    <div className="search_head d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center gap-3">
                        <p className="text-muted mb-0">
                          Performance Report: 16
                        </p>
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
                        <div className="date-range-button-container">
                          <button
                            className="btn btn-outline-secondary d-flex align-items-center gap-2"
                            onClick={toggleDatePicker}
                          >
                            <i className="ph ph-calendar"></i>
                            <span>{selectedDateRange}</span>
                            <i
                              className={`ti ti-chevron-${
                                showDatePicker ? "up" : "down"
                              }`}
                            ></i>
                          </button>

                          {showDatePicker && (
                            <div className="date-range-dropdown">
                              <div className="date-range-dropdown-header">
                                <h6 className="mb-0">Select Date Range</h6>
                              </div>

                              <div className="date-range-dropdown-body">
                                <div className="date-range-presets mb-0">
                                  {[
                                    "Today",
                                    "Yesterday",
                                    "Last 7 Days",
                                    "Last 30 Days",
                                    "This Month",
                                    "Last Month",
                                  ].map((preset) => (
                                    <button
                                      key={preset}
                                      type="button"
                                      className={`date-range-preset ${
                                        selectedDateRange === preset
                                          ? "active"
                                          : ""
                                      }`}
                                      onClick={() => selectDateRange(preset)}
                                    >
                                      {preset}
                                    </button>
                                  ))}
                                  <button
                                    type="button"
                                    className={`date-range-preset ${
                                      selectedDateRange.includes("-") &&
                                      ![
                                        "Today",
                                        "Yesterday",
                                        "Last 7 Days",
                                        "Last 30 Days",
                                        "This Month",
                                        "Last Month",
                                      ].includes(selectedDateRange)
                                        ? "active"
                                        : ""
                                    }`}
                                    onClick={() => selectDateRange("Custom")}
                                  >
                                    Custom Range
                                  </button>
                                </div>

                                <div className="custom-date-inputs">
                                  <div className="date-input-group">
                                    <label>Start Date</label>
                                    <input
                                      type="date"
                                      value={customDateRange.startDate}
                                      onChange={(e) =>
                                        handleCustomDateChange(
                                          "startDate",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="date-input-group">
                                    <label>End Date</label>
                                    <input
                                      type="date"
                                      value={customDateRange.endDate}
                                      onChange={(e) =>
                                        handleCustomDateChange(
                                          "endDate",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>

                                  <div className="date-range-actions">
                                    <button
                                      type="button"
                                      className="btn btn-secondary btn-sm"
                                      onClick={() => setShowDatePicker(false)}
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-sm"
                                      onClick={applyCustomDate}
                                    >
                                      Apply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
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
                      <table className="table table-hover align-middle mb-0 performance-table">
                        <thead className="table-light">
                          <tr>
                            <th>Campaign</th>
                            <th>Date</th>
                            <th>Goal Name</th>
                            <th>Clicks</th>
                            <th>Payout</th>
                            <th>Conversions</th>
                            <th>Conversion Rate CR</th>
                            <th>Sale Amount</th>
                            <th>Pending Conversions</th>
                            <th>Extended Conversions</th>
                            <th>Pending Payout</th>
                          </tr>
                        </thead>
                        <tbody>
                          {performanceData.map((row, index) => (
                            <tr key={index}>
                              <td>
                                <Link
                                  to="#"
                                  className="text-nowrap text-primary text-decoration-none"
                                >
                                  {row.campaign}
                                </Link>
                              </td>
                              <td>{row.date}</td>
                              <td>
                                <Link
                                  to="#"
                                  className="text-primary text-decoration-none"
                                >
                                  {row.goalName}
                                </Link>
                              </td>
                              <td>{row.clicks}</td>
                              <td>{row.payout}</td>
                              <td>{row.conversions}</td>
                              <td>{row.conversionRate}</td>
                              <td>{row.saleAmount}</td>
                              <td>{row.pendingConversions}</td>
                              <td>{row.extendedConversions}</td>
                              <td>{row.pendingPayout}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot className="table-secondary">
                          <tr className="fw-bold">
                            <td>Total</td>
                            <td></td>
                            <td></td>
                            <td>{totals.clicks}</td>
                            <td>{totals.payout}</td>
                            <td>{totals.conversions}</td>
                            <td>Avg: {totals.avgConversionRate}</td>
                            <td>{totals.totalSaleAmount}</td>
                            <td>0</td>
                            <td>0</td>
                            <td>₹ 0</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </>
                )}

                {/* Compact View Tab Content */}
                {activeTab === "compact" && (
                  <>
                    <div className="search_head d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center gap-3">
                        <p className="text-muted mb-0">
                         Page 1 of 1
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <div className="search-wrapper">
                          <input
                            type="search"
                            className="form-control"
                            placeholder="Search campaigns..."
                            style={{ width: "200px" }}
                          />
                        </div>
                        <div className="date-range-button-container">
                          <button
                            className="btn btn-outline-secondary d-flex align-items-center gap-2"
                            onClick={toggleDatePicker}
                          >
                            <i className="ph ph-calendar"></i>
                            <span>{selectedDateRange}</span>
                            <i
                              className={`ti ti-chevron-${
                                showDatePicker ? "up" : "down"
                              }`}
                            ></i>
                          </button>

                          {showDatePicker && (
                            <div className="date-range-dropdown">
                              <div className="date-range-dropdown-header">
                                <h6 className="mb-0">Select Date Range</h6>
                              </div>

                              <div className="date-range-dropdown-body">
                                <div className="date-range-presets mb-0">
                                  {[
                                    "Today",
                                    "Yesterday",
                                    "Last 7 Days",
                                    "Last 30 Days",
                                    "This Month",
                                    "Last Month",
                                  ].map((preset) => (
                                    <button
                                      key={preset}
                                      type="button"
                                      className={`date-range-preset ${
                                        selectedDateRange === preset
                                          ? "active"
                                          : ""
                                      }`}
                                      onClick={() => selectDateRange(preset)}
                                    >
                                      {preset}
                                    </button>
                                  ))}
                                  <button
                                    type="button"
                                    className={`date-range-preset ${
                                      selectedDateRange.includes("-") &&
                                      ![
                                        "Today",
                                        "Yesterday",
                                        "Last 7 Days",
                                        "Last 30 Days",
                                        "This Month",
                                        "Last Month",
                                      ].includes(selectedDateRange)
                                        ? "active"
                                        : ""
                                    }`}
                                    onClick={() => selectDateRange("Custom")}
                                  >
                                    Custom Range
                                  </button>
                                </div>

                                <div className="custom-date-inputs">
                                  <div className="date-input-group">
                                    <label>Start Date</label>
                                    <input
                                      type="date"
                                      value={customDateRange.startDate}
                                      onChange={(e) =>
                                        handleCustomDateChange(
                                          "startDate",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="date-input-group">
                                    <label>End Date</label>
                                    <input
                                      type="date"
                                      value={customDateRange.endDate}
                                      onChange={(e) =>
                                        handleCustomDateChange(
                                          "endDate",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>

                                  <div className="date-range-actions">
                                    <button
                                      type="button"
                                      className="btn btn-secondary btn-sm"
                                      onClick={() => setShowDatePicker(false)}
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-sm"
                                      onClick={applyCustomDate}
                                    >
                                      Apply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <button className="btn btn-outline-secondary">
                          <i className="ti ti-download me-1"></i> Export
                        </button>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <Table className="table table-hover align-middle mb-0 compact-reports-table">
                        <thead className="table-light">
                          <tr>
                            <th>Campaign</th>
                            <th>Goal Name</th>
                            <th>Unique Clicks</th>
                            <th>Clicks</th>
                            <th>Payout</th>
                            <th>Conversions</th>
                            <th>Conversion Rate (CR)</th>
                            <th>Sale Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {compactData.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <Link
                                  to="#"
                                  className="text-primary text-decoration-none"
                                >
                                  {item.campaign}
                                </Link>
                              </td>
                              <td>
                                <span
                                  className={`badge ${
                                    item.goalName === "Order Placed"
                                      ? "bg-info"
                                      : item.goalName === "Order Shipped"
                                      ? "bg-warning"
                                      : "bg-success"
                                  }`}
                                >
                                  {item.goalName}
                                </span>
                              </td>
                              <td>{item.uniqueClicks}</td>
                              <td>{item.clicks}</td>
                              <td className="fw-semibold">{item.payout}</td>
                              <td className="fw-semibold text-primary">
                                {item.conversions}
                              </td>
                              <td>{item.conversionRate}%</td>
                              <td className="fw-semibold text-success">
                                {item.saleAmount}
                              </td>
                            </tr>
                          ))}
                          {/* Total Row */}
                          <tr className="table-warning fw-bold">
                            <td>Total</td>
                            <td>-</td>
                            <td>806</td>
                            <td>806</td>
                            <td>₹ 1520.00</td>
                            <td>60</td>
                            <td>Avg: 0%</td>
                            <td>₹ 123938.00</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Filter Slide Menu */}
        <div className={`filter-slide-menu ${isFilterOpen ? "open" : ""}`}>
          <div className="filter-overlay" onClick={closeFilter}></div>
          <div className="filter-content">
            <div className="filter-header d-flex justify-content-between align-items-center p-3 border-bottom">
              <h5 className="mb-0">Filter</h5>
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
                {/* Timezone */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Timezone
                  </label>
                  <select className="form-select">
                    <option value="gmt+5:30">(GMT+05:30) Chennai...</option>
                    <option value="gmt+0">(GMT+00:00) UTC</option>
                    <option value="gmt-5">(GMT-05:00) Eastern Time</option>
                  </select>
                </div>

                {/* Campaigns */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Campaigns
                  </label>
                  <select className="form-select">
                    <option value="" disabled selected>
                      Select Campaigns
                    </option>
                    <option value="mini-air-cooler">
                      Mini Air Cooler By LivinH CPA - India**
                    </option>
                    <option value="skimmylo">
                      Skimmylo Backless body shaper CPA - India
                    </option>
                    <option value="other">Other Campaigns</option>
                  </select>
                </div>

                {/* Group By */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Group By
                  </label>
                  <div className="border rounded p-3 bg-light">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Search..."
                      />
                    </div>

                    <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="group-campaign"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="group-campaign"
                        >
                          Campaign
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="group-date"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="group-date"
                        >
                          Date
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="group-source"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="group-source"
                        >
                          Source Sub Affiliate
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="group-goal"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="group-goal"
                        >
                          Goal Name
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="group-coupon"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="group-coupon"
                        >
                          Coupon Code
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reporting Options */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Reporting Options
                  </label>
                  <div className="border rounded p-3 bg-light">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Search..."
                      />
                    </div>

                    <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="unique-clicks"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="unique-clicks"
                        >
                          Unique Clicks
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="clicks"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="clicks">
                          Clicks
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gross-clicks"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gross-clicks"
                        >
                          Gross Clicks
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="impressions"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="impressions"
                        >
                          Impressions
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="payout"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="payout">
                          Payout
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="conversions"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="conversions"
                        >
                          Conversions
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="conversion-rate"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="conversion-rate"
                        >
                          Conversion Rate (CR)
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="sale-amount"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="sale-amount"
                        >
                          Sale Amount
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="pending-conversions"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="pending-conversions"
                        >
                          Pending Conversions
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="extended-conversions"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="extended-conversions"
                        >
                          Extended Conversions
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="pending-payout"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="pending-payout"
                        >
                          Pending Payout
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Options */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Other Options
                  </label>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="show-in-currency"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="show-in-currency"
                    >
                      Show in your currency
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="show-ctr-based"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="show-ctr-based"
                    >
                      Show CTR based on Approved...
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="show-ctr-pending"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="show-ctr-pending"
                    >
                      Show CTR based on Pending Conversions
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
                    Apply
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

export default PerformanceReport;
