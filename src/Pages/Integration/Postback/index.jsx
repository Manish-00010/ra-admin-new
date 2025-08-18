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
  Input,
  InputGroup,
} from "reactstrap";
import { Link } from "react-router-dom";

const Postback = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data based on the design
  const postbackData = [
    {
      id: 1,
      event: "conversion",
      campaign: "(ID: 10865) Skimmylo Backless body shaper CPA - India",
      type: "Facebook Pixel",
      status: "Active",
      postbackUrl: "https://facebook.com",
    },
    {
      id: 2,
      event: "conversion", 
      campaign: "(ID: 10867) Skimmylo Snatched Body Suit CPA - India [Disabled]",
      type: "Facebook Pixel",
      status: "Active",
      postbackUrl: "https://facebook.com",
    },
    {
      id: 3,
      event: "conversion",
      campaign: "(ID: 11126) Airflow Pro By Viva Glam CPA - India [Disabled]",
      type: "Facebook Pixel", 
      status: "Active",
      postbackUrl: "https://facebook.com",
    },
    {
      id: 4,
      event: "conversion",
      campaign: "(ID: 12102) Nuwelo NE3 Ear Wax Removal Kit CPA - India",
      type: "Facebook Pixel",
      status: "Active", 
      postbackUrl: "https://facebook.com",
    },
    {
      id: 5,
      event: "conversion",
      campaign: "(ID: 12112) Instant Ice Cream Maker CPA - India",
      type: "Facebook Pixel\nInstant Ice Cream Maker<>ICE Home 01",
      status: "Active",
      postbackUrl: "https://facebook.com",
    },
    {
      id: 6,
      event: "conversion",
      campaign: "(ID: 12466) Mini Air Cooler By LivinH CPA - India**",
      type: "Facebook Pixel\nMini Air Cooler<>Ice Home 01", 
      status: "Active",
      postbackUrl: "https://facebook.com",
    },
  ];

  const filteredData = postbackData.filter(item =>
    item.campaign.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="integration-page">
      <Container fluid className="main_container">
        <Row className="m-1">
          <div className="col-12">
            <h4 className="main-title">PostBack</h4>
            <ul className="app-line-breadcrumbs mb-3">
              <li className="">
                <Link to="/Amazon/Dashboard" className="f-s-14 f-w-500">
                  Dashboard
                </Link>
              </li>
              <li className="active">Postback</li>
            </ul>
          </div>
        </Row>

        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-sm-row flex-column gap-2">
                    <Button color="primary" size="sm">
                      <i className="ph ph-plus me-1"></i>
                      Add PostBack / Pixel
                    </Button>
                    <Button color="dark" size="sm">
                      <i className="ph ph-plus me-1"></i>
                      Add Facebook PostBack
                    </Button>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-muted">🇬🇧</span>
                    <i className="ph ph-bell"></i>
                    <i className="ph ph-magnifying-glass"></i>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
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
                        <th>
                          EVENT
                          <i className="ph ph-caret-up-down ms-1"></i>
                        </th>
                        <th>
                          CAMPAIGN
                          <i className="ph ph-caret-up-down ms-1"></i>
                        </th>
                        <th>
                          TYPE
                          <i className="ph ph-caret-up-down ms-1"></i>
                        </th>
                        <th>
                          STATUS
                          <i className="ph ph-caret-up-down ms-1"></i>
                        </th>
                        <th>
                          POSTBACK URL
                          <i className="ph ph-caret-up-down ms-1"></i>
                        </th>
                        <th>
                          ACTION
                          <i className="ph ph-caret-up-down ms-1"></i>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.event}</td>
                          <td>
                            <Link to="#" className="campaign-link">
                              {item.campaign}
                            </Link>
                          </td>
                          <td>
                            <div style={{ whiteSpace: "pre-line" }}>
                              {item.type}
                            </div>
                          </td>
                          <td>
                            <Badge color="success" className="px-2 py-1">
                              {item.status}
                            </Badge>
                          </td>
                          <td>
                            <Link to={item.postbackUrl} className="postback-url">
                              {item.postbackUrl}
                            </Link>
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
                              <Button 
                                size="sm" 
                                color="primary" 
                                outline 
                                title="View Details"
                                className="icon-btn"
                              >
                                <i className="ph ph-eye"></i>
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Postback;
