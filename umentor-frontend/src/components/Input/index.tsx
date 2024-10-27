import React from "react";
import * as C from "./styles";

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export const Input = ({ type, placeholder, value, onChange } : InputProps) => {
    return (
        <C.Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        />
    );
};

