import React, { useState, useMemo } from "react";
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
import { useDebounce } from "@/hooks/useDebounce";

const Product = () => {
  // State to track the layout view
  const [layout, setLayout] = useState("col-xl-4 col-sm-4 col-lg-4"); // Default to 4-column view
  const [isListView, setIsListView] = useState(false); // Toggle between grid and list view
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");
  
  // Debounce search term for better performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Memoized filtered and sorted products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search term
    if (debouncedSearchTerm) {
      filtered = filtered.filter(product =>
        (product.title || product.name || '').toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        (product.category || '').toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (filterCategory !== "all") {
      filtered = filtered.filter(product => product.category === filterCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          const nameA = a.title || a.name || '';
          const nameB = b.title || b.name || '';
          return nameA.localeCompare(nameB);
        case "price":
          return (a.price || 0) - (b.price || 0);
        case "date":
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [debouncedSearchTerm, filterCategory, sortBy]);

  // Button click handlers
  const handleGridLayout = () => {
    setIsListView(true);
    setLayout("col-sm-6"); // List layout with 2 columns
  };

  const handleViewChange = (newLayout) => {
    setIsListView(false);
    setLayout(newLayout); // Update grid layout
  };

  return (
    <div>
      <Container fluid className="main_container">
        <Row className="m-1">
          <div className="col-12 ">
            <h4 className="main-title">Amazon Products</h4>
            <ul className="app-line-breadcrumbs mb-3">
              <li className="">
                <Link to="/Amazon/dashboard" className="f-s-14 f-w-500">
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
                          placeholder="Search products..."
                          aria-label="Search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
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
                          <input checked type="radio" name="radio-group1" />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">Best Sellers</span>
                        </label>
                        <label className="check-box m-3">
                          <input type="radio" name="radio-group1" />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">Highest Rated</span>
                        </label>
                        <label className="check-box m-3">
                          <input type="radio" name="radio-group1" />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">
                            Highest Commission
                          </span>
                        </label>
                        <label className="check-box m-3">
                          <input type="radio" name="radio-group1" />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">
                            Price: Low to High
                          </span>
                        </label>
                        <label className="check-box m-3">
                          <input type="radio" name="radio-group1" />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">
                            Price: High to Low
                          </span>
                        </label>
                        <label className="check-box m-3">
                          <input type="radio" name="radio-group1" />
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
                          <input checked type="radio" name="geo-group" />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">United States</span>
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
                          <input type="radio" name="store-group" checked />
                          <span className="radiomark outline-secondary"></span>
                          <span className="text-secondary">All Stores</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading-three">
                      <button
                        className="accordion-button bg-none p-1 collapsed"
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
          <Col xl={9} lg={9} className="full-on-slide">
            <div className="product-wrapper-grid">
              <Row className={isListView ? "list-view" : ""}>
                {filteredProducts.map((product) => (
                  <Col key={product.id} className={layout}>
                    <Card className="overflow-hidden">
                      <CardBody className="p-0">
                        <div className="product-content-box">
                          <div className="product-grid">
                            <div className="product-image">
                              <a href="#" className="image">
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
                              </a>
                              
                            </div>
                          </div>

                          <div className="p-3">
                            {/* Product Title */}
                            <div className="mb-2">
                              <Link
                                to="/apps/e-shop/product-details"
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
                            <div className="mb-3">
                              <span className="category-badge">
                                {product.category || "Electronics"}
                              </span>
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
                                  <span className="price-label">
                                    Commission
                                  </span>
                                  <span className="price-value commission-value">
                                    {product.commissionRate || "4.5%"}
                                  </span>
                                </div>
                                <div className="price-row">
                                  <span className="price-label">
                                    Est. Payout
                                  </span>
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

export default Product;
