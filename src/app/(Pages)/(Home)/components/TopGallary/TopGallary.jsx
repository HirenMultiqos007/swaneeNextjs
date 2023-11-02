
import { Col, Container, Row } from 'react-bootstrap';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { gallary } from '@/app/components/Data/data';
const TopGallary = () => {
  const router = useRouter()
  return (
    <div className="image-gallary pt-100 pb-50">
    <Container>
      <Row className="custom-row-space">
       
        {gallary?.map((gd, i) => {
          return (
            <Col lg="4" key={i}>
              <div className="image-box">
                <div className="image-hover">   
                  <Image
                    src={gd?.addVariant?.[0]?.image.src}
                    alt={gd?.title}
                    width={516}
                    height={326}
                    onClick={() =>
                        router.push("/productlisting")
                    //   navigate(`productlisting/${gd?.title}`,{state:gd?.title})
                    }
                  />
                </div>
                <div className="black-shadow image-content">
                  <h5>{gd?.title}</h5>
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

export default TopGallary