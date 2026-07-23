import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Spinner,
  Table,
} from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import ClienteModal from "./ClienteModal";
// import { deleteCliente, setClienteInModifica } from "../redux/clientiSlice";

// da eliminare mock clienti una volta che si attiva redux
const mockClienti = [
  {
    id: "1",
    ragioneSociale: "Acme S.r.l.",
    partitaIva: "12345678901",
    pec: "acme@pec.it",
    tipoCliente: "SRL",
    nomeContatto: "Mario",
    cognomeContatto: "Rossi",
  },
];

const Dashboard = () => {
  // const dispatch = useDispatch();
  // const { lista: clienti, loading, error, } = useSelector((state) => state.clienti);

  const [clienti, setClienti] = useState(mockClienti); // da eliminare questa riga una volta attivato redux
  const loading = false; // da eliminare questa riga una volta attivato redux

  const [showModal, setShowModal] = useState(false);

  // useEffect(() => { dispatch(fetchClienti()); }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Sei sicuro di voler eliminare questo cliente ?")) {
      // dispatch(deleteCliente(id));
      setClienti(clienti.filter((c) => c.id !== id)); // da eliminare questa riga una volta attivato redux
    }
  };

  return (
    <Container className="shadow-sm border-0 py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Gestione Clienti</h3>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          <i className="bi bi-plus-lg me-2"></i>Nuovo Cliente
        </Button>
      </div>

      <Card className="shadow-sm border-0">
        <CardBody className="p-0">
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <Table responsive hover className="mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th>Ragione Sociale</th>
                  <th>Partita IVA</th>
                  <th>PEC</th>
                  <th>Tipo</th>
                  <th>Contatto</th>
                  <th className="text-end">Azioni</th>
                </tr>
              </thead>
              <tbody>
                {clienti.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-muted">
                      Nessun cliente presente nel database.
                    </td>
                  </tr>
                ) : (
                  clienti.map((c) => (
                    <tr key={c.id}>
                      <td className="fw-semibold">{c.ragioneSociale}</td>
                      <td>
                        <code>{c.partitaIva}</code>
                      </td>
                      <td>{c.pec}</td>
                      <td>
                        <Badge bg="secondary">{c.tipoCliente}</Badge>
                      </td>
                      <td>
                        {c.nomeContatto} {c.cognomeContatto}
                      </td>
                      <td className="text-end">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="me-2"
                          onClick={() => {
                            // dispatch(setClienteInModifica(c));
                            setShowModal(true);
                          }}
                        >
                          <i className="bi bi-pencil"></i>
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(c.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          )}
        </CardBody>
      </Card>
      <ClienteModal show={showModal} handleClose={() => setShowModal(false)} />
    </Container>
  );
};

export default Dashboard;
