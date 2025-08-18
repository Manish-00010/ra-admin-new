import React from "react";
import { Link } from "react-router-dom"; // Missing import
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import MyLinksDatatable from "@/Components/Datatable/MyLinksDatatable";

const MyLinks = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <div className="col-12 mb-3">
                        <h4 className="main-title">Amazon Links</h4> 
                        <ul className="app-line-breadcrumbs mb-3">
                            <li>
                                <Link to="/Amazon/Dashboard" className="f-s-14 f-w-500"> 
                                    Dashboard
                                </Link>
                            </li>
                            <li className="active">My Links</li> {/* Updated breadcrumb */}
                        </ul>
                    </div>
                    <Card>
                        <CardBody>
                            <MyLinksDatatable />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MyLinks;
