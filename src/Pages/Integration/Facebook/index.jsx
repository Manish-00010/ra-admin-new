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

const Facebook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [actionsDropdownOpen, setActionsDropdownOpen] = useState(false);

  // Sample data based on the design
  const facebookData = [
    {
      id: 1,
      name: "NFY ICE Health 01",
      facebookDatasetId: "946556347566937",
      status: "Active",
    },
    {
      id: 2,
      name: "NFY ICE Home 01", 
      facebookDatasetId: "375269601501464",
      status: "Active",
    },
    {
      id: 3,
      name: "NFY ICE Baby 01",
      facebookDatasetId: "640779048529594", 
      status: "Active",
    },
    {
      id: 4,
      name: "BM AIRFLOW PRO",
      facebookDatasetId: "625506213471581",
      status: "Active",
    },
  ];

  const toggleActionsDropdown = () => setActionsDropdownOpen(!actionsDropdownOpen);

  const filteredData = facebookData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.facebookDatasetId.includes(searchTerm)
  );

  return (
    <div className="integration-page">
      <Container fluid className="main_container">
        <Row className="m-1">
          <div className="col-12">
            <h4 className="main-title">Facebook</h4>
            <ul className="app-line-breadcrumbs mb-3">
              <li className="">
                <Link to="/Amazon/Dashboard" className="f-s-14 f-w-500">
                  Dashboard
                </Link>
              </li>
              <li className="active">Facebook</li>
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
                        <DropdownItem>Add Configuration</DropdownItem>
                        <DropdownItem>Bulk Edit</DropdownItem>
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
                        <th>Name</th>
                        <th>Facebook Dataset ID</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item) => (
                        <tr key={item.id}>
                          <td className="fw-medium">{item.name}</td>
                          <td className="font-monospace text-muted">{item.facebookDatasetId}</td>
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Facebook;
