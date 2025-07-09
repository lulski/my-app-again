import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import type { FormData } from "./types/types";

function App() {
  const methods = useForm<FormData>();
  const [step, setStep] = useState(1);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Final Form Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}

        <div style={{ marginTop: 20 }}>
          {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}
          {step < 2 && (
            <button type="button" onClick={() => setStep(step + 1)}>
              Next
            </button>
          )}
          {step === 2 && <button type="submit">Submit</button>}
        </div>
      </form>
    </FormProvider>
  );
}

export default App;
