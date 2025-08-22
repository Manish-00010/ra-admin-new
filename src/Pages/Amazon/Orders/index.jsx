import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const AmazonOrders = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState("Last Month");
  const [customDateRange, setCustomDateRange] = useState({
    startDate: "2025-07-01",
    endDate: "2025-07-31"
  });
  
  // New filter state variables
  const [filters, setFilters] = useState({
    groupBy: "",
    reportFilter: "",
    subId: "",
    asin: "",
    linkName: "",
    storeId: "",
    affiliateId: "",
    source: "",
    advertiser: "",
    brandId: ""
  });

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
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

  const applyFilters = () => {
    // Here you can implement the filter logic
    console.log('Applied filters:', {
      dateRange: selectedDateRange,
      customDateRange,
      ...filters
    });
    closeFilter();
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

  // Sample Amazon orders data matching your specified structure
  const ordersData = [
    {
      date: "2025-07-23",
      productName: "XbotGo Chameleon AI Powered Sports Action Camera, Sports Gimbal Tracking System with Team and Player Tracking, COMS 4K Video, 360° Rotation, 120° FOV, Live Streaming (Lava Graphite)",
      asin: "B0D7HQFKPB",
      affiliateId: "AFF102602",
      source: "levanta",
      advertiser: "",
      brandId: "306",
      subId: "No Sub ID",
      linkName: "AFF101928_API_XbotGo Chameleon",
      storeName: "Xbot Go",
      clicks: 22,
      dpv: "0",
      addToCart: 0,
      sales: 0,
      saleAmount: "0",
      unitsSold: 0,
      payout: "0",
      payoutPerClick: "0",
      revenue: "0",
      rpc: "0",
      profit: "0",
    },
    {
      date: "2025-07-23",
      productName: "Waterdrop G3P800 Reverse Osmosis System, 800 GPD Fast Flow, NSF/ANSI 42 & 53 & 58 & 372 Certified, 3:1 Pure to Drain, Tankless Under Sink RO Water Filter System, LED Purifier, Smart Faucet",
      asin: "B0987FCQQW",
      affiliateId: "AFF102602",
      source: "direct",
      advertiser: "HILLFAIR",
      brandId: "306",
      subId: "waterdrop",
      linkName: "AFF102602_API_amitG3P800",
      storeName: "Waterdrop",
      clicks: 302,
      dpv: "0",
      addToCart: 0,
      sales: 5,
      saleAmount: "617.96",
      unitsSold: 5,
      payout: "55.62",
      payoutPerClick: "0.18",
      revenue: "74.16",
      rpc: "0",
      profit: "18.54",
    },
    {
      date: "2025-07-23",
      productName: "iRestore Professional Laser Hair System - FDA Cleared Hair Growth Cap for Men and Women with Thinning Hair or Hair Loss",
      asin: "B09JB3JKDY",
      affiliateId: "AFF102602",
      source: "levanta",
      advertiser: "",
      brandId: "306",
      subId: "No Sub ID",
      linkName: "AFF101928_API_iRestore Professional Laser Hair System",
      storeName: "iRestore",
      clicks: 9,
      dpv: "0",
      addToCart: 0,
      sales: 0,
      saleAmount: "0",
      unitsSold: 0,
      payout: "0",
      payoutPerClick: "0",
      revenue: "0",
      rpc: "0",
      profit: "0",
    },
    {
      date: "2025-07-23",
      productName: "iRestore Elite + Rechargeable Battery Pack - Laser Red Light Therapy for Hair Growth - FDA Cleared Hair Loss, Hair Thinning Treatment for Men & Women - Hair Regrowth Laser Cap - 500 Lasers & LEDs",
      asin: "B0CW4CLF2X",
      affiliateId: "AFF102602",
      source: "direct",
      advertiser: "HILLFAIR",
      brandId: "306",
      subId: "No Sub ID",
      linkName: "AFF101928_API_iRestore Laser Cap",
      storeName: "iRestore",
      clicks: 61,
      dpv: "0",
      addToCart: 0,
      sales: 0,
      saleAmount: "0",
      unitsSold: 0,
      payout: "0",
      payoutPerClick: "0",
      revenue: "0",
      rpc: "0",
      profit: "0",
    },
    {
      date: "2025-07-23",
      productName: "Glocusent Book Light, 3-Color & 6-Brightness Reading Light, Bendable Neck Light, Long Lasting Rechargeable Lamp, Perfect Book Light for Reading in Bed, Knitting, Camping, Repairing, Book Lovers Gifts",
      asin: "B0B2J9D4PZ",
      affiliateId: "AFF102602",
      source: "levanta",
      advertiser: "",
      brandId: "306",
      subId: "amit",
      linkName: "AFF102602_API_glucosent",
      storeName: "Glocusent",
      clicks: 3,
      dpv: "0",
      addToCart: 0,
      sales: 4,
      saleAmount: "61.5",
      unitsSold: 5,
      payout: "9.69",
      payoutPerClick: "3.23",
      revenue: "12.91",
      rpc: "0",
      profit: "3.23",
    },
    {
      date: "2025-07-23",
      productName: "Holy Stone HS700E 4K UHD Drone with EIS Anti Shake 130 FOV Camera for Adults, GPS Quadcopter with 5GHz FPV Transmission, Brushless Motor, Easy Auto Return Home, Follow Me and Outdoor Carrying Case",
      asin: "B085HGMW9D",
      affiliateId: "AFF102602",
      source: "direct",
      advertiser: "HILLFAIR",
      brandId: "306",
      subId: "No Sub ID",
      linkName: "AFF101928_API_Holy Stone HS700E 4K UHD Drone",
      storeName: "Holy Stone",
      clicks: 13,
      dpv: "0",
      addToCart: 0,
      sales: 0,
      saleAmount: "0",
      unitsSold: 0,
      payout: "0",
      payoutPerClick: "0",
      revenue: "0",
      rpc: "0",
      profit: "0",
    },
    {
      date: "2025-07-23",
      productName: "LifePro Rumblex 4D Vibration Plate Exercise Machine - Triple Motor Oscillation, Linear, Pulsation + 3D/4D Vibration Platform - Whole Body Viberation Machine for Home, Weight Loss & Shaping. (Black)",
      asin: "B0CP6X63TF",
      affiliateId: "AFF102602",
      source: "levanta",
      advertiser: "",
      brandId: "306",
      subId: "No Sub ID",
      linkName: "AFF101928_API_LifePro Rumblex 4D Vibration Plate Exercise Machine",
      storeName: "LifePro",
      clicks: 4,
      dpv: "0",
      addToCart: 0,
      sales: 0,
      saleAmount: "0",
      unitsSold: 0,
      payout: "0",
      payoutPerClick: "0",
      revenue: "0",
      rpc: "0",
      profit: "0",
    },
    {
      date: "2025-07-23",
      productName: "MIKO Shiatsu Foot Massager Machine Deep Tissue Massage Improves Circulation, Blood flow with Deep Kneading, Heat Therapy - Plantar Fasciitis, Neuropathy, Diabetics Fits Up to Size15",
      asin: "B0849K4FHJ",
      affiliateId: "AFF102602",
      source: "direct",
      advertiser: "HILLFAIR",
      brandId: "306",
      subId: "amitMIKO",
      linkName: "AFF102602_API_MikoFootMassager",
      storeName: "MIKO",
      clicks: 340,
      dpv: "0",
      addToCart: 0,
      sales: 5,
      saleAmount: "989.95",
      unitsSold: 5,
      payout: "89.1",
      payoutPerClick: "0.26",
      revenue: "118.79",
      rpc: "0",
      profit: "29.7",
    },
    {
      date: "2025-07-23",
      productName: "Waterdrop X16-Alkaline Tankless Reverse Osmosis System, NSF/ANSI 42&58&372 Certified, 1600 GPD RO Filter System, 11-Stage Filtration, UnderSink, 3:1 Pure to Drain, Alkaline Mineral pH+, BPA Free",
      asin: "B0C7GDB77V",
      affiliateId: "AFF102602",
      source: "levanta",
      advertiser: "",
      brandId: "306",
      subId: "No Sub ID",
      linkName: "AFF101928_API_Waterdrop X16-Alkaline",
      storeName: "Waterdrop",
      clicks: 40,
      dpv: "0",
      addToCart: 0,
      sales: 0,
      saleAmount: "0",
      unitsSold: 0,
      payout: "0",
      payoutPerClick: "0",
      revenue: "0",
      rpc: "0",
      profit: "0",
    },
  ];

  const totals = {
    clicks: 794,
    addToCart: 0,
    sales: 14,
    saleAmount: "1669.41",
    unitsSold: 15,
    payout: "154.41",
    avgPayoutPerClick: "0.19",
    totalRevenue: "205.86",
    totalProfit: "51.47",
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

        /* Date Range Button Styles */
        .date-range-button-container {
          position: relative;
        }

        .date-range-button-container .btn {
          min-width: fit-content;
          justify-content: space-between;
          white-space: nowrap;
          border-color: #ced4da;
          background: white;
          color: #495057;
          font-size: 14px;
        }

        .date-range-button-container .btn:hover {
          border-color: #80bdff;
          background: #f8f9fa;
        }

        .date-range-button-container .btn:focus {
          border-color: #80bdff;
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }

        .date-range-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 1050;
          margin-top: 4px;
          min-width: 320px;
          max-height: 400px;
          overflow-y: auto;
        }

        .date-range-dropdown-header {
          padding: 12px 16px;
          border-bottom: 1px solid #eee;
          background: #f8f9fa;
          border-radius: 8px 8px 0 0;
        }

        .date-range-dropdown-body {
          padding: 16px;
        }

        .date-range-presets {
          margin-bottom: 16px;
        }

        .date-range-preset {
          display: block;
          width: 100%;
          padding: 8px 12px;
          margin-bottom: 4px;
          border: none;
          background: none;
          text-align: left;
          font-size: 14px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
          cursor: pointer;
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
          margin-top: 16px;
        }

        .date-input-group {
          margin-bottom: 12px;
        }

        .date-input-group label {
          display: block;
          font-size: 12px;
          font-weight: 500;
          color: #6c757d;
          margin-bottom: 4px;
        }

        .date-input-group input {
          width: 100%;
          padding: 6px 8px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 13px;
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
            <h4 className="main-title">Amazon Conversion Report</h4>
            <ul className="app-line-breadcrumbs mb-3">
              <li>
                <Link to="/Amazon/Dashboard" className="f-s-14 f-w-500">
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
                            <div className="date-range-presets mb-0">
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
                        <th>Product Name</th>
                        <th>ASIN</th>
                        <th>Affiliate ID</th>
                        <th>Source</th>
                        <th>Advertiser</th>
                        <th>Brand ID</th>
                        <th>Sub ID</th>
                        <th>Link Name</th>
                        <th>Brand Name</th>
                        <th>Clicks</th>
                        <th>DPV</th>
                        <th>Add to Cart</th>
                        <th>Sales</th>
                        <th>Sale Amount</th>
                        <th>Units Sold</th>
                        <th>Payout</th>
                        <th>EPC</th>
                        <th>Revenue</th>
                        <th>RPC</th>
                        <th>Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ordersData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.date}</td>
                          <td>
                            <div className="text-truncate" style={{ maxWidth: "200px" }} title={row.productName}>
                              {row.productName}
                            </div>
                          </td>
                          <td>{row.asin}</td>
                          <td>{row.affiliateId}</td>
                          <td>{row.source}</td>
                          <td>{row.advertiser}</td>
                          <td>{row.brandId}</td>
                          <td>{row.subId}</td>
                          <td>
                            <div className="text-truncate" style={{ maxWidth: "150px" }} title={row.linkName}>
                              {row.linkName}
                            </div>
                          </td>
                          <td>{row.storeName}</td>
                          <td>{row.clicks.toLocaleString()}</td>
                          <td>{row.dpv}</td>
                          <td>{row.addToCart}</td>
                          <td>{row.sales}</td>
                          <td className="fw-semibold">${row.saleAmount}</td>
                          <td>{row.unitsSold}</td>
                          <td className="fw-semibold text-success">${row.payout}</td>
                          <td>${row.payoutPerClick}</td>
                          <td className="fw-semibold">${row.revenue}</td>
                          <td>${row.rpc}</td>
                          <td className={row.profit === "0" ? "text-muted" : "profit-positive"}>${row.profit}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="table-secondary">
                      <tr className="fw-bold">
                        <td>Total</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>{totals.clicks.toLocaleString()}</td>
                        <td>-</td>
                        <td>{totals.addToCart}</td>
                        <td>{totals.sales}</td>
                        <td>${totals.saleAmount}</td>
                        <td>{totals.unitsSold}</td>
                        <td className="text-success">${totals.payout}</td>
                        <td>Avg: ${totals.avgPayoutPerClick}</td>
                        <td>${totals.totalRevenue}</td>
                        <td>-</td>
                        <td className="profit-positive">${totals.totalProfit}</td>
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
                {/* Group by */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Group by
                  </label>
                  <select 
                    className="form-select"
                    value={filters.groupBy}
                    onChange={(e) => handleFilterChange('groupBy', e.target.value)}
                  >
                    <option value="" disabled>
                      Select Group by
                    </option>
                    <option value="date">Date</option>
                    <option value="products">Products (ASIN)</option>
                    <option value="affiliate-id">Affiliate ID</option>
                    <option value="source">Source</option>
                    <option value="advertiser">Advertiser</option>
                    <option value="brand-id">Brand ID</option>
                    <option value="sub-id">Sub ID</option>
                    <option value="link-name">Link Name</option>
                    <option value="store">Store</option>
                  </select>
                </div>

                {/* Affiliates */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Affiliates
                  </label>
                  <select 
                    className="form-select"
                    value={filters.reportFilter}
                    onChange={(e) => handleFilterChange('reportFilter', e.target.value)}
                  >
                    <option value="" disabled>
                      Select Affiliates
                    </option>
                    <option value="AFF101928-1">AFF101928</option>
                    <option value="AFF101928-2">AFF101928</option>
                    <option value="AFF101928-3">AFF101928</option>
                    <option value="AFF101928-4">AFF101928</option>
                    <option value="AFF101928-5">AFF101928</option>
                    <option value="AFF101928-6">AFF101928</option>
                    <option value="AFF101928-7">AFF101928</option>
                    <option value="AFF101928-8">AFF101928</option>
                    <option value="AFF101928-9">AFF101928</option>
                    <option value="AFF101928-10">AFF101928</option>
                  </select>
                </div>

                {/* Sub ID */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Sub ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Sub ID"
                    value={filters.subId}
                    onChange={(e) => handleFilterChange('subId', e.target.value)}
                  />
                </div>

                {/* ASIN */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    ASIN
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ASIN"
                    value={filters.asin}
                    onChange={(e) => handleFilterChange('asin', e.target.value)}
                  />
                </div>

                {/* Link Name */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Link Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Link Name"
                    value={filters.linkName}
                    onChange={(e) => handleFilterChange('linkName', e.target.value)}
                  />
                </div>

                {/* Affiliate ID */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Affiliate ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Affiliate ID"
                    value={filters.affiliateId}
                    onChange={(e) => handleFilterChange('affiliateId', e.target.value)}
                  />
                </div>

                {/* Source */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Source
                  </label>
                  <select 
                    className="form-select"
                    value={filters.source}
                    onChange={(e) => handleFilterChange('source', e.target.value)}
                  >
                    <option value="">All Sources</option>
                    <option value="levanta">Levanta</option>
                    <option value="direct">Direct</option>
                  </select>
                </div>

                {/* Advertiser */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Advertiser
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Advertiser"
                    value={filters.advertiser}
                    onChange={(e) => handleFilterChange('advertiser', e.target.value)}
                  />
                </div>

                {/* Brand ID */}
                <div className="mb-4">
                  <label className="form-label fw-semibold mb-2">
                    Brand ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Brand ID"
                    value={filters.brandId}
                    onChange={(e) => handleFilterChange('brandId', e.target.value)}
                  />
                </div>

                {/* Apply Button */}
                <div className="d-grid">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={applyFilters}
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
