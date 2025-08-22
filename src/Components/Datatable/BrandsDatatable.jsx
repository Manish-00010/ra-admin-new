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

const brandsData = [
  {
    name: "Nike",
    activeProductLinks: 156,
    activeStorefrontLinks: 23,
    numberOfASIN: 234,
    asinCode: "B01N1UX8RW",
    imageUrl: "/assets/images/brand-logos/nike.png",
    addedDate: "2024-01-10",
  },
  {
    name: "Adidas",
    activeProductLinks: 134,
    activeStorefrontLinks: 19,
    numberOfASIN: 189,
    asinCode: "B08K7T2M3N",
    imageUrl: "/assets/images/brand-logos/adidas.png",
    addedDate: "2024-02-15",
  },
  {
    name: "Puma",
    activeProductLinks: 98,
    activeStorefrontLinks: 14,
    numberOfASIN: 145,
    asinCode: "B09J4K5L6M",
    imageUrl: "/assets/images/brand-logos/puma.png",
    addedDate: "2024-03-08",
  },
  {
    name: "Under Armour",
    activeProductLinks: 76,
    activeStorefrontLinks: 11,
    numberOfASIN: 92,
    asinCode: "B07M8N9P0Q",
    imageUrl: "/assets/images/brand-logos/underarmour.png",
    addedDate: "2024-01-25",
  },
  {
    name: "Reebok",
    activeProductLinks: 89,
    activeStorefrontLinks: 12,
    numberOfASIN: 112,
    asinCode: "B06R8S9T4U",
    imageUrl: "/assets/images/brand-logos/reebok.png",
    addedDate: "2024-04-12",
  },
  {
    name: "New Balance",
    activeProductLinks: 67,
    activeStorefrontLinks: 9,
    numberOfASIN: 78,
    asinCode: "B05V7W8X9Y",
    imageUrl: "/assets/images/brand-logos/newbalance.png",
    addedDate: "2024-03-30",
  },
  {
    name: "Converse",
    activeProductLinks: 45,
    activeStorefrontLinks: 7,
    numberOfASIN: 56,
    asinCode: "B04Z1A2B3C",
    imageUrl: "/assets/images/brand-logos/converse.png",
    addedDate: "2024-02-28",
  },
  {
    name: "Vans",
    activeProductLinks: 52,
    activeStorefrontLinks: 8,
    numberOfASIN: 63,
    asinCode: "B03D4E5F6G",
    imageUrl: "/assets/images/brand-logos/vans.png",
    addedDate: "2024-04-05",
  },
  {
    name: "ASICS",
    activeProductLinks: 73,
    activeStorefrontLinks: 10,
    numberOfASIN: 85,
    asinCode: "B02H7I8J9K",
    imageUrl: "/assets/images/brand-logos/asics.png",
    addedDate: "2024-01-18",
  },
  {
    name: "Skechers",
    activeProductLinks: 41,
    activeStorefrontLinks: 6,
    numberOfASIN: 48,
    asinCode: "B01L2M3N4O",
    imageUrl: "/assets/images/brand-logos/skechers.png",
    addedDate: "2024-03-15",
  },
  {
    name: "Jordan",
    activeProductLinks: 92,
    activeStorefrontLinks: 13,
    numberOfASIN: 105,
    asinCode: "B00P5Q6R7S",
    imageUrl: "/assets/images/brand-logos/jordan.png",
    addedDate: "2024-02-20",
  },
  {
    name: "Fila",
    activeProductLinks: 38,
    activeStorefrontLinks: 5,
    numberOfASIN: 44,
    asinCode: "B0ZT8U9V0W",
    imageUrl: "/assets/images/brand-logos/fila.png",
    addedDate: "2024-04-18",
  },
  {
    name: "Champion",
    activeProductLinks: 29,
    activeStorefrontLinks: 4,
    numberOfASIN: 33,
    asinCode: "B0YX1Y2Z3A",
    imageUrl: "/assets/images/brand-logos/champion.png",
    addedDate: "2024-03-22",
  },
  {
    name: "Kappa",
    activeProductLinks: 33,
    activeStorefrontLinks: 5,
    numberOfASIN: 39,
    asinCode: "B0XW4V5U6T",
    imageUrl: "/assets/images/brand-logos/kappa.png",
    addedDate: "2024-01-30",
  },
  {
    name: "Lotto",
    activeProductLinks: 27,
    activeStorefrontLinks: 4,
    numberOfASIN: 31,
    asinCode: "B0WS7R8Q9P",
    imageUrl: "/assets/images/brand-logos/lotto.png",
    addedDate: "2024-04-25",
  },
  {
    name: "Umbro",
    activeProductLinks: 31,
    activeStorefrontLinks: 4,
    numberOfASIN: 35,
    asinCode: "B0VQ0N1M2L",
    imageUrl: "/assets/images/brand-logos/umbro.png",
    addedDate: "2024-02-10",
  },
  {
    name: "Mizuno",
    activeProductLinks: 44,
    activeStorefrontLinks: 6,
    numberOfASIN: 52,
    asinCode: "B0UJ4I5H6G",
    imageUrl: "/assets/images/brand-logos/mizuno.png",
    addedDate: "2024-03-12",
  },
  {
    name: "Brooks",
    activeProductLinks: 36,
    activeStorefrontLinks: 5,
    numberOfASIN: 42,
    asinCode: "B0TF7E8D9C",
    imageUrl: "/assets/images/brand-logos/brooks.png",
    addedDate: "2024-01-22",
  },
  {
    name: "Salomon",
    activeProductLinks: 48,
    activeStorefrontLinks: 7,
    numberOfASIN: 56,
    asinCode: "B0SB0A1Z2Y",
    imageUrl: "/assets/images/brand-logos/salomon.png",
    addedDate: "2024-04-08",
  },
  {
    name: "Hoka",
    activeProductLinks: 39,
    activeStorefrontLinks: 6,
    numberOfASIN: 45,
    asinCode: "B0RX4W5V6U",
    imageUrl: "/assets/images/brand-logos/hoka.png",
    addedDate: "2024-03-25",
  },
];

const BrandsDatatable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [filteredData, setFilteredData] = useState(brandsData);
  const [sortBy, setSortBy] = useState("Newly Added");

  useEffect(() => {
    // Filter data based on search term
    const filtered = brandsData.filter((brand) =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort data
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "Newly Added") {
        return new Date(b.addedDate) - new Date(a.addedDate);
      } else if (sortBy === "Alphabetical") {
        return a.name.localeCompare(b.name);
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
              placeholder="Search your Amazon product links..."
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
          id="BrandsDataTable"
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

export default BrandsDatatable;
