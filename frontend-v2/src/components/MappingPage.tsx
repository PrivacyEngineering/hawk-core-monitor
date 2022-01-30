import { Button, Col, Dropdown, Form, Row } from "react-bootstrap"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../reducers";
import { AnyMapping, Field } from "../types";
import { ColInput } from "./ColInput";
import { MappingFieldsTable } from "./MappingFieldsTable"

export const MappingPage = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const fields = useSelector<RootState, Field[]>(state => state.fields);
  const mapping = useSelector<RootState, AnyMapping | undefined>(state => state.mappings.find(m => m.id === id)) as AnyMapping;

  const labels = ['ID', 'Path type', 'Path value', 'Actions'];
  const items = [
    { id: 'user', path: { type: "json", value: "$.body[*].user.email" } }
  ];

  return (
    <>
      <h2>Mapping #{mapping.id}</h2>
      <Row>
        <Col lg={12} xl={10}>
          <Row>
            <ColInput sm={12} md={6} xl={4} label="Service name" mutedText="e.g. my-service" value={mapping.service} readOnly />
            <ColInput sm={12} md={6} xl={4} label="Protocol" mutedText="e.g. HTTP" value={mapping.endpoint.protocol} readOnly />
            <ColInput sm={12} md={6} xl={4} label="Method" mutedText="e.g. POST" value={mapping.endpoint.method} readOnly />
            <ColInput sm={12} md={6} xl={12} label="Path" mutedText="e.g. /api/endpoint" value={mapping.endpoint.path} readOnly />
          </Row>

          <Form.Group className="mb-2">
            <Form.Label>Fields</Form.Label>
            <MappingFieldsTable labels={labels} items={items} />

            <Dropdown>
              <Dropdown.Toggle variant="outline-success" id="dropdown-basic">Add field</Dropdown.Toggle>
              <Dropdown.Menu>{fields.map(f => <Dropdown.Item key={f.id} href="#">{f.id}</Dropdown.Item>)}</Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Col>

        {/* TODO: react to changes */}
        {/* <Col lg={12} xl={6}>
          <Form.Group className="mb-2">
            <Form.Label>Mapping result</Form.Label>
            <Form.Control as="textarea" style={{ height: '35vh' }} type="text" placeholder={JSON.stringify(newMapping, null, 4)} readOnly />
          </Form.Group>
        </Col> */}
      </Row>
      <Button variant='success'>Save</Button>
    </>
  )
}
