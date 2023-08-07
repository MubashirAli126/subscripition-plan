import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";

type TFormValues = {
  dob: string;
  phoneNumber: string;
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
    <form
      className="flex gap-1 flex-col"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <label htmlFor="email">Date of Birth</label>
      <input
        autoFocus
        id="dob"
        {...register("dob")}
        className="border h-11 px-4 rounded-md focus:outline-blue-500 "
        required={true}
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        autoFocus
        id="phoneNumber"
        {...register("phoneNumber")}
        className="border h-11 px-4 rounded-md focus:outline-blue-500 "
        required={true}
      />
      
      <div className="flex gap-4 justify-end mt-4">
        <button
          type="button"
          onClick={onHandleBack}
          className="h-11 px-6 inline-block bg-blue-600 font-semibold text-white rounded-md"
        >
          Back
        </button>
        <button className="h-11 px-6 inline-block bg-blue-600 font-semibold text-white rounded-md">
          Next
        </button>
      </div>
    </form>
  );
}
