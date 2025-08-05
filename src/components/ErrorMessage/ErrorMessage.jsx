import css from "./ErrorMessage.module.css";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

export default function ErrorMessage() {
  return (
    <>{iziToast.error({
      timeout: 2000,
      displayMode: 'once',
      position: "topRight",
      title: 'Error',
      overlay: false,
      zindex: 999,
      close:false,
      message: 'No images were found',
    })}</>
  );
}
