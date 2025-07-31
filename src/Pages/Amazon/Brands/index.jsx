import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import BrandsDatatable from '@/Components/Datatable/BrandsDatatable';

const AmazonBrands = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <h4 className="mb-4">Amazon Brands</h4>
                            <BrandsDatatable />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AmazonBrands;
