import { useFormContext } from "react-hook-form";
import type { FormData } from "./types/types";

function Step2() {
  const { register } = useFormContext<FormData>();

  return (
    <div>
      <h2>Step 2: Contact</h2>
      <input {...register("email")} placeholder="Email" />
    </div>
  );
}

export default Step2;
