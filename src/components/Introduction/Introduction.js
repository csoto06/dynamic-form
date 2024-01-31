import "./Introduction.css";
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Introduction() {
  return (
    <div className="introduction p-3 p-lg-5 mt-5">
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                    <h1 className="pl-2 text-center">
                        Bienvenidos al formulario dinamico
                        <span className="pt-2 pb-4">
                            that you will do everything that you want
                        </span>
                    </h1>
                    <h4 className="text-center pt-3">
                        Hello, I'm Christian Soto, I'm 28 years old  and i like makes designs and front-end with react, is new for me.
                    </h4>
                    <div className="d-flex container-actions mt-5">
                        <div className="container-buttons">
                            <Button className="p-3" onClick={() => console.log("Click button")}>
                                Get in touch
                            </Button>
                            <Button className="p-3">
                                Get in touch
                            </Button>
                        </div>
                        <div className="btn-start-create">
                            <a href="#dynamic-form">Start to create</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>        
    </div>
  )
}