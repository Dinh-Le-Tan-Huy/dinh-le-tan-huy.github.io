import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../Model/Redux/store"
import type { ContactState } from "../Model/Redux/Contact/Contact.Type";
import { updateField } from "../Model/Redux/Contact/Contact.Slice";
import { sendContactEmail } from "../Model/Redux/Contact/Contact.Thunk";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string()
        .min(1, "Please enter your name")
        .min(2, "Name must be at least 2 characters")
        .trim(),
    email: z.string()
        .min(1, "Please enter your email address")
        .email("Please enter a valid email address")
        .trim(),
    message: z.string()
        .max(200, "Message must be under 200 characters")
        .optional()
        .or(z.literal("")),
});

export const useContact = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { email, name, message, status, error } = useSelector((state: RootState) => state.contact);

    // Local state cho UI
    const [submitted, setSubmitted] = useState(false);

    // Validate using Zod
    const validationResult = contactSchema.safeParse({ name, email, message });
    const isFormValid = validationResult.success;
    const isLoading = status === "loading";

    // Extract errors
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!validationResult.success) {
        validationResult.error.issues.forEach((err) => {
            const field = err.path[0] as keyof typeof errors;
            if (field && !errors[field]) {
                errors[field] = err.message;
            }
        });
    }

    // Hàm update data (gửi action lên Redux)
    const handleChangeField = (field: keyof ContactState, value: string) => {
        dispatch(updateField({ field, value }));
    };

    const handleSend = async () => {
        setSubmitted(true);
        if (!isFormValid) {
            return;
        }
        const resultAction = await dispatch(sendContactEmail({ name, email, message }));

        if (sendContactEmail.fulfilled.match(resultAction)) {
            console.log("Tin nhắn của bạn đã được gửi thành công!");
            setSubmitted(false);
        } else {
            console.log("Có lỗi xảy ra, vui lòng thử lại sau.");
        }
    }

    return {
        name,
        email,
        message,
        status,
        error,
        isLoading,
        submitted,
        isFormValid,
        errors,
        handleChangeField,
        handleSend
    }
}