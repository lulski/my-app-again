import {useFormContext, useWatch} from "react-hook-form";
import type { FormData } from "./types/types";
import {useEffect} from "react";

function Step2() {
  const { register, control, setValue } = useFormContext<FormData>();
  const firstName = useWatch({control, name: "firstName"});

  useEffect(()=>{
      if (firstName === "admin") {
          setValue("email", "admin@test.com")
      }
  },[firstName,setValue])

  return (
    <div>
      <h2>Step 2: Contact</h2>
      <input {...register("email")} placeholder="Email" />
    </div>
  );
}

export default Step2;
