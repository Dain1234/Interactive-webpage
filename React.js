import React from 'react';
import styled from 'styled-components';

// Define a styled component for the product item
const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease-in-out;

  // Add a hover effect
  &:hover {
    transform: scale(1.05);
  }
`;

// Define a styled component for the product image
const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

// Define a styled component for the product title
const ProductTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

// Define a styled component for the product description
const ProductDescription = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

// Define a styled component for the product price
const ProductPrice = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

// Define a React component that takes a product object as props and renders it
const Product = (props) => {
  
  // Destructure the product object
  const {image, title, description, price} = props.product;

  // Return the JSX element
  return (
    <ProductItem>
      <ProductImage src={image} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>${price}</ProductPrice>
    </ProductItem>
  );
};

export default Product;
