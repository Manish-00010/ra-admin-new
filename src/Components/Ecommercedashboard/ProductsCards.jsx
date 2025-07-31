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
        baseval += 86400000; // Adds one day in milliseconds
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
      sold: "60%",
      price: "$340.00",
      commission: "12%",
    },
    {
      name: "Shoes",
      details: "200 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/shoes.png",
      voucher: "@RA6547",
      sold: "50%",
      price: "$450.00",
      commission: "7%",
    },
    {
      name: "Airpods Pro",
      details: "20 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/earphone.png",
      voucher: "@RA5672",
      sold: "87%",
      price: "$500.00",
      commission: "9%",
    },
    {
      name: "Purce",
      details: "180 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/backpack.png",
      voucher: "@RA0546",
      sold: "68%",
      price: "$480.00",
      commission: "15%",
    },
    {
      name: "Tree Pot",
      details: "80 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/plant.png",
      voucher: "@RA340",
      sold: "52%",
      price: "$579.00",
      commission: "13%",
    },
  ];


  const brands = [
  {
      name: "Amazon",
      details: "50 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/amazon.png",
      voucher: "@RA0911",
      sold: "60%",
      price: "$340.00",
    },
    {
      name: "Nyka",
      details: "200 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/nyka.png",
      voucher: "@RA6547",
      sold: "50%",
      price: "$450.00",
    },
    {
      name: "Shopify",
      details: "20 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/shopify.png",
      voucher: "@RA5672",
      sold: "87%",
      price: "$500.00",
    },
    {
      name: "eBay",
      details: "180 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/ebay.png",
      voucher: "@RA0546",
      sold: "68%",
      price: "$480.00",
    },
    {
      name: "Walmart",
      details: "80 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/walmart.png",
      voucher: "@RA340",
      sold: "52%",
      price: "$579.00",
    },
    {
      name: "Etsy",
      details: "80 product",
      imgSrc: "/assets/images/dashboard/ecommerce-dashboard/etsy.png",
      voucher: "@RA340",
      sold: "52%",
      price: "$579.00",
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
                    <th>Product</th>
                    <th>Sold</th>
                    <th>Price</th>
                    <th className="text-center">Commission</th>
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
                      <td>{product.sold}</td>
                      <td>{product.price}</td>
                      <td className="text-center">{product.commission}</td>
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
                    <th className="text-center">Links</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((brands, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="position-relative">
                            <img
                              src={brands.imgSrc}
                              alt={brands.name}
                              className="w-35"
                            />
                          </div>
                          <div className="ms-3">
                            <p className="mb-0">{brands.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-center"><a href="#">Visit Site</a></td>
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
