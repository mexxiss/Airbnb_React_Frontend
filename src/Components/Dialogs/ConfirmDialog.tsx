import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

interface ConfirmDialogProps {
    title: string;
    text: string;
    confirmText?: string;
    cancelText?: string;
    confirmButtonColor?: string;
    cancelButtonColor?: string;
    onConfirm: () => void;
    onCancel?: () => void;
}

const ConfirmDialog = ({
    title,
    text,
    confirmText = "Yes",
    cancelText = "No",
    confirmButtonColor = "#bb9e6c",
    cancelButtonColor = "",
    onConfirm,
    onCancel,
}: ConfirmDialogProps) => {
    Swal.fire({
        title,
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor,
        cancelButtonColor,
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        } else if (onCancel) {
            onCancel();
        }
    });
};

export default ConfirmDialog;
