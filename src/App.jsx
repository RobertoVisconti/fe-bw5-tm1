import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container
        fluid
        className="d-flex flex-column min-vh-100 overflow-hidden p-0"
      >
        <header></header>
        <Routes>
          <main className="flex-grow-1 d-flex align-items-center justify-content-center">
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </main>
        </Routes>
        <footer></footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
