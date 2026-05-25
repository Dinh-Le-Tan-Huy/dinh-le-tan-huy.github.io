import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../Model/Redux/store"
import type { ContactState } from "../Model/Redux/Contact/Contact.Type";
import { updateField } from "../Model/Redux/Contact/Contact.Slice";
import { sendContactEmail } from "../Model/Redux/Contact/Contact.Thunk";
import { useState } from "react";

export const useContact = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { email, name, message, status } = useSelector((state: RootState) => state.contact);

    // Local state cho UI
    const [submitted, setSubmitted] = useState(false);
    // kt form 
    const isFormValid = email.trim() !== "" && name.trim() !== "";
    const isLoading = status === "loading";

    // Hàm update data (gửi action lên Redux)
    const handleChangeField = (field: keyof ContactState, value: string) => {
        dispatch(updateField({ field, value }));
    };

    const handleSend = async () => {
        setSubmitted(true);
        if (!isFormValid) {
            return;
        }
        const resultAction = await dispatch(sendContactEmail());

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
        isLoading,
        submitted,
        isFormValid,
        handleChangeField,
        handleSend
    }

}