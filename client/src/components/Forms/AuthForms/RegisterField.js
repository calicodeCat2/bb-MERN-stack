// RegisterField contains logic to render a single input and label
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './RegisterField.scss';

const RegisterField = ({ input, label, meta: { error, touched } }) => {
  return (
    <Container className="field">
      <Row className="field-row">
        <label>{label}</label>
        <input {...input} style={{ marginBottom: "5px" }} />
        <div className="red-text" style={{ marginBottom: "20px" }}>
          {touched && error}
        </div>
      </Row>
    </Container>
  );
};

export default RegisterField;
