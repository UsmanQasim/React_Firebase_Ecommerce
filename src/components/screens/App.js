import '../styles/App.css';
import Login from './Login';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center " style={{ height: '100vh' }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Login />
      </div>
    </Container>
  );
}

export default App;
