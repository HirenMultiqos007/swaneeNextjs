"use client"
import React from 'react'
import {
  Col,
  Container,
  Form,
  InputGroup,
  NavLink,
  Row,
} from "react-bootstrap";
import  PhoneIcon  from "public/assets/icons/phone-icon.svg";
import  WhatsAppIcon  from "public/assets/icons/whatsup-icon.svg";
import  MailIcon  from "public/assets/icons/mail-icon.svg";
import  FBIcon  from "public/assets/icons/fb-icon.svg";
import  InstagramIcon  from "public/assets/icons/instagram-icon.svg";
import  TwiterIcon  from "public/assets/icons/twiter-icon.svg";
import  PinterestIcon  from "public/assets/icons/pinterest-icon.svg";
import AppStore from "public/assets/images/app-store.svg";
import GooglePlay from "public/assets/images/google-play.svg";
import Image from "next/image";


const FooterMenu = () => {
  return (
    <>
    <Container>
        <Row>
          <Col xxl="2" lg="4">
            <div className="footer-wrapper">
              <h3>About us</h3>
              <div className="footer-link">
                <ul>
                  <li>
                    <NavLink>Purple Style Labs</NavLink>
                  </li>
                  <li>
                    <NavLink>Pernia’s Pop Up Show</NavLink>
                  </li>
                  <li>
                    <NavLink>Studio Locator</NavLink>
                  </li>
                  <li>
                    <NavLink>Magazine</NavLink>
                  </li>
                  <li>
                    <NavLink>Pernia’s Pop Up Blog</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xxl="2" lg="4">
            <div className="footer-wrapper">
              <h3>Quick Links</h3>
              <div className="footer-link">
                <ul>
                  <li>
                    <NavLink>Bestsellers</NavLink>
                  </li>
                  <li>
                    <NavLink>Exclusive</NavLink>
                  </li>
                  <li>
                    <NavLink>Offers</NavLink>
                  </li>
                  <li>
                    <NavLink>Gift Cards</NavLink>
                  </li>
                  <li>
                    <NavLink>Celebrity Closet</NavLink>
                  </li>
                  <li>
                    <NavLink>Personal Styling</NavLink>
                  </li>
                  <li>
                    <NavLink>Occasions</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xxl="2" lg="4">
            <div className="footer-wrapper">
              <h3>Customer Care</h3>
              <div className="footer-link">
                <ul>
                  <li>
                    <NavLink>Shipping Information</NavLink>
                  </li>
                  <li>
                    <NavLink>Returns & Exchange</NavLink>
                  </li>
                  <li>
                    <NavLink
                      // to={termsConditions}
                      // onClick={() => navigate(termsConditions)}
                    >Terms & Conditions</NavLink>
                  </li>
                  <li>
                    <NavLink>Privacy Policies</NavLink>
                  </li>
                  <li>
                    <NavLink>Faqs</NavLink>
                  </li>
                  <li>
                    <NavLink>Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xxl="3" lg="6">
            <div className="footer-wrapper">
              <div className="contact-us">
                <h3>Contact Us</h3>
                <div className="footer-link">
                  <ul>
                    <li>
                      <NavLink href="tel:+91 78478 48484">
                        <Image src={PhoneIcon} alt='PhoneIcon' style={{marginRight: "10px"}}/>
                        {/* <PhoneIcon /> */}
                        +91 78478 48484
                      </NavLink>
                    </li>
                    <li>
                      <NavLink target="_blank" href="https://web.whatsapp.com/">
                      <Image src={WhatsAppIcon} alt='WhatsAppIcon' style={{marginRight: "10px"}}/>
                        {/* <WhatsAppIcon />  */}
                        +91 84880 70070
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="mailto:Customercare@perniaspopupshop.com">
                        {/* <MailIcon /> */}
                      <Image src={MailIcon} alt='MailIcon'  style={{marginRight: "10px"}}/>

                        Customercare@perniaspopupshop.com
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="follow-us">
                <h3>Follow Us</h3>
                <ul>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/MultiQoS/"
                    >
                      <Image src={FBIcon} alt='FBIcon' style={{marginRight: "10px"}}/>
                      {/* <FBIcon /> */}
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/multiqos/"
                    >
                      <Image src={InstagramIcon} alt='InstagramIcon' style={{marginRight: "10px"}}/>

                      {/* <InstagramIcon /> */}
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://twitter.com/multiqos"
                    >
                      <Image src={TwiterIcon} alt='TwiterIcon' style={{marginRight: "10px"}}/>

                      {/* <TwiterIcon /> */}
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://pinrest.com/"
                    >
                      <Image src={PinterestIcon} alt='PinterestIcon' style={{marginRight: "10px"}}/>

                      {/* <PinterestIcon /> */}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xxl="3" lg="6">
            <div className="footer-wrapper">
              <h3>Get Pernia’s Pop-Up Shop App</h3>
              <p>We will send you a link on your Email or Phone,open it on your phone and download the app.</p>

              <Form className="mail-subscribe">
                <InputGroup>
                  <Form.Control
                    placeholder="Email or Phone Number"
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    onClick={() => {
                      alert("Link sent !");
                    }}
                  >App Link</InputGroup.Text>
                </InputGroup>
              </Form>

              <div className="play-store">
                <a
                  href="https://twitter.com/"
                  onClick={() => {
                    window.open("https://twitter.com/");
                  }}
                >
                  <img src={AppStore.src} alt="app-store" />
                </a>
                <a
                  href="https://www.google.com/"
                  onClick={() => {
                    window.open("https://www.google.com/");
                  }}
                >
                  <img src={GooglePlay.src} alt="google-play" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FooterMenu