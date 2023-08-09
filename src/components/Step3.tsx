import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import { useState } from "react";
import {Form, Button, Row, Col, Card } from 'react-bootstrap';
import styles from '../styles/component.module.css'

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
console.log(formData);
  return isCreated ? (
    <>
      <p style={{fontWeight: 700, textAlign: "center", fontSize: 20}}>Subscribe Plan Successfully</p>
      <ul>
        <li>
          <label style={{fontWeight: 600}}>User Name:</label>
          <span style={{paddingLeft: 5}}>{formData.username}</span>
        </li>
        <li>
          <label style={{fontWeight: 600}}>Email:</label>
          <span style={{paddingLeft: 5}}>{formData.email}</span>
        </li>
        <li>
          <label style={{fontWeight: 600}}>Date of Birth:</label>
          <span style={{paddingLeft: 5}}>{formData.dob}</span>
        </li>
        <li>
          <label style={{fontWeight: 600}}>Phone Number:</label>
          <span style={{paddingLeft: 5}}> {formData.phoneNumber}</span>
        </li>
        <li>
          <label style={{fontWeight: 600}}>Subscripition Plan:</label>
          <span style={{paddingLeft: 5}}>{formData.plan}</span>
        </li>
      </ul>
    </>
  ) : (
    <>
    <Form onSubmit={handleSubmit(onHandleFormSubmit)}>

      <Form.Select {...register("plan")} required={true} value={selectedValue} onChange={handleSelectChange} aria-label="Floating label select example mt-3" >
        <option>select Plan</option>
        <option value="silver">Silver</option>
        <option value="gold">Gold</option>
        <option value="platinum">Platinum</option>
      </Form.Select>

    <Row className="justify-content-center mt-4">
        <Col md={4}>
          <Card className="text-center mb-4">
            <Card.Header>Silver Plan</Card.Header>
            <Card.Body>
              <Card.Title>$9.99/month</Card.Title>
              <Card.Text>Access to silver features</Card.Text>
              <ul className="list-unstyled">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </Card.Body>
            <Card.Footer>Buy Now</Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center mb-4">
            <Card.Header style={{backgroundColor: 'gold'}}>Gold Plan</Card.Header>
            <Card.Body>
              <Card.Title>$19.99/month</Card.Title>
              <Card.Text>Access to gold features</Card.Text>
              <ul className="list-unstyled">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>

              </ul>
            </Card.Body>
            <Card.Footer style={{backgroundColor: 'gold'}}>Buy Now</Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center mb-4">
            <Card.Header style={{backgroundColor: 'black', color:"white"}}>Platinum Plan</Card.Header>
            <Card.Body>
              <Card.Title>$29.99/month</Card.Title>
              <Card.Text>Access to platinum features</Card.Text>
              <ul className="list-unstyled">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
            </Card.Body>
            <Card.Footer style={{backgroundColor: 'black', color:"white"}}>Buy Now</Card.Footer>
          </Card>
        </Col>
      </Row>
      <Button type="submit" className={styles.btnNext}>Create</Button>
      <Button onClick={onHandleBack} className={styles.btnBack}>Back</Button>
    </Form>
    </>
  );
}
