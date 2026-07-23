import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Container
        fluid
        className="d-flex flex-column min-vh-100 overflow-hidden p-0"
      >
        <header></header>
        <main className="flex-grow-1 d-flex align-items-center justify-content-center">
          <Dashboard />
        </main>
        <footer></footer>
      </Container>
    </>
  );
}

export default App;
