import { Button, Alert, Breadcrumb, Card, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/ti-bootstrap.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Form.Group>Email Address</Form.Group>
            <Form.Control type="email" placeholder="example@email.com"></Form.Control>
            <Form.Text className="text-muted">
              Trust me
            </Form.Text>
            <Button variant="primary">Login</Button>
          </Form>
          <Card className="mb-3" style={{color: "#000"}}>
            <Card.Img src="https://plchldr.co/i/500x200"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This is the subtitle. Dolor sit amet.</Card.Text>
              <Button variant="primary">Colour</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test 1</Breadcrumb.Item>
            <Breadcrumb.Item active>Test 2</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="primary">This is an alert</Alert>
          <Button>Test button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
