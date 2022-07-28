import { Col, Container, Row } from "react-bootstrap"

export const Projects = () => {
    return (
        <section className="project" id="project">
            <Container>
                <Row xs={1} md={1} xl={1}>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Here are a few basic projects during my studies that I've picked up on from many sources and followed.
                            In the future there will definitely be more and higher technology :v
                        </p>
                    </Col>
                    <Col>
                        <Row className="show-grid" sm={3} md={3}>
                            <Col>Insert something Here</Col>
                            <Col>Insert something Here</Col>
                            <Col>Insert something Here</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}