import React from "react";
import { Card, CardBody, Badge, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const D2CProductCard = ({ product, isListView = false, onRemoveFavorite }) => {
  const navigate = useNavigate();

  return (
    <Card className="h-100 shadow-sm product-card d2c-product-card">
      <div className="position-relative">
        <img
          src={product.image1}
          alt={product.title}
          className="card-img-top"
          style={{ height: isListView ? "150px" : "250px", objectFit: "cover" }}
        />
        <div className="position-absolute top-0 end-0 p-2">
          <Button
            color="danger"
            size="sm"
            className="cart-heart"
            title="Remove from favourites"
            onClick={() => onRemoveFavorite && onRemoveFavorite(product.id)}
          >
            <i className="fa fa-heart"></i>
          </Button>
        </div>
        {product.discount && (
          <Badge color="danger" className="position-absolute top-0 start-0 m-2">
            {product.discount}
          </Badge>
        )}
        <Badge color="success" className="position-absolute bottom-0 start-0 m-2 store-badge">
          D2C Store
        </Badge>
      </div>
      <CardBody className={isListView ? "d-flex align-items-center" : ""}>
        <div className={isListView ? "flex-grow-1" : ""}>
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Badge color="light" className="text-muted">
              {product.category}
            </Badge>
            <div className="text-primary rating-stars">
              {"★".repeat(Math.floor(product.rating))} ({product.rating})
            </div>
          </div>
          <h6 className="card-title mb-2">{product.title}</h6>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="h5 price-success mb-0">${product.price}</span>
              {product.originalPrice && (
                <span className="text-muted text-decoration-line-through ms-2">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <div className="d-flex gap-2">
              <Button
                color="outline-success"
                size="sm"
                onClick={() => navigate(`/D2C/Products/${product.id}`)}
              >
                View Details
              </Button>
              <Button
                color="success"
                size="sm"
                className="btn-d2c"
                onClick={() => navigate(`/D2C/Checkout/${product.id}`)}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default D2CProductCard;
