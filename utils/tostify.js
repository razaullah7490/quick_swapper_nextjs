import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EmitToast = (x) => {
    console.log({ x })

return toast(`${x}`, {

    });
}