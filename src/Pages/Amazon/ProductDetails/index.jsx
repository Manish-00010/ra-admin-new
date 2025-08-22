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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { products } from "@/Data/Eshopproduct/Eshopproduct";

// Images from public folder
const heliumImage = "/assets/images/helium-product-summary.png";
const jungleScoutImage = "/assets/images/jungle-scout-summary.png";

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

  // Modal states for image popups
  const [heliumModalOpen, setHeliumModalOpen] = useState(false);
  const [jungleScoutModalOpen, setJungleScoutModalOpen] = useState(false);

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
    commission: "$320",
    conversionRate: "8.14%",
    roas: "15x",
    revenue: "$5,890",
  };

  const deliveryStates = [
    { state: "Maharashtra", orders: "11%", delivered: "91%" },
    { state: "Uttar Pradesh", orders: "10%", delivered: "87%" },
    { state: "Karnataka", orders: "8%", delivered: "91%" },
    { state: "Gujarat", orders: "7%", delivered: "92%" },
    { state: "Bihar", orders: "5%", delivered: "89%" },
  ];

  return (
    <>
      <style>{`
        .analytics-buttons-section .btn {
          transition: all 0.3s ease;
        }
        
        .analytics-buttons-section .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .modal-xl {
          max-width: 1200px;
        }
        
        .modal-body img {
          max-height: 90vh;
          border: 1px solid #dee2e6;
          border-radius: 8px;
        }
        
        @media (max-width: 768px) {
          .analytics-buttons-section .d-flex {
            flex-direction: column;
          }
          
          .analytics-buttons-section .btn {
            min-width: 100%;
          }
        }
      `}</style>

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
                                activeImageIndex === index
                                  ? "border-primary"
                                  : ""
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
                                  i < Math.floor(product.rating)
                                    ? "-filled"
                                    : ""
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
                            ${product.price}
                          </h4>
                          {product.originalPrice && (
                            <span className="original-price text-muted text-decoration-line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                          {product.discount && (
                            <Badge color="danger">{product.discount}</Badge>
                          )}
                        </div>
                      </div>

                      <div className="product-asin mb-2">
                        <h6>ASIN</h6>
                        <Badge color="light-primary" className="px-3 py-2">
                          {product.asin || "B08XYZABC123"}
                        </Badge>
                      </div>

                      <div className="product-category mb-2">
                        <h6>Category</h6>
                        <Badge color="light-secondary">
                          {product.category}
                        </Badge>
                      </div>

                      <div className="commission-info mb-2">
                        <h6>Commission Information</h6>
                        <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded ">
                          <span>Commission Rate:</span>
                          <strong className="text-success">12%</strong>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded mt-2">
                          <span>Est. Payout:</span>
                          <strong className="text-success">
                            ${(product.price * 0.12).toFixed(2)}
                          </strong>
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
                              About This Amazon Product
                            </h6>
                            <p className="mb-3">
                              Discover this premium {product.title} available on
                              Amazon. This product combines quality,
                              functionality, and value, making it a perfect
                              choice for customers seeking reliable solutions.
                              Backed by Amazon's customer service and fast
                              delivery.
                            </p>

                            <h6 className="text-primary mb-3">Key Features</h6>
                            <ul className="feature-list mb-3">
                              <li className="d-flex align-items-start mb-2">
                                <i className="ti ti-check text-success me-2 mt-1"></i>
                                <span>
                                  High-quality construction with premium
                                  materials
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
                                <span>Highly rated by Amazon customers</span>
                              </li>
                              <li className="d-flex align-items-start mb-2">
                                <i className="ti ti-check text-success me-2 mt-1"></i>
                                <span>Backed by Amazon's return policy</span>
                              </li>
                              <li className="d-flex align-items-start mb-2">
                                <i className="ti ti-check text-success me-2 mt-1"></i>
                                <span>Customer service support available</span>
                              </li>
                            </ul>

                            <h6 className="text-primary mb-3">
                              Amazon Benefits
                            </h6>
                            <p className="mb-3">
                              This product is fulfilled by Amazon, ensuring fast
                              delivery, easy returns, and reliable customer
                              service. Perfect for affiliate marketers looking
                              to promote trusted products with high conversion
                              rates.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            {/* Product Analytics Section */}
            <Row className="mt-4">
              <Col xs={12}>
                <Card className="mb-0">
                  <CardHeader>
                    <h5 className="mb-0">Product Analytics & Data</h5>
                    <small className="text-muted">
                      View detailed product performance and market analysis
                    </small>
                  </CardHeader>
                  <CardBody>
                    <div className="analytics-buttons-section">
                      <div className="d-flex gap-3 justify-content-center">
                        <Button
                          color="primary"
                          size="lg"
                          style={{ width: "fit-content" }}
                          className="d-flex align-items-center gap-2"
                          onClick={() => setHeliumModalOpen(true)}
                        >
                          <i className="ti ti-chart-line"></i>
                          Helium Data
                        </Button>
                        <Button
                          color="warning"
                          size="lg"
                          className="d-flex align-items-center gap-2"
                          onClick={() => setJungleScoutModalOpen(true)}
                        >
                          <i className="ti ti-chart-bar"></i>
                          Jungle Scout Data
                        </Button>
                      </div>
                    </div>
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
                      <strong>${product.price}</strong>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <span>Commission (8%):</span>
                      <strong className="text-success">
                        ${(product.price * 0.08).toFixed(2)}
                      </strong>
                    </div>
                  </div>

                  <div className="action-buttons-sticky">
                    <Button
                      color="primary "
                      size="lg"
                      className="w-100 mb-2 f-s-16"
                    >
                      <i className="ti ti-external-link me-2"></i>
                      Generate Link
                    </Button>
                    <Button
                      color="outline-secondary f-s-16"
                      size="lg"
                      className="w-100 mb-2"
                    >
                      <i className="ti ti-eye me-2"></i>
                      View on Amazon
                    </Button>
                    <Button
                      color="outline-primary f-s-16"
                      size="lg"
                      className="w-100"
                    >
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

        {/* Helium Data Modal */}
        <Modal
          isOpen={heliumModalOpen}
          toggle={() => setHeliumModalOpen(false)}
          size="xl"
          centered
        >
          <ModalHeader toggle={() => setHeliumModalOpen(false)}>
            <div className="d-flex align-items-center">
              <i className="ti ti-chart-line me-2 text-primary"></i>
              Helium Data
            </div>
          </ModalHeader>
          <ModalBody className="p-0">
            <div className="text-center">
              <img
                src={heliumImage}
                alt="Helium Product Summary"
                className="img-fluid w-100"
                style={{ objectFit: "contain" }}
              />
            </div>
          </ModalBody>
        </Modal>

        {/* Jungle Scout Data Modal */}
        <Modal
          isOpen={jungleScoutModalOpen}
          toggle={() => setJungleScoutModalOpen(false)}
          size="xl"
          centered
        >
          <ModalHeader toggle={() => setJungleScoutModalOpen(false)}>
            <div className="d-flex align-items-center">
              <i className="ti ti-chart-bar me-2 text-warning"></i>
              Jungle Scout Data
            </div>
          </ModalHeader>
          <ModalBody className="p-0">
            <div className="text-center">
              <img
                src={jungleScoutImage}
                alt="Jungle Scout Summary"
                className="img-fluid w-100"
                style={{ objectFit: "contain" }}
              />
            </div>
          </ModalBody>
        </Modal>
      </Container>
    </>
  );
};

export default AmazonProductDetails;
