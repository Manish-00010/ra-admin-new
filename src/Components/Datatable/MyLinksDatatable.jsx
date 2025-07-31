import React, { useEffect, useState } from 'react';
import { Table, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from "reactstrap";
import DataTable from 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

const myLinksData = [
    {
        copyLink: "https://levanta.com/c1-a1-v1",
        product: {
            name: "Serenity Kids 6+ Months Turkey Puree Baby Food Pouches",
            sku: "BD84CSPMT",
            source: "amazon.com",
            brand: "Serenity Kids"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-01-15"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v2",
        product: {
            name: "Serenity Kids 6+ Months Ethically Sourced Meat Baby Food Puree",
            sku: "BDYTB649L",
            source: "amazon.com",
            brand: "Serenity Kids"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-02-20"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v3",
        product: {
            name: "Grownsy EaseClean Bottle Washer Pro | All-in-One Bottle Wash",
            sku: "BD7Z58NG3",
            source: "amazon.com",
            brand: "Grownsy"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-03-10"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v4",
        product: {
            name: "Phomemo Bluetooth Thermal Label Printer, 241BT 4X6 Wireless",
            sku: "B0BYTQFH28",
            source: "amazon.com",
            brand: "Phomemo-1"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-01-28"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v5",
        product: {
            name: "Phomemo M110 Label Makers - Barcode Label Printer Bluetooth",
            sku: "B07XX5MAN3",
            source: "amazon.com",
            brand: "Phomemo-3"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-04-05"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v6",
        product: {
            name: "Phomemo Label Maker Machine, D30 Portable Handheld Bluetooth",
            sku: "B09HVMF30L",
            source: "amazon.com",
            brand: "Phomemo-6"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-03-22"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v7",
        product: {
            name: "Phomemo Label Printer - M110 Thermal Label Printer Barcode L",
            sku: "B07YN44WLV",
            source: "amazon.com",
            brand: "Phomemo-3"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-02-12"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v8",
        product: {
            name: "HSFTOOLS HF96 Thermal Camera,Super Resolution 240 x 240,Ther",
            sku: "B0CWS4BVCX",
            source: "amazon.com",
            brand: "HSFTOOLS"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-04-18"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v9",
        product: {
            name: "Rhino USA Survival Shovel w/Pick - Heavy Duty Carbon Steel M",
            sku: "B00DRM2OP",
            source: "amazon.com",
            brand: "Rhino USA"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-03-08"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v10",
        product: {
            name: "Nike Air Max 270 Running Shoes",
            sku: "NIKE270MAX",
            source: "amazon.com",
            brand: "Nike"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-01-20"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v11",
        product: {
            name: "Adidas Ultraboost 22 Athletic Shoes",
            sku: "ADI22ULTRA",
            source: "amazon.com",
            brand: "Adidas"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-04-10"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v12",
        product: {
            name: "Puma RS-X3 Puzzle Sneakers",
            sku: "PUMARSX3PZ",
            source: "amazon.com",
            brand: "Puma"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-02-28"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v13",
        product: {
            name: "Under Armour HOVR Phantom 3 Running Shoes",
            sku: "UAHOVR3PHN",
            source: "amazon.com",
            brand: "Under Armour"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-03-15"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v14",
        product: {
            name: "Reebok Classic Leather Shoes",
            sku: "REECLSLTHR",
            source: "amazon.com",
            brand: "Reebok"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-01-08"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v15",
        product: {
            name: "New Balance 990v5 Made in USA",
            sku: "NB990V5USA",
            source: "amazon.com",
            brand: "New Balance"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-04-22"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v16",
        product: {
            name: "Converse Chuck Taylor All Star Classic",
            sku: "CONVCHKTLR",
            source: "amazon.com",
            brand: "Converse"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-02-05"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v17",
        product: {
            name: "Vans Old Skool Classic Skate Shoes",
            sku: "VANSOLDSKL",
            source: "amazon.com",
            brand: "Vans"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-03-28"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v18",
        product: {
            name: "ASICS GEL-Nimbus 24 Running Shoes",
            sku: "ASICSNIM24",
            source: "amazon.com",
            brand: "ASICS"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-01-12"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v19",
        product: {
            name: "Skechers Go Walk 5 Slip-On Shoes",
            sku: "SKECHGOWLK5",
            source: "amazon.com",
            brand: "Skechers"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-04-15"
    },
    {
        copyLink: "https://levanta.com/c1-a1-v20",
        product: {
            name: "Jordan Air 1 Retro High OG",
            sku: "JORDAIR1RET",
            source: "amazon.com",
            brand: "Jordan"
        },
        source: "C1-A1-V1_MB",
        status: "Mobile Optimized",
        addedDate: "2024-02-18"
    }
];

const MyLinksDatatable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);
    const [filteredData, setFilteredData] = useState(myLinksData);

    useEffect(() => {
        // Filter data based on search term
        const filtered = myLinksData.filter(link =>
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

    const toggleFilterDropdown = () => setFilterDropdownOpen(prevState => !prevState);

    const copyToClipboard = (link) => {
        navigator.clipboard.writeText(link);
        // You can add a toast notification here
    };

    return (
        <>
            {/* Search and Filter Controls */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-3">
                    {/* Search Bar */}
                    <div className="search-bar">
                        <Input
                            type="text"
                            placeholder="Search your product links..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="form-control"
                            style={{ width: '250px' }}
                        />
                    </div>

                    {/* Filter Dropdown */}
                    <Dropdown isOpen={filterDropdownOpen} toggle={toggleFilterDropdown}>
                        <DropdownToggle caret color="outline-secondary">
                            Filters
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>All Links</DropdownItem>
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
                <Table id="MyLinksDataTable" className="w-100 display row-border-table align-middle">
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
                                                src={`/assets/images/products/${link.product.sku.toLowerCase()}.jpg`} 
                                                alt={link.product.name} 
                                                className="img-fluid"
                                                onError={(e) => {
                                                    e.target.src = '/assets/images/products/default-product.jpg';
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <p className="mb-1 fw-semibold text-truncate" style={{maxWidth: '300px'}}>
                                                {link.product.name}
                                            </p>
                                            <small className="text-muted">
                                                {link.product.sku} - {link.product.source} - {link.product.brand}
                                            </small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <Badge color="info" className="mb-1">
                                            {link.source}
                                        </Badge>
                                        <br />
                                        <small className="text-muted">
                                            C1-A1-V1_MB • C1-A1-V1_MB
                                        </small>
                                    </div>
                                </td>
                                <td>
                                    <Badge color="success" className="d-flex align-items-center" style={{width: 'fit-content'}}>
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
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                        <Button
                            key={pageNumber}
                            size="sm"
                            color={currentPage === pageNumber ? "primary" : "outline-secondary"}
                            onClick={() => handlePageChange(pageNumber)}
                        >
                            {pageNumber}
                        </Button>
                    ))}

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

export default MyLinksDatatable;
