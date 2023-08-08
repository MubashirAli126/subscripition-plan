"use client";
import { Step2 } from "~/components/Step2";
import { useFormState } from "~/components/FormContext";
import { Step3 } from "~/components/Step3";
import { Step1 } from "~/components/Step1";
import { Card, Col, Row } from "react-bootstrap";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    default:
      return null;
  }
}

export default function Home() {
  return (
    <>
    <Row className="d-flex justify-content-center align-items-center mt-5">
      <Col md={8} lg={6} xs={12}>
        <Card className="shadow">
        <Card.Body>
          <div className="mb-3 md-4">
            <h2 className="fw-bold mb-2 text-uppercase text-primary text-center ">Subscribe Form</h2>
            <hr />
        <ActiveStepFormComponent />
          </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  );
}
