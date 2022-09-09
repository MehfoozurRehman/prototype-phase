import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Select from "react-select";

export default function AddTimeTable() {
  return (
    <Container>
      <Form>
        <Row style={{ marginBottom: "1em" }}>
          <Col style={{ fontSize: 25 }}>Add Time Table</Col>
          <Col></Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button onClick={() => {}}>Save</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Day</Form.Label>
                  <Select
                    options={[
                      {
                        label: "Sun",
                        value: "Sun",
                      },
                      {
                        label: "Mon",
                        value: "Mon",
                      },
                      {
                        label: "Tue",
                        value: "Tue",
                      },
                      {
                        label: "Wed",
                        value: "Wed",
                      },
                      {
                        label: "Thu",
                        value: "Thu",
                      },
                      {
                        label: "Fri",
                        value: "Fri",
                      },
                      {
                        label: "Sat",
                        value: "Sat",
                      },
                    ]}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Month</Form.Label>
                  <Form.Control type="text" placeholder="Enter Month" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Hour</Form.Label>
                  <Form.Control type="text" placeholder="Enter Hour" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Form>
    </Container>
  );
}
