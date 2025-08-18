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
import { Link, useNavigate } from "react-router-dom";

const AmazonProduct = () => {
  const navigate = useNavigate();
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
    <div className="amazon-product">
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
          z-index: 1000;
        }

        .date-range-options {
          list-style: none;
          padding: 8px 0;
          margin: 0;
          max-height: 300px;
          overflow-y: auto;
        }

        .date-range-option {
          padding: 8px 16px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .date-range-option:hover {
          background-color: #f8f9fa;
        }

        .date-range-option.active {
          background-color: #007bff;
          color: white;
        }

        .custom-date-inputs {
          padding: 16px;
          border-top: 1px solid #e9ecef;
        }

        .custom-date-row {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }

        .custom-date-input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }

        .custom-date-input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }

        .apply-custom-date {
          width: 100%;
          padding: 8px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .apply-custom-date:hover {
          background-color: #0056b3;
        }

        .filter-section {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }

        .filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          align-items: center;
        }

        .filter-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 150px;
        }

        .filter-label {
          font-weight: 600;
          color: #333;
          font-size: 14px;
        }

        .filter-dropdown {
          position: relative;
        }

        .filter-button {
          padding: 10px 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          min-width: 150px;
          transition: all 0.2s;
        }

        .filter-button:hover {
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
        }

        .layout-controls {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-left: auto;
        }

        .layout-btn {
          padding: 8px 12px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .layout-btn:hover {
          background: #f8f9fa;
          border-color: #007bff;
        }

        .layout-btn.active {
          background: #007bff;
          color: white;
          border-color: #007bff;
        }

        .product-grid {
          display: grid;
          gap: 20px;
        }

        .product-card {
          border: 1px solid #e9ecef;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          background: white;
          height: 100%;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          user-select: none;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-color: #007bff;
        }

        .product-card:active {
          transform: translateY(-2px);
          transition: transform 0.1s ease;
        }

        a.text-decoration-none .product-card:hover {
          color: inherit;
        }

        .product-image-container {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.05);
        }

        .product-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: linear-gradient(135deg, #ff6b6b, #ff8e53);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
        }

        .product-info {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .product-category {
          color: #666;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .product-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin-bottom: 12px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-title-link {
          color: #333 !important;
          transition: color 0.3s ease;
        }

        .product-title-link:hover {
          color: #007bff !important;
          text-decoration: none !important;
        }

        a .product-title-link {
          color: inherit;
        }

        a:hover .product-title-link {
          color: #007bff !important;
        }

        .product-rating {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .star {
          color: #ffc107;
          font-size: 14px;
        }

        .rating-text {
          color: #666;
          font-size: 14px;
        }

        .product-pricing {
          margin-bottom: 15px;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .price-label {
          color: #666;
          font-size: 14px;
          font-weight: 500;
        }

        .price-value {
          font-weight: 600;
          font-size: 16px;
        }

        .price-value.current {
          color: #28a745;
        }

        .price-value.payout {
          color: #007bff;
        }

        .price-value.commission {
          color: #6f42c1;
        }

        .product-actions {
          margin-top: auto;
          padding-top: 15px;
          border-top: 1px solid #f0f0f0;
        }

        .action-button {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
          color: white;
          text-decoration: none;
        }

        a .action-button:hover {
          color: white;
        }

        /* List view styles */
        .list-view .product-card {
          flex-direction: row;
          height: auto;
        }

        .list-view .product-image-container {
          width: 200px;
          height: 150px;
          flex-shrink: 0;
        }

        .list-view .product-info {
          flex-grow: 1;
          padding: 20px;
        }

        .list-view .product-pricing {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .list-view .price-row {
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 0;
        }

        .list-view .product-actions {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
          width: 200px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          padding: 20px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .filter-row {
            flex-direction: column;
            align-items: stretch;
          }

          .filter-item {
            min-width: 100%;
          }

          .layout-controls {
            margin-left: 0;
            margin-top: 15px;
          }

          .list-view .product-card {
            flex-direction: column;
          }

          .list-view .product-image-container {
            width: 100%;
            height: 200px;
          }

          .list-view .product-actions {
            width: 100%;
          }
        }
      `}</style>

      <Container fluid>
        <Row className="m-1">
          <Col xs={12}>
            <h4 className="main-title">Amazon Products</h4>
            <ul className="app-line-breadcrumbs mb-3">
              <li className="">
                <Link to="/Amazon/Dashboard" className="f-s-14 f-w-500">
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="active">Products</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            {/* Filter Section */}
            <div className="filter-section">
              <div className="filter-row">
                {/* Date Range Filter */}
                <div className="filter-item date-range-filter-container">
                  <label className="filter-label">Date Range</label>
                  <div className="filter-dropdown">
                    <button
                      className="filter-button"
                      onClick={toggleDatePicker}
                    >
                      <span>{selectedDateRange}</span>
                      <i className="ti ti-chevron-down"></i>
                    </button>
                    {showDatePicker && (
                      <div className="date-range-dropdown">
                        <ul className="date-range-options">
                          {[
                            "Today",
                            "Yesterday",
                            "Last 7 Days",
                            "Last 14 Days",
                            "Last Month",
                            "Last 3 Months",
                            "Last 6 Months",
                            "Last Year",
                            "Custom",
                          ].map((range) => (
                            <li
                              key={range}
                              className={`date-range-option ${
                                selectedDateRange === range ? "active" : ""
                              }`}
                              onClick={() => selectDateRange(range)}
                            >
                              {range}
                            </li>
                          ))}
                        </ul>
                        {selectedDateRange === "Custom" && (
                          <div className="custom-date-inputs">
                            <div className="custom-date-row">
                              <input
                                type="date"
                                className="custom-date-input"
                                value={customDateRange.startDate}
                                onChange={(e) =>
                                  handleCustomDateChange(
                                    "startDate",
                                    e.target.value
                                  )
                                }
                              />
                              <input
                                type="date"
                                className="custom-date-input"
                                value={customDateRange.endDate}
                                onChange={(e) =>
                                  handleCustomDateChange("endDate", e.target.value)
                                }
                              />
                            </div>
                            <button
                              className="apply-custom-date"
                              onClick={applyCustomDate}
                            >
                              Apply
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Sort By Filter */}
                <div className="filter-item">
                  <label className="filter-label">Sort By</label>
                  <div className="filter-dropdown">
                    <select
                      className="filter-button"
                      value={selectedSortBy}
                      onChange={(e) => setSelectedSortBy(e.target.value)}
                      style={{ border: "1px solid #ddd", borderRadius: "8px" }}
                    >
                      <option value="Best Sellers">Best Sellers</option>
                      <option value="Highest Commission">Highest Commission</option>
                      <option value="Newest">Newest</option>
                      <option value="Price: Low to High">Price: Low to High</option>
                      <option value="Price: High to Low">Price: High to Low</option>
                      <option value="Customer Rating">Customer Rating</option>
                    </select>
                  </div>
                </div>

                {/* Geography Filter */}
                <div className="filter-item">
                  <label className="filter-label">Geography</label>
                  <div className="filter-dropdown">
                    <select
                      className="filter-button"
                      value={selectedGeo}
                      onChange={(e) => setSelectedGeo(e.target.value)}
                      style={{ border: "1px solid #ddd", borderRadius: "8px" }}
                    >
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="Europe">Europe</option>
                      <option value="Asia Pacific">Asia Pacific</option>
                    </select>
                  </div>
                </div>

                {/* Amazon Store Filter */}
                <div className="filter-item">
                  <label className="filter-label">Amazon Store</label>
                  <div className="filter-dropdown">
                    <select
                      className="filter-button"
                      value={selectedStore}
                      onChange={(e) => setSelectedStore(e.target.value)}
                      style={{ border: "1px solid #ddd", borderRadius: "8px" }}
                    >
                      <option value="All Stores">All Stores</option>
                      <option value="Amazon.in">Amazon.in</option>
                      <option value="Amazon.com">Amazon.com</option>
                      <option value="Amazon.co.uk">Amazon.co.uk</option>
                    </select>
                  </div>
                </div>

                {/* Layout Controls */}
                <div className="layout-controls">
                  <button
                    className={`layout-btn ${
                      layout === "col-xl-3 col-md-6 col-12" && !isListView
                        ? "active"
                        : ""
                    }`}
                    onClick={() => handleViewChange("col-xl-3 col-md-6 col-12")}
                    title="4 Column Grid"
                  >
                    <i className="ti ti-grid-dots"></i>
                  </button>
                  <button
                    className={`layout-btn ${
                      layout === "col-xl-4 col-md-6 col-12" && !isListView
                        ? "active"
                        : ""
                    }`}
                    onClick={() => handleViewChange("col-xl-4 col-md-6 col-12")}
                    title="3 Column Grid"
                  >
                    <i className="ti ti-layout-grid"></i>
                  </button>
                  <button
                    className={`layout-btn ${
                      layout === "col-xl-6 col-12" && !isListView ? "active" : ""
                    }`}
                    onClick={() => handleViewChange("col-xl-6 col-12")}
                    title="2 Column Grid"
                  >
                    <i className="ti ti-layout-columns"></i>
                  </button>
                  <button
                    className={`layout-btn ${isListView ? "active" : ""}`}
                    onClick={handleGridLayout}
                    title="List View"
                  >
                    <i className="ti ti-list"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <Row className={isListView ? "list-view" : ""}>
              {products.slice(0, 12).map((product) => (
                <Col key={product.id} className={layout}>
                  <div 
                    className="product-card" 
                    onClick={(e) => {
                      // Prevent navigation if clicking on a link or button
                      if (e.target.closest('a') || e.target.closest('button')) {
                        return;
                      }
                      navigate(`/Amazon/Products/${product.id}`);
                    }}
                  >
                    <div className="product-image-container">
                      <img
                        src={product.image1}
                        alt={product.title}
                        className="product-image"
                      />
                      <div className="product-badge">Amazon Choice</div>
                    </div>
                    <div className="product-info">
                      <div className="product-category">{product.category}</div>
                      <Link 
                        to={`/Amazon/Products/${product.id}`} 
                        className="text-decoration-none"
                      >
                        <h3 className="product-title product-title-link">{product.title}</h3>
                      </Link>
                      <div className="product-rating">
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`ti ti-star${
                                i < Math.floor(product.rating) ? "-filled" : ""
                              } star`}
                            ></i>
                          ))}
                        </div>
                        <span className="rating-text">
                          {product.rating} ({Math.floor(Math.random() * 1000) + 100} reviews)
                        </span>
                      </div>
                      <div className="product-pricing">
                        <div className="price-row">
                          <span className="price-label">Price</span>
                          <span className="price-value current">₹{product.price}</span>
                        </div>
                        <div className="price-row">
                          <span className="price-label">Commission (8%)</span>
                          <span className="price-value commission">
                            ₹{(product.price * 0.08).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div className="product-actions">
                        <Link
                          to={`/Amazon/Products/${product.id}`}
                          className="action-button"
                        >
                          <i className="ti ti-eye me-2"></i>
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AmazonProduct;
