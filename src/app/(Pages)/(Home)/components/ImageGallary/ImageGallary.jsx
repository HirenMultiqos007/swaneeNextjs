import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { gallary2 } from "../../../../components/Data/data";

const ImageGallary = () => {
  return (
    <div className="image-gallary ptb">
    <Container>
      <Row className="custom-row-space">
        {gallary2.map((gd, i) => {
          return (
            <Col lg="4" key={i}>
              <div className="image-box">
                <div className="image-hover">
                  <img
                    src={gd?.addVariant?.[0]?.image.src}
                    alt="images-gallary"
                    onClick={() =>
                      navigate(`productlisting/${gd?.title}`,{state:gd?.title})
                    }
                  />
                </div>
                <div className="black-shadow image-content">
                  <h5>{gd?.title}</h5>
                  <button
                    type="submit"
                    className="custom-link"
                    onClick={() => navigate(`checkout`)}
                  >
                    {gd?.link}
                  </button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  </div>
  )
}

export default ImageGallary