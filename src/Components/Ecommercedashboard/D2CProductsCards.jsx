import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const ProductsCards = () => {
  useEffect(() => {
    const generateData = (baseval, count, yrange) => {
      let i = 0;
      const series = [];
      while (i < count) {
        const y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([baseval, y, z]);
        baseval += 86400000;
        i++;
      }
      return series;
    };

    $("#userCountries").vectorMap({
      map: "world_mill",
      normalizeFunction: "polynomial",
      hoverOpacity: 0.7,
      hoverColor: false,
      backgroundColor: "var(--white)",
      regionStyle: {
        initial: { fill: "rgb(var(--primary),.6)" },
        hover: { fill: "rgb(var(--primary))" },
      },
      series: {
        regions: [
          {
            attribute: "fill",
          },
        ],
      },
    });
  }, []);

  const products = [
    {
      name: "I Smart Watch",
      details: "50 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/wristwatch.png",
      voucher: "@RA0911",
      orders: 125,
      saleAmount: "₹25,500",
      payout: "₹3,060",
    },
    {
      name: "Shoes",
      details: "200 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/shoes.png",
      voucher: "@RA6547",
      orders: 98,
      saleAmount: "₹44,100",
      payout: "₹3,087",
    },
    {
      name: "Airpods Pro",
      details: "20 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/earphone.png",
      voucher: "@RA5672",
      orders: 87,
      saleAmount: "₹43,500",
      payout: "₹3,915",
    },
    {
      name: "Purce",
      details: "180 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/backpack.png",
      voucher: "@RA0546",
      orders: 156,
      saleAmount: "₹74,880",
      payout: "₹11,232",
    },
    {
      name: "Tree Pot",
      details: "80 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/plant.png",
      voucher: "@RA340",
      orders: 73,
      saleAmount: "₹42,267",
      payout: "₹5,495",
    },
  ];

  const brands = [
    {
      name: "Amazon",
      iconClass: "icon-arrow-top",
      iconColor: "txt-success",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/amazon.png",
      links: "Visit Site",
      orders: 245,
      saleAmount: "₹1,25,000",
      payout: "₹15,000",
    },
    {
      name: "Nyka",
      iconClass: "icon-arrow-bottom",
      iconColor: "txt-danger",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/nyka.png",
      links: "Visit Site",
      orders: 189,
      saleAmount: "₹95,400",
      payout: "₹9,540",
    },
    {
      name: "Shopify",
      iconClass: "icon-arrow-top",
      iconColor: "txt-success",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/shopify.png",
      links: "Visit Site",
      orders: 167,
      saleAmount: "₹83,500",
      payout: "₹8,350",
    },
    {
      name: "eBay",
      iconClass: "icon-arrow-top",
      iconColor: "txt-success",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/ebay.png",
      links: "Visit Site",
      orders: 134,
      saleAmount: "₹67,000",
      payout: "₹6,700",
    },
    {
      name: "Walmart",
      iconClass: "icon-arrow-bottom",
      iconColor: "txt-danger",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/walmart.png",
      links: "Visit Site",
      orders: 112,
      saleAmount: "₹56,000",
      payout: "₹5,600",
    },

  ];

  return (
    <Row>
      <Col md="6" xxl="6">
        <Card className="top-product-card">
          <CardHeader className="card-header-title">
            <Row className="align-items-center">
              <Col>
                <h5>Top Products</h5>
                <p className="text-secondary mb-0">Latest Report</p>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <div className="table-responsive app-scroll">
              <Table className="align-middle top-products-table mb-0" striped>
                <thead>
                  <tr>
                    <th>Brand</th>
                    <th>Orders</th>
                    <th>Sale Amount</th>
                    <th className="text-center">Payout</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="position-relative">
                            <img
                              src={product.imgSrc}
                              alt={product.name}
                              className="w-35"
                            />
                          </div>
                          <div className="ms-3">
                            <h6 className="mb-0">{product.name}</h6>
                            <p className="mb-0">{product.details}</p>
                          </div>
                        </div>
                      </td>
                      <td>{product.orders}</td>
                      <td>{product.saleAmount}</td>
                      <td className="text-center">{product.payout}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col md="6" xxl="6">
        <Card className="top-product-card">
          <CardHeader className="card-header-title">
            <Row className="align-items-center">
              <Col>
                <h5>Top Brands</h5>
                <p className="text-secondary mb-0">Latest Report</p>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <div className="table-responsive app-scroll">
              <Table className="align-middle top-products-table mb-0" striped>
                <thead>
                  <tr>
                    <th>Brand</th>
                    <th>Orders</th>
                    <th>Sale Amount</th>
                    <th className="text-center">Payout</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((brand, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="position-relative">
                            <img
                              src={brand.imgSrc}
                              alt={brand.name}
                              className="w-35"
                            />
                          </div>
                          <div className="ms-3">
                            <h6 className="mb-0">{brand.name}</h6>
                            <p className="mb-0">{brand.links}</p>
                          </div>
                        </div>
                      </td>
                      <td>{brand.orders}</td>
                      <td>{brand.saleAmount}</td>
                      <td className="text-center">{brand.payout}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductsCards;
