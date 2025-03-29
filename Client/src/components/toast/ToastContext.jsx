import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ message: null, type: "info" });

  const showToast = (message, type = "info") => {
    setToast({ message, type }); // กำหนดข้อความและประเภท
    setTimeout(() => setToast({ message: null, type: "info" }), 3000); // รีเซ็ตหลัง 3 วิ
  };

  // กำหนดคลาสตาม `type`
  const getAlertClass = () => {
    switch (toast.type) {
      case "success":
        return "alert alert-success";
      case "warning":
        return "alert alert-warning";
      case "error":
        return "alert alert-error";
      default:
        return "alert alert-info";
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.message && (
        <div className="toast toast-end">
          <div className={getAlertClass()}>{toast.message}</div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
