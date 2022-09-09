import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditTeacher() {
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();
  const [teacherId, setTeacherId] = useState("");
  const [teacherIdError, setTeacherIdError] = useState("");
  const [workingDays, setWorkingDays] = useState([]);

  useEffect(() => {
    setTeacherId(location.state.t_id);
    setWorkingDays(location.state.working_days);
  }, []);

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          axios
            .put(
              import.meta.env.VITE_API_URL +
                "api/teacher/" +
                location.state._id,
              {
                t_id: teacherId,
                working_days: workingDays,
              }
            )
            .then(() => {
              navigate("/");
            });
        }}
      >
        <Row style={{ marginBottom: "1em" }}>
          <Col style={{ fontSize: 25 }}>Edit Teacher</Col>
          <Col></Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button type="submit">Save</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Teacher ID</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Teacher ID"
                value={teacherId}
                onChange={(e) => {
                  setTeacherId(e.target.value);
                  setTeacherIdError("");
                }}
                onInvalid={() => {
                  setTeacherIdError("Enter Teacher ID");
                }}
              />
              {teacherIdError !== "" ? (
                <Form.Text className="text" style={{ color: "red" }}>
                  {teacherIdError}
                </Form.Text>
              ) : null}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Working Days</Form.Label>
              <Select
                required
                onChange={(e) => {
                  setWorkingDays(e);
                }}
                value={workingDays}
                isMulti
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
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </Container>
  );
}
