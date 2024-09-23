import { useEffect, useState } from "react";
import { toAbsoluteUrl } from "../../../_metronic/helpers";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../assets/sass/style-donate-view-1.scss";

const DonateView = () => {
  const [buttonText, setButtonText] = useState("Ủng hộ ngay");
  const [items, setItems] = useState([
    {
      description: "",
      name: "",
      image: "",
      uuid: false,
    },
  ]);
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
  const API_URL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(API_URL + "donate/beneficiaries/");
        return response.data;
      } catch (error) {
        return error;
      }
    };
    data().then((result) => {
      if (result instanceof Error) {
        return;
      } else {
        setItems(result.data);
      }
    });
  }, []);

  return (
    <>
      <div className="container-view-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="item-view-1"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="quote-view-1">
              <p>
                {item.description}
                <span>{item.name}</span>
              </p>
            </div>
            <div className="container neo-button-container">
              <a
                // href="/table"
                className="neo-button"
                onMouseEnter={() => setButtonText("Cảm ơn bạn")}
                onMouseLeave={() => setButtonText("Ủng hộ ngay")}
                onClick={() => {
                  if (item.uuid) {
                    window.location.href = `/donate/${item.uuid}`;
                  }
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { DonateView };
