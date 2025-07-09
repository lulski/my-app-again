import { useFormContext } from "react-hook-form";
import type { FormData } from "./types/types";

function Step1() {
  const { register } = useFormContext<FormData>();

  return (
    <div>
      <h2>Step 1: Name</h2>
      <input {...register("firstName")} placeholder="First Name" />
      <br />
      <input {...register("lastName")} placeholder="Last Name" />
    </div>
  );
}

export default Step1;
