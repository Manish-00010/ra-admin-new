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

const AmazonProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Commission Calculator State
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
    totalClicks: "3.2K",
    clickThrough: "15.3%",
    commission: "₹320",
    conversionRate: "8.14%",
    roas: "15x",
    revenue: "₹5,890",
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
          <h4 className="main-title">Amazon Product Details</h4>
          <ul className="app-line-breadcrumbs mb-3">
            <li className="">
              <Link to="/Amazon/Dashboard" className="f-s-14 f-w-500">
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="">
              <Link to="/Amazon/Products" className="f-s-14 f-w-500">
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
                          color="warning"
                          className="d-flex align-items-center gap-1 px-2 py-1"
                        >
                          <i className="ti ti-crown"></i>
                          Amazon's Choice
                        </Badge>
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
                          <i className="ti ti-truck"></i>
                          Prime
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

                    <div className="product-price mb-4">
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

                    <div className="product-category mb-4">
                      <h6>Category</h6>
                      <Badge color="light-secondary">{product.category}</Badge>
                    </div>

                    <div className="commission-info mb-2">
                      <h6>Amazon Commission Information</h6>
                      <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded ">
                        <span>Commission Rate:</span>
                        <strong className="text-success">8%</strong>
                      </div>
                      <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded mt-2">
                        <span>Est. Commission:</span>
                        <strong className="text-success">
                          ₹{(product.price * 0.08).toFixed(2)}
                        </strong>
                      </div>
                    </div>

                    <div className="product-actions">
                      <div className="action-buttons d-flex flex-column gap-2">
                        <Button color="primary" className="flex-fill">
                          <i className="ti ti-external-link me-2"></i>
                          Generate Amazon Link
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
                            About This Amazon Product
                          </h6>
                          <p className="mb-3">
                            Discover this premium {product.title} available on Amazon.
                            This product combines quality, functionality, and value,
                            making it a perfect choice for customers seeking reliable
                            solutions. Backed by Amazon's customer service and fast delivery.
                          </p>

                          <h6 className="text-primary mb-3">Key Features</h6>
                          <ul className="feature-list mb-3">
                            <li className="d-flex align-items-start mb-2">
                              <i className="ti ti-check text-success me-2 mt-1"></i>
                              <span>
                                High-quality construction with premium materials
                              </span>
                            </li>
                            <li className="d-flex align-items-start mb-2">
                              <i className="ti ti-check text-success me-2 mt-1"></i>
                              <span>
                                Amazon Prime eligible for fast delivery
                              </span>
                            </li>
                            <li className="d-flex align-items-start mb-2">
                              <i className="ti ti-check text-success me-2 mt-1"></i>
                              <span>
                                Highly rated by Amazon customers
                              </span>
                            </li>
                            <li className="d-flex align-items-start mb-2">
                              <i className="ti ti-check text-success me-2 mt-1"></i>
                              <span>
                                Backed by Amazon's return policy
                              </span>
                            </li>
                            <li className="d-flex align-items-start mb-2">
                              <i className="ti ti-check text-success me-2 mt-1"></i>
                              <span>
                                Customer service support available
                              </span>
                            </li>
                          </ul>

                          <h6 className="text-primary mb-3">
                            Amazon Benefits
                          </h6>
                          <p className="mb-3">
                            This product is fulfilled by Amazon, ensuring fast delivery,
                            easy returns, and reliable customer service. Perfect for
                            affiliate marketers looking to promote trusted products
                            with high conversion rates.
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
                    View Amazon affiliate campaign performance and insights
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
                          {campaignInsights.commission}
                        </h4>
                        <p className="mb-0">Commission</p>
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

          {/* Amazon Performance Data */}
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="mb-0">
                <CardHeader className="bg-light">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="bg-info rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="ti ti-chart-line text-white fs-5"></i>
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">AMAZON PERFORMANCE DATA</h5>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="p-3">
                  <Row className="g-4">
                    {/* Sales Overview */}
                    <Col lg={4} md={6} sm={12}>
                      <div className="h-100">
                        <div className="border-start border-primary border-4 ps-3 mb-2">
                          <h6 className="text-primary fw-bold mb-1">
                            Sales Overview
                          </h6>
                        </div>
                        <div className="bg-light rounded p-3">
                          <div className="row g-3">
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-calendar-event text-primary"></i>
                                  <span className="small fw-medium">
                                    Campaign Start
                                  </span>
                                </div>
                                <span className="fw-bold text-dark">
                                  20 Jul, 2025
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-calendar-x text-danger"></i>
                                  <span className="small fw-medium">
                                    Last Updated
                                  </span>
                                </div>
                                <span className="fw-bold text-dark">
                                  Today
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-percentage text-warning"></i>
                                  <span className="small fw-medium">
                                    Commission Rate
                                  </span>
                                </div>
                                <span className="fw-bold text-warning">
                                  8%
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-currency-rupee text-success"></i>
                                  <span className="small fw-medium">
                                    Product Price
                                  </span>
                                </div>
                                <span className="fw-bold text-success">
                                  ₹ {product.price}
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
                                  ₹ 8,200
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-chart-line text-primary"></i>
                                  <span className="small fw-medium">
                                    Total Commission
                                  </span>
                                </div>
                                <span className="fw-bold text-primary">
                                  ₹ 12,400
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-trending-up text-success"></i>
                                  <span className="small fw-medium">
                                    ROAS
                                  </span>
                                </div>
                                <span className="fw-bold text-success">
                                  15.1x
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    {/* Traffic & Conversion */}
                    <Col lg={4} md={6} sm={12}>
                      <div className="h-100">
                        <div className="border-start border-info border-4 ps-3 mb-2">
                          <h6 className="text-info fw-bold mb-1">
                            Traffic & Conversion
                          </h6>
                        </div>
                        <div className="bg-light rounded p-3">
                          <div className="row g-3">
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-world text-primary"></i>
                                  <span className="small fw-medium">
                                    Traffic Source
                                  </span>
                                </div>
                                <Badge color="primary" className="fw-bold">
                                  Organic & Ads
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
                                  65,210
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
                                  3,245
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-chart-bar text-primary"></i>
                                  <span className="small fw-medium">CTR</span>
                                </div>
                                <span className="fw-bold text-primary">
                                  4.97%
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-cursor text-success"></i>
                                  <span className="small fw-medium">CPC</span>
                                </div>
                                <span className="fw-bold text-success">
                                  ₹ 2.5
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-shopping-cart text-warning"></i>
                                  <span className="small fw-medium">Orders</span>
                                </div>
                                <span className="fw-bold text-warning">
                                  155
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
                                  4.77%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    {/* Amazon Metrics */}
                    <Col lg={4} md={12} sm={12}>
                      <div className="h-100">
                        <div className="border-start border-success border-4 ps-3 mb-2">
                          <h6 className="text-success fw-bold mb-1">
                            Amazon Specific Metrics
                          </h6>
                        </div>
                        <div className="bg-light rounded p-3">
                          <div className="row g-3">
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-star text-warning"></i>
                                  <span className="small fw-medium">
                                    Product Rating
                                  </span>
                                </div>
                                <span className="fw-bold text-warning">{product.rating}/5</span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-users text-info"></i>
                                  <span className="small fw-medium">
                                    Reviews Count
                                  </span>
                                </div>
                                <span className="fw-bold text-info">1,240</span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-trophy text-warning"></i>
                                  <span className="small fw-medium">
                                    Best Seller Rank
                                  </span>
                                </div>
                                <span className="fw-bold text-warning">
                                  #23
                                </span>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-truck text-success"></i>
                                  <span className="small fw-medium">
                                    Prime Delivery
                                  </span>
                                </div>
                                <Badge color="success" className="fw-bold">
                                  Available
                                </Badge>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-package text-primary"></i>
                                  <span className="small fw-medium">
                                    Stock Status
                                  </span>
                                </div>
                                <Badge color="success" className="fw-bold">
                                  In Stock
                                </Badge>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-shield-check text-success"></i>
                                  <span className="small fw-medium">
                                    Amazon Choice
                                  </span>
                                </div>
                                <Badge color="warning" className="fw-bold">
                                  Yes
                                </Badge>
                              </div>
                            </div>
                            <div className="col-12 px-0">
                              <div className="d-flex justify-content-between align-items-center p-2 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-center gap-2">
                                  <i className="ti ti-discount text-info"></i>
                                  <span className="small fw-medium">
                                    Current Discount
                                  </span>
                                </div>
                                <span className="fw-bold text-danger">
                                  {product.discount || "No Discount"}
                                </span>
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

          {/* Commission Calculator */}
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="border-1 mb-0">
                <CardHeader className="border-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fw-bold text-dark">
                      AMAZON COMMISSION CALCULATOR
                    </h5>
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-muted">Toggle Advanced View</span>
                      <div className="form-check form-switch">
                        <Input
                          type="checkbox"
                          className="form-check-input"
                          id="advancedToggle"
                          checked={advancedView}
                          onChange={(e) => setAdvancedView(e.target.checked)}
                          style={{
                            backgroundColor: advancedView
                              ? "#6c757d"
                              : "#dee2e6",
                            borderColor: advancedView ? "#6c757d" : "#dee2e6",
                          }}
                        />
                      </div>
                    </div>
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
                          max="50000"
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
                            50,000+
                          </small>
                        </div>
                      </div>
                    </Col>

                    {/* Product Price */}
                    <Col lg={3} md={6} sm={12}>
                      <div>
                        <div className="d-flex align-items-center gap-1 mb-2">
                          <Label
                            className="text-primary fw-medium mb-0"
                            style={{ fontSize: "0.9rem" }}
                          >
                            Product Price (₹)
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
                            onChange={(e) =>
                              setSellingPrice(parseInt(e.target.value) || 0)
                            }
                            className="text-center fw-bold border-1"
                            style={{
                              fontSize: "1.4rem",
                              backgroundColor: "white",
                              borderRadius: "0 8px 8px 0",
                            }}
                          />
                        </div>
                        <Input
                          type="range"
                          min="100"
                          max="50000"
                          value={sellingPrice}
                          onChange={(e) =>
                            setSellingPrice(parseInt(e.target.value))
                          }
                          className="form-range"
                        />
                        <div className="d-flex justify-content-between mt-0">
                          <small
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            ₹ 100
                          </small>
                          <small
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            ₹ 50,000
                          </small>
                        </div>
                      </div>
                    </Col>

                    {/* Click Rate */}
                    <Col lg={3} md={6} sm={12}>
                      <div>
                        <div className="d-flex align-items-center gap-1 mb-2">
                          <Label
                            className="text-primary fw-medium mb-0"
                            style={{ fontSize: "0.9rem" }}
                          >
                            Click Through Rate (%)
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
                          max="20"
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
                            0%
                          </small>
                          <small
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            20%
                          </small>
                        </div>
                      </div>
                    </Col>

                    {/* Conversion Rate */}
                    <Col lg={3} md={6} sm={12}>
                      <div>
                        <div className="d-flex align-items-center gap-1 mb-2">
                          <Label
                            className="text-primary fw-medium mb-0"
                            style={{ fontSize: "0.9rem" }}
                          >
                            Conversion Rate (%)
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
                          max="15"
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
                            0%
                          </small>
                          <small
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            15%
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
                            Traffic Volume
                          </Label>
                          <i
                            className="ti ti-info-circle text-muted"
                            style={{ fontSize: "0.8rem" }}
                          ></i>
                        </div>
                        <div className="bg-white rounded p-3 text-center border">
                          <h4 className="text-dark mb-0 fw-bold">
                            {Math.round(expectedOrders / (expectedDelivery / 100) / (confirmationRate / 100)).toLocaleString()}
                          </h4>
                          <small className="text-muted">Visitors Needed</small>
                        </div>
                      </div>
                    </Col>
                    {/* Commission Per Sale */}
                    <Col lg={3} md={6} sm={12}>
                      <div className="bg-white rounded p-3 text-center border">
                        <div className="d-flex align-items-center justify-content-center gap-1 mb-2 ">
                          <Label
                            className="text-muted fw-medium mb-0"
                            style={{ fontSize: "12px" }}
                          >
                            Commission Per Sale (₹)
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
                          {(sellingPrice * 0.08).toFixed(2)}
                        </h4>
                      </div>
                    </Col>

                    {/* Commission Rate */}
                    <Col lg={3} md={6} sm={12}>
                      <div className="bg-white rounded p-3 text-center border">
                        <div className="d-flex align-items-center justify-content-center gap-1 mb-2">
                          <Label
                            className="text-muted fw-medium mb-0"
                            style={{ fontSize: "12px" }}
                          >
                            Commission Rate
                          </Label>
                          <i
                            className="ti ti-info-circle text-muted"
                            style={{ fontSize: "0.7rem" }}
                          ></i>
                        </div>
                        <h4 className="text-dark mb-0 fw-bold f-s-20">
                          8.0%
                        </h4>
                      </div>
                    </Col>

                    {/* Total Commission */}
                    <Col lg={3} md={6} sm={12}>
                      <div className="bg-white rounded py-3 text-center border">
                        <div className="text-muted mb-2" style={{ fontSize: "12px" }}>
                          Total Commission
                        </div>
                        <h3 className="text-dark mb-0 fw-bold f-s-16">
                          ≈₹{" "}
                          {(
                            expectedOrders * (sellingPrice * 0.08)
                          ).toLocaleString("en-IN")}
                        </h3>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Amazon Features */}
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="mb-0">
                <CardHeader>
                  <h6>Amazon Features</h6>
                </CardHeader>
                <CardBody>
                  <Row className="text-center">
                    <Col md={3}>
                      <div className="assurance-item p-3">
                        <div className="assurance-icon mb-2">
                          <i
                            className="ti ti-truck text-primary"
                            style={{ fontSize: "2rem" }}
                          ></i>
                        </div>
                        <h6>Prime Delivery</h6>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="assurance-item p-3">
                        <div className="assurance-icon mb-2">
                          <i
                            className="ti ti-shield-check text-success"
                            style={{ fontSize: "2rem" }}
                          ></i>
                        </div>
                        <h6>A-to-Z Guarantee</h6>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="assurance-item p-3">
                        <div className="assurance-icon mb-2">
                          <i
                            className="ti ti-arrow-back text-warning"
                            style={{ fontSize: "2rem" }}
                          ></i>
                        </div>
                        <h6>Easy Returns</h6>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="assurance-item p-3">
                        <div className="assurance-icon mb-2">
                          <i
                            className="ti ti-headphones text-info"
                            style={{ fontSize: "2rem" }}
                          ></i>
                        </div>
                        <h6>24/7 Support</h6>
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
                <h5>Amazon Commission Details</h5>
              </CardHeader>
              <CardBody>
                <div className="price-breakdown">
                  <div className="d-flex justify-content-between mb-3">
                    <span>Product Price:</span>
                    <strong>₹{product.price}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Commission (8%):</span>
                    <strong className="text-success">
                      ₹{(product.price * 0.08).toFixed(2)}
                    </strong>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span>Total Commission:</span>
                    <h5 className="text-success mb-0">
                      ₹{(product.price * 0.08 * quantity).toFixed(2)}
                    </h5>
                  </div>
                </div>

                <div className="action-buttons-sticky">
                  <Button color="warning" size="lg" className="w-100 mb-2">
                    <i className="ti ti-external-link me-2"></i>
                    Generate Amazon Link
                  </Button>
                  <Button
                    color="outline-secondary"
                    size="lg"
                    className="w-100 mb-2"
                  >
                    <i className="ti ti-eye me-2"></i>
                    View on Amazon
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
                <h6>Amazon Product Status</h6>
              </CardHeader>
              <CardBody>
                <div className="status-info">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Status:</span>
                    <Badge color="success">Active</Badge>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Platform:</span>
                    <span>Amazon India</span>
                  </div>
                  
                  <div className="d-flex justify-content-between mb-2">
                    <span>ASIN:</span>
                    <span>B08{Math.random().toString(36).substring(2, 9).toUpperCase()}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Last Updated:</span>
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

export default AmazonProductDetails;
