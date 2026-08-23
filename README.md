# ⚡ React Portfolio Web Application

> Template ứng dụng Web Portfolio xây dựng bằng **React 19**, **TypeScript**, và **Vite 8**, thiết kế theo mô hình kiến trúc **MVVM (Model - View - ViewModel)**.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

| Hạng mục | Công nghệ |
|---|---|
| **Core Framework** | React 19, TypeScript |
| **Bundler & Build Tool** | Vite 8 |
| **State Management** | Redux Toolkit, React Redux |
| **Routing** | React Router DOM v7 |
| **Data Validation** | Zod |
| **Multi-language (i18n)** | i18next, react-i18next |
| **Animation & Transitions** | Framer Motion, react-simple-typewriter |
| **Styling** | Vanilla CSS-in-JS (Design System tokens) |
| **Third-party Services** | EmailJS (`@emailjs/browser`) |
| **Code Quality** | ESLint, TypeScript-ESLint |

---

## 🏗️ Cấu Trúc Dự Án (Project Structure)

Dự án áp dụng mô hình phân tách tầng **MVVM (Model - View - ViewModel)** kết hợp hệ thống Design System độc lập:

```
portfolio/
├── public/                       # Static assets (favicons, icons, public images)
├── src/
│   ├── assets/                   # Media files nội bộ (images, svg, icons)
│   ├── locales/                  # Cấu hình đa ngôn ngữ (i18n JSON files)
│   │   ├── en/                   # Bản dịch tiếng Anh (translation.json)
│   │   └── vi/                   # Bản dịch tiếng Việt (translation.json)
│   │
│   ├── Model/                    # Data Layer & External Integrations
│   │   ├── env/                  # Quản lý và export biến môi trường (ENV object)
│   │   │   └── index.ts
│   │   └── Redux/                # Redux Store, Slices, Thunks, và Types
│   │       ├── store.ts          # Root Redux store configuration
│   │       ├── About/            # State slice cho trang About
│   │       └── Contact/          # State slice, async thunks & types cho Contact form
│   │
│   ├── ViewModel/                # Business Logic & Custom Hooks Layer
│   │   ├── useAbout.ts           # Logic xử lý dữ liệu và state của About
│   │   ├── useContact.ts         # Validation Zod, logic gửi email, quản lý form
│   │   └── useHeader.ts          # State đóng/mở menu navigation header
│   │
│   ├── View/                     # Presentation / UI Layer
│   │   ├── DesignSystem/         # Design Tokens chuẩn hóa UI
│   │   │   ├── Colors.ts         # Bảng màu (Theme colors, gradients, surfaces)
│   │   │   ├── Typography.ts     # Cỡ chữ, font weights, line heights
│   │   │   ├── Spacing.ts        # Khoảng cách lề, padding, gap
│   │   │   └── Radius.ts         # Bo góc (Border radius tokens)
│   │   │
│   │   ├── Components/           # UI Components dùng chung
│   │   │   ├── CardInfo/         # Timeline / Info display component
│   │   │   ├── CardItem/         # Card hiển thị theo dạng default hoặc note
│   │   │   ├── ChatBubbleItem/   # Accordion / Chat bubble component
│   │   │   ├── Dot.tsx           # Background / animated dot visual effect
│   │   │   ├── Header/           # Navigation header với animation
│   │   │   ├── Footer/           # Footer component
│   │   │   ├── Input/            # Input form với validation UI
│   │   │   └── ScrollToHash/     # Hỗ trợ tự động cuộn trang theo hash URL
│   │   │
│   │   └── layout/               # Layouts và Pages
│   │       ├── MainLayout/       # Layout wrapper chung (Header, Content, Footer)
│   │       ├── Home/             # Các section trang Home (Hero, Skills, Projects, FAQ, ...)
│   │       ├── About/            # Bố cục trang giới thiệu chi tiết
│   │       └── Contact/          # Bố cục trang liên hệ & form gửi tin nhắn
│   │
│   ├── i18n.ts                   # Khởi tạo và cấu hình i18next
│   ├── App.tsx                   # Khởi tạo React Router DOM và layout chính
│   ├── App.css                   # Global styles cho application
│   ├── index.css                 # Base CSS reset & typography imports
│   └── main.tsx                  # Entry point React application
│
├── .env.example                  # Template khai báo biến môi trường
├── eslint.config.js              # Cấu hình linter ESLint
├── tsconfig.json                 # Cấu hình TypeScript root
├── tsconfig.app.json             # Cấu hình TypeScript cho App
├── tsconfig.node.json            # Cấu hình TypeScript cho Vite/Node scripts
└── vite.config.ts                # Cấu hình Vite bundler & plugins
```

