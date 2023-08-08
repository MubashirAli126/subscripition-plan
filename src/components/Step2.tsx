import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import {Form, Button} from 'react-bootstrap';

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
        <Form.Control type="date" {...register("dob")} autoFocus required={false} placeholder="Date of birth" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" {...register("phoneNumber")} required={false} placeholder="Enter Phone Number" />
      </Form.Group>
      <Button variant="primary" type="submit" className="float-right">
        Next
      </Button>
      <Button onClick={onHandleBack}>
        Back
      </Button>
    </Form>
    </>
  );
}
