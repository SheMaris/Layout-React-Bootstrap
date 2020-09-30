import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import ReactWidgets from 'react-widgets/lib/DateTimePicker';

function App() {
  return (
    <Container>
      <Row>
        <Col style={{ backgroundColor: "greenyellow" }}>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col style={{ backgroundColor: "aliceblue" }}>
          <Card>
            <Card.Img variant="top" src="" style={{ height: "50px" }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ backgroundColor: "antiquewhite", "border-bottom": "0px" }}>
          <Form>
            <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
              Username
            </Form.Label>
            <InputGroup className="mb-2 mr-sm-2">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="inlineFormInputGroupUsername2"
                placeholder="Username"
              />
            </InputGroup>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col style={{ backgroundColor: "khaki" }}>
          <Form>
            <Form.Group controlId="formBasicRangeCustom">
              <Form.Label>Range</Form.Label>
              <Form.Control type="range" custom />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: "sandybrown" }}>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Dropdown Button</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col style={{ backgroundColor: "thistle" }}>
          <ReactWidgets defaultValue={new Date()} time={false} />
        </Col>
        <Col
          style={{ backgroundColor: "antiquewhite", "border-top": "0px" }}
        ></Col>
        <Col style={{ backgroundColor: "plum" }}>
          <Form>
            <div key="checkbox" className="mb-3">
              <Form.Check type="checkbox" id="checkbox" label="checkbox" />
              <Form.Check type="checkbox" id="checkbox-2" label="checkbox-2" />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
