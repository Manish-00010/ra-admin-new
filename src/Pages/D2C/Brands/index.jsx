import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import D2CBrandsDatatable from "@/Components/Datatable/D2CBrandsDatatable";

const D2CBrands = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <h4 className="main-title">D2C Ecom Brands</h4>
          <ul className="app-line-breadcrumbs mb-3">
            <li>
              <Link to="/D2C/Dashboard" className="f-s-14 f-w-500">
                Dashboard
              </Link>
            </li>
            <li className="active">Brands</li> 
          </ul>
          <Card>
            <CardBody>
              <D2CBrandsDatatable />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default D2CBrands;
