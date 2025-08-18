import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Table,
  Badge,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

const GoogleAds = () => {
  const [actionsDropdownOpen, setActionsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data - set to empty array to show empty state
  // In real app, this would come from API
  const googleAdsData = [];

  const toggleActionsDropdown = () => setActionsDropdownOpen(!actionsDropdownOpen);

  const filteredData = googleAdsData.filter(item =>
    item?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item?.conversionId?.includes(searchTerm)
  );

  return (
    <div className="integration-page">
      <Container fluid className="main_container">
        <Row className="m-1">
          <div className="col-12">
            <h4 className="main-title">Google Ads</h4>
            <ul className="app-line-breadcrumbs mb-3">
              <li className="">
                <Link to="/Amazon/Dashboard" className="f-s-14 f-w-500">
                  Dashboard
                </Link>
              </li>
              <li className="active">Google Ads</li>
            </ul>
          </div>
        </Row>

        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Dropdown isOpen={actionsDropdownOpen} toggle={toggleActionsDropdown}>
                      <DropdownToggle color="dark" size="sm" caret>
                        Actions
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Add Google Postback</DropdownItem>
                        <DropdownItem>Bulk Operations</DropdownItem>
                        <DropdownItem>Export Data</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-muted">🇬🇧</span>
                    <i className="ph ph-bell"></i>
                    <i className="ph ph-magnifying-glass"></i>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                {filteredData.length === 0 ? (
                  <div className="empty-state">
                    <div className="empty-icon">
                      <i className="ph ph-google-logo"></i>
                    </div>
                    <h5 className="empty-title">No Data</h5>
                    <p className="empty-description">
                      No Google Ads postbacks have been configured yet.
                    </p>
                    <Button color="dark" className="btn-lg">
                      <i className="ph ph-plus me-2"></i>
                      Add Google Postback
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="d-flex flex-sm-row flex-column gap-sm-0 gap-3 justify-content-between align-items-center mb-3">
                      <div className="d-flex gap-2">
                        <Button color="light" size="sm">Copy</Button>
                        <Button color="light" size="sm">CSV</Button>
                        <Button color="light" size="sm">Excel</Button>
                        <Button color="light" size="sm">PDF</Button>
                        <Button color="light" size="sm">Print</Button>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="me-2">Search:</span>
                        <Input
                          type="text"
                          placeholder=""
                          size="sm"
                          style={{ width: "200px" }}
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="table-responsive">
                      <Table className="table-hover">
                        <thead>
                          <tr>
                            <th>Campaign Name</th>
                            <th>Conversion ID</th>
                            <th>Conversion Label</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredData.map((item) => (
                            <tr key={item.id}>
                              <td className="fw-medium">{item.name}</td>
                              <td className="font-monospace text-muted">{item.conversionId}</td>
                              <td className="text-muted">{item.conversionLabel}</td>
                              <td>
                                <Badge color="success" className="px-2 py-1">
                                  {item.status}
                                </Badge>
                              </td>
                              <td>
                                <div className="d-flex gap-2">
                                  <Button 
                                    size="sm" 
                                    color="warning" 
                                    outline 
                                    title="Edit"
                                    className="icon-btn"
                                  >
                                    <i className="ph ph-pencil"></i>
                                  </Button>
                                  <Button 
                                    size="sm" 
                                    color="danger" 
                                    outline 
                                    title="Delete"
                                    className="icon-btn"
                                  >
                                    <i className="ph ph-trash"></i>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-muted">
                          Showing 1 to {filteredData.length} of {filteredData.length} entries
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        {/* First Page */}
                        <Button
                          size="sm"
                          color="outline-secondary"
                          disabled={true}
                          title="First"
                        >
                          «
                        </Button>

                        {/* Previous Page */}
                        <Button
                          size="sm"
                          color="outline-secondary"
                          disabled={true}
                          title="Previous"
                        >
                          &lt;
                        </Button>

                        {/* Current Page */}
                        <Button
                          size="sm"
                          color="primary"
                        >
                          1
                        </Button>

                        {/* Next Page */}
                        <Button
                          size="sm"
                          color="outline-secondary"
                          disabled={true}
                          title="Next"
                        >
                          &gt;
                        </Button>

                        {/* Last Page */}
                        <Button
                          size="sm"
                          color="outline-secondary"
                          disabled={true}
                          title="Last"
                        >
                          »
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GoogleAds;
