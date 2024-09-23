import { Turnstile } from "@marsidev/react-turnstile";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../_metronic/helpers";
import { createPortal } from "react-dom";

type Props = {
  show: boolean;
  handleClose: () => void;
  item: any;
};

const API_URL = import.meta.env.VITE_APP_API_URL;
const getQRImage = async (
  id: string,
  turnstileResponse: string,
  name: string,
  message: string
) => {
  try {
    const response = await axios.post(API_URL + "donate/items/" + id + "/", {
      turnstile: turnstileResponse,
      name: name,
      message: message,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getTransactionQRImage = async (id: string) => {
  try {
    const response = await axios.get(
      API_URL + "donate/items/transactions/" + id + "/"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const modalsRoot = document.getElementById("root-modals") || document.body;

const CreateAppModal = ({ show, handleClose, item }: Props) => {
  const [showTurnstile, setShowTurnstile] = useState(false); // New state variable
  const turnstileRef = useRef();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showModalBody, setShowModalBody] = useState(true);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showButtonSubmit, setShowButtonSubmit] = useState(true);
  const [showLoadingQR, setShowLoadingQR] = useState(false);
  const [showButtonClose, setShowButtonClose] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [nameRequired, setNameRequired] = useState(false); // New state variable
  const [messageRequired, setMessageRequired] = useState(false); // New state variable
  const getQRImageRepeatedly = async (id: string) => {
    let data = null;
    while (!data || data.qr_code_image === "") {
      data = await getTransactionQRImage(id);
      console.log(data);
      if (!data || data.qr_code_image === "") {
        await new Promise((resolve) => setTimeout(resolve, 15000));
      }
    }
    return data;
  };
  const submit = () => {
    if (name.trim() === "" || message.trim() === "") {
      if (name.trim() === "") {
        setNameRequired(true);
      } else {
        setNameRequired(false);
      }
      if (message.trim() === "") {
        setMessageRequired(true);
      } else {
        setMessageRequired(false);
      }
      return;
    }
    setNameRequired(false);
    setMessageRequired(false);
    setShowTurnstile(true);
    // turnstileRef.current?.reset();
    // turnstileRef.current?.remove();
    // turnstileRef.current?.render();
  };
  useEffect(() => {
    if (show) {
      setTitle(item.name);
    }
    if (!show) {
      setShowModalSuccess(false);
    }
  }, [show, item]);

  return createPortal(
    <Modal
      id="kt_modal_create_app"
      tabIndex={-1}
      aria-hidden="true"
      dialogClassName="modal-dialog modal-dialog-centered mw-900px"
      show={show}
      onHide={handleClose}
    >
      <div className="modal-header">
        <h2>
          Cảm ơn bạn đã mua <b>{title}</b> cho mình. hãy cho mình biết thêm
          thông tin về bạn nhé!
        </h2>
        {/* begin::Close */}
        <div
          className="btn btn-sm btn-icon btn-active-color-primary"
          onClick={handleClose}
        >
          <KTIcon className="fs-1" iconName="cross" />
        </div>
        {/* end::Close */}
      </div>

      {showModalBody && (
        <div className="modal-body py-lg-10 px-lg-10">
          <div className="mb-10">
            <label className="form-label">
              Mình có thể gọi bạn là gì? (Tên/Biệt danh/Tên thân mật)
            </label>
            {nameRequired && (
              <div className="text-danger">
                Hãy cho mình biết bạn là ai đi mà T_T
              </div>
            )}
            <input
              type="text"
              className="form-control form-control-solid"
              placeholder="Nhà hảo tâm vô danh"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-10">
            <label className="form-label">Lời nhắn của bạn gửi tới mình</label>
            {messageRequired && (
              <div className="text-danger">Hãy nói gì đó đi mà T_T</div>
            )}
            <textarea
              className="form-control form-control-solid"
              placeholder="Mình rất vui khi được giúp đỡ bạn!"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {showTurnstile && (
            <div className="container mb-10">
              <Turnstile
                ref={turnstileRef}
                siteKey="0x4AAAAAAAdPz3n7LQAnuDCV"
                options={{
                  theme: "dark",
                  language: "vi",
                }}
                onSuccess={async (e) => {
                  setShowTurnstile(false);
                  setShowLoadingQR(true);
                  const data = getQRImage(item.id, e, name, message);
                  data.then((data) => {
                    if (data && data.id) {
                      const data2 = getQRImageRepeatedly(data.id);
                      data2.then((data2) => {
                        if (data2 && data2.qr_code_image) {
                          setImage(data2.qr_code_image);
                          setShowLoadingQR(false);
                          setShowModalSuccess(true);
                          setShowButtonSubmit(false);
                          setShowButtonClose(true);
                        }
                      });
                    }
                  });
                }}
              />
            </div>
          )}
          {showLoadingQR && (
            <div className="mb-10 d-flex flex-column-fluid justify-content-center align-items-center">
              <div
                className="spinner-border text-success text-center"
                style={{ width: "2rem", height: "2rem" }}
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <label className="form-label ms-3 justify-content-center align-items-center">
                Chờ một chút, mình đang tạo mã QR chuyển tiền cho bạn nhé...! 🤗
              </label>
            </div>
          )}
          {showModalSuccess && (
            <div className="mb-10">
              <label className="form-label">
                Mã QR chuyển tiền của bạn đã được tạo thành công. Hãy quét mã QR
                bên dưới để chuyển tiền cho mình nhé!<br></br> Hoặc bạn có thể{" "}
                <a href="/transactions">Click vào đây</a> để xem mình đã nhận
                được hay chưa nhé!
              </label>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={image}
                  alt=""
                  className="rounded"
                  style={{ width: "30%" }}
                />
              </div>
            </div>
          )}
          {showButtonSubmit && (
            <button
              type="button"
              className="btn btn-lg btn-primary"
              data-kt-stepper-action="submit"
              onClick={submit}
            >
              Submit{" "}
              <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
            </button>
          )}
          {showButtonClose && (
            <button
              type="button"
              className="btn btn-lg btn-primary"
              data-kt-stepper-action="submit"
              onClick={() => {
                handleClose();
                // Reset all states to their initial values
                setShowTurnstile(false);
                setName("");
                setMessage("");
                setShowModalBody(true);
                setShowModalSuccess(false);
                setShowButtonSubmit(true);
                setShowButtonClose(false);
                setImage("");
                setTitle("");
                setNameRequired(false);
                setMessageRequired(false);
              }}
            >
              Close <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
            </button>
          )}
        </div>
      )}
    </Modal>,
    modalsRoot
  );
};

export { CreateAppModal };
