import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {buzz} from '../../../../components/Data/data'

const Buzz = () => {
  return (
    <div className="buzz ptb">
      <Container>
        <div className="title-wraper">
          <h2>In The Buzz</h2>
          <div
            className="custom-link view-link"
            // onClick={() => navigate(`productlisting/${productsList?.[0]?.categoryId}`,{state:productsList?.[0]?.categoryName})}
          >View All</div>
        </div>
        <Row className="custom-row-space">
          {buzz?.map((bc, i) => {
            return (
              <Col lg="3" key={i}>
                <div className="image-box">
                  <div className="image-hover">
                    <img
                      src={bc?.addVariant?.[0]?.image.src}
                      alt={bc?.productName}
                      // onClick={() => {
                      //   // navigate(`productlisting/${bc?.productName}`,{state:title});
                      //   navigate(`productlisting/${title}`,{state:title});
                      // }}
                    />
                  </div>
                  <div className="image-content">
                    <h5>{bc?.productName}</h5>
                    <button
                      type="submit"
                      className="custom-link"
                      // onClick={() => navigate(`checkout`)}
                    >
                      {bc.link}
                    </button>
                  </div>
                  {bc.label === "new" && (
                    <div className="offer-label">{bc.label}</div>
                  )}
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Buzz