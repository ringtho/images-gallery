import React from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";

const Search = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form>
            <Row>
              <Col xs={9}>
                <Form.Control placeholder="Search for Image..." />
              </Col>
              <Col>
                <Button variant="dark" type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
