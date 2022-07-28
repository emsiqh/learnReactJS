import { Col, Container, Row } from "react-bootstrap"
import projImg1 from "../assets/img/prj1.png";
import projImg2 from "../assets/img/prj2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

    const projects = [
        {
            title: "Profile Website",
            description: "Simple web by ReactJS",
            imgUrl: projImg1,
            tech: "Html, Css, Javascript, Reactjs",
            gitLink: "https://github.com/emsiqh/learnReactJS.git",
        },
        {
            title: "Website tin tức",
            description: "Project bài tập lớn LTW",
            imgUrl: projImg2,
            tech: "JavaWeb, Html, Css, Javascript, FetchApi",
            gitLink: "https://github.com/emsiqh/BTL-LTW.git",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            tech: "Html, Css, Javascript, Reactjs",
            gitLink: "https://github.com/emsiqh/learnReactJS.git",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            tech: "Html, Css, Javascript, Reactjs",
            gitLink: "https://github.com/emsiqh/learnReactJS.git",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            tech: "Html, Css, Javascript, Reactjs",
            gitLink: "https://github.com/emsiqh/learnReactJS.git",
        },
        {
            title: "Profile Website",
            description: "Simple web by ReactJS",
            imgUrl: projImg1,
            tech: "Html, Css, Javascript, Reactjs",
            gitLink: "https://github.com/emsiqh/learnReactJS.git",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row xs={1} md={1} xl={1}>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Here are a few basic projects during my studies that I've picked up on from many sources and followed.
                            In the future there will definitely be more and smarter technology :v
                        </p>
                    </Col>
                    <Col>
                        <Row className="show-grid" xl={3} md={2} sm={1} xs={1}>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <Col className="grid-item" key={index}>
                                            <div className="prj-img">
                                                <img src={project.imgUrl} alt={project.title}></img>
                                                <div className="prj-text">
                                                    <h3>{project.title}</h3>
                                                    <span>{project.description} <br/> Sử dụng {project.tech}</span>
                                                    <a className="git-link" href={project.gitLink}>GitHub</a>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}