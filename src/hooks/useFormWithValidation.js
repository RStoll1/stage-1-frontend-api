import { useState } from "react";

export function useFormWithValidation(defaultValues = {}) {
    const [values, setValues] = useState(defaultValues);
    const [errors, setErrors] = useState({});
    const [showErrors] = useState(false);
    const [touched, setTouched] = useState({});

    function validateField(name, value) {
        const v = String(value ?? "").trim();

        if (name === "name" || name === "username") {
            if (!v) return "Name is required.";
            if (v.length > 60) return "Name must be 60 characters or fewer.";
            return "";
        }

        if (name === "email") {
            if (!v) return "Email is required.";
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(v)) return "Invalid email address.";
            return "";
        }

        if (name === "password") {
            if (!v) return "Password is required.";
            if (v.length < 6) return "Password must be at least 6 characters.";
            return "";
        }

        if (name === "keyword") {
            if (!v) return "Please enter a keyword";
            return "";
        }

        return "";
    }

    function handleChange(evt) {
        const { name, value, type, checked } = evt.target;
        const fieldValue = type === "checkbox" ? checked : value;

        setValues((prev) => {
            const next = { ...prev, [name]: fieldValue };
            // mark field as touched
            setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
            // validate just this field
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: validateField(name, fieldValue),
            }));
            return next;
        });
    }

    return {
        values,
        errors,
        showErrors,
        touched,
        handleChange,
    };
}
