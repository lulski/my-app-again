import {useFormContext, useWatch} from "react-hook-form";
import type { FormData } from "./types/types";

function Step1() {
  const { register, control } = useFormContext<FormData>();
  const firstName: string = useWatch({control, name: 'firstName'});
  const lastName: string = useWatch({control, name: 'lastName'});

  return (
    <div>
      <h2>Step 1: Name</h2>
      <input {...register("firstName")} placeholder="First Name" />
      <br />
      <input {...register("lastName")} placeholder="Last Name" />
        <br/>
        <p> Full name: {firstName} {lastName}</p>
    </div>
  );
}

export default Step1;
