import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import D2CMyLinksDatatable from '@/Components/Datatable/D2CMyLinksDatatable';

const D2CMyLinks = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <h4 className="mb-4">D2C Ecom My Links</h4>
                            <p className="text-muted mb-4">Review all of your active D2C product links</p>
                            <D2CMyLinksDatatable />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default D2CMyLinks;
