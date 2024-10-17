import { useEffect, useState } from "react";
import { KTIcon, KTSVG } from "../../../_metronic/helpers";
import axios from "axios";

const TransactionsLog = () => {
  // const { uid } = useParams();
  const API_URL = import.meta.env.VITE_APP_API_URL;
  const [showWorker, setShowWorker] = useState(false);
  const [workers, setWorkers] = useState([
    {
      worker_name: "abc@testing",
      status: "Online",
      updated_at: "2024-07-04 09:28:23",
    },
  ]);
  const [transactions, setTransactions] = useState([
    {
      created_at: "2024-07-04 06:24:16",
      id: 1,
      posting_date: "2024-07-04 09:15:00",
      transaction_date: "2024-07-04 09:15:00",
      account_no: "0110134727004",
      credit_amount: "10000.00",
      debit_amount: "0.00",
      currency: "VND",
      description: "CUSTOMER Ma ung ho 16 Trace 601989",
      add_description: "Ma ung ho 16 Trace 601989",
      available_balance: "31105.00",
      beneficiary_account: "",
      ref_no: "FT24186413505091\\BNK",
      ben_account_name: "",
      bank_name: "",
      ben_account_no: "",
      due_date: null,
      doc_id: "",
      transaction_type: "ACSM",
      pos: "00001152350135144046",
      tracing_type: "",
    },
  ]);

  useEffect(() => {
    const transactions = async () => {
      try {
        const response = await axios.get(API_URL + "donate/transactions/");
        return response.data;
      } catch (error) {
        return error;
      }
    };
    transactions().then((result) => {
      if (result instanceof Error) {
        setTransactions([]);
        return;
      } else {
        setTransactions(result.data);
      }
    });

    const workers = async () => {
      try {
        const response = await axios.get(API_URL + "donate/workers/status/");
        return response.data;
      } catch (error) {
        return error;
      }
    };
    workers().then((result) => {
      if (result instanceof Error) {
        setWorkers([]);
        setShowWorker(false);
        return;
      } else {
        setWorkers(result.data);
        setShowWorker(true);
      }
    });
  }, []);

  return (
    <>
      <div className="container d-flex flex-column-fluid flex-center">
        <div className="card mt-8 mt-xl-8 mb-8 mb-xl-10">
          <div className="card-header justify-content-center border-0 pt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bold fs-3 mb-1">
                Danh sách giao dịch trong tài khoản
              </span>
              {showWorker && (
                <div className="d-flex flex-wrap flex-column fw-bold fs-6 mt-2 mb-2">
                  {workers &&
                    workers.map((worker) => (
                      <>
                        <a className="d-flex align-items-center text-gray-500 text-hover-primary me-5">
                          <KTSVG
                            path="media/icons/duotune/general/gen043.svg"
                            className="text-success me-1"
                          />
                          <div className="badge badge-light-success fw-bolder">
                            {worker.worker_name} kiểm tra lúc{" "}
                            {worker.updated_at}
                          </div>
                        </a>
                      </>
                    ))}
                </div>
              )}
            </h3>
          </div>
          {/* end::Header */}
          {/* begin::Body */}
          <div className="card-body py-3">
            {/* begin::Table container */}
            <div className="table-responsive">
              {/* begin::Table */}
              <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                {/* begin::Table head */}
                <thead>
                  <tr className="fw-bold text-muted">
                    <th className="min-w-150px text-center">
                      Thời điểm thực hiện
                    </th>
                    <th className="min-w-140px text-center">Tài khoản nhận</th>
                    <th className="min-w-120px">Số tiền</th>
                    <th className="min-w-120px text-center">Tiền tệ</th>
                    <th className="min-w-120px text-center">
                      Nội dung giao dịch
                    </th>
                    <th className="min-w-140px">Số dư tài khoản</th>
                    <th className="min-w-120px text-center">Mã tham chiếu</th>
                    <th className="min-w-100px text-center">POS</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {transactions.map((transaction) => (
                    <tr>
                      <td>
                        <a className="text-gray-900 fw-bold text-hover-primary fs-6">
                          {transaction.transaction_date}
                        </a>
                      </td>
                      <td>
                        <a className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">
                          {transaction.account_no}
                        </a>
                      </td>
                      <td>
                        {!isNaN(Number(transaction.credit_amount)) &&
                        Number(transaction.credit_amount) > 0 ? (
                          <a className="text-success fw-bold text-hover-primary d-block mb-1 fs-6">
                            +{Number(transaction.credit_amount)}
                          </a>
                        ) : (
                          <a className="text-danger fw-bold text-hover-primary d-block mb-1 fs-6">
                            -{Number(transaction.debit_amount)}
                          </a>
                        )}
                      </td>
                      <td>
                        <a className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">
                          {transaction.currency}
                        </a>
                      </td>
                      <td className="text-gray-900 fw-bold text-hover-primary fs-6">
                        {transaction.description}
                      </td>
                      <td>
                        <a className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">
                          <span className="text-success fs-7 fw-bold">
                            {Number(
                              transaction.available_balance
                            ).toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                        </a>
                      </td>
                      <td>
                        <span className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">
                          {transaction.ref_no}
                        </span>
                      </td>
                      <td className="text-end">
                        <span className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">
                          {transaction.pos}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* end::Table body */}
              </table>
              {/* end::Table */}
            </div>
            {/* end::Table container */}
          </div>
          {/* begin::Body */}
        </div>
      </div>
    </>
  );
};

export { TransactionsLog };
