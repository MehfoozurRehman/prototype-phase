import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { fetcher } from "../utils/fetcher";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import useSwr from "swr";

export default function Details() {
  const navigate = useNavigate();
  const location = useLocation();

  const { data, mutate } = useSwr(
    import.meta.env.VITE_API_URL + "api/timetable",
    fetcher
  );
  let newData = data?.filter((item) => item.t_id === location.state.t_id);

  return (
    <>
      <Container>
        <Row style={{ marginBottom: "1em" }}>
          <Col style={{ fontSize: 25 }}>{location.state.t_id}/timetables</Col>
          <Col></Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => {
                navigate("/add-timetable", {
                  state: { teacher: location.state, timetable: newData },
                });
              }}
            >
              Add New
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th style={{ width: 300 }}>Actions</th>
              <th>Day</th>
              <th>Month</th>
              <th>Hour</th>
            </tr>
          </thead>
          <tbody>
            {newData?.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td style={{ width: 300 }}>
                  <Button>Edit</Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      axios
                        .delete(
                          import.meta.env.VITE_API_URL +
                            "api/timetable/" +
                            item._id
                        )
                        .then(() => {
                          mutate();
                        });
                    }}
                    style={{ marginLeft: ".5em" }}
                  >
                    Delete
                  </Button>
                </td>
                <td>{item.day}</td>
                <td>{item.month}</td>
                <td>{item.hour}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {newData?.length === 0 ? (
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 300,
            }}
          >
            No Data
          </Row>
        ) : null}
      </Container>
    </>
  );
}
