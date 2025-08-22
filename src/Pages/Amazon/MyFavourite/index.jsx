import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Button,
} from "reactstrap";
import { products } from "@/Data/Eshopproduct/Eshopproduct";
import { useDebounce } from "@/hooks/useDebounce";
import { Link } from "react-router-dom";

const AmazonMyFavourite = () => {
  const navigate = useNavigate();
  const [layout, setLayout] = useState("col-xl-4 col-md-6 col-12 mb-4 col-exl-3 ");
  const [isListView, setIsListView] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStore, setFilterStore] = useState("all");

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
  const [selectedStoreFilter, setSelectedStoreFilter] = useState("All Stores");

  // Favorite state management
  const [favoriteStates, setFavoriteStates] = useState(new Set());

  // Debounce search term for better performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Get favourite products (Amazon: first 8 products, D2C: next 8 products)
  const amazonProducts = products
    .slice(0, 8)
    .map((p) => ({ ...p, store: "amazon" }));
  const d2cProducts = products
    .slice(8, 16)
    .map((p) => ({ ...p, store: "d2c" }));
  const favouriteProducts = [...amazonProducts, ...d2cProducts];

  // Memoized filtered and sorted products
  const filteredProducts = useMemo(() => {
    let filtered = favouriteProducts;

    // Filter by search term
    if (debouncedSearchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
          product.category
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (filterCategory !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }

    // Filter by store type
    if (filterStore !== "all") {
      filtered = filtered.filter((product) => product.store === filterStore);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (selectedSortBy) {
        case "Best Sellers":
        case "name":
          return a.title.localeCompare(b.title);
        case "Price: Low to High":
        case "price-low":
          return a.price - b.price;
        case "Price: High to Low":
        case "price-high":
          return b.price - a.price;
        case "Customer Rating":
        case "rating":
          return b.rating - a.rating;
        case "Highest Commission":
          return b.price * 0.08 - a.price * 0.08;
        case "Newest":
          return (
            new Date(b.createdAt || "2025-01-01") -
            new Date(a.createdAt || "2025-01-01")
          );
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    favouriteProducts,
    debouncedSearchTerm,
    filterCategory,
    filterStore,
    selectedSortBy,
  ]);

  // Layout handlers
  const handleGridLayout = () => {
    setIsListView(true);
    setLayout("col-sm-6");
  };

  const handleViewChange = (newLayout) => {
    setIsListView(false);
    setLayout(newLayout);
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

  const categories = [
    "all",
    ...new Set(favouriteProducts.map((product) => product.category)),
  ];
  const stores = ["all", "amazon", "d2c"];

  const handleRemoveFavorite = (productId) => {
    console.log("Remove from favorites:", productId);
  };

  const toggleFavorite = (productId, event) => {
    event.stopPropagation();
    setFavoriteStates((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <div className="amazon-favourite-products">
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
          position: relative;
        }

     

        .product-card:active {
          transform: translateY(-2px);
          transition: transform 0.1s ease;
        }

        .favorite-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2;
          transition: all 0.2s;
        }

        .favorite-badge:hover {
          background: white;
          transform: scale(1.1);
        }

        .favorite-icon {
          color: #e74c3c;
          font-size: 16px;
        }

        .heart-icon {
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .heart-icon:hover {
          transform: scale(1.2);
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

     
        .product-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #7fb414;
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
          background: #7fb414;
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
            <h4 className="main-title">My Favourite Products</h4>
            <ul className="app-line-breadcrumbs mb-3">
              <li className="">
                <Link to="/Amazon/Dashboard" className="f-s-14 f-w-500">
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="active">My Favourite</li>
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
                                  handleCustomDateChange(
                                    "endDate",
                                    e.target.value
                                  )
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
                      <option value="Highest Commission">
                        Highest Commission
                      </option>
                      <option value="Newest">Newest</option>
                      <option value="Price: Low to High">
                        Price: Low to High
                      </option>
                      <option value="Price: High to Low">
                        Price: High to Low
                      </option>
                      <option value="Customer Rating">Customer Rating</option>
                    </select>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="filter-item">
                  <label className="filter-label">Category</label>
                  <div className="filter-dropdown">
                    <select
                      className="filter-button"
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      style={{ border: "1px solid #ddd", borderRadius: "8px" }}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category === "all"
                            ? "All Categories"
                            : category.charAt(0).toUpperCase() +
                              category.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Store Type Filter */}
                <div className="filter-item">
                  <label className="filter-label">Store Type</label>
                  <div className="filter-dropdown">
                    <select
                      className="filter-button"
                      value={filterStore}
                      onChange={(e) => setFilterStore(e.target.value)}
                      style={{ border: "1px solid #ddd", borderRadius: "8px" }}
                    >
                      <option value="all">All Stores</option>
                      <option value="amazon">Amazon</option>
                      <option value="d2c">D2C</option>
                    </select>
                  </div>
                </div>

            
              </div>
            </div>

            <Row className={isListView ? "list-view" : ""}>
              {filteredProducts.map((product) => (
                <Col key={product.id} className={layout}>
                  <Card className="overflow-hidden">
                    <CardBody className="p-0">
                      <div className="product-content-box">
                        <div className="product-grid">
                          <div className="product-image">
                            <span className="bg-danger h-45 w-45 d-flex-center b-r-50 wishlist-like-icon two position-absolute">
                                <i className="ti ti-heart heart-icon text-light"></i>
                              </span>
                            <Link
                              to={`/Amazon/Products/${product.id}`}
                              className="m-0 f-s-16 f-w-500"
                            >
                              <img
                                className="pic-1"
                                src={product.image1}
                                alt=""
                              />
                              <img
                                className="images_box"
                                src={product.image2}
                                alt=""
                              />
                              {/* <span className="active-badge two">ASIN: B01N1UX8RW</span> */}
                              <span
                                className="active-badge two"
                                title="ASIN: B01N1UX8RW"
                              >
                                <i className="ph-duotone ph-barcode"></i>{" "}
                                <p>ASIN: B01N1UX8RW</p>
                              </span>
                            </Link>
                          </div>
                        </div>

                        <div className="p-3">
                          {/* Product Title */}
                          <div className="mb-2">
                            <Link
                              to={`/Amazon/Products/${product.id}`}
                              className="m-0 f-s-16 f-w-500"
                            >
                              {product.title}
                            </Link>
                          </div>

                          {/* Rating Section */}
                          <div className="product-rating my-2">
                            <div>
                              <span className="rating-score">
                                {product.rating} ★
                              </span>
                              <span className="rating-count">
                                ({product.reviewCount || "339,242"})
                              </span>
                            </div>
                            <div>
                              {/* Store Info */}
                              <div className="store-info">
                                <i className="ph ph-storefront me-0"></i>{" "}
                                {product.store || "RENPHO"}
                              </div>
                            </div>
                          </div>

                          {/* Category Badge */}  
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
                                  ${product.price}{" "}
                                  {product.originalPrice && (
                                    <span className="text-muted">
                                      (<del>${product.originalPrice}</del>)
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
                                <span className="price-label">Commission</span>
                                <span className="price-value commission-value">
                                  {product.commissionRate || "4.5%"}
                                </span>
                              </div>
                              <div className="price-row">
                                <span className="price-label">Est. Payout</span>
                                <span className="price-value rate-value">
                                  ${product.commission || "1.57"}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="d-flex flex-column gap-2">
                            {/* Preview Link Button */}
                            <button className="preview-link-btn btn btn-outline-secondary btn-sm">
                              <i className="ti ti-eye me-1"></i> View On Amazon
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AmazonMyFavourite;
