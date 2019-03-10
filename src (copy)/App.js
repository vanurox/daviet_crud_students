import React, { Component } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={12} md={6} lg={12}> ISNE</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>     
    );
  }
}

export default App;
