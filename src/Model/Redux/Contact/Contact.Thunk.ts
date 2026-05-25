import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ContactState } from "./Contact.Type";
import emailjs from '@emailjs/browser';
import { ENV } from "../../env";

export const sendContactEmail = createAsyncThunk(
    "contact/sendContactEmail",
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState() as { contact: ContactState };
            const { email, name, message } = state.contact;
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
            };
            const res = await emailjs.send(
                ENV.EMAILJS_SERVICE_ID,
                ENV.EMAILJS_TEMPLATE_ID,
                templateParams,
                ENV.EMAILJS_PUBLIC_KEY,
            );
            if (res.status === 200) {
                console.log("✅ KẾT NỐI EMAILJS THÀNH CÔNG!");
                console.log("Check ID 2:", ENV.EMAILJS_AUTO_REPLY_TEMPLATE_ID);
                const resAutoReply = await emailjs.send(
                    ENV.EMAILJS_SERVICE_ID,
                    ENV.EMAILJS_AUTO_REPLY_TEMPLATE_ID,
                    templateParams,
                    ENV.EMAILJS_PUBLIC_KEY,

                );

                if (resAutoReply.status === 200) {
                    console.log("✅ Đã gửi Auto-reply thành công cho khách!");
                }
            }
            return res.status;
        } catch (error) {
            return rejectWithValue(error.text || "Có lỗi xảy ra khi gửi email");
        }
    }
)