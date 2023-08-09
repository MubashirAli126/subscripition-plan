import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import {Form, Button} from 'react-bootstrap';
import styles from '../styles/component.module.css'

type TFormValues = {
  dob: string;
  phoneNumber: number;
};

export function Step2() {
  const { onHandleNext, setFormData, onHandleBack, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <>
    <Form onSubmit={handleSubmit(onHandleFormSubmit)}>
    <Form.Group className="mb-3" controlId="formBasicDob">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" {...register("dob")} autoFocus required={true} placeholder="Date of birth" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" {...register("phoneNumber")} required={true} placeholder="Enter Phone Number" />
      </Form.Group>
      <Button variant="primary" type="submit" className={styles.btnNext}>
        Next
      </Button>
      <Button onClick={onHandleBack} className={styles.btnBack}>
        Back
      </Button>
    </Form>
    </>
  );
}
