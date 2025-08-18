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
} from "reactstrap";
import DataTable from "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

const d2cMyLinksData = [
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v1",
    product: {
      name: "FabIndia Cotton Kurta Set - Traditional Indian Wear",
      sku: "FI-CTN-KS-001",
      source: "fabindia.com",
      brand: "FabIndia",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-01-15",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v2",
    product: {
      name: "Wow Skin Science Vitamin C Face Serum - 20ml",
      sku: "WSS-VIT-C-SER",
      source: "wowskinscience.com",
      brand: "Wow Skin Science",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-02-20",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v3",
    product: {
      name: "Boat Airdopes 131 Wireless Earbuds with 60H Playback",
      sku: "BOAT-AD-131",
      source: "boat-lifestyle.com",
      brand: "Boat",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-03-10",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v4",
    product: {
      name: "Mamaearth Vitamin C Face Wash with Turmeric - 150ml",
      sku: "ME-VIT-C-FW",
      source: "mamaearth.in",
      brand: "Mamaearth",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-01-28",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v5",
    product: {
      name: "Nykaa Matte to Last Liquid Lipstick - Berry Blush",
      sku: "NYK-MTL-BB",
      source: "nykaa.com",
      brand: "Nykaa",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-04-05",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v6",
    product: {
      name: "Sugar Cosmetics Contour De Force Mini Blush - Peach Peak",
      sku: "SUG-CDF-PP",
      source: "sugarcosmetics.com",
      brand: "Sugar Cosmetics",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-03-22",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v7",
    product: {
      name: "MyGlamm LIT Liquid Matte Lipstick - Wine O'Clock",
      sku: "MG-LIT-WOC",
      source: "myglamm.com",
      brand: "MyGlamm",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-02-12",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v8",
    product: {
      name: "The Honest Company Shampoo + Body Wash - Lavender",
      sku: "THC-SBW-LAV",
      source: "honest.com",
      brand: "The Honest Company",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-04-18",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v9",
    product: {
      name: "Purplle Good Vibes Vitamin E Face Cream - 50g",
      sku: "PUR-GV-VE-FC",
      source: "purplle.com",
      brand: "Purplle",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-03-08",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v10",
    product: {
      name: "Licious Chicken Biryani Ready to Eat - 350g",
      sku: "LIC-CHK-BIR",
      source: "licious.in",
      brand: "Licious",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-01-20",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v11",
    product: {
      name: "BoAt Stone 650 Portable Bluetooth Speaker",
      sku: "BOAT-ST-650",
      source: "boat-lifestyle.com",
      brand: "BoAt Lifestyle",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-04-10",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v12",
    product: {
      name: "The Man Company Charcoal Face Wash - 100ml",
      sku: "TMC-CHR-FW",
      source: "themancompany.com",
      brand: "The Man Company",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-02-28",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v13",
    product: {
      name: "Beardo Godfather Lite Beard Oil - 30ml",
      sku: "BRD-GF-BO",
      source: "beardo.in",
      brand: "Beardo",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-03-15",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v14",
    product: {
      name: "Forest Essentials Delicate Facial Cleanser Mashobra Honey",
      sku: "FE-DFC-MH",
      source: "forestessentials.com",
      brand: "Forest Essentials",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-01-08",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v15",
    product: {
      name: "Plum Goodness Green Tea Toner - 200ml",
      sku: "PLM-GT-TON",
      source: "plumgoodness.com",
      brand: "Plum Goodness",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-04-22",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v16",
    product: {
      name: "Minimalist Niacinamide 10% Face Serum - 30ml",
      sku: "MIN-NIA-SER",
      source: "beminimalist.co",
      brand: "Minimalist",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-02-05",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v17",
    product: {
      name: "Bella Vita Organic CEO Man Perfume - 100ml",
      sku: "BVO-CEO-PERF",
      source: "bellavitaorganic.com",
      brand: "Bella Vita Organic",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-03-28",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v18",
    product: {
      name: "MCaffeine Coffee Face Scrub with Walnut - 100g",
      sku: "MCA-CFS-WAL",
      source: "mcaffeine.com",
      brand: "MCaffeine",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-01-12",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v19",
    product: {
      name: "Khadi Natural Herbal Honey Almond Soap - 125g",
      sku: "KHA-HHA-SOAP",
      source: "khadinatural.com",
      brand: "Khadi Natural",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-04-15",
  },
  {
    copyLink: "https://levanta.com/d2c-c1-a1-v20",
    product: {
      name: "Good Vibes Brightening Vitamin C Face Serum - 30ml",
      sku: "GV-VIT-C-SER",
      source: "goodvibeslife.com",
      brand: "Good Vibes",
    },
    source: "D2C-C1-A1-V1_MB",
    status: "Mobile Optimized",
    addedDate: "2024-02-18",
  },
];

const D2CMyLinksDatatable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [filteredData, setFilteredData] = useState(d2cMyLinksData);

  useEffect(() => {
    // Filter data based on search term
    const filtered = d2cMyLinksData.filter(
      (link) =>
        link.product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.product.sku.toLowerCase().includes(searchTerm.toLowerCase())
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
              placeholder="Search your D2C product links..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              style={{ width: "250px" }}
            />
          </div>

          {/* Filter Dropdown */}
          <Dropdown isOpen={filterDropdownOpen} toggle={toggleFilterDropdown}>
            <DropdownToggle caret color="outline-secondary">
              Filters
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>All D2C Links</DropdownItem>
              <DropdownItem>Mobile Optimized</DropdownItem>
              <DropdownItem>Desktop Only</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* Export Button */}
          <Button color="outline-secondary" size="sm">
            <i className="fa fa-download me-2"></i>
            Export
          </Button>
        </div>
      </div>

      <div className="app-scroll table-responsive app-datatable-default">
        <Table
          id="D2CMyLinksDataTable"
          className="w-100 display row-border-table align-middle"
        >
          <thead>
            <tr>
              <th>Copy Link</th>
              <th>Product</th>
              <th>Source</th>
              <th>Options</th>
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
                    <div className="h-40 w-40 d-flex-center b-r-8 overflow-hidden bg-light me-3">
                      <img
                        src={`/assets/images/d2c-products/${link.product.sku.toLowerCase()}.jpg`}
                        alt={link.product.name}
                        className="img-fluid"
                        onError={(e) => {
                          e.target.src =
                            "/assets/images/table_images/default-product2.jpg";
                        }}
                      />
                    </div>
                    <div className="mylinks-product-info">
                      <a
                        href="#"
                        className="mb-1 fw-semibold text-truncate"
                        style={{ maxWidth: "300px" }}
                      >
                        {link.product.name}
                      </a>
                      <small className="text-muted">
                        {link.product.sku} - {link.product.source} -{" "}
                        {link.product.brand}
                      </small>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <Badge color="success" className="mb-1">
                      {link.source}
                    </Badge>
                    <br />
                    <small className="text-muted">
                      D2C-C1-A1-V1_MB • D2C-C1-A1-V1_MB
                    </small>
                  </div>
                </td>
                <td>
                  <Badge
                    color="success"
                    className="d-flex align-items-center"
                    style={{ width: "fit-content" }}
                  >
                    <i className="fa fa-mobile-alt me-1"></i>
                    {link.status}
                  </Badge>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <Button size="sm" color="primary" outline title="Analytics">
                      <i className="fa fa-chart-bar"></i>
                    </Button>
                    <Button size="sm" color="warning" outline title="Edit">
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
    </>
  );
};

export default D2CMyLinksDatatable;
