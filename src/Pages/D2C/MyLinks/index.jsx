import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import D2CMyLinksDatatable from "@/Components/Datatable/D2CMyLinksDatatable";
import { Link } from "react-router-dom";


const D2CMyLinks = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <h4 className="main-title">D2C Ecom Links</h4>
          <ul className="app-line-breadcrumbs mb-3">
            <li>
              <Link to="/D2C/Dashboard" className="f-s-14 f-w-500">
                Dashboard
              </Link>
            </li>
            <li className="active">My Links</li> 
          </ul>
          <Card>
            <CardBody>
              <D2CMyLinksDatatable />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default D2CMyLinks;
