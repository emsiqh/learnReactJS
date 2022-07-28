import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loop, setLoop] = useState(0);
    const [isDeleteing, setIsDeleteing] = useState(false);
    const toRotate = ["JavaScript", "ReactJS", "NodeJS"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => clearInterval(ticker);
    }, [text]);

    const tick = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleteing ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleteing) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleteing && updateText === fullText) {
            setIsDeleteing(true);
            setDelta(period);
        } else if (isDeleteing && updateText === '') {
            setIsDeleteing(false);
            setLoop(loop + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Web</span>
                        <h1>{`Hi I'm learning `}<span className="wrap">{text}</span></h1>
                        <p>Practice makes perfect</p>
                        <button onClick={() => { console.log('connect'); }}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}