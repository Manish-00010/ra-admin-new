import React, { useEffect, useState } from "react";
import {
  Table,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import DataTable from "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

const myLinksData = [
  {
    copyLink: "https://levanta.com/c1-a1-v1",
    asinCode: "B01N1UX8RW",
    product: {
      name: "Serenity Kids 6+ Months Turkey Puree Baby Food Pouches",
      sku: "BD84CSPMT",
      source: "amazon.com",
      brand: "Serenity Kids",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-01-15",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v2",
    asinCode: "B08K7T2M3N",
    product: {
      name: "Serenity Kids 6+ Months Ethically Sourced Meat Baby Food Puree",
      sku: "BDYTB649L",
      source: "amazon.com",
      brand: "Serenity Kids",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-02-20",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v3",
    asinCode: "B09J4K5L6M",
    product: {
      name: "Grownsy EaseClean Bottle Washer Pro | All-in-One Bottle Wash",
      sku: "BD7Z58NG3",
      source: "amazon.com",
      brand: "Grownsy",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-03-10",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v4",
    asinCode: "B0BYTQFH28",
    product: {
      name: "Phomemo Bluetooth Thermal Label Printer, 241BT 4X6 Wireless",
      sku: "B0BYTQFH28",
      source: "amazon.com",
      brand: "Phomemo-1",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-01-28",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v5",
    asinCode: "B07XX5MAN3",
    product: {
      name: "Phomemo M110 Label Makers - Barcode Label Printer Bluetooth",
      sku: "B07XX5MAN3",
      source: "amazon.com",
      brand: "Phomemo-3",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-04-05",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v6",
    asinCode: "B09HVMF30L",
    product: {
      name: "Phomemo Label Maker Machine, D30 Portable Handheld Bluetooth",
      sku: "B09HVMF30L",
      source: "amazon.com",
      brand: "Phomemo-6",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-03-22",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v7",
    asinCode: "B07YN44WLV",
    product: {
      name: "Phomemo Label Printer - M110 Thermal Label Printer Barcode L",
      sku: "B07YN44WLV",
      source: "amazon.com",
      brand: "Phomemo-3",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-02-12",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v8",
    asinCode: "B0CWS4BVCX",
    product: {
      name: "HSFTOOLS HF96 Thermal Camera,Super Resolution 240 x 240,Ther",
      sku: "B0CWS4BVCX",
      source: "amazon.com",
      brand: "HSFTOOLS",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-04-18",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v9",
    asinCode: "B00DRM2OP5",
    product: {
      name: "Rhino USA Survival Shovel w/Pick - Heavy Duty Carbon Steel M",
      sku: "B00DRM2OP",
      source: "amazon.com",
      brand: "Rhino USA",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-03-08",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v10",
    asinCode: "B08K3M4N5P",
    product: {
      name: "Nike Air Max 270 Running Shoes",
      sku: "NIKE270MAX",
      source: "amazon.com",
      brand: "Nike",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-01-20",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v11",
    asinCode: "B09L6T7U8V",
    product: {
      name: "Adidas Ultraboost 22 Athletic Shoes",
      sku: "ADI22ULTRA",
      source: "amazon.com",
      brand: "Adidas",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-04-10",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v12",
    asinCode: "B0A9H2I3J4",
    product: {
      name: "Puma RS-X3 Puzzle Sneakers",
      sku: "PUMARSX3PZ",
      source: "amazon.com",
      brand: "Puma",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-02-28",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v13",
    asinCode: "B0BX5Y6Z7A",
    product: {
      name: "Under Armour HOVR Phantom 3 Running Shoes",
      sku: "UAHOVR3PHN",
      source: "amazon.com",
      brand: "Under Armour",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-03-15",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v14",
    asinCode: "B0C8D9E0F1",
    product: {
      name: "Reebok Classic Leather Shoes",
      sku: "REECLSLTHR",
      source: "amazon.com",
      brand: "Reebok",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-01-08",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v15",
    asinCode: "B0D2G3H4I5",
    product: {
      name: "New Balance 990v5 Made in USA",
      sku: "NB990V5USA",
      source: "amazon.com",
      brand: "New Balance",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-04-22",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v16",
    asinCode: "B0E6J7K8L9",
    product: {
      name: "Converse Chuck Taylor All Star Classic",
      sku: "CONVCHKTLR",
      source: "amazon.com",
      brand: "Converse",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-02-05",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v17",
    asinCode: "B0F0M1N2O3",
    product: {
      name: "Vans Old Skool Classic Skate Shoes",
      sku: "VANSOLDSKL",
      source: "amazon.com",
      brand: "Vans",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-03-28",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v18",
    asinCode: "B0G4P5Q6R7",
    product: {
      name: "ASICS GEL-Nimbus 24 Running Shoes",
      sku: "ASICSNIM24",
      source: "amazon.com",
      brand: "ASICS",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-01-12",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v19",
    asinCode: "B0H8S9T0U1",
    product: {
      name: "Skechers Go Walk 5 Slip-On Shoes",
      sku: "SKECHGOWLK5",
      source: "amazon.com",
      brand: "Skechers",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-04-15",
  },
  {
    copyLink: "https://levanta.com/c1-a1-v20",
    asinCode: "B0I2V3W4X5",
    product: {
      name: "Jordan Air 1 Retro High OG",
      sku: "JORDAIR1RET",
      source: "amazon.com",
      brand: "Jordan",
    },
    source: "C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-02-18",
  },
];

const MyLinksDatatable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [filteredData, setFilteredData] = useState(myLinksData);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("clicks");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editLinkData, setEditLinkData] = useState(null);
  const [mobileOptimized, setMobileOptimized] = useState(false);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  useEffect(() => {
    // Filter data based on search term
    const filtered = myLinksData.filter(
      (link) =>
        link.product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.asinCode.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleFilterDropdown = () =>
    setFilterDropdownOpen((prevState) => !prevState);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleAnalyticsClick = (link) => {
    setSelectedProduct(link);
    setModalOpen(true);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleEditClick = (link) => {
    setEditLinkData(link);
    setMobileOptimized(link.status === "Mobile Optimized");
    setEditModalOpen(true);
  };

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
    if (!editModalOpen) {
      setShowAdvancedOptions(false);
    }
  };

  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link);
    // You can add a toast notification here
  };

  return (
    <>
      {/* Search and Filter Controls */}
      <div className="search_head d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-3">
          <p className="text-muted mb-0">Orders Report: {filteredData.length}</p>
          <p className="text-muted mb-0">Page {currentPage} of {totalPages}</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          {/* Search Bar */}
          <div className="search-bar">
            <Input
              type="text"
              placeholder="Search your product links..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              style={{ width: "250px" }}
            />
          </div>

          

          {/* Export Button */}
          <Button color="outline-secondary" size="sm">
            <i className="fa fa-download me-2"></i>
            Export
          </Button>
        </div>
      </div>

      <div className="app-scroll table-responsive app-datatable-default">
        <Table
          id="MyLinksDataTable"
          className="w-100 display row-border-table align-middle"
        >
          <thead>
            <tr>
              <th>Copy Link</th>
              <th>ASIN</th>
              <th>Product</th>
              <th>Link Name</th>
              <th>Sub ID</th>
              <th>Created Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((link, index) => (
              <tr key={index}>
                <td>
                  <Button
                    size="sm"
                    color="outline-primary"
                    onClick={() => copyToClipboard(link.copyLink)}
                  >
                    <i className="fa fa-copy me-1"></i>
                    Copy
                  </Button>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <code className="bg-light p-2 rounded text-primary fw-bold">
                      {link.asinCode}
                    </code>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="h-40 w-40 d-flex-center b-r-8 overflow-hidden bg-light me-3">
                      <img
                        src={`/assets/images/products/${link.product.sku.toLowerCase()}.jpg`}
                        alt={link.product.name}
                        className="img-fluid"
                        onError={(e) => {
                          e.target.src =
                            "/assets/images/table_images/default-product.jpg";
                        }}
                      />
                    </div>
                    <div className="mylinks-product-info">
                      <a
                        href="#"
                        className="mb-0 fw-semibold text-truncate"
                        style={{ maxWidth: "300px" }}
                      >
                        {link.product.name}
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <Badge color="transprent text-dark" className="mb-1">
                      {link.source}
                    </Badge>
                  </div>
                </td>
                <td>None</td>
                <td>
                  04 July 2025, <br /> 12:30 PM
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <Button
                      size="sm"
                      color="primary"
                      outline
                      title="Analytics"
                      onClick={() => handleAnalyticsClick(link)}
                    >
                      <i className="fa fa-chart-bar"></i>
                    </Button>
                    <Button
                      size="sm"
                      color="warning"
                      outline
                      title="Edit"
                      onClick={() => handleEditClick(link)}
                    >
                      <i className="fa fa-edit"></i>
                    </Button>
                    <Button size="sm" color="danger" outline title="Delete">
                      <i className="fa fa-trash"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <span className="text-muted">
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <div className="d-flex align-items-center gap-2">
          {/* First Page */}
          <Button
            size="sm"
            color="outline-secondary"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(1)}
          >
            «
          </Button>

          {/* Previous Page */}
          <Button
            size="sm"
            color="outline-secondary"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lt;
          </Button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <Button
                key={pageNumber}
                size="sm"
                color={
                  currentPage === pageNumber ? "primary" : "outline-secondary"
                }
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </Button>
            )
          )}

          {/* Next Page */}
          <Button
            size="sm"
            color="outline-secondary"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &gt;
          </Button>

          {/* Last Page */}
          <Button
            size="sm"
            color="outline-secondary"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(totalPages)}
          >
            »
          </Button>
        </div>
      </div>

      {/* Analytics Modal */}
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        size="lg"
        className="analytics-modal"
      >
        <ModalHeader toggle={toggleModal} className="border-bottom">
          <span className="mb-0 h5">Link Performance</span>
        </ModalHeader>
        <ModalBody className="p-4">
          {selectedProduct && (
            <>
              {/* Product Info Section */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center bg-light p-2 rounded">
                    <div className="d-flex flex-column">
                      <label className="text-muted small mb-1">ASIN</label>
                      <span className="fw-bold">
                        {selectedProduct.asinCode}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center bg-light p-2 rounded">
                    <div className="d-flex flex-column">
                      <label className="text-muted small mb-1">Source</label>
                      <span className="fw-bold">
                        {selectedProduct.source} (ID: {selectedProduct.source} -{" "}
                        {selectedProduct.source})
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date Range Section */}
              <div className="mb-4">
                <label className="text-muted small mb-2 d-block">
                  Date Range
                </label>
                <div className="d-flex align-items-center bg-light p-2 rounded">
                  <i className="fa fa-calendar me-2 text-muted"></i>
                  <span>Jun 29, 2025 - Jul 30, 2025</span>
                </div>
              </div>

              {/* Metrics Tabs */}
              <div className="mb-4">
                <ul className="nav nav-pills bg-light p-1 rounded">
                  <li className="nav-item">
                    <button
                      className={`nav-link small px-3 py-2 ${
                        activeTab === "clicks" ? "active" : "text-muted"
                      }`}
                      onClick={() => handleTabClick("clicks")}
                    >
                      Clicks
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link small px-3 py-2 ${
                        activeTab === "dpvs" ? "active" : "text-muted"
                      }`}
                      onClick={() => handleTabClick("dpvs")}
                    >
                      DPVs
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link small px-3 py-2 ${
                        activeTab === "atcs" ? "active" : "text-muted"
                      }`}
                      onClick={() => handleTabClick("atcs")}
                    >
                      ATCs
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link small px-3 py-2 ${
                        activeTab === "conversions" ? "active" : "text-muted"
                      }`}
                      onClick={() => handleTabClick("conversions")}
                    >
                      Conversions
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link small px-3 py-2 ${
                        activeTab === "sales" ? "active" : "text-muted"
                      }`}
                      onClick={() => handleTabClick("sales")}
                    >
                      Sales
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link small px-3 py-2 ${
                        activeTab === "commission" ? "active" : "text-muted"
                      }`}
                      onClick={() => handleTabClick("commission")}
                    >
                      Commission
                    </button>
                  </li>
                </ul>
              </div>

              {/* Analytics Chart Area */}
              <div className="analytics-chart-container mb-4">
                <div className="border border-2 border-dashed rounded p-5 text-center">
                  <div className="text-muted mb-3">
                    <i className="fa fa-chart-line fa-3x opacity-25"></i>
                  </div>
                  <h6 className="text-muted mb-2">
                    {activeTab === "clicks" && "No clicks data available"}
                    {activeTab === "dpvs" &&
                      "No detail page views data available"}
                    {activeTab === "atcs" && "No add to cart data available"}
                    {activeTab === "conversions" &&
                      "No conversion data available"}
                    {activeTab === "sales" && "No sales data available"}
                    {activeTab === "commission" &&
                      "No commission data available"}
                  </h6>
                  <small className="text-muted">
                    {activeTab === "clicks" &&
                      "Track user clicks on your affiliate links"}
                    {activeTab === "dpvs" &&
                      "Monitor product detail page views"}
                    {activeTab === "atcs" &&
                      "See how many users add products to cart"}
                    {activeTab === "conversions" &&
                      "View successful purchase conversions"}
                    {activeTab === "sales" && "Monitor total sales volume"}
                    {activeTab === "commission" &&
                      "Track your earned commissions"}
                  </small>
                </div>
              </div>

              {/* Note Section */}
              <div className="alert alert-info small mb-0">
                <strong>NOTE:</strong> A link will only start reporting at 10
                total clicks. Clicks may take up to 24 hours to appear,
                conversions may take up to 48 hours to appear.
              </div>
            </>
          )}
        </ModalBody>
      </Modal>

      {/* Edit Link Modal */}
      <Modal
        isOpen={editModalOpen}
        toggle={toggleEditModal}
        size="lg"
        className="edit-link-modal"
      >
        <ModalHeader toggle={toggleEditModal} className="border-bottom">
          <span className="mb-0 h5">Edit Link</span>
        </ModalHeader>
        <ModalBody className="p-4">
          {editLinkData && (
            <>
              {/* Link URL Input */}
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  defaultValue={editLinkData.copyLink}
                  placeholder="Enter your affiliate link URL"
                  style={{
                    resize: "vertical",
                    fontSize: "14px",
                    fontFamily: "monospace",
                  }}
                />
              </div>

              {/* Mobile Optimized Checkbox */}
              <div className="mb-3">
                <div className="form-check d-flex align-items-center">
                  <input
                    className="form-check-input me-3"
                    type="checkbox"
                    id="mobileOptimized"
                    checked={mobileOptimized}
                    onChange={(e) => setMobileOptimized(e.target.checked)}
                  />
                  <label
                    className="form-check-label d-flex align-items-center"
                    htmlFor="mobileOptimized"
                  >
                    <span className="me-2">Mobile Optimized Link</span>
                    <i
                      className="fa fa-info-circle text-muted"
                      title="Enable mobile optimization for better mobile user experience"
                      style={{ cursor: "help" }}
                    ></i>
                  </label>
                </div>
              </div>

              {/* Advanced Options Toggle */}
              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none d-flex align-items-center"
                  onClick={toggleAdvancedOptions}
                >
                  <span className="me-2">See Advanced Options</span>
                  <i
                    className={`fa fa-chevron-${
                      showAdvancedOptions ? "up" : "down"
                    }`}
                  ></i>
                </button>
              </div>

              {/* Advanced Options Content */}
              {showAdvancedOptions && (
                <div className="border rounded p-3 bg-light mb-3">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label small text-muted">
                        Campaign ID
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        defaultValue="C1-A1-V1_MB"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label small text-muted">
                        Source
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        defaultValue={editLinkData.source}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label small text-muted">
                        UTM Source
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="utm_source"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label small text-muted">
                        UTM Medium
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="utm_medium"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label small text-muted">
                        UTM Campaign
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="utm_campaign"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label small text-muted">
                        UTM Content
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="utm_content"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="d-flex justify-content-end gap-2 mt-4">
                <Button color="dark" onClick={toggleEditModal} className="px-4">
                  Save
                </Button>
                <Button
                  color="success"
                  className="px-4 d-flex align-items-center"
                >
                  <i className="fa fa-copy me-2"></i>
                  Save & Copy
                </Button>
              </div>
            </>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default MyLinksDatatable;
