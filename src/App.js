import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Button, Card, CardText, CardBody, CardHeader, CardTitle, CardSubtitle } from 'reactstrap';
import './App.css';
import { getAllManager } from './managers/manager'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    getAllManager(this.cbOk, this.cbNok);
  }

  cbOk = (posts) => {
    this.setState({ posts });
  }

  cbNok = () => {
    console.log('error');
  }

  render() {

    return (
      <div className="App">
        <body>
          <Container>
            <Navbar color="light" light expand="md"></Navbar>
            <Row>
              <Col xs="3">
                <Button color="primary" size="lg" block>New Post</Button>
                <Button color="primary" size="lg" block>List posts</Button>
              </Col>
              <Col xs="9">
                <Card>
                  <CardBody>
                    <CardHeader>Posts</CardHeader>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </body>
      </div>
    );
  }
}

export default App;
