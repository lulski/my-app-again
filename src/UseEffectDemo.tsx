import {useFormContext, useWatch} from "react-hook-form";
import type { FormData } from "./types/types";
import {useEffect} from "react";

function UseEffectDemo() {
    const {register, control, setValue} = useFormContext<FormData>();
    const watch1 = useWatch({control, name: "useEffectField"});

    useEffect(()=>{
        console.log("useEffect called");
        setValue("affectedField", watch1);
    },[watch1, setValue])

    return (
        <div>
            <h3>useEffect demo</h3>
            <input {...register("useEffectField")} placeholder="useEffect Field" />
            <br/>
            <input {...register("affectedField")} placeholder="Field affected by useEffect " />
        </div>
    )
}
export default UseEffectDemo;