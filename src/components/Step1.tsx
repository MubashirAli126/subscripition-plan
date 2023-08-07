import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";

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
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <div className="flex gap-1 flex-col">
        <label htmlFor="username">Username</label>
        <input
          autoFocus
          id="username"
          {...register("username")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>

      <label htmlFor="email">Email</label>
      <input
        // autoFocus
        id="email"
        {...register("email")}
        className="border h-11 px-4 rounded-md focus:outline-blue-500 "
        required={true}
      />
      <div className="flex justify-end">
        <button className="h-11 px-6 inline-block bg-blue-600 font-semibold text-white rounded-md">
          Next
        </button>
      </div>
    </form>
  );
}
