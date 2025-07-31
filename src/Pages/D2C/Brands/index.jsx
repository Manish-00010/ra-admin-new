import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import D2CBrandsDatatable from '@/Components/Datatable/D2CBrandsDatatable';

const D2CBrands = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <h4 className="mb-4">D2C Ecom Brands</h4>
                            <D2CBrandsDatatable />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default D2CBrands;
