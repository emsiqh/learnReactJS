import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Facebook, Instagram, Twitter, Github } from "react-bootstrap-icons"

export const Footer = () => {
    const contactItems = [
        {
            ctlogo: <Facebook size={30} className="ct-icon"/>,
            ctUrl: "http://www.facebook.com/emsiqh",
        },
        {
            ctlogo: <Instagram size={30} className="ct-icon"/>,
            ctUrl: "https://www.instagram.com/q.huyyy_/",
        },
        {
            ctlogo: <Twitter size={30} className="ct-icon"/>,
            ctUrl: "https://twitter.com/tvqh2011",
        },
        {
            ctlogo: <Github size={30} className="ct-icon"/>,
            ctUrl: "https://github.com/emsiqh",
        },
    ]

    const DateTime = () => {
        var [date, setDate] = useState(new Date())
        useEffect(() => {
            var timer = setInterval(() => setDate(new Date()), 1000)

            return function cleanup() {
                clearInterval(timer)
            }
        })
        return date.toLocaleTimeString();
    }

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <span className="date-txb">It's {DateTime()}. <br /> Thank you for visiting my website!</span>
                    </Col>
                    <div className="contact-box">
                        <h3>Contact me!</h3>
                        <Row xl={4} md={3} sm={1} xs={1}>
                            {
                                contactItems.map((item, index) => {
                                    return (
                                        <a className="contact-item" key={index} href={item.ctUrl}>{item.ctlogo}</a>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}