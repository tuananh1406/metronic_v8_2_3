import { useEffect, useState } from "react";
import { toAbsoluteUrl } from "../../../_metronic/helpers";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CreateAppModal } from "../modal/InfoDonateModal";
import "../../assets/sass/style-donate-view-1.scss";

const DonateItem = () => {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.style.height = "100%";
    }
    return () => {
      if (root) {
        root.style.height = "auto";
      }
    };
  }, []);
  const { uid } = useParams();
  const API_URL = import.meta.env.VITE_APP_API_URL;
  const [showItems, setShowItems] = useState<boolean>(false);
  const [items, setItems] = useState([
    {
      name: "Error",
      image: toAbsoluteUrl("media/stock/600x400/img-1.jpg"),
      amount: JSON.stringify(0),
      description: "Không tìm thấy thông tin người nhận",
    },
  ]);
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false);
  const [showItemCreateAppModal, setItemCreateAppModal] = useState<any>(null);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          API_URL + "donate/beneficiaries/" + uid + "/"
        );
        return response.data;
      } catch (error) {
        return error;
      }
    };
    data().then((result) => {
      if (result instanceof Error) {
        setItems([
          {
            name: "Error",
            image: toAbsoluteUrl("media/stock/600x400/img-1.jpg"),
            amount: JSON.stringify(0),
            description: "Không tìm thấy thông tin người nhận",
          },
        ]);
        setShowItems(false);
        return;
      } else {
        // setItems(result.data.concat(result.data).concat(result.data));
        setItems(result.data);
        setShowItems(true);
      }
    });
  }, []);

  return (
    <div className="container">
      {showItems && (
        <>
          <div className="row d-flex flex-column-fluid flex-center">
            <div className="row g-6 g-xl-9">
              {items.map((item, index) => (
                <div className="col-md-6 col-xl-4" key={index}>
                  <div className="card card-custom card-stretch overlay overflow-hidden">
                    <div className="card-header justify-content-center">
                      <h3 className="card-title">{item.name}</h3>
                    </div>
                    <div className="card-body d-flex flex-center flex-column p-9">
                      <div className="bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5">
                        <img
                          src={item.image}
                          alt=""
                          className="bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5 w-100 rounded"
                        />
                      </div>
                      <p className="fs-5 text-white">{item.description}</p>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex flex-center flex-wrap mb-5 justify-content-center">
                        <a
                          href="#"
                          className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"
                          onClick={() => {
                            setShowCreateAppModal(true);
                            setItemCreateAppModal(item);
                          }}
                        >
                          <div className="fs-6 fw-bolder text-gray-700">
                            {item.amount} VND
                          </div>
                          <div className="fw-bold text-gray-500">Ủng hộ</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {!showItems && (
        <div className="row d-flex flex-column-fluid flex-center">
          <div className="row g-6 g-xl-9">
            <label className="form-label text-danger bg-light">
              Không tìm thấy thông tin người nhận
            </label>
          </div>
        </div>
      )}
          <div className="row d-flex flex-column-fluid flex-center">
            <div
              className="container neo-button-container"
              style={{ position: "unset", opacity: 1 }}
            >
              <a
                // href="/table"
                className="neo-button"
                onClick={() => {
                  window.location.href = `/donate`;
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Quay lại
              </a>
            </div>
          </div>

      <CreateAppModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
        item={showItemCreateAppModal}
      />
    </div>
  );
};

export { DonateItem };
