import React from "react";
import { Path, FieldValues, UseFormRegister } from "react-hook-form"


type TInputProps<TFieldValue extends FieldValues> = {
    label: string;
    name: Path<TFieldValue>;
    type?: string;
    register: UseFormRegister<TFieldValue>;
    errorMessage: string;
    checkMessage?: string;
    successMessage?: string;
    disabled?: boolean;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = <TFieldValue extends FieldValues>({ label, name, type = "text", register, errorMessage, checkMessage, successMessage, disabled, onBlur }: TInputProps<TFieldValue>) => {
    const onBlurHandler = (e:React.FocusEvent<HTMLInputElement>) => {
        if(onBlur){
            onBlur(e);
            register(name).onBlur(e);
        }else{
            register(name).onBlur(e);
        }
    }
    return (
        <div className="flex flex-col my-4">
            <label className="text-gray-700 text-base">{label}</label>
            <input type={type} className="mt-2 p-1 border border-gray-300 rounded text-base text-gray-900" {...register(name)} onBlur={onBlurHandler} disabled={disabled}/>
            <span className="text-red-400 italic">{errorMessage}</span>
            <span className="text-gray-600 italic">{checkMessage}</span>
            <span className="text-green-400 italic">{successMessage}</span>
        </div>
    )
}

export default Input;