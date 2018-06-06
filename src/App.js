import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
} from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Ninja mongo twits</NavbarBrand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col md="4">
              <Nav vertical pills>
                <NavItem>
                  <NavLink active href="#" onClick={() => {}}>
                    Twits
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Twits</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Other Twits</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">
                    Adult Twits
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
