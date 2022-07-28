import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorSharp from '../assets/img/color-sharp.png'


export const Skills = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    const HtmlValue = 70;
    const CssValue = 65;
    const JsValue = 65;
    const ReactValue = 60;

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Below are the skills, programming languages that I have been learning and practicing. Hopefully in the future it will include more stuff!</p>
                            <div>
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    className="skills-carousel"
                                >
                                    <div className="skill-item">
                                        <CircularProgressbarWithChildren value={HtmlValue}>
                                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                            <div style={{ fontSize: 1.4 + 'rem'}}>
                                                <strong>{HtmlValue}%</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                        <h5>Html</h5>
                                    </div>
                                    <div className="skill-item">
                                        <CircularProgressbarWithChildren value={CssValue}>
                                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                            <div style={{ fontSize: 1.4 + 'rem'}}>
                                                <strong>{CssValue}%</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                        <h5>Css</h5>
                                    </div>
                                    <div className="skill-item">
                                        <CircularProgressbarWithChildren value={JsValue}>
                                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                            <div style={{ fontSize: 1.4 + 'rem'}}>
                                                <strong>{JsValue}%</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                        <h5>JavaScript</h5>
                                    </div>
                                    <div className="skill-item">
                                        <CircularProgressbarWithChildren value={ReactValue}>
                                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                            <div style={{ fontSize: 1.4 + 'rem'}}>
                                                <strong>{ReactValue}%</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                        <h5>ReactJS</h5>
                                    </div>

                                </Carousel>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )

}