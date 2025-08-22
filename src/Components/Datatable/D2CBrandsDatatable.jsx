import React, { useEffect, useState } from "react";
import {
  Table,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import DataTable from "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

const d2cBrandsData = [
  {
    name: "FabIndia",
    activeProductLinks: 45,
    activeStorefrontLinks: 8,
    numberOfASIN: 52,
    asinCode: "B09X1Y2Z3A",
    imageUrl: "/assets/images/brand-logos/fabindia.png",
    addedDate: "2024-01-15",
  },
  {
    name: "Wow Skin Science",
    activeProductLinks: 32,
    activeStorefrontLinks: 5,
    numberOfASIN: 38,
    asinCode: "B08W4V5U6T",
    imageUrl: "/assets/images/brand-logos/wow.png",
    addedDate: "2024-02-20",
  },
  {
    name: "Boat",
    activeProductLinks: 67,
    activeStorefrontLinks: 12,
    numberOfASIN: 75,
    asinCode: "B07S3R4Q5P",
    imageUrl: "/assets/images/brand-logos/boat.png",
    addedDate: "2024-03-10",
  },
  {
    name: "Mamaearth",
    activeProductLinks: 28,
    activeStorefrontLinks: 6,
    numberOfASIN: 34,
    asinCode: "B06O2N3M4L",
    imageUrl: "/assets/images/brand-logos/mamaearth.png",
    addedDate: "2024-01-28",
  },
  {
    name: "Nykaa",
    activeProductLinks: 89,
    activeStorefrontLinks: 15,
    numberOfASIN: 102,
    asinCode: "B05K1J2I3H",
    imageUrl: "/assets/images/brand-logos/nykaa.png",
    addedDate: "2024-04-05",
  },
  {
    name: "Sugar Cosmetics",
    activeProductLinks: 41,
    activeStorefrontLinks: 7,
    numberOfASIN: 47,
    asinCode: "B04G6F7E8D",
    imageUrl: "/assets/images/brand-logos/sugar.png",
    addedDate: "2024-03-22",
  },
  {
    name: "MyGlamm",
    activeProductLinks: 38,
    activeStorefrontLinks: 6,
    numberOfASIN: 44,
    asinCode: "B03C9B1A2Z",
    imageUrl: "/assets/images/brand-logos/myglamm.png",
    addedDate: "2024-02-12",
  },
  {
    name: "The Honest Company",
    activeProductLinks: 25,
    activeStorefrontLinks: 4,
    numberOfASIN: 29,
    asinCode: "B02Y8X7W6V",
    imageUrl: "/assets/images/brand-logos/honest.png",
    addedDate: "2024-04-18",
  },
  {
    name: "Purplle",
    activeProductLinks: 34,
    activeStorefrontLinks: 5,
    numberOfASIN: 40,
    asinCode: "B01U5T4R3Q",
    imageUrl: "/assets/images/brand-logos/purplle.png",
    addedDate: "2024-03-08",
  },
  {
    name: "Licious",
    activeProductLinks: 52,
    activeStorefrontLinks: 9,
    numberOfASIN: 58,
    asinCode: "B00S2P1O0N",
    imageUrl: "/assets/images/brand-logos/licious.png",
    addedDate: "2024-01-20",
  },
  {
    name: "BoAt Lifestyle",
    activeProductLinks: 73,
    activeStorefrontLinks: 13,
    numberOfASIN: 60,
    asinCode: "B0ZM9L8K7J",
    imageUrl: "/assets/images/brand-logos/boat-lifestyle.png",
    addedDate: "2024-04-10",
  },
  {
    name: "The Man Company",
    activeProductLinks: 29,
    activeStorefrontLinks: 5,
    numberOfASIN: 61,
    asinCode: "B0YI6H5G4F",
    imageUrl: "/assets/images/brand-logos/mancompany.png",
    addedDate: "2024-02-28",
  },
  {
    name: "Beardo",
    activeProductLinks: 31,
    activeStorefrontLinks: 5,
    numberOfASIN: 62,
    asinCode: "B0XE3D2C1B",
    imageUrl: "/assets/images/brand-logos/beardo.png",
    addedDate: "2024-03-15",
  },
  {
    name: "Forest Essentials",
    activeProductLinks: 42,
    activeStorefrontLinks: 7,
    numberOfASIN: 63,
    asinCode: "B0WA9Z8Y7X",
    imageUrl: "/assets/images/brand-logos/forest-essentials.png",
    addedDate: "2024-01-08",
  },
  {
    name: "Plum Goodness",
    activeProductLinks: 27,
    activeStorefrontLinks: 4,
    numberOfASIN: 64,
    asinCode: "B0V6W5V4U3",
    imageUrl: "/assets/images/brand-logos/plum.png",
    addedDate: "2024-04-22",
  },
  {
    name: "Minimalist",
    activeProductLinks: 35,
    activeStorefrontLinks: 6,
    numberOfASIN: 65,
    asinCode: "B0U2T1S0R9",
    imageUrl: "/assets/images/brand-logos/minimalist.png",
    addedDate: "2024-02-05",
  },
  {
    name: "Bella Vita Organic",
    activeProductLinks: 24,
    activeStorefrontLinks: 4,
    numberOfASIN: 66,
    asinCode: "B0TQ8P7O6N",
    imageUrl: "/assets/images/brand-logos/bellavita.png",
    addedDate: "2024-03-28",
  },
  {
    name: "MCaffeine",
    activeProductLinks: 33,
    activeStorefrontLinks: 5,
    numberOfASIN: 67,
    asinCode: "B0SM5L4K3J",
    imageUrl: "/assets/images/brand-logos/mcaffeine.png",
    addedDate: "2024-01-12",
  },
  {
    name: "Khadi Natural",
    activeProductLinks: 39,
    activeStorefrontLinks: 6,
    numberOfASIN: 68,
    asinCode: "B0RI2H1G0F",
    imageUrl: "/assets/images/brand-logos/khadi.png",
    addedDate: "2024-04-15",
  },
  {
    name: "Good Vibes",
    activeProductLinks: 26,
    activeStorefrontLinks: 4,
    numberOfASIN: 69,
    asinCode: "B0QE8D7C6B",
    imageUrl: "/assets/images/brand-logos/goodvibes.png",
    addedDate: "2024-02-18",
  },
];

const D2CBrandsDatatable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [filteredData, setFilteredData] = useState(d2cBrandsData);
  const [sortBy, setSortBy] = useState("Newly Added");

  useEffect(() => {
    // Filter data based on search term
    const filtered = d2cBrandsData.filter((brand) =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort data
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "Newly Added") {
        return new Date(b.addedDate) - new Date(a.addedDate);
      }
      return 0;
    });

    setFilteredData(sorted);
    setCurrentPage(1);
  }, [searchTerm, sortBy]);

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
  const toggleSortDropdown = () =>
    setSortDropdownOpen((prevState) => !prevState);

  return (
    <>
      {/* Search, Filter and Sort Controls */}
      <div className="search_head d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-3">
          <p className="text-muted mb-0">
            Orders Report: {filteredData.length}
          </p>
          <p className="text-muted mb-0">
            Page {currentPage} of {totalPages}
          </p>
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
              <DropdownItem>Newly Added</DropdownItem>
              <DropdownItem>Applied For</DropdownItem>
              <DropdownItem>Rejected</DropdownItem>
              <DropdownItem>Cancelled</DropdownItem>
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
          id="D2CBrandsDataTable"
          className="w-100 display row-border-table align-middle"
        >
          <thead>
            <tr>
              <th>Brand</th>
              <th>Number of ASIN</th>
              <th>Active Product Links</th>
              <th>Active Storefront Links</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((brand, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="h-30 w-30 d-flex-center b-r-50 overflow-hidden ">
                      <img
                        src={brand.imageUrl}
                        alt={brand.name}
                        className="img-fluid"
                      />
                    </div>
                    <p className="mb-0 ps-2">{brand.name}</p>
                  </div>
                </td>
                <td>
                  <code className="text-primary">{brand.numberOfASIN}</code>
                </td>
                <td>
                  <span className="badge bg-primary">
                    {brand.activeProductLinks}
                  </span>
                </td>
                <td>
                  <span className="badge bg-success">
                    {brand.activeStorefrontLinks}
                  </span>
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

export default D2CBrandsDatatable;
