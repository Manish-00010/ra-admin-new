import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import { products } from "@/Data/Eshopproduct/Eshopproduct";
import { Link } from "react-router-dom";

const D2CProduct = () => {
  // State to track the layout view
  const [layout, setLayout] = useState("col-xl-4 col-12"); // Default to 4-column view
  const [isListView, setIsListView] = useState(false); // Toggle between grid and list view

  // Date range filter states
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState("Last Month");
  const [customDateRange, setCustomDateRange] = useState({
    startDate: "2025-07-01",
    endDate: "2025-07-31",
  });

  // Filter states
  const [selectedSortBy, setSelectedSortBy] = useState("Best Sellers");
  const [selectedGeo, setSelectedGeo] = useState("India");
  const [selectedStore, setSelectedStore] = useState("All Stores");

  // Button click handlers
  const handleGridLayout = () => {
    setIsListView(true);
    setLayout("col-sm-6"); // List layout with 2 columns
  };

  const handleViewChange = (newLayout) => {
    setIsListView(false);
    setLayout(newLayout); // Update grid layout
  };

  // Date range handlers
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
        !event.target.closest(".date-range-filter-container")
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDatePicker]);

  return (
    <div className="d2c-product">
      <style>{`
        /* Date picker styles */
        .date-range-filter-container {
          position: relative;
        }

        .date-range-dropdown {
          position: relative;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          min-width: 100%;
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
      `}</style>
      
      <Container fluid className="main_container">
        <Row className="m-1">
          <div className="col-12 ">
            <h4 className="main-title">D2C Products</h4>
            <ul className="app-line-breadcrumbs mb-3">
              <li>
                <Link to="/D2C/Dashboard" className="f-s-14 f-w-500">
                  Dashboard
                </Link>
              </li>
              <li className="active">Products</li>
            </ul>
          </div>
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <div className="product-header d-flex justify-content-between gap-3 align-items-center">
                  <div className="d-flex align-items-center">
                    <a
                      className="me-3 toggle-btn d-inline-block d-lg-none"
                      role="button"
                    >
                      <i className="ti ti-align-justified f-s-24"></i>
                    </a>
                    <form
                      className="app-form app-icon-form d-inline-block "
                      action="#"
                    >
                      <div className="position-relative">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search..."
                          aria-label="Search"
                        />
                        <i className="ti ti-search text-dark"></i>
                      </div>
                    </form>
                  </div>
                  <div>
                    <Col className="product-box productbox two">
                      <div className="dropdown-wrapper">
                        <button className="dropdown-toggle" id="dropdownToggle">
                          Filter
                        </button>

                        <div className="dropdown-menu" id="dropdownMenu">
                          <CardHeader>
                            <h5>Filters</h5>
                          </CardHeader>
                          <CardBody className="p-0">
                            <div
                              className="accordion accordion-flush app-accordion accordion-light-primary"
                              id="accordion-flush-sort-by"
                            >
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="flush-heading-two"
                                >
                                  <button
                                    className="accordion-button bg-none p-1"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse_two"
                                    aria-expanded="true"
                                    aria-controls="collapse_two"
                                  >
                                    <span className="m-0 mt-1">Sort By</span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse_two"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="flush-heading-two"
                                  data-bs-parent="#accordion-flush-sort-by"
                                >
                                  <div>
                                    <label className="check-box two m-3 ">
                                      <input
                                        checked
                                        type="radio"
                                        name="radio-group1"
                                      />
                                      <span className="radiomark two outline-secondary"></span>
                                      <span className="text-secondary">
                                        Best Sellers
                                      </span>
                                    </label>
                                    <label className="check-box two m-3 ">
                                      <input type="radio" name="radio-group1" />
                                      <span className="radiomark two outline-secondary"></span>
                                      <span className="text-secondary">
                                        Highest Rated
                                      </span>
                                    </label>
                                    <label className="check-box two m-3 ">
                                      <input type="radio" name="radio-group1" />
                                      <span className="radiomark two outline-secondary"></span>
                                      <span className="text-secondary">
                                        Highest Commission
                                      </span>
                                    </label>
                                    <label className="check-box two m-3 ">
                                      <input type="radio" name="radio-group1" />
                                      <span className="radiomark two outline-secondary"></span>
                                      <span className="text-secondary">
                                        Price: Low to High
                                      </span>
                                    </label>
                                    <label className="check-box two m-3 ">
                                      <input type="radio" name="radio-group1" />
                                      <span className="radiomark two outline-secondary"></span>
                                      <span className="text-secondary">
                                        Price: High to Low
                                      </span>
                                    </label>
                                    <label className="check-box two m-3 ">
                                      <input type="radio" name="radio-group1" />
                                      <span className="radiomark two outline-secondary"></span>
                                      <span className="text-secondary">
                                        Name (A-Z)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="flush-heading-geo"
                                >
                                  <button
                                    className="accordion-button bg-none p-1"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse_geo"
                                    aria-expanded="true"
                                    aria-controls="collapse_geo"
                                  >
                                    <span className="m-0 mt-1">Geo</span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse_geo"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="flush-heading-geo"
                                  data-bs-parent="#accordion-flush-sort-by"
                                >
                                  <div>
                                    <label className="check-box two m-3 ">
                                      <input
                                        checked
                                        type="radio"
                                        name="geo-group"
                                      />
                                      <span className="radiomark two outline-secondary"></span>
                                      <span className="text-secondary">
                                        United States
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="flush-heading-store"
                                >
                                  <button
                                    className="accordion-button bg-none p-1"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse_store"
                                    aria-expanded="true"
                                    aria-controls="collapse_store"
                                  >
                                    <span className="m-0 mt-1">Store</span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse_store"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="flush-heading-store"
                                  data-bs-parent="#accordion-flush-sort-by"
                                >
                                  <div>
                                    <label className="check-box two m-3 ">
                                      <input
                                        checked
                                        type="radio"
                                        name="store-group"
                                      />
                                      <span className="radiomark two outline-secondary"></span>
                                      <span className="text-secondary">
                                        All Stores
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="flush-heading-three"
                                >
                                  <button
                                    className="accordion-button bg-none p-1"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse_three"
                                    aria-expanded="false"
                                    aria-controls="collapse_three"
                                  >
                                    <span className="m-0 mt-1">Categories</span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse_three"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="flush-heading-three"
                                  data-bs-parent="#accordion-flush-sort-by"
                                >
                                  <div className="accordion-body p-2">
                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <Link
                                        to="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-dress text-dark f-s-18 me-2"></i>
                                        Appliances
                                      </Link>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <Link
                                        to="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-paint-brush text-dark f-s-18 me-2"></i>
                                        Arts, Crafts &amp; Sewing
                                      </Link>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <Link
                                        to="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-car text-dark f-s-18 me-2"></i>
                                        Automotive
                                      </Link>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <Link
                                        to="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-baby text-dark f-s-18 me-2"></i>
                                        Baby
                                      </Link>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-heartbeat text-dark f-s-18 me-2"></i>
                                        Beauty
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-book-open text-dark f-s-18 me-2"></i>
                                        Books
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-t-shirt text-dark f-s-18 me-2"></i>
                                        Clothing, Shoes &amp; Jewelry
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-device-mobile-camera text-dark f-s-18 me-2"></i>
                                        Electronics
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-basket text-dark f-s-18 me-2"></i>
                                        Grocery &amp; Gourmet Food
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-hands-clapping text-dark f-s-18 me-2"></i>
                                        Handmade
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-first-aid text-dark f-s-18 me-2"></i>
                                        Health &amp; Personal Care
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-cooking-pot text-dark f-s-18 me-2"></i>
                                        Home &amp; Kitchen
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-flask text-dark f-s-18 me-2"></i>
                                        Industrial &amp; Scientific
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-microphone text-dark f-s-18 me-2"></i>
                                        Musical Instruments
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-briefcase text-dark f-s-18 me-2"></i>
                                        Office Products
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-tree text-dark f-s-18 me-2"></i>
                                        Patio, Lawn &amp; Garden
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-dog text-dark f-s-18 me-2"></i>
                                        EPet Supplies
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-soccer-ball text-dark f-s-18 me-2"></i>
                                        Sports &amp; Outdoors
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-hammer text-dark f-s-18 me-2"></i>
                                        Tools &amp; Home Improvement
                                      </a>
                                    </div>

                                    <div className="p-2 d-flex align-items-center gap-2">
                                      <label className="check-box">
                                        <input type="checkbox" />
                                        <span className="checkmark outline-secondary ms-2"></span>
                                      </label>
                                      <a
                                        href="#"
                                        className="f-s-15 f-w-500 text-secondary"
                                      >
                                        <i className="ph-duotone ph-game-controller text-dark f-s-18 me-2"></i>
                                        Toys &amp; Games
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Date Range Filter */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="flush-heading-date"
                                >
                                  <button
                                    className="accordion-button bg-none p-1"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse_date"
                                    aria-expanded="false"
                                    aria-controls="collapse_date"
                                  >
                                    <span className="m-0 mt-1">Date Range</span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse_date"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="flush-heading-date"
                                  data-bs-parent="#accordion-flush-sort-by"
                                >
                                  <div className="accordion-body p-2">
                                    <div className="date-range-filter-container">
                                      <button
                                        className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-between"
                                        onClick={toggleDatePicker}
                                      >
                                        <div className="d-flex align-items-center gap-2">
                                          <i className="ph ph-calendar"></i>
                                          <span>{selectedDateRange}</span>
                                        </div>
                                        <i
                                          className={`ti ti-chevron-${
                                            showDatePicker ? "up" : "down"
                                          }`}
                                        ></i>
                                      </button>

                                      {showDatePicker && (
                                        <div className="date-range-dropdown mt-2">
                                          <div className="date-range-dropdown-header">
                                            <h6 className="mb-0">Select Date Range</h6>
                                          </div>

                                          <div className="date-range-dropdown-body">
                                            <div className="date-range-presets">
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
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bottomFixed">
                              <div className="text-end m-3">
                                <a
                                  href="#"
                                  role="button"
                                  className="btn btn-sm btn-primary"
                                >
                                  Clear all
                                </a>{" "}
                                <a
                                  href="#"
                                  role="button"
                                  className="btn btn-sm btn-secondary"
                                >
                                  Apply
                                </a>
                              </div>
                            </div>
                          </CardBody>
                        </div>
                      </div>
                    </Col>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl={3} lg={3} className="inner_fiilter">
            <Card>
              <CardHeader>
                <h5>Filters</h5>
              </CardHeader>
              <CardBody className="p-0">
                <div
                  className="accordion accordion-flush app-accordion accordion-light-primary"
                  id="accordion-flush-sort-by"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading-two">
                      <button
                        className="accordion-button bg-none p-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse_two"
                        aria-expanded="true"
                        aria-controls="collapse_two"
                      >
                        <span className="m-0 mt-1">Sort By</span>
                      </button>
                    </h2>
                    <div
                      id="collapse_two"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-heading-two"
                      data-bs-parent="#accordion-flush-sort-by"
                    >
                      <div>
                        <label className="check-box m-3">
                          <input 
                            type="radio" 
                            name="radio-group1" 
                            value="Best Sellers"
                            checked={selectedSortBy === "Best Sellers"}
                            onChange={(e) => setSelectedSortBy(e.target.value)}
                          />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">Best Sellers</span>
                        </label>
                        <label className="check-box m-3">
                          <input 
                            type="radio" 
                            name="radio-group1" 
                            value="Highest Rated"
                            checked={selectedSortBy === "Highest Rated"}
                            onChange={(e) => setSelectedSortBy(e.target.value)}
                          />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">Highest Rated</span>
                        </label>
                        <label className="check-box m-3">
                          <input 
                            type="radio" 
                            name="radio-group1" 
                            value="Highest Commission"
                            checked={selectedSortBy === "Highest Commission"}
                            onChange={(e) => setSelectedSortBy(e.target.value)}
                          />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">
                            Highest Commission
                          </span>
                        </label>
                        <label className="check-box m-3">
                          <input 
                            type="radio" 
                            name="radio-group1" 
                            value="Price: Low to High"
                            checked={selectedSortBy === "Price: Low to High"}
                            onChange={(e) => setSelectedSortBy(e.target.value)}
                          />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">
                            Price: Low to High
                          </span>
                        </label>
                        <label className="check-box m-3">
                          <input 
                            type="radio" 
                            name="radio-group1" 
                            value="Price: High to Low"
                            checked={selectedSortBy === "Price: High to Low"}
                            onChange={(e) => setSelectedSortBy(e.target.value)}
                          />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">
                            Price: High to Low
                          </span>
                        </label>
                        <label className="check-box m-3">
                          <input 
                            type="radio" 
                            name="radio-group1" 
                            value="Name (A-Z)"
                            checked={selectedSortBy === "Name (A-Z)"}
                            onChange={(e) => setSelectedSortBy(e.target.value)}
                          />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">Name (A-Z)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading-geo">
                      <button
                        className="accordion-button bg-none p-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse_geo"
                        aria-expanded="true"
                        aria-controls="collapse_geo"
                      >
                        <span className="m-0 mt-1">Geo</span>
                      </button>
                    </h2>
                    <div
                      id="collapse_geo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-heading-geo"
                      data-bs-parent="#accordion-flush-sort-by"
                    >
                      <div>
                        <label className="check-box m-3">
                          <input 
                            type="radio" 
                            name="geo-group" 
                            value="India"
                            checked={selectedGeo === "India"}
                            onChange={(e) => setSelectedGeo(e.target.value)}
                          />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">India</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading-store">
                      <button
                        className="accordion-button bg-none p-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse_store"
                        aria-expanded="true"
                        aria-controls="collapse_store"
                      >
                        <span className="m-0 mt-1">Store</span>
                      </button>
                    </h2>
                    <div
                      id="collapse_store"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-heading-store"
                      data-bs-parent="#accordion-flush-sort-by"
                    >
                      <div>
                        <label className="check-box m-3">
                          <input 
                            type="radio" 
                            name="store-group" 
                            value="All Stores"
                            checked={selectedStore === "All Stores"}
                            onChange={(e) => setSelectedStore(e.target.value)}
                          />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">All Stores</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading-three">
                      <button
                        className="accordion-button bg-none p-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse_three"
                        aria-expanded="false"
                        aria-controls="collapse_three"
                      >
                        <span className="m-0 mt-1">Categories</span>
                      </button>
                    </h2>
                    <div
                      id="collapse_three"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-heading-three"
                      data-bs-parent="#accordion-flush-sort-by"
                    >
                      <div className="accordion-body p-2">
                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-dress text-dark f-s-18 me-2"></i>
                            Appliances
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-paint-brush text-dark f-s-18 me-2"></i>
                            Arts, Crafts &amp; Sewing
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-car text-dark f-s-18 me-2"></i>
                            Automotive
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-baby text-dark f-s-18 me-2"></i>
                            Baby
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-heartbeat text-dark f-s-18 me-2"></i>
                            Beauty
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-book-open text-dark f-s-18 me-2"></i>
                            Books
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-t-shirt text-dark f-s-18 me-2"></i>
                            Clothing, Shoes &amp; Jewelry
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-device-mobile-camera text-dark f-s-18 me-2"></i>
                            Electronics
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-basket text-dark f-s-18 me-2"></i>
                            Grocery &amp; Gourmet Food
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-hands-clapping text-dark f-s-18 me-2"></i>
                            Handmade
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-first-aid text-dark f-s-18 me-2"></i>
                            Health &amp; Personal Care
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-cooking-pot text-dark f-s-18 me-2"></i>
                            Home &amp; Kitchen
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-flask text-dark f-s-18 me-2"></i>
                            Industrial &amp; Scientific
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-microphone text-dark f-s-18 me-2"></i>
                            Musical Instruments
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-briefcase text-dark f-s-18 me-2"></i>
                            Office Products
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-tree text-dark f-s-18 me-2"></i>
                            Patio, Lawn &amp; Garden
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-dog text-dark f-s-18 me-2"></i>
                            EPet Supplies
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-soccer-ball text-dark f-s-18 me-2"></i>
                            Sports &amp; Outdoors
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-hammer text-dark f-s-18 me-2"></i>
                            Tools &amp; Home Improvement
                          </a>
                        </div>

                        <div className="p-2 d-flex align-items-center gap-2">
                          <label className="check-box">
                            <input type="checkbox" />
                            <span className="checkmark outline-secondary ms-2"></span>
                          </label>
                          <a href="#" className="f-s-15 f-w-500 text-secondary">
                            <i className="ph-duotone ph-game-controller text-dark f-s-18 me-2"></i>
                            Toys &amp; Games
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottomFixed">
                  <div className="text-end m-3">
                    <a
                      href="#"
                      role="button"
                      className="btn btn-sm btn-primary"
                    >
                      Clear all
                    </a>{" "}
                    <a
                      href="#"
                      role="button"
                      className="btn btn-sm btn-secondary"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl={9} className="full-on-slide">
            <div className="product-wrapper-grid">
              <Row className={isListView ? "list-view" : ""}>
                {products.map((product) => (
                  <Col key={product.id} className={layout}>
                    <Card className="overflow-hidden">
                      <CardBody className="p-0">
                        <div className="product-content-box">
                          <div className="product-grid">
                            <div className="product-image">
                              <Link to={`/D2C/Products/${product.id}`} className="image">
                                <img
                                  className="pic-1"
                                  src={product.image1}
                                  alt=""
                                />
                                <img
                                  className="images_box"
                                  src={product.image2 || product.image1}
                                  alt=""
                                />
                                 <span
                                  className="active-badge"
                                  title="Active"
                                >
                                  <p className="mb-0 text-white">Active</p>
                                </span>
                              </Link>
                            </div>
                          </div>

                          <div className="p-3">
                            {/* Product Title */}
                            <div className="mb-2">
                              <Link
                                to={`/D2C/Products/${product.id}`}
                                className="m-0 f-s-16 f-w-500"
                              >
                                {product.title || "D2C Product"}
                              </Link>
                            </div>


                            {/* Rating Section */}
                            <div className="product-rating my-2">
                              <div>
                                <span className="product-id">
                                  ID: {product.id || "D2C-001"}
                                </span>
                              </div>
                              <div>
                                {/* Store Info */}
                                <div className="store-info">
                                  <i className="ph ph-storefront me-0"></i>{" "}
                                  {product.store || "Direct Brand"}
                                </div>
                              </div>
                            </div>

                            {/* Category Badge with Social Media Icons */}
                            <div className="category-badge mb-3 d-flex justify-content-between align-items-center">
                              <span>{product.category || "D2C Product"}</span>
                              <div className="social-media-icons d-flex align-items-center gap-2">
                                <i
                                  className="ph ph-google-logo text-danger f-s-18"
                                  title="Google"
                                ></i>
                                <i
                                  className="ph ph-youtube-logo text-danger f-s-18"
                                  title="YouTube"
                                ></i>
                                <i
                                  className="ph ph-facebook-logo text-primary f-s-18"
                                  title="Facebook"
                                ></i>
                                <i
                                  className="ph ph-instagram-logo text-primary f-s-18"
                                  title="Instagram"
                                ></i>
                              </div>
                            </div>

                            {/* Pricing Section */}
                            <div className="pricing-section mb-3">
                              <div className="pricing-details">
                                <div className="price-row">
                                  <span className="price-label">Price</span>
                                  <span className="price-value">
                                    ₹{product.price || "999"}{" "}
                                    {product.originalPrice && (
                                      <span className="text-muted">
                                        (<del>₹{product.originalPrice}</del>)
                                      </span>
                                    )}
                                    {product.discount && (
                                      <span className="text-success ms-2 small">
                                        {product.discount}
                                      </span>
                                    )}
                                  </span>
                                </div>
                                <div className="price-row">
                                  <span className="price-label">
                                    Payout
                                  </span>
                                  <span className="price-value rate-value">
                                    ₹{product.commission || "79.92"}
                                  </span>
                                </div>
                                <div className="price-row">
                                  <span className="price-label">
                                    Est. Commission
                                  </span>
                                  <span className="price-value commission-value">
                                    {product.commissionRate || "8.0%"}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="d-flex flex-column gap-2">
                              {/* Preview Link Button */}
                              <button className="preview-link-btn btn btn-outline-secondary btn-sm">
                                <i className="ti ti-eye me-1"></i> Preview Link
                              </button>

                              {/* Affiliate Button */}
                              <button className="affiliate-btn">
                                Generate Tracking Link
                                <i className="ti ti-external-link"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default D2CProduct;
