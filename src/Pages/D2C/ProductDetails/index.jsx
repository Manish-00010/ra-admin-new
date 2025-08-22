import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Badge,
  Table,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import { products } from "@/Data/Eshopproduct/Eshopproduct";

const D2CProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Payoutability Calculator State
  const [expectedOrders, setExpectedOrders] = useState(1000);
  const [sellingPrice, setSellingPrice] = useState(3799);
  const [confirmationRate, setConfirmationRate] = useState(90);
  const [expectedDelivery, setExpectedDelivery] = useState(70);
  const [adSpendPerOrder, setAdSpendPerOrder] = useState(600);
  const [advancedView, setAdvancedView] = useState(false);

  // Ad Performance Screenshots State
  const [campaignScreenshot, setCampaignScreenshot] = useState(null);
  const [adSetScreenshot, setAdSetScreenshot] = useState(null);
  const [individualAdScreenshot, setIndividualAdScreenshot] = useState(null);

  // Handle image upload
  const handleImageUpload = (event, setImageFunction) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageFunction(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Find product by ID or use first product as fallback
    const foundProduct =
      products.find((p) => p.id === parseInt(id)) || products[0];
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const images = [product.image1, product.image2].filter(Boolean);

  const campaignInsights = {
    totalClicks: "2.5K",
    clickThrough: "12.5%",
    payout: "₹280",
    conversionRate: "6.24%",
    roas: "12x",
    commission: "₹488",
  };

  const deliveryStates = [
    { state: "Maharashtra", orders: "11%", delivered: "91%" },
    { state: "Uttar Pradesh", orders: "10%", delivered: "87%" },
    { state: "Karnataka", orders: "8%", delivered: "91%" },
    { state: "Gujarat", orders: "7%", delivered: "92%" },
    { state: "Bihar", orders: "5%", delivered: "89%" },
  ];

  return (
    <Container fluid>
      {/* Breadcrumb */}
      <Row className="m-1">
        <Col xs={12}>
          <h4 className="main-title">D2C Product Details</h4>
          <ul className="app-line-breadcrumbs mb-3">
            <li className="">
              <Link to="/D2C/Dashboard" className="f-s-14 f-w-500">
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="">
              <Link to="/D2C/Products" className="f-s-14 f-w-500">
                <span>Product</span>
              </Link>
            </li>
            <li className="active">{product.title}</li>
          </ul>
        </Col>
      </Row>

      <Row>
        {/* Left Column - Product Images and Info */}
        <Col xl={9} lg={7}>
          <Row>
            {/* Product Images */}
            <Col lg={6}>
              <Card className="mb-0">
                <CardBody>
                  <div className="product-images">
                    {/* Main Image */}
                    <div className="main-image mb-3">
                      <img
                        src={images[activeImageIndex]}
                        alt={product.title}
                        className="img-fluid rounded"
                        style={{
                          width: "100%",
                          height: "400px",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    {/* Thumbnail Images */}
                    {images.length > 1 && (
                      <div className="thumbnail-images d-flex gap-2">
                        {images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${product.title} ${index + 1}`}
                            className={`img-thumbnail cursor-pointer ${
                              activeImageIndex === index ? "border-primary" : ""
                            }`}
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                            }}
                            onClick={() => setActiveImageIndex(index)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </CardBody>
              </Card>
            </Col>

            {/* Product Info */}
            <Col lg={6}>
              <Card className="h-100">
                <CardBody>
                  <div className="product-info">
                    {/* Product Tags */}
                    <div className="product-tags mb-2">
                      <div className="d-flex gap-2 flex-wrap">
                        <Badge
                          color="info"
                          className="d-flex align-items-center gap-1 px-2 py-1"
                        >
                          <i className="ti ti-star-filled"></i>
                          Bestseller
                        </Badge>
                        <Badge
                          color="success"
                          className="d-flex align-items-center gap-1 px-2 py-1"
                        >
                          <i className="ti ti-shield-check"></i>
                          Verified
                        </Badge>
                        <Badge
                          color="warning"
                          className="d-flex align-items-center gap-1 px-2 py-1"
                        >
                          <i className="ti ti-discount-2"></i>
                          Hot Deal
                        </Badge>
                      </div>
                    </div>

                    <h2 className="product-title mb-2">{product.title}</h2>

                    <div className="product-rating mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`ti ti-star${
                                i < Math.floor(product.rating) ? "-filled" : ""
                              } text-warning`}
                            ></i>
                          ))}
                        </div>
                        <span className="rating-text">
                          {product.rating} (
                          {Math.floor(Math.random() * 1000) + 500} reviews)
                        </span>
                      </div>
                    </div>

                    <div className="product-price mb-2">
                      <div className="d-flex align-items-center gap-3">
                        <h4 className="current-price text-success mb-0">
                          ₹{product.price}
                        </h4>
                        {product.originalPrice && (
                          <span className="original-price text-muted text-decoration-line-through">
                            ₹{product.originalPrice}
                          </span>
                        )}
                        {product.discount && (
                          <Badge color="danger">{product.discount}</Badge>
                        )}
                      </div>
                    </div>

                    <div className="product-category mb-2">
                     
                      <Badge color="light-secondary f-s-16">ID:2</Badge>
                    </div>
                    <div className="product-category mb-2">
                      <h6>Category</h6>
                      <Badge color="light-secondary">{product.category}</Badge>
                    </div>

                    <div className="commission-info mb-2">
                      <h6>Commission Information</h6>
                      <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded ">
                        <span>Payout:</span>
                        <strong className="text-success">
                          ₹{(product.price * 0.12).toFixed(2)}
                        </strong>
                      </div>
                      <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded mt-2">
                        <span>Est. Commission:</span>
                        <strong className="text-success">12%</strong>
                      </div>
                    </div>

                    <div className="product-actions">
                      <div className="action-buttons d-flex flex-column gap-2">
                        <Button color="primary" className="flex-fill">
                          <i className="ti ti-external-link me-2"></i>
                          Generate Tracking Link
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Product Description Section */}
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="mb-0">
                <CardHeader>
                  <h5 className="mb-0">Product Description</h5>
                  <small className="text-muted">
                    Detailed product information and specifications
                  </small>
                </CardHeader>
                <CardBody>
                  <div className="product-description">
                    <Row>
                      {/* Description Content */}
                      <Col lg={12}>
                        <div className="description-content">
                          <h6 className="text-primary mb-3">
                            About This Product
                          </h6>
                          <p className="mb-3">
                            Experience the perfect blend of style, comfort, and
                            functionality with our premium {product.title}.
                            Crafted with attention to detail and designed to
                            meet the highest standards of quality, this product
                            represents excellent value for modern consumers.
                          </p>

                          <h6 className="text-primary mb-3">Key Features</h6>
                          <ul className="feature-list mb-3">
                            <li className="d-flex align-items-start mb-2">
                              <i className="ti ti-check text-success me-2 mt-1"></i>
                              <span>
                                Premium quality materials for enhanced
                                durability
                              </span>
                            </li>
                            <li className="d-flex align-items-start mb-2">
                              <i className="ti ti-check text-success me-2 mt-1"></i>
                              <span>
                                Ergonomic design for maximum comfort and
                                usability
                              </span>
                            </li>
                            <li className="d-flex align-items-start mb-2">
                              <i className="ti ti-check text-success me-2 mt-1"></i>
                              <span>
                                Multi-functional features to suit various needs
                              </span>
                            </li>
                            <li className="d-flex align-items-start mb-2">
                              <i className="ti ti-check text-success me-2 mt-1"></i>
                              <span>
                                Easy maintenance and long-lasting performance
                              </span>
                            </li>
                            <li className="d-flex align-items-start mb-2">
                              <i className="ti ti-check text-success me-2 mt-1"></i>
                              <span>
                                Backed by manufacturer warranty and support
                              </span>
                            </li>
                          </ul>

                          <h6 className="text-primary mb-3">
                            Product Benefits
                          </h6>
                          <p className="mb-0">
                            This product is designed to enhance your daily
                            experience with its innovative features and reliable
                            performance. Whether you're using it for personal or
                            professional purposes, you can count on its
                            consistent quality and effectiveness.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Campaign Insights */}
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="mb-0">
                <CardHeader>
                  <h5>Campaign Insights</h5>
                  <small className="text-muted">
                    View campaign and click behaviour and advertising campaign
                    insights
                  </small>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md={4}>
                      <div className="insight-card text-center py-1">
                        <h4 className="text-primary">
                          {campaignInsights.totalClicks}
                        </h4>
                        <p className="mb-0">Total Clicks</p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="insight-card text-center py-1">
                        <h4 className="text-success">
                          {campaignInsights.payout}
                        </h4>
                        <p className="mb-0">Payout</p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="insight-card text-center py-1">
                        <h4 className="text-warning">
                          {campaignInsights.roas}
                        </h4>
                        <p className="mb-0">ROAS</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Product Testing Data */}
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="mb-0">
                <CardHeader className="bg-light">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="bg-warning rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="ti ti-test-pipe text-white fs-5"></i>
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Product Testing Data</h5>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="p-3">
                  <Row className="g-4">
                    {/* Financial Overview */}
                    <Col lg={4} md={6} sm={12}>
                      <div className="h-100">
                        <div className="border-start border-primary border-4 ps-3 mb-2">
                          <h6 className="text-primary fw-bold mb-1">
                            Financial Overview
                          </h6>
                        </div>
                        <div className="bg-light rounded p-3">
                          <div className="row g-3">
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-calendar-event text-primary"></i>
                                  <span className="small fw-medium">
                                    Test Start Date
                                  </span>
                                </div>
                                <span className="fw-bold text-dark">
                                  16 Jul, 2025
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-calendar-event text-primary"></i>
                                  <span className="small fw-medium">
                                    Test End Date
                                  </span>
                                </div>
                                <span className="fw-bold text-dark">
                                  18 Jul, 2025
                                </span>
                              </div>
                            </div>

                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-currency-rupee text-success"></i>
                                  <span className="small fw-medium">
                                    Selling Price
                                  </span>
                                </div>
                                <span className="fw-bold text-success">
                                  ₹ 2,399
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-shopping-bag text-warning"></i>
                                  <span className="small fw-medium">
                                    Payout
                                  </span>
                                </div>
                                <span className="fw-bold text-warning">
                                  ₹ 628
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-ad-2 text-info"></i>
                                  <span className="small fw-medium">
                                    Total Ad Spend
                                  </span>
                                </div>
                                <span className="fw-bold text-info">
                                  ₹ 5,477.14
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-chart-line text-primary"></i>
                                  <span className="small fw-medium">
                                    Total Payout
                                  </span>
                                </div>
                                <span className="fw-bold text-primary">
                                  ₹ 79,263
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-chart-line text-primary"></i>
                                  <span className="small fw-medium">ROAS</span>
                                </div>
                                <span className="fw-bold text-primary">
                                  12x
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    {/* Marketing Performance */}
                    <Col lg={4} md={6} sm={12}>
                      <div className="h-100">
                        <div className="border-start border-info border-4 ps-3 mb-2">
                          <h6 className="text-info fw-bold mb-1">
                            Marketing Performance
                          </h6>
                        </div>
                        <div className="bg-light rounded p-3">
                          <div className="row g-3">
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-brand-facebook text-primary"></i>
                                  <span className="small fw-medium">
                                    Marketing Channel
                                  </span>
                                </div>
                                <Badge color="primary" className="fw-bold">
                                  Meta Ads
                                </Badge>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-eye text-info"></i>
                                  <span className="small fw-medium">
                                    Total Impressions
                                  </span>
                                </div>
                                <span className="fw-bold text-info">
                                  57,438
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-click text-warning"></i>
                                  <span className="small fw-medium">
                                    Total Clicks
                                  </span>
                                </div>
                                <span className="fw-bold text-warning">
                                  1,710
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-chart-bar text-primary"></i>
                                  <span className="small fw-medium">CPM</span>
                                </div>
                                <span className="fw-bold text-primary">
                                  ₹ 95
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-target text-success"></i>
                                  <span className="small fw-medium">CPC</span>
                                </div>
                                <span className="fw-bold text-success">
                                  ₹ 3
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-target text-warning"></i>
                                  <span className="small fw-medium">CTR</span>
                                </div>
                                <span className="fw-bold text-warning">
                                  2.98%
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-percentage text-success"></i>
                                  <span className="small fw-medium">
                                    Conversion Rate
                                  </span>
                                </div>
                                <span className="fw-bold text-success">
                                  1.93%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    {/* Orders & Other Metrics */}
                    <Col lg={4} md={12} sm={12}>
                      <div className="h-100">
                        <div className="border-start border-success border-4 ps-3 mb-2">
                          <h6 className="text-success fw-bold mb-1">
                            Orders & Other Metrics
                          </h6>
                        </div>
                        <div className="bg-light rounded p-3">
                          <div className="row g-3">
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-calculator text-info"></i>
                                  <span className="small fw-medium">
                                    Aggregate CPA
                                  </span>
                                </div>
                                <span className="fw-bold text-info">₹ 166</span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-trophy text-warning"></i>
                                  <span className="small fw-medium">
                                    Winning Creative CPA
                                  </span>
                                </div>
                                <span className="fw-bold text-warning">
                                  ₹ 161
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-receipt text-success"></i>
                                  <span className="small fw-medium">
                                    Average Order Value
                                  </span>
                                </div>
                                <span className="fw-bold text-success">
                                  ₹ 2,402
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-package text-primary"></i>
                                  <span className="small fw-medium">
                                    Avg Order Quantity
                                  </span>
                                </div>
                                <span className="fw-bold text-primary">1</span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-shopping-cart text-primary"></i>
                                  <span className="small fw-medium">
                                    Order Placed
                                  </span>
                                </div>
                                <span className="fw-bold text-primary">33</span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-truck-delivery text-success"></i>
                                  <span className="small fw-medium">
                                    Order Shipped %
                                  </span>
                                </div>
                                <span className="fw-bold text-success">
                                  64%
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-package-export text-info"></i>
                                  <span className="small fw-medium">
                                    Order Delivered %
                                  </span>
                                </div>
                                <span className="fw-bold text-info">65%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Ad Performance Overview */}
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="mb-0">
                <CardHeader>
                  <h5 className="mb-0 fw-bold text-dark">
                    Ad Performance Overview
                  </h5>
                </CardHeader>
                <CardBody>
                  <Row className="g-4">
                    {/* Campaign Overview */}
                    <Col lg={4} md={12}>
                      <Card className="border h-100">
                        <CardHeader className="bg-light border-bottom">
                          <h6 className="mb-0 fw-semibold">
                            Campaign Overview
                          </h6>
                        </CardHeader>
                        <CardBody>
                          {/* Screenshot Upload Area */}
                          <div
                            className="screenshot-upload-area border border-2 border-dashed rounded p-0 text-center position-relative bg-light d-flex align-items-center justify-content-center"
                            style={{ minHeight: "200px" }}
                          >
                            {campaignScreenshot ? (
                              <div className="position-relative">
                                <img
                                  src={campaignScreenshot}
                                  alt="Campaign Screenshot"
                                  className="img-fluid rounded shadow"
                                  style={{
                                    maxHeight: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                                <Button
                                  color="danger"
                                  size="sm"
                                  className="position-absolute top-0 end-0 m-2 rounded-circle"
                                  onClick={() => setCampaignScreenshot(null)}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    padding: "0",
                                  }}
                                >
                                  <i className="ti ti-x"></i>
                                </Button>
                              </div>
                            ) : (
                              <div className="d-flex flex-column align-items-center justify-content-center h-100">
                                <i
                                  className="ti ti-camera text-muted mb-3"
                                  style={{ fontSize: "3rem" }}
                                ></i>
                                <Button
                                  color="dark"
                                  size="sm"
                                  className="d-flex align-items-center gap-2"
                                  onClick={() =>
                                    document
                                      .getElementById("campaignUpload")
                                      .click()
                                  }
                                >
                                  <i className="ti ti-screenshot"></i>1
                                  Screenshot(s)
                                </Button>
                              </div>
                            )}
                            <input
                              type="file"
                              id="campaignUpload"
                              accept="image/*"
                              style={{ display: "none" }}
                              onChange={(e) =>
                                handleImageUpload(e, setCampaignScreenshot)
                              }
                            />
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    {/* Ad Set Performance */}
                    <Col lg={4} md={12}>
                      <Card className="border h-100">
                        <CardHeader className="bg-light border-bottom">
                          <h6 className="mb-0 fw-semibold">
                            Ad Set Performance
                          </h6>
                        </CardHeader>
                        <CardBody>
                          {/* Screenshot Upload Area */}
                          <div
                            className="screenshot-upload-area border border-2 border-dashed rounded p-0 text-center position-relative bg-light d-flex align-items-center justify-content-center"
                            style={{ minHeight: "200px" }}
                          >
                            {adSetScreenshot ? (
                              <div className="position-relative">
                                <img
                                  src={adSetScreenshot}
                                  alt="Ad Set Screenshot"
                                  className="img-fluid rounded shadow"
                                  style={{
                                    maxHeight: "180px",
                                    width: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                                <Button
                                  color="danger"
                                  size="sm"
                                  className="position-absolute top-0 end-0 m-2 rounded-circle"
                                  onClick={() => setAdSetScreenshot(null)}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    padding: "0",
                                  }}
                                >
                                  <i className="ti ti-x"></i>
                                </Button>
                              </div>
                            ) : (
                              <div className="d-flex flex-column align-items-center justify-content-center h-100">
                                <i
                                  className="ti ti-camera text-muted mb-3"
                                  style={{ fontSize: "3rem" }}
                                ></i>
                                <Button
                                  color="dark"
                                  size="sm"
                                  className="d-flex align-items-center gap-2"
                                  onClick={() =>
                                    document
                                      .getElementById("adSetUpload")
                                      .click()
                                  }
                                >
                                  <i className="ti ti-screenshot"></i>1
                                  Screenshot(s)
                                </Button>
                              </div>
                            )}
                            <input
                              type="file"
                              id="adSetUpload"
                              accept="image/*"
                              style={{ display: "none" }}
                              onChange={(e) =>
                                handleImageUpload(e, setAdSetScreenshot)
                              }
                            />
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    {/* Individual Ad Metrics */}
                    <Col lg={4} md={12}>
                      <Card className="border h-100">
                        <CardHeader className="bg-light border-bottom">
                          <h6 className="mb-0 fw-semibold">
                            Individual Ad Metrics
                          </h6>
                        </CardHeader>
                        <CardBody>
                          {/* Screenshot Upload Area */}
                          <div
                            className="screenshot-upload-area border border-2 border-dashed rounded p-0 text-center position-relative bg-light d-flex align-items-center justify-content-center"
                            style={{ minHeight: "200px" }}
                          >
                            {individualAdScreenshot ? (
                              <div className="position-relative">
                                <img
                                  src={individualAdScreenshot}
                                  alt="Individual Ad Screenshot"
                                  className="img-fluid rounded shadow"
                                  style={{
                                    maxHeight: "180px",
                                    width: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                                <Button
                                  color="danger"
                                  size="sm"
                                  className="position-absolute top-0 end-0 m-2 rounded-circle"
                                  onClick={() =>
                                    setIndividualAdScreenshot(null)
                                  }
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    padding: "0",
                                  }}
                                >
                                  <i className="ti ti-x"></i>
                                </Button>
                              </div>
                            ) : (
                              <div className="d-flex flex-column align-items-center justify-content-center h-100">
                                <i
                                  className="ti ti-camera text-muted mb-3"
                                  style={{ fontSize: "3rem" }}
                                ></i>
                                <Button
                                  color="dark"
                                  size="sm"
                                  className="d-flex align-items-center gap-2"
                                  onClick={() =>
                                    document
                                      .getElementById("individualAdUpload")
                                      .click()
                                  }
                                >
                                  <i className="ti ti-screenshot"></i>1
                                  Screenshot(s)
                                </Button>
                              </div>
                            )}
                            <input
                              type="file"
                              id="individualAdUpload"
                              accept="image/*"
                              style={{ display: "none" }}
                              onChange={(e) =>
                                handleImageUpload(e, setIndividualAdScreenshot)
                              }
                            />
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Creative Performance Section */}
          <Row className="mt-4">
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <h5 className="mb-0">Creative Performance</h5>
                  <small className="text-muted">
                    Video advertisement performance comparison
                  </small>
                </CardHeader>
                <CardBody>
                  <Row>
                    {/* Creative 1 */}
                    <Col lg={4} md={6} className="mb-4">
                      <Card className="h-100 border-2 border-success position-relative">
                        {/* Winner Badge */}
                        <div
                          className="position-absolute top-0 start-0"
                          style={{ zIndex: 10 }}
                        >
                          <Badge
                            color="success"
                            className="px-3 py-2 rounded-0 rounded-bottom-end"
                            style={{ fontSize: "0.8rem", fontWeight: "600" }}
                          >
                            <i className="ti ti-crown me-1"></i>
                            Winner
                          </Badge>
                        </div>

                        <CardBody className="p-0">
                          {/* Video Thumbnail */}
                          <div
                            className="position-relative bg-light d-flex align-items-center justify-content-center"
                            style={{ height: "200px", cursor: "pointer" }}
                          >
                            <div
                              className="position-absolute w-100 h-100 bg-dark opacity-50 d-flex align-items-center justify-content-center"
                              style={{ backdropFilter: "blur(2px)" }}
                            >
                              <div
                                className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow"
                                style={{ width: "60px", height: "60px" }}
                              >
                                <i
                                  className="ti ti-player-play-filled text-dark"
                                  style={{
                                    fontSize: "1.5rem",
                                    marginLeft: "3px",
                                  }}
                                ></i>
                              </div>
                            </div>
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkNyZWF0aXZlIDEgVGh1bWJuYWlsPC90ZXh0Pgo8L3N2Zz4="
                              alt="Creative 1"
                              className="w-100 h-100"
                              style={{ objectFit: "cover" }}
                            />
                          </div>

                          {/* Metrics */}
                          <div className="p-3 border-top">
                            <Row className="g-2">
                              <Col xs={6}>
                                <div className="text-center p-2 bg-light rounded">
                                  <div className="text-muted small">
                                    Selling Price
                                  </div>
                                  <div className="fw-bold text-success">
                                    ₹299
                                  </div>
                                </div>
                              </Col>
                              <Col xs={6}>
                                <div className="text-center p-2 bg-light rounded">
                                  <div className="text-muted small">Orders</div>
                                  <div className="fw-bold text-primary">
                                    1,250
                                  </div>
                                </div>
                              </Col>
                              <Col xs={6}>
                                <div className="text-center p-2 bg-light rounded">
                                  <div className="text-muted small">CPA</div>
                                  <div className="fw-bold text-warning">
                                    ₹75
                                  </div>
                                </div>
                              </Col>
                              <Col xs={6}>
                                <div className="text-center p-2 bg-light rounded">
                                  <div className="text-muted small">Spend</div>
                                  <div className="fw-bold text-danger">
                                    ₹93,750
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    {/* Creative 2 */}
                    <Col lg={4} md={6} className="mb-4">
                      <Card className="h-100 border">
                        <CardBody className="p-0">
                          {/* Video Thumbnail */}
                          <div
                            className="position-relative bg-light d-flex align-items-center justify-content-center"
                            style={{ height: "200px", cursor: "pointer" }}
                          >
                            <div
                              className="position-absolute w-100 h-100 bg-dark opacity-50 d-flex align-items-center justify-content-center"
                              style={{ backdropFilter: "blur(2px)" }}
                            >
                              <div
                                className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow"
                                style={{ width: "60px", height: "60px" }}
                              >
                                <i
                                  className="ti ti-player-play-filled text-dark"
                                  style={{
                                    fontSize: "1.5rem",
                                    marginLeft: "3px",
                                  }}
                                ></i>
                              </div>
                            </div>
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkNyZWF0aXZlIDIgVGh1bWJuYWlsPC90ZXh0Pgo8L3N2Zz4="
                              alt="Creative 2"
                              className="w-100 h-100"
                              style={{ objectFit: "cover" }}
                            />
                          </div>

                          {/* Metrics */}
                          <div className="p-3 border-top">
                            <Row className="g-2">
                              <Col xs={6}>
                                <div className="text-center p-2 bg-light rounded">
                                  <div className="text-muted small">
                                    Selling Price
                                  </div>
                                  <div className="fw-bold text-success">
                                    ₹299
                                  </div>
                                </div>
                              </Col>
                              <Col xs={6}>
                                <div className="text-center p-2 bg-light rounded">
                                  <div className="text-muted small">Orders</div>
                                  <div className="fw-bold text-primary">
                                    890
                                  </div>
                                </div>
                              </Col>
                              <Col xs={6}>
                                <div className="text-center p-2 bg-light rounded">
                                  <div className="text-muted small">CPA</div>
                                  <div className="fw-bold text-warning">
                                    ₹92
                                  </div>
                                </div>
                              </Col>
                              <Col xs={6}>
                                <div className="text-center p-2 bg-light rounded">
                                  <div className="text-muted small">Spend</div>
                                  <div className="fw-bold text-danger">
                                    ₹81,880
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    {/* Creative 3 */}
                    <Col lg={4} md={6} className="mb-4">
                      <Card className="h-100 border">
                        <CardBody className="p-0">
                          {/* Video Thumbnail */}
                          <div
                            className="position-relative bg-light d-flex align-items-center justify-content-center"
                            style={{ height: "200px", cursor: "pointer" }}
                          >
                            <div
                              className="position-absolute w-100 h-100 bg-dark opacity-50 d-flex align-items-center justify-content-center"
                              style={{ backdropFilter: "blur(2px)" }}
                            >
                              <div
                                className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow"
                                style={{ width: "60px", height: "60px" }}
                              >
                                <i
                                  className="ti ti-player-play-filled text-dark"
                                  style={{
                                    fontSize: "1.5rem",
                                    marginLeft: "3px",
                                  }}
                                ></i>
                              </div>
                            </div>
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkNyZWF0aXZlIDMgVGh1bWJuYWlsPC90ZXh0Pgo8L3N2Zz4="
                              alt="Creative 3"
                              className="w-100 h-100"
                              style={{ objectFit: "cover" }}
                            />
                          </div>

                          {/* Metrics */}
                          <div className="p-3 border-top">
                            <Row className="g-2">
                              <Col xs={6}>
                                <div className="text-center p-2 bg-light rounded">
                                  <div className="text-muted small">
                                    Selling Price
                                  </div>
                                  <div className="fw-bold text-success">
                                    ₹299
                                  </div>
                                </div>
                              </Col>
                              <Col xs={6}>
                                <div className="text-center p-2 bg-light rounded">
                                  <div className="text-muted small">Orders</div>
                                  <div className="fw-bold text-primary">
                                    654
                                  </div>
                                </div>
                              </Col>
                              <Col xs={6}>
                                <div className="text-center p-2 bg-light rounded">
                                  <div className="text-muted small">CPA</div>
                                  <div className="fw-bold text-warning">
                                    ₹115
                                  </div>
                                </div>
                              </Col>
                              <Col xs={6}>
                                <div className="text-center p-2 bg-light rounded">
                                  <div className="text-muted small">Spend</div>
                                  <div className="fw-bold text-danger">
                                    ₹75,210
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Payoutability Calculator */}
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="border-1 mb-0">
                <CardHeader className="border-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fw-bold text-dark">
                      Profitability Calculator
                    </h5>
                  </div>
                </CardHeader>
                <CardBody className="pt-2">
                  <Row className="g-3">
                    {/* Expected Orders */}
                    <Col lg={3} md={6} sm={12}>
                      <div>
                        <div className="d-flex align-items-center gap-1 mb-2">
                          <Label
                            className="text-primary fw-medium mb-0"
                            style={{ fontSize: "0.9rem" }}
                          >
                            Expected Orders
                          </Label>
                          <i
                            className="ti ti-info-circle text-muted"
                            style={{ fontSize: "0.8rem" }}
                          ></i>
                        </div>
                        <div className="mb-2">
                          <Input
                            type="number"
                            value={expectedOrders}
                            onChange={(e) =>
                              setExpectedOrders(parseInt(e.target.value) || 0)
                            }
                            className="text-center fw-bold border-1"
                            style={{
                              fontSize: "1.4rem",
                              backgroundColor: "white",
                              borderRadius: "8px",
                              padding: "8px",
                            }}
                          />
                        </div>
                        <Input
                          type="range"
                          min="0"
                          max="100000"
                          value={expectedOrders}
                          onChange={(e) =>
                            setExpectedOrders(parseInt(e.target.value))
                          }
                          className="form-range"
                        />
                        <div className="d-flex justify-content-between mt-0">
                          <small
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            0
                          </small>
                          <small
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            1,00,000+
                          </small>
                        </div>
                      </div>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                      <div>
                        <div className="d-flex align-items-center gap-1 mb-2">
                          <Label
                            className="text-primary fw-medium mb-0"
                            style={{ fontSize: "0.9rem" }}
                          >
                            Selling Price (₹)
                          </Label>
                          <i
                            className="ti ti-info-circle text-muted"
                            style={{ fontSize: "0.8rem" }}
                          ></i>
                        </div>
                        <div className="input-group mb-2">
                          <span className="input-group-text border-1 bg-white text-dark fw-bold">
                            ₹
                          </span>
                          <Input
                            type="number"
                            value={sellingPrice}
                            readOnly
                            className="text-center fw-bold border-1"
                            style={{
                              fontSize: "1.4rem",
                              backgroundColor: "#f8f9fa",
                              borderRadius: "0 8px 8px 0",
                              color: "#495057",
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                      <div>
                        <div className="d-flex align-items-center gap-1 mb-2">
                          <Label
                            className="text-primary fw-medium mb-0"
                            style={{ fontSize: "0.9rem" }}
                          >
                            Confirmation Rate (%)
                          </Label>
                          <i
                            className="ti ti-info-circle text-muted"
                            style={{ fontSize: "0.8rem" }}
                          ></i>
                        </div>
                        <div className="input-group mb-2">
                          <Input
                            type="number"
                            value={confirmationRate}
                            onChange={(e) =>
                              setConfirmationRate(parseInt(e.target.value) || 0)
                            }
                            className="text-center fw-bold border-1"
                            style={{
                              fontSize: "1.4rem",
                              backgroundColor: "white",
                              borderRadius: "8px 0 0 8px",
                            }}
                          />
                          <span className="input-group-text border-1 bg-white text-dark fw-bold">
                            %
                          </span>
                        </div>
                        <Input
                          type="range"
                          min="0"
                          max="100"
                          value={confirmationRate}
                          onChange={(e) =>
                            setConfirmationRate(parseInt(e.target.value))
                          }
                          className="form-range"
                        />
                        <div className="d-flex justify-content-between mt-0">
                          <small
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            0
                          </small>
                          <small
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            100%
                          </small>
                        </div>
                      </div>
                    </Col>

                    {/* Expected Delivery */}
                    <Col lg={3} md={6} sm={12}>
                      <div>
                        <div className="d-flex align-items-center gap-1 mb-2">
                          <Label
                            className="text-primary fw-medium mb-0"
                            style={{ fontSize: "0.9rem" }}
                          >
                            Expected Delivery (%)
                          </Label>
                          <i
                            className="ti ti-info-circle text-muted"
                            style={{ fontSize: "0.8rem" }}
                          ></i>
                        </div>
                        <div className="input-group mb-2">
                          <Input
                            type="number"
                            value={expectedDelivery}
                            onChange={(e) =>
                              setExpectedDelivery(parseInt(e.target.value) || 0)
                            }
                            className="text-center fw-bold border-1"
                            style={{
                              fontSize: "1.4rem",
                              backgroundColor: "white",
                              borderRadius: "8px 0 0 8px",
                            }}
                          />
                          <span className="input-group-text border-1 bg-white text-dark fw-bold">
                            %
                          </span>
                        </div>
                        <Input
                          type="range"
                          min="0"
                          max="100"
                          value={expectedDelivery}
                          onChange={(e) =>
                            setExpectedDelivery(parseInt(e.target.value))
                          }
                          className="form-range"
                        />
                        <div className="d-flex justify-content-between mt-0">
                          <small
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            0
                          </small>
                          <small
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            100%
                          </small>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  {/* Results Section */}
                  <Row className="mt-4 g-3">
                    <Col lg={3} md={6} sm={12}>
                      <div>
                        <div className="d-flex align-items-center gap-1 mb-2">
                          <Label
                            className="text-primary fw-medium mb-0"
                            style={{ fontSize: "0.9rem" }}
                          >
                            Ad Spend per Order (₹)
                          </Label>
                          <i
                            className="ti ti-info-circle text-muted"
                            style={{ fontSize: "0.8rem" }}
                          ></i>
                        </div>
                        <div className="input-group mb-2">
                          <span className="input-group-text border-1 bg-white text-dark fw-bold">
                            ₹
                          </span>
                          <Input
                            type="number"
                            value={adSpendPerOrder}
                            onChange={(e) =>
                              setAdSpendPerOrder(parseInt(e.target.value) || 0)
                            }
                            className="text-center fw-bold border-1"
                            style={{
                              fontSize: "1.4rem",
                              backgroundColor: "white",
                              borderRadius: "0 8px 8px 0",
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    {/* Net Payout Per Delivered Order */}
                    <Col lg={3} md={6} sm={12}>
                      <div className="bg-white rounded p-3 text-center border">
                        <div className="d-flex align-items-center justify-content-center gap-1 mb-2 ">
                          <Label
                            className="text-muted fw-medium mb-0"
                            style={{ fontSize: "12px" }}
                          >
                            Payout Per Order (₹)
                          </Label>
                          <i
                            className="ti ti-info-circle text-muted"
                            style={{ fontSize: "0.7rem" }}
                          ></i>
                        </div>
                        <h4
                          className="text-dark mb-0 fw-bold f-s-20"
                          style={{ color: "#333" }}
                        >
                          ₹{" "}
                          {(
                            (sellingPrice - 628 - adSpendPerOrder) *
                            (confirmationRate / 100) *
                            (expectedDelivery / 100)
                          ).toFixed(2)}
                        </h4>
                      </div>
                    </Col>

                    {/* Payout Margin */}
                    <Col lg={3} md={6} sm={12}>
                      <div className="bg-white rounded p-3 text-center border">
                        <div className="d-flex align-items-center justify-content-center gap-1 mb-2">
                          <Label
                            className="text-muted fw-medium mb-0"
                            style={{ fontSize: "12px" }}
                          >
                            Payout Margin (%)
                          </Label>
                          <i
                            className="ti ti-info-circle text-muted"
                            style={{ fontSize: "0.7rem" }}
                          ></i>
                        </div>
                        <h4 className="text-dark mb-0 fw-bold f-s-20">
                          {(
                            ((sellingPrice - 628 - adSpendPerOrder) /
                              sellingPrice) *
                            100
                          ).toFixed(1)}{" "}
                          %
                        </h4>
                      </div>
                    </Col>

                    {/* Potential Payout */}
                    <Col lg={3} md={6} sm={12}>
                      <div className="bg-white rounded py-3 text-center border">
                        <div
                          className="text-muted mb-2"
                          style={{ fontSize: "12px" }}
                        >
                          Potential Payout
                        </div>
                        <h3 className="text-dark mb-0 fw-bold f-s-16">
                          ≈₹{" "}
                          {(
                            expectedOrders *
                            (sellingPrice - 628 - adSpendPerOrder) *
                            (confirmationRate / 100) *
                            (expectedDelivery / 100)
                          ).toLocaleString("en-IN")}
                        </h3>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="mb-0">
                <CardHeader>
                  <h5>Delivery by State</h5>
                  <small className="text-muted">
                    Top 10 states with orders
                  </small>
                </CardHeader>
                <CardBody>
                  <Table striped responsive>
                    <thead>
                      <tr>
                        <th>State</th>
                        <th>Order Share %</th>
                        <th>Delivered %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="ph-duotone ph-map-pin me-2"></i>
                            Maharashtra
                          </div>
                        </td>
                        <td>11%</td>
                        <td>
                          <Badge color="success">91%</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="ph-duotone ph-map-pin me-2"></i>
                            Uttar Pradesh
                          </div>
                        </td>
                        <td>10%</td>
                        <td>
                          <Badge color="success">87%</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="ph-duotone ph-map-pin me-2"></i>
                            Karnataka
                          </div>
                        </td>
                        <td>8%</td>
                        <td>
                          <Badge color="success">91%</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="ph-duotone ph-map-pin me-2"></i>
                            Gujarat
                          </div>
                        </td>
                        <td>7%</td>
                        <td>
                          <Badge color="success">92%</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="ph-duotone ph-map-pin me-2"></i>
                            Bihar
                          </div>
                        </td>
                        <td>5%</td>
                        <td>
                          <Badge color="warning">89%</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="ph-duotone ph-map-pin me-2"></i>
                            Tamil Nadu
                          </div>
                        </td>
                        <td>9%</td>
                        <td>
                          <Badge color="success">93%</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="ph-duotone ph-map-pin me-2"></i>
                            West Bengal
                          </div>
                        </td>
                        <td>6%</td>
                        <td>
                          <Badge color="warning">85%</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="ph-duotone ph-map-pin me-2"></i>
                            Rajasthan
                          </div>
                        </td>
                        <td>4%</td>
                        <td>
                          <Badge color="success">90%</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="ph-duotone ph-map-pin me-2"></i>
                            Madhya Pradesh
                          </div>
                        </td>
                        <td>3%</td>
                        <td>
                          <Badge color="warning">88%</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="ph-duotone ph-map-pin me-2"></i>
                            Odisha
                          </div>
                        </td>
                        <td>2%</td>
                        <td>
                          <Badge color="warning">86%</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Brand Features */}
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="mb-0">
                <CardHeader>
                  <h6>Brand Features</h6>
                </CardHeader>
                <CardBody>
                  <Row className="text-center">
                    <Col md={3}>
                      <div className="assurance-item p-3">
                        <div className="assurance-icon mb-2">
                          <i
                            className="ph-duotone ph-shield-check text-success"
                            style={{ fontSize: "2rem" }}
                          ></i>
                        </div>
                        <h6>Quality Assured Products</h6>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="assurance-item p-3">
                        <div className="assurance-icon mb-2">
                          <i
                            className="ph-duotone ph-truck text-primary"
                            style={{ fontSize: "2rem" }}
                          ></i>
                        </div>
                        <h6>Free Shipping</h6>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="assurance-item p-3">
                        <div className="assurance-icon mb-2">
                          <i
                            className="ph-duotone ph-credit-card text-warning"
                            style={{ fontSize: "2rem" }}
                          ></i>
                        </div>
                        <h6>Cash On Delivery</h6>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="assurance-item p-3">
                        <div className="assurance-icon mb-2">
                          <i
                            className="ph-duotone ph-arrow-counter-clockwise text-info"
                            style={{ fontSize: "2rem" }}
                          ></i>
                        </div>
                        <h6>5 Days Easy Return</h6>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Right Column - Sticky Price Box */}
        <Col xl={3} lg={5} className="position-sticky top-0">
          <div className="sticky-price-box">
            <Card className="sticky-card">
              <CardHeader>
                <h5>Price Details</h5>
              </CardHeader>
              <CardBody>
                <div className="price-breakdown">
                  <div className="d-flex justify-content-between mb-3">
                    <span>Product Price:</span>
                    <strong>₹{product.price}</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Payout:</span>
                    <strong className="text-success">
                      ₹{(product.price * 0.12).toFixed(2)}
                    </strong>
                  </div>
                </div>

                <div className="action-buttons-sticky">
                  <Button color="primary" size="lg" className="w-100 mb-2">
                    <i className="ti ti-external-link me-2"></i>
                    Generate Link
                  </Button>
                  <Button
                    color="outline-secondary"
                    size="lg"
                    className="w-100 mb-2"
                  >
                    <i className="ti ti-eye me-2"></i>
                    Preview
                  </Button>
                  <Button color="outline-primary" size="lg" className="w-100">
                    <i className="ti ti-heart me-2"></i>
                    Add to Favorites
                  </Button>
                </div>
              </CardBody>
            </Card>

            {/* Product Status */}
            <Card className="mt-4">
              <CardHeader>
                <h6>Product Status</h6>
              </CardHeader>
              <CardBody>
                <div className="status-info">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Status:</span>
                    <Badge color="success">Active</Badge>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Brand:</span>
                    <span>{product.category}</span>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Created Date:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Updated Date:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default D2CProductDetails;
