import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import BrandsDatatable from '@/Components/Datatable/BrandsDatatable';

const AmazonBrands = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <div className="col-12 mb-3">
                        <h4 className="main-title">Amazon Brands</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li>
                                <Link to="/Amazon/dashboard" className="f-s-14 f-w-500">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="active">
                                Brands
                            </li>
                        </ul>
                    </div>
                    <Card>
                        <CardBody>
                            <BrandsDatatable />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AmazonBrands;
