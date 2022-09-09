import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function AddTimeTable() {
  const navigate = useNavigate();
  const location = useLocation();
  const [day, setDay] = useState([]);
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({
            t_id: location.state.teacher.t_id,
            day: day,
            month: month,
            hour: hour,
          });
          axios
            .post(import.meta.env.VITE_API_URL + "api/timetable/create", {
              t_id: location.state.teacher.t_id,
              day: day,
              month: month,
              hour: hour,
            })
            .then(() => {
              navigate("/");
            });
        }}
      >
        <Row style={{ marginBottom: "1em" }}>
          <Col style={{ fontSize: 25 }}>Add Time Table</Col>
          <Col></Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button type="submit" style={{ marginBottom: 10 }}>
              Save
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Day</Form.Label>
              <Select
                options={location.state.teacher.working_days}
                value={day}
                onChange={(e) => {
                  setDay(e);
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Month</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Month"
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
              />
              {/* {month === "" ? (
                <Form.Text className="text-muted">Enter Month</Form.Text>
              ) : null} */}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Hour</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Hour"
                value={hour}
                onChange={(e) => {
                  setHour(e.target.value);
                }}
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
