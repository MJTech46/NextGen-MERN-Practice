// 3x3 matrix of images

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ImageMatrix = () => {
  const imageCount = 9; // 3x3 matrix = 9 images
  const imageUrl = "https://picsum.photos/id/";

  const generateImageSrc = (index) => {
    return `${imageUrl}${index + 19}/150/150`;  // Starting from 20 and making the images smaller
  };

  return (
    <Container className="mt-5">
      <Row>
        {[...Array(3)].map((_, rowIndex) => (
          <Col key={rowIndex} md={4}>
            {[...Array(3)].map((_, colIndex) => {
              const imageIndex = rowIndex * 3 + colIndex + 20; // Start image index at 20
              return (
                <div key={colIndex} className="mb-3 text-center">
                  <img
                    src={generateImageSrc(imageIndex)}
                    alt={`Image ${imageIndex}`}
                    className="img-fluid"
                  />
                </div>
              );
            })}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageMatrix;
