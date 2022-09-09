import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { fetcher } from "../utils/fetcher";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import useSwr from "swr";

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, mutate } = useSwr(
    import.meta.env.VITE_API_URL + "api/teacher",
    fetcher
  );
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="search"
                  placeholder="Search By Teacher ID"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
          </Col>
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
                navigate("/add-teacher");
              }}
              style={{ marginBottom: 15 }}
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
              <th>Working Days</th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.filter((item, i) =>
                query !== "" ? item.t_id.includes(query) : true
              )
              .map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => {
                        navigate("/details", {
                          state: item,
                        });
                      }}
                    >
                      Details
                    </Button>
                    <Button
                      style={{ marginLeft: ".5em" }}
                      onClick={() => {
                        navigate("/edit-teacher", {
                          state: item,
                        });
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        axios
                          .delete(
                            import.meta.env.VITE_API_URL +
                              "api/teacher/" +
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
                  <td>{item.t_id}</td>
                  <td>
                    {item.working_days.map((item, i) => item.label + ", ")}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
