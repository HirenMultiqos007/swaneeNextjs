import React from 'react'
import Image from 'next/image';
import { Col, Container, Row } from "react-bootstrap";
import WeddingImage1 from "public/assets/images/homepage-wedding-image1.png";
import WeddingImage2 from "public/assets/images/homepage-wedding-image2.png";
import WeddingImage3 from "public/assets/images/homepage-wedding-image3.png";

const WeddingTales = () => {
  return (
    <div className="wedding-tales ptb">
      <Container>
        <div className="title-wraper">
          <h2>Wedding Tales</h2>
          <div
            className="custom-link view-link"
            // onClick={() =>
            //   navigate(`productlisting/${productsList?.[0]?.categoryId}`,{state:productsList?.[0]?.categoryName})
            // }
          >View All</div>
        </div>
        <Row>
          <Col lg="6">
            <div className="image-box">
              <div className="image-hover">
                <Image
                  src={WeddingImage1.src}
                  alt="WeddingImage1"
                  width={636}
                  height={667}
                //   onClick={() => {
                //     navigate(
                //       `productlisting/Wedding Tales`,{state:"Wedding Tales"}
                //     );
                //   }}
                />
              </div>
              <div className="image-content">
                <h5>Papa Don’t Preach by Shubhika</h5>
                <button
                  type="submit"
                  className="custom-link"
                //   onClick={() => navigate(`checkout`)}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="image-box">
              <div className="image-hover">
                <Image
                
                  src={WeddingImage2.src}
                  alt="WeddingImage2"
                  width={636}
                  height={400}
                //   onClick={() => {
                //     navigate(
                //       `productlisting/Wedding Tales`,{state:"Wedding Tales"}
                //     );
                //   }}
                />
              </div>
              <div className="image-content">
                <h5>Papa Don’t Preach by Shubhika</h5>
                <button
                  type="submit"
                  className="custom-link"
                //   onClick={() => navigate(`checkout`)}
                >
                  Shop Now
                </button>
              </div>
            </div>

            <div
              className="image-box"
              style={{ marginLeft: "80px", marginTop: "100px" }}
            >
              <div className="image-hover">
                <Image
                  src={WeddingImage3.src}
                  alt="WeddingImage3"
                  width={556}
                  height={296}
                //   onClick={() => {
                //     navigate(
                //       `productlisting/Wedding Tales`,{state:"Wedding Tales"}
                //     );
                //   }}
                />
              </div>
              <div className="image-content">
                <h5>Papa Don’t Preach by Shubhika</h5>
                <button
                  type="submit"
                  className="custom-link"
                //   onClick={() => navigate(`checkout`)}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WeddingTales