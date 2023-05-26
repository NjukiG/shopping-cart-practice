// import { Button } from "bootstrap";
import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

function ProductCard({ product }) {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>
            <span>KES:{product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery</div>
            )}
            <Rating rating={product.ratings} />
          </Card.Subtitle>
          <Button variant="outline-danger">Remove from Cart</Button>
          <Button
            variant={!product.inStock ? "outline-warning" : "outline-success"}
          >
            {!product.inStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
