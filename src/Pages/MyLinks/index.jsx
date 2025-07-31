import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import MyLinksDatatable from '@/Components/Datatable/MyLinksDatatable';

const MyLinks = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <h4 className="mb-4">My Product Links</h4>
                            <p className="text-muted mb-4">Review all of your active product links</p>
                            <MyLinksDatatable />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MyLinks;
