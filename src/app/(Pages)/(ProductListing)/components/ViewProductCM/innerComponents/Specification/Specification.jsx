import React from "react";
import { Col, Row } from "react-bootstrap";

const Specification = ({ viewProduct }) => {
  return (
    <>
      <p>{viewProduct?.description}</p>
      <Row className="features-wrapper">
        <>
          <Col lg="4">
            <div className="feature-box">
              Product Type
              <span>{viewProduct?.type}</span>
            </div>

            <div className="feature-box">
              Brand
              <span>{viewProduct.productName}</span>
            </div>

            <div className="feature-box">
              Product Code
              <span>{viewProduct?.addVariant?.[0]?.productSku}</span>
            </div>
            <div className="feature-box">
              Material
              <span>{viewProduct?.materialName}</span>
            </div>
          </Col>
          <Col lg="4">
            <div className="feature-box">
              Product Length
              <span>
                {viewProduct?.addVariant?.[0]?.variantList[0]?.PLength}
              </span>
            </div>
            <div className="feature-box">
              Product Weight
              <span>{viewProduct?.productWeight} gms</span>
            </div>
          </Col>
        </>
      </Row>
    </>
  );
};

export default Specification;
