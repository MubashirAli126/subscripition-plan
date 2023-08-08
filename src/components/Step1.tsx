import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import {Form, Button} from 'react-bootstrap';

type TFormValues = {
  username: string;
  email: string;
};

export function Step1() {
  const { onHandleNext, setFormData, formData } = useFormState();
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

    <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" {...register("username")} autoFocus required={false} placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" {...register("email")} required={false} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className="float-right">
        Next
      </Button>
    </Form>
    </>
  );
}
