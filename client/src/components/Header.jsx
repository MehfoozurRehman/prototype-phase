import React from "react";
import Container from "react-bootstrap/Container";

export default function Header() {
  return (
    <Container
      style={{ fontSize: 35, paddingTop: "1em", paddingBottom: "1em" }}
    >
      Teacher Timetable Scheduler
    </Container>
  );
}
