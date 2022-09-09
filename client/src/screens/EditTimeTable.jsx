import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import { useState } from "react";
import axios from "axios";

export default function EditTimeTable() {
  const navigate = useNavigate();
  const location = useLocation();
  const [day, setDay] = useState([]);
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  useEffect(() => {
    setDay(location.state.timetable.day);
    setMonth(location.state.timetable.month);
    setHour(location.state.timetable.hour);
  }, []);

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .put(
              import.meta.env.VITE_API_URL +
                "api/timetable/" +
                location.state.timetable._id,
              {
                t_id: location.state.teacher.t_id,
                day: day,
                month: month,
                hour: hour,
              }
            )
            .then(() => {
              navigate(-1);
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
                isDisabled
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
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
