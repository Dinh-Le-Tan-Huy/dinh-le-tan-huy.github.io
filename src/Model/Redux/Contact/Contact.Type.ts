// Định nghĩa kiểu dữ liệu cho state của Contact
export interface ContactState {
    name: string;
    email: string;
    message: string;
    phone?: string;
    // Thêm các trạng thái để Thunk quản lý quá trình gọi API
    status: 'idle' | 'loading' | 'success' | 'failed';
    error: string | null;
}