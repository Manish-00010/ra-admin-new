import React, { useState, useEffect } from "react";
import {
  orders,
  delivered,
  pickup,
  returns,
  cancelled,
} from "@/Data/Orderpage/Orderpage";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const D2COrders = () => {
  const [activeTab, setActiveTab] = useState("connect-tab");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState("Last Month");
  const [customDateRange, setCustomDateRange] = useState({
    startDate: "2025-07-01",
    endDate: "2025-07-31"
  });
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
    if (range !== 'Custom') {
      setShowDatePicker(false);
    }
  };

  const handleCustomDateChange = (field, value) => {
    setCustomDateRange(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const applyCustomDate = () => {
    setSelectedDateRange(`${customDateRange.startDate} - ${customDateRange.endDate}`);
    setShowDatePicker(false);
  };

  // Close date picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDatePicker && !event.target.closest('.date-range-button-container')) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDatePicker]);

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
      <div>
      <Container fluid>
        <Row className="m-1">
          <Col xs={12}>
            <h4 className="main-title">D2C Conversion Report</h4>
            <ul className="app-line-breadcrumbs mb-3">
              <li>
                <Link to="/D2C/Dashboard" className="f-s-14 f-w-500">
                  Dashboard
                </Link>
              </li>
              <li className="active">Conversion Report</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <div className="search_head d-flex justify-content-between align-items-center mb-3">
                  <div>
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
                        <i className={`ti ti-chevron-${showDatePicker ? 'up' : 'down'}`}></i>
                      </button>
                      
                      {showDatePicker && (
                        <div className="date-range-dropdown">
                          <div className="date-range-dropdown-header">
                            <h6 className="mb-0">Select Date Range</h6>
                          </div>
                          
                          <div className="date-range-dropdown-body">
                            <div className="date-range-presets">
                              {['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month'].map((preset) => (
                                <button
                                  key={preset}
                                  type="button"
                                  className={`date-range-preset ${selectedDateRange === preset ? 'active' : ''}`}
                                  onClick={() => selectDateRange(preset)}
                                >
                                  {preset}
                                </button>
                              ))}
                              <button
                                type="button"
                                className={`date-range-preset ${selectedDateRange.includes('-') && !['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month'].includes(selectedDateRange) ? 'active' : ''}`}
                                onClick={() => selectDateRange('Custom')}
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
                                  onChange={(e) => handleCustomDateChange('startDate', e.target.value)}
                                />
                              </div>
                              <div className="date-input-group">
                                <label>End Date</label>
                                <input
                                  type="date"
                                  value={customDateRange.endDate}
                                  onChange={(e) => handleCustomDateChange('endDate', e.target.value)}
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
                    <button className="btn btn-outline-secondary"><i className="ti ti-download me-1"></i> Export</button>
                  </div>
                </div>

                <ul
                  className="nav nav-tabs app-tabs-primary order-tabs d-flex justify-content-start border-0 mb-0 pb-0"
                  id="Outline"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link d-flex align-items-center gap-1 ${
                        activeTab === "connect-tab" ? "active" : ""
                      }`}
                      id="connect-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#connect-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="connect-tab-pane"
                      aria-selected={activeTab === "connect-tab"}
                      onClick={() => handleTabClick("connect-tab")}
                    >
                      <i className="ti ti-sort-descending-2 f-s-18 mg-b-3"></i>{" "}
                      All Orders
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link d-flex align-items-center gap-1 ${
                        activeTab === "discover-tab" ? "active" : ""
                      }`}
                      id="discover-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#discover-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="discover-tab-pane"
                      aria-selected={activeTab === "discover-tab"}
                      onClick={() => handleTabClick("discover-tab")}
                    >
                      <i className="ti ti-shopping-cart f-s-18 mg-b-3"></i>{" "}
                      Order Placed
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link d-flex align-items-center gap-1 ${
                        activeTab === "order-tab" ? "active" : ""
                      }`}
                      id="order-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#order-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="order-tab-pane"
                      aria-selected={activeTab === "order-tab"}
                      onClick={() => handleTabClick("order-tab")}
                    >
                      <i className="ti ti-truck f-s-18 mg-b-3"></i> Order
                      Shipped
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link d-flex align-items-center gap-1 ${
                        activeTab === "order-tabs" ? "active" : ""
                      }`}
                      id="order-tabs"
                      data-bs-toggle="tab"
                      data-bs-target="#order-tab-returns"
                      type="button"
                      role="tab"
                      aria-controls="order-tab-returns"
                      aria-selected={activeTab === "order-tabs"}
                      onClick={() => handleTabClick("order-tabs")}
                    >
                      <i className="ti ti-package f-s-18 mg-b-3"></i> Order
                      Delivered
                    </button>
                  </li>
                </ul>
              </CardBody>

              <div className="card-body order-tab-content p-0">
                <div className="tab-content" id="OutlineContent">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "connect-tab" ? "active show" : ""
                    }`}
                    id="connect-tab-pane"
                    role="tabpanel"
                    aria-labelledby="connect-tab"
                    tabIndex="0"
                  >
                    <div className="order-list-table table-responsive app-scroll">
                      <table className="table table-bottom-border align-middle mb-0">
                        <thead>
                          <tr>
                            <th>
                              <label className="check-box">
                                <input type="checkbox" id="select-all" />
                                <span className="checkmark outline-secondary ms-2 "></span>
                              </label>
                            </th>
                            <th>Conversion ID</th>
                            <th>Click ID</th>
                            <th>Conversion Method</th>
                            <th>Conversion IP</th>
                            <th>P1</th>
                            <th>Payout</th>
                            <th>Campaign Name</th>
                            <th>Created</th>
                            <th>Status</th>
                            <th>Goal Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Shipped</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Shipped</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Shipped</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Shipped</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Shipped</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Shipped</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Shipped</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Shipped</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Shipped</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Shipped</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "discover-tab" ? "active show" : ""
                    }`}
                    id="discover-tab-pane"
                    role="tabpanel"
                    aria-labelledby="discover-tab"
                    tabIndex="0"
                  >
                    <div className=" order-list-table table-responsive app-scroll">
                      <table className="table table-bottom-border align-middle mb-0">
                        <thead>
                          <tr>
                            <th>
                              <label className="check-box">
                                <input type="checkbox" id="select-all" />
                                <span className="checkmark outline-secondary ms-2 "></span>
                              </label>
                            </th>
                            <th>Conversion ID</th>
                            <th>Click ID</th>
                            <th>Conversion Method</th>
                            <th>Conversion IP</th>
                            <th>P1</th>
                            <th>Payout</th>
                            <th>Campaign Name</th>
                            <th>Created</th>
                            <th>Status</th>
                            <th>Goal Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 760</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Placed</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 760</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Placed</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 760</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Placed</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 760</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Placed</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 760</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Placed</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 760</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Placed</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 760</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Placed</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 760</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Placed</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 760</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Placed</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 760</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Placed</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "order-tab" ? "active show" : ""
                    }`}
                    id="order-tab"
                    role="tabpanel"
                    aria-labelledby="order-tab"
                    tabIndex="0"
                  >
                    <div className=" order-list-table table-responsive app-scroll">
                      <table className="table table-bottom-border align-middle mb-0">
                        <thead>
                          <tr>
                            <th>
                              <label className="check-box">
                                <input type="checkbox" id="select-all" />
                                <span className="checkmark outline-secondary ms-2 "></span>
                              </label>
                            </th>
                            <th>Conversion ID</th>
                            <th>Click ID</th>
                            <th>Conversion Method</th>
                            <th>Conversion IP</th>
                            <th>P1</th>
                            <th>Payout</th>
                            <th>Campaign Name</th>
                            <th>Created</th>
                            <th>Status</th>
                            <th>Goal Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Shipped</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "order-tabs" ? "active show" : ""
                    }`}
                    id="order-tabs"
                    role="tabpanel"
                    aria-labelledby="order-tabs"
                    tabIndex="0"
                  >
                    <div className=" order-list-table table-responsive app-scroll">
                      <table className="table table-bottom-border align-middle mb-0">
                        <thead>
                          <tr>
                            <th>
                              <label className="check-box">
                                <input type="checkbox" id="select-all" />
                                <span className="checkmark outline-secondary ms-2 "></span>
                              </label>
                            </th>
                            <th>Conversion ID</th>
                            <th>Click ID</th>
                            <th>Conversion Method</th>
                            <th>Conversion IP</th>
                            <th>P1</th>
                            <th>Payout</th>
                            <th>Campaign Name</th>
                            <th>Created</th>
                            <th>Status</th>
                            <th>Goal Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Delivered</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Delivered</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Delivered</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Delivered</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Delivered</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Delivered</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Delivered</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Delivered</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Delivered</td>
                          </tr>
                          <tr>
                            <td>
                              <label className="check-box">
                                <input type="checkbox" />
                                <span className="checkmark outline-secondary ms-2"></span>
                              </label>
                            </td>
                            <td>688b0b35a599b2054edf0e82</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                6889dfa6c124af0345093a95
                              </a>
                            </td>
                            <td>PostBack URL</td>
                            <td>35.240.15.55</td>
                            <td>{'{your-click-id}'}</td>
                            <td>₹ 0</td>
                            <td>
                              <a href="#" className="text-primary text-decoration-none">
                                (ID: 12466) Mini Air Cooler By LivinH CPA - India**
                              </a>
                            </td>
                            <td>July 31, 2025 at 11:50:36</td>
                            <td>
                              <span className="badge text-bg-success">
                                Approved
                              </span>
                            </td>
                            <td>Order Delivered</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "ordertab" ? "active show" : ""
                    }`}
                    id="ordertab"
                    role="tabpanel"
                    aria-labelledby="ordertab"
                    tabIndex="0"
                  >
                    <div className=" order-list-table table-responsive app-scroll">
                      <table className="table table-bottom-border align-middle mb-0">
                        <thead>
                          <tr>
                            <th>
                              <label className="check-box">
                                <input type="checkbox" id="select-all" />
                                <span className="checkmark outline-secondary ms-2 "></span>
                              </label>
                            </th>
                            <th>Conversion ID</th>
                            <th>Click ID</th>
                            <th>Conversion Method</th>
                            <th>Conversion IP</th>
                            <th>P1</th>
                            <th>Payout</th>
                            <th>Campaign Name</th>
                            <th>Created</th>
                            <th>Status</th>
                            <th>Goal Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cancelled.map((order, index) => (
                            <tr key={index}>
                              <td>
                                <label className="check-box">
                                  <input type="checkbox" />
                                  <span className="checkmark outline-secondary ms-2"></span>
                                </label>
                              </td>
                              <td>{order.id}</td>
                              <td>{order.customer?.name || "N/A"}</td>
                              <td>PostBack URL</td>
                              <td>35.240.15.55</td>
                              <td>[your-click-id]</td>
                              <td>₹ 0</td>
                              <td>{order.product}</td>
                              <td>{order.orderDate}</td>
                              <td>
                                <span className="badge text-bg-success">
                                  Approved
                                </span>
                              </td>
                              <td>Order Cancelled</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Filter Slide Menu */}
        <div className={`filter-slide-menu ${isFilterOpen ? 'open' : ''}`}>
          <div className="filter-overlay" onClick={closeFilter}></div>
          <div className="filter-content">
            <div className="filter-header d-flex justify-content-between align-items-center p-3 border-bottom">
              <h5 className="mb-0">Filters</h5>
              <button 
                className="btn-close" 
                aria-label="Close"
                onClick={closeFilter}
              ></button>
            </div>
            <div className="filter-body p-3" style={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
              <form className="filter-form">
                {/* Goal Name Field */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">Goal Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Goal ID"
                  />
                  <small className="form-text text-muted mt-1">
                    Enter the specific goal identifier for filtering conversions
                  </small>
                </div>

                {/* Campaigns Dropdown */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">Campaigns</label>
                  <select className="form-select">
                    <option value="" disabled selected>Select Campaigns</option>
                    <option value="mini-air-cooler">Mini Air Cooler Campaign</option>
                    <option value="electronics">Electronics Campaign</option>
                    <option value="home-kitchen">Home & Kitchen Campaign</option>
                    <option value="beauty-health">Beauty & Health Campaign</option>
                  </select>
                </div>

                {/* Click ID Field */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">Click ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Click ID"
                  />
                </div>

                {/* Conversion ID Field */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">Conversion ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Conversion ID"
                  />
                </div>

                {/* Status Dropdown */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">Status</label>
                  <select className="form-select" defaultValue="all">
                    <option value="all">All</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                {/* Columns Multi-select */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">Columns</label>
                  <div className="border rounded p-3 bg-light">
                    {/* Search input for columns */}
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Search columns..."
                      />
                    </div>
                    
                    {/* Column checkboxes */}
                    <div className="column-options" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                      <div className="form-check mb-2">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="col-conversion-id" 
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="col-conversion-id">
                          Conversion ID
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-click-id" />
                        <label className="form-check-label" htmlFor="col-click-id">
                          Click ID
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-source" />
                        <label className="form-check-label" htmlFor="col-source">
                          Source
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-click-to-conversion-time" />
                        <label className="form-check-label" htmlFor="col-click-to-conversion-time">
                          Click to Conversion Time
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-install-to-event-time" />
                        <label className="form-check-label" htmlFor="col-install-to-event-time">
                          Install to Event elapsed Time
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="col-conversion-method" 


                        />
                        <label className="form-check-label" htmlFor="col-conversion-method">
                          Conversion Method
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-sale-amount" />
                        <label className="form-check-label" htmlFor="col-sale-amount">
                          Sale Amount
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-conversion-ip" />
                        <label className="form-check-label" htmlFor="col-conversion-ip">
                          Conversion IP
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-click-ip" />
                        <label className="form-check-label" htmlFor="col-click-ip">
                          Click IP
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-city" />
                        <label className="form-check-label" htmlFor="col-city">
                          City
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-region" />
                        <label className="form-check-label" htmlFor="col-region">
                          Region
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-carrier" />
                        <label className="form-check-label" htmlFor="col-carrier">
                          Carrier (ISP)
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="col-p1" 


                        />
                        <label className="form-check-label" htmlFor="col-p1">
                          P1
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-p2" />
                        <label className="form-check-label" htmlFor="col-p2">
                          P2
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-p3" />
                        <label className="form-check-label" htmlFor="col-p3">
                          P3
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-p4" />
                        <label className="form-check-label" htmlFor="col-p4">
                          P4
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-p5" />
                        <label className="form-check-label" htmlFor="col-p5">
                          P5
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-p6" />
                        <label className="form-check-label" htmlFor="col-p6">
                          P6
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-p7" />
                        <label className="form-check-label" htmlFor="col-p7">
                          P7
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-p8" />
                        <label className="form-check-label" htmlFor="col-p8">
                          P8
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-p9" />
                        <label className="form-check-label" htmlFor="col-p9">
                          P9
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-p10" />
                        <label className="form-check-label" htmlFor="col-p10">
                          P10
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-sub1" />
                        <label className="form-check-label" htmlFor="col-sub1">
                          SUB1
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-sub2" />
                        <label className="form-check-label" htmlFor="col-sub2">
                          SUB2
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-sub3" />
                        <label className="form-check-label" htmlFor="col-sub3">
                          SUB3
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-sub4" />
                        <label className="form-check-label" htmlFor="col-sub4">
                          SUB4
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-sub5" />
                        <label className="form-check-label" htmlFor="col-sub5">
                          SUB5
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-sub6" />
                        <label className="form-check-label" htmlFor="col-sub6">
                          SUB6
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-sub7" />
                        <label className="form-check-label" htmlFor="col-sub7">
                          SUB7
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-sub8" />
                        <label className="form-check-label" htmlFor="col-sub8">
                          SUB8
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-sub9" />
                        <label className="form-check-label" htmlFor="col-sub9">
                          SUB9
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-sub10" />
                        <label className="form-check-label" htmlFor="col-sub10">
                          SUB10
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-operating-system" />
                        <label className="form-check-label" htmlFor="col-operating-system">
                          Operating System (OS)
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-type" />
                        <label className="form-check-label" htmlFor="col-type">
                          Type
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-goal-id" />
                        <label className="form-check-label" htmlFor="col-goal-id">
                          Goal ID
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-txn-id" />
                        <label className="form-check-label" htmlFor="col-txn-id">
                          Txn ID
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-landing-page" />
                        <label className="form-check-label" htmlFor="col-landing-page">
                          Landing Page
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-device-id" />
                        <label className="form-check-label" htmlFor="col-device-id">
                          Device ID
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-note" />
                        <label className="form-check-label" htmlFor="col-note">
                          Note
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-image-pixel-referer" />
                        <label className="form-check-label" htmlFor="col-image-pixel-referer">
                          Image Pixel Referer
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-click-referer" />
                        <label className="form-check-label" htmlFor="col-click-referer">
                          Click Referer
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-currency" />
                        <label className="form-check-label" htmlFor="col-currency">
                          Currency
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-payout" />
                        <label className="form-check-label" htmlFor="col-payout">
                          Payout
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-gaid" />
                        <label className="form-check-label" htmlFor="col-gaid">
                          GAID
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-idfa" />
                        <label className="form-check-label" htmlFor="col-idfa">
                          IDFA
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-app-id" />
                        <label className="form-check-label" htmlFor="col-app-id">
                          App ID
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-app-name" />
                        <label className="form-check-label" htmlFor="col-app-name">
                          App Name
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-android-id" />
                        <label className="form-check-label" htmlFor="col-android-id">
                          Android ID
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-creative-name" />
                        <label className="form-check-label" htmlFor="col-creative-name">
                          Creative Name
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-smart-link" />
                        <label className="form-check-label" htmlFor="col-smart-link">
                          Smart Link
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-device-brand" />
                        <label className="form-check-label" htmlFor="col-device-brand">
                          Device Brand
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-connection-type" />
                        <label className="form-check-label" htmlFor="col-connection-type">
                          Connection Type
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-click-user-agent" />
                        <label className="form-check-label" htmlFor="col-click-user-agent">
                          Click User Agent
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-latitude" />
                        <label className="form-check-label" htmlFor="col-latitude">
                          Latitude
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-longitude" />
                        <label className="form-check-label" htmlFor="col-longitude">
                          Longitude
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-pub-impression-id" />
                        <label className="form-check-label" htmlFor="col-pub-impression-id">
                          Pub Impression ID
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-coupon-code" />
                        <label className="form-check-label" htmlFor="col-coupon-code">
                          Coupon Code
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-external-user-id" />
                        <label className="form-check-label" htmlFor="col-external-user-id">
                          External User ID
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-device-language" />
                        <label className="form-check-label" htmlFor="col-device-language">
                          Device Language
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-view-through-attribution" />
                        <label className="form-check-label" htmlFor="col-view-through-attribution">
                          Is View Through Attribution
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-privacy-postback" />
                        <label className="form-check-label" htmlFor="col-privacy-postback">
                          Attributed via Privacy Postback
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-pub-campaign-id" />
                        <label className="form-check-label" htmlFor="col-pub-campaign-id">
                          Pub Campaign Id
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-sub-source" />
                        <label className="form-check-label" htmlFor="col-sub-source">
                          Sub Source
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-aff-chain" />
                        <label className="form-check-label" htmlFor="col-aff-chain">
                          Aff Chain
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-paid-at" />
                        <label className="form-check-label" htmlFor="col-paid-at">
                          Paid At
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-release-order-id" />
                        <label className="form-check-label" htmlFor="col-release-order-id">
                          Release Order ID
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-attributed-touch-type" />
                        <label className="form-check-label" htmlFor="col-attributed-touch-type">
                          Attributed Touch Type
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-fbclid" />
                        <label className="form-check-label" htmlFor="col-fbclid">
                          Fbclid
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-conversion-geo" />
                        <label className="form-check-label" htmlFor="col-conversion-geo">
                          Conversion GEO
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="col-campaign-name" 


                        />
                        <label className="form-check-label" htmlFor="col-campaign-name">
                          Campaign Name
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-country-geo" />
                        <label className="form-check-label" htmlFor="col-country-geo">
                          Country (GEO)
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-browser" />
                        <label className="form-check-label" htmlFor="col-browser">
                          Browser
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-device" />
                        <label className="form-check-label" htmlFor="col-device">
                          Device
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="col-created" 


                        />
                        <label className="form-check-label" htmlFor="col-created">
                          Created
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="col-status" 


                        />
                        <label className="form-check-label" htmlFor="col-status">
                          Status
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="col-goal-name" 


                        />
                        <label className="form-check-label" htmlFor="col-goal-name">
                          Goal Name
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-click-time" />
                        <label className="form-check-label" htmlFor="col-click-time">
                          Click Time
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-source-encoded" />
                        <label className="form-check-label" htmlFor="col-source-encoded">
                          Source Encoded
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-publisher-username" />
                        <label className="form-check-label" htmlFor="col-publisher-username">
                          Publisher Username
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-external-offer-id" />
                        <label className="form-check-label" htmlFor="col-external-offer-id">
                          External Offer ID
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-postback-fired" />
                        <label className="form-check-label" htmlFor="col-postback-fired">
                          Is Postback Fired
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-approved-at" />
                        <label className="form-check-label" htmlFor="col-approved-at">
                          Approved At
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-proxy-type" />
                        <label className="form-check-label" htmlFor="col-proxy-type">
                          Proxy Type
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="col-proxy-country" />
                        <label className="form-check-label" htmlFor="col-proxy-country">
                          Proxy Country
                        </label>
                      </div>
                    </div>
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
      </div>
    </>
  );
};

export default D2COrders;
