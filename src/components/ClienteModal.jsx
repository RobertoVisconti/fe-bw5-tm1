import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
  Row,
} from "react-bootstrap";

const initialFormState = {
  ragioneSociale: "",
  partitaIva: "",
  pec: "",
  telefono: "",
  emailContatto: "",
  nomeContatto: "",
  cognomeContatto: "",
  tipoCliente: "",
  idSedeLegale: "",
  idSedeOperativa: "",
};

const ClienteModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const clienteInModifica = useSelector(
    (state) => state.clienti.clienteInModifica,
  );
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (clienteInModifica) {
      setFormData(clienteInModifica);
    } else {
      setFormData(initialFormState);
    }
  }, [clienteInModifica, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clienteInModifica) {
      dispatch(updateCliente(formData));
    } else {
      dispatch(addCliente(formData));
    }
    onclose();
  };

  const onClose = () => {
    dispatch(clearClienteInModifica());
    setFormData(initialFormState);
    handleClose();
  };

  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle>
          {clienteInModifica ? "Modifica Cliente" : "Nuovo Cliente"}
        </ModalTitle>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Row className="g-3">
              <Col md={6}>
                <FormGroup controlId="ragioneSociale">
                  <FormLabel className=" small fw-semibold">
                    Ragione Sociale *
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="ragioneSociale"
                    value={formData.ragioneSociale}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="partitaIva">
                  <FormLabel className=" small fw-semibold">
                    Partita IVA (11 cifre) *
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="ragioneSociale"
                    pattern="[0-9]{11}"
                    value={formData.partitaIva}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="pec">
                  <FormLabel className=" small fw-semibold">PEC *</FormLabel>
                  <FormControl
                    type="email"
                    name="pec"
                    value={formData.pec}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="telefono">
                  <FormLabel className=" small fw-semibold">Telefono</FormLabel>
                  <FormControl
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="emailContatto">
                  <FormLabel className=" small fw-semibold">
                    Email Contatto *
                  </FormLabel>
                  <FormControl
                    type="email"
                    name="emailContatto"
                    value={formData.emailContatto}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="nomeContatto">
                  <FormLabel className=" small fw-semibold">
                    Nome Contatto
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="nomeContatto"
                    value={formData.nomeContatto}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="cognomeContatto">
                  <FormLabel className=" small fw-semibold">
                    Cognome Contatto
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="cognomeContatto"
                    value={formData.cognomeContatto}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="tipoCliente">
                  <FormLabel className=" small fw-semibold">
                    Tipo Cliente *
                  </FormLabel>
                  <FormControl
                    name="tipoCliente"
                    value={formData.tipoCliente}
                    onChange={handleChange}
                    required
                  />
                  <option value="PA">PA</option>
                  <option value="SAS">SAS</option>
                  <option value="SRL">SRL</option>
                  <option value="SPA">SPA</option>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="idSedeLegale">
                  <FormLabel className=" small fw-semibold">
                    Sede Legale *
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="idSedeLegale"
                    value={formData.idSedeLegale}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="idSedeOperativa">
                  <FormLabel className=" small fw-semibold">
                    Sede Operativa
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="idSedeOperativa"
                    value={formData.idSedeOperativa}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
        </Form>
      </ModalHeader>
    </Modal>
  );
};

export default ClienteModal;
