import { createAsyncThunk } from "@reduxjs/toolkit";
import emailjs from '@emailjs/browser';
import { ENV } from "../../env";

export const sendContactEmail = createAsyncThunk(
    "contact/sendContactEmail",
    async (contactData: { name: string; email: string; message: string; phone?: string }, { rejectWithValue }) => {
        try {
            const { email, name, message, phone } = contactData;
            const templateParams = {
                from_name: name,
                from_email: email,
                from_phone: phone,
                message: message,
            };
            console.log("📤 Dữ liệu gửi đi:", JSON.stringify(templateParams, null, 2));
            const res = await emailjs.send(
                ENV.EMAILJS_SERVICE_ID,
                ENV.EMAILJS_TEMPLATE_ID,
                templateParams,
                ENV.EMAILJS_PUBLIC_KEY,
            );
            if (res.status === 200) {
                console.log(" KẾT NỐI EMAILJS THÀNH CÔNG!", res);
                console.log("Check ID 2:", ENV.EMAILJS_AUTO_REPLY_TEMPLATE_ID);
                const resAutoReply = await emailjs.send(
                    ENV.EMAILJS_SERVICE_ID,
                    ENV.EMAILJS_AUTO_REPLY_TEMPLATE_ID,
                    templateParams,
                    ENV.EMAILJS_PUBLIC_KEY,

                );

                if (resAutoReply.status === 200) {
                    console.log("Đã gửi Auto-reply thành công cho khách!:");
                }
            }
            return res.status;
        } catch (error: any) {
            return rejectWithValue(error?.text || "Có lỗi xảy ra khi gửi email");
        }
    }
)