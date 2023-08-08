import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import { useState } from "react";
import {Form, Button, Row, Col, Card } from 'react-bootstrap';

type TFormValues = {
  plan: string;
};

export function Step3() {
  const [isCreated, setCreated] = useState(false);
  const { setFormData, formData, onHandleBack } = useFormState();
  const [selectedValue, setSelectedValue] = useState("");

  // Event handler for the select element's change event
  const handleSelectChange = (event: { target: { value: any; }; }) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    console.log("Selected value:", newValue);
  };

  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    setCreated(true);
  };
console.log(formData.dob);
  return isCreated ? (
    <>
      <p>Account created successfully</p>
      <pre>{JSON.stringify(formData)}</pre>
    </>
  ) : (
    <>
    <Form onSubmit={handleSubmit(onHandleFormSubmit)}>

      <Form.Select {...register("plan")} required={true} value={selectedValue} onChange={handleSelectChange} aria-label="Floating label select example mt-3" >
        <option>Open this select menu</option>
        <option value="1">Basic</option>
        <option value="2">Standard</option>
        <option value="3">Pro</option>
      </Form.Select>

    <Row className="justify-content-center mt-4">
        <Col md={4}>
          <Card className="text-center mb-4">
            <Card.Header>Basic Plan</Card.Header>
            <Card.Body>
              <Card.Title>$9.99/month</Card.Title>
              <Card.Text>Access to basic features</Card.Text>
              <ul className="list-unstyled">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center mb-4">
            <Card.Header>Standard Plan</Card.Header>
            <Card.Body>
              <Card.Title>$9.99/month</Card.Title>
              <Card.Text>Access to basic features</Card.Text>
              <ul className="list-unstyled">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center mb-4">
            <Card.Header>Pro Plan</Card.Header>
            <Card.Body>
              <Card.Title>$19.99/month</Card.Title>
              <Card.Text>Access to features</Card.Text>
              <ul className="list-unstyled">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button onClick={onHandleBack}> Back </Button>
      <Button type="submit"  className="float-right">Create</Button>
    </Form>
    </>
  );
}