---

## ⚙️ Cấu Hình Biến Môi Trường (Environment Configuration)

Tạo file `.env` tại thư mục gốc của dự án dựa trên mẫu [`.env.example`](.env.example):

```bash
cp .env.example .env
```

### Chi tiết các biến môi trường:

| Biến môi trường | Bắt buộc | Mô tả |
|---|:---:|---|
| `VITE_API_BASE_URL` | Không | Đường dẫn API backend (nếu có tích hợp REST API) |
| `VITE_API_URL` | Không | URL endpoint API phụ trợ |
| `VITE_EMAILJS_SERVICE_ID` | Có (nếu dùng Contact Form) | Service ID lấy từ Dashboard của [EmailJS](https://www.emailjs.com/) |
| `VITE_EMAILJS_TEMPLATE_ID` | Có (nếu dùng Contact Form) | Template ID mẫu gửi email cho admin |
| `VITE_EMAILJS_PUBLIC_KEY` | Có (nếu dùng Contact Form) | Public Key (API Key) từ tài khoản EmailJS |
| `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID` | Không | Template ID phản hồi tự động cho người gửi |

> **Lưu ý:** Không commit file `.env` chứa thông tin nhạy cảm vào Git repository.

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Ứng Dụng (Getting Started)

### Yêu Cầu Hệ Thống (Prerequisites)
- **Node.js**: Phiên bản 18.x trở lên
- **npm**: Phiên bản 9.x trở lên (hoặc `yarn` / `pnpm`)

### 1. Cài đặt Dependencies
```bash
npm install
```

### 2. Chạy Development Server
```bash
npm run dev
```
Truy cập ứng dụng tại: `http://localhost:5173`

### 3. Kiểm Tra Lỗi Code (Linting)
```bash
npm run lint
```

### 4. Build Production Bundle
```bash
npm run build
```
Kết quả build được xuất ra thư mục `dist/`.

### 5. Preview Bản Build Production
```bash
npm run preview
```

### 6. Deploy lên GitHub Pages
```bash
npm run deploy
```

---

## 🧩 Quy Chuẩn Kiến Trúc & Luồng Dữ Liệu

1. **Model Layer (`src/Model`)**:
   - Chịu trách nhiệm lưu trữ cấu hình môi trường, schema dữ liệu và Redux store/slices.
   - Thunk xử lý các tác vụ bất đồng bộ độc lập với component giao diện.

2. **ViewModel Layer (`src/ViewModel`)**:
   - Sử dụng React Custom Hooks làm cầu nối giữa State/Redux và UI.
   - Thực hiện validation dữ liệu bằng **Zod Schema** trước khi dispatch actions.

3. **View Layer (`src/View`)**:
   - Toàn bộ component UI chỉ nhận props và gọi handlers từ ViewModel.
   - Mọi giá trị màu sắc, khoảng cách, font chữ được tham chiếu tập trung từ `src/View/DesignSystem/`.

4. **Đa Ngôn Ngữ (`src/locales/` & `src/i18n.ts`)**:
   - Hỗ trợ chuyển đổi ngôn ngữ linh hoạt qua các file từ điển JSON (`vi`, `en`).
