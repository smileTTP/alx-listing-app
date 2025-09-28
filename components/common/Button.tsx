import React from "react";
import { ButtonProps } from "@/interfaces";

export default function Button({label, onClick}: ButtonProps) {
    return (
        <button onClick={onClick}>{label}</button>
    );
}