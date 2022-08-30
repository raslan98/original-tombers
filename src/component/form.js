import React from "react";
import { useForm } from "react-hook-form";
import './index.css';

function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <div><input type="text" placeholder="ENTER YOUR EMAIL ADDRESS" {...register("example")} /> </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="button" value="GET STARTED" />
        </form>
)
}



export default FormValidation;