import React, { useEffect } from "react";
import useSwr from "swr";
import { fetcher } from "../utils/fetcher";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, mutate } = useSwr(
    import.meta.env.VITE_API_URL + "api/timetable",
    fetcher
  );
  let newData = data.filter((item) => item.t_id === id);

  return (
    <>
      <Container>
        <Row style={{ marginBottom: "1em" }}>
          <Col style={{ fontSize: 25 }}>{id}/timetables</Col>
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
                navigate("/add-timetable");
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
              <th>Actions</th>
              <th>Teacher ID</th>
              <th>Day</th>
              <th>Month</th>
              <th>Hour</th>
            </tr>
          </thead>
          <tbody>
            {newData?.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>
                  <Button>Edit</Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      axios.delete(
                        import.meta.env.VITE_API_URL +
                          "api/timetable/" +
                          data._id
                      );
                      mutate();
                    }}
                    style={{ marginLeft: ".5em" }}
                  >
                    Delete
                  </Button>
                </td>
                <td>{item.t_id}</td>
                <td>{item.day}</td>
                <td>{item.month}</td>
                <td>{item.hour}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {newData.length === 0 ? (
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
