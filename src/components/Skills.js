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
    }

    const skills = [
        {
            name: "Html",
            value: 70
        },
        {
            name: "Css",
            value: 65
        },
        {
            name: "Javascript",
            value: 65
        },
        {
            name: "ReactJS",
            value: 50
        },
        {
            name: "MySQL",
            value: 50
        },
    ]



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
                                    {
                                        skills.map((skill, index) => {
                                            return (
                                                <div className="skill-item" key={index}>
                                                    <CircularProgressbarWithChildren value={skill.value}>
                                                        <div style={{ fontSize: 1.4 + 'rem' }}>
                                                            <strong>{skill.value}%</strong>
                                                        </div>
                                                    </CircularProgressbarWithChildren>
                                                    <h5>{skill.name}</h5>
                                                </div>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="vvv" />
        </section>
    )

}