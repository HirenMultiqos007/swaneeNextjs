import React from 'react'
import {services} from '../../../../components/Data/data'
import {Col, Container, Row} from 'react-bootstrap'
import Image from 'next/image'
const Services = () => {
  return (
    <div className='services'>
    <Container>
        <Row className='custom-row-space'>
            {
                services?.map((sc, i) => {
                    return (
                        <Col lg="3" md="6" key={i}>
                            <div className='service-box'>
                                <div className='icon-wrapper'>
                                    <Image src={sc?.PImages} alt={sc?.alt} width={48} height={48}/>
                                    {/* {sc?.PImages} */}
                                </div>
                                <div className='service-content'>
                                    {sc?.title}
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
    </Container>
</div>
  )
}

export default Services