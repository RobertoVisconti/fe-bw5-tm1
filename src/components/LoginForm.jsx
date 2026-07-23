import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  CardBody,
} from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login inviato: ", { email, password });
  };

  return (
    <Container className="my-auto py-4">
      <Row className="w-100 justify-content-center m-0">
        <Col xs={12} sm={10} md={8} lg={5} xl={4}>
          <Card className="shadow-sm border-0 p-4 rounded-3">
            <CardBody>
              <div className="text-center mb-4">
                <h1 className="h3">CRM EPIC ENERGY SERVICES</h1>
                <p className="sub-title small">
                  Inserisci le tue credenziali per accedere
                </p>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-semibold small">
                    Email aziendale
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light text-muted">
                      <i className="bi bi-envelope"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="pec"
                      placeholder="nome@azienda.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-semibold small">
                    Password
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light text-muted">
                      <i className="bi bi-lock"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center mb-4 small">
                  <Form.Check
                    type="checkbox"
                    id="remember-me"
                    label="Ricordami"
                    className="text-muted"
                  />
                  <a
                    href="#forgot"
                    className="text-decoration-none text-primary fw-semibold"
                  >
                    Password dimenticata?
                  </a>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 fw-bold"
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Accedi
                </Button>
              </Form>
            </CardBody>
          </Card>

          <div className="text-center mt-4">
            <small className="text-muted">
              Serve aiuto?{" "}
              <a href="#support" className="text-secondary">
                Contatta il supporto
              </a>
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
