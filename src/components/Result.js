import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import fetchDownloadPreview from "../redux/thunk/fetchDownloadPreview";
import Activity from "./Activity";
import TransactionDetails from "./TransactionDetails";

export default function Result() {
  const dispatch = useDispatch();
  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }
  const addConsumer = useSelector((state) => state.addConsumer);
  const { consumer, success } = addConsumer;
  const {
    name,
    email,
    phone,
    address,
    create_at,
    order,
    transaction,
    initial_amount,
    total_charges,
    payment_reference,
  } = consumer || {};
  let date = formatDate(create_at);
  const downloadBtn = (e) => {
    e.preventDefault();
    dispatch(
      fetchDownloadPreview(
        order,
        transaction,
        initial_amount,
        total_charges,
        payment_reference,
        name,
        address,
        email,
        phone
      )
    );
  };
  return (
    success && (
      <div>
        <Activity
          color="rgba(85, 117, 181, 80)"
          time={date}
          text="Created Account"
        />
        <div
          style={{
            width: "2px",
            height: "30px",
            margin: "0px 20px",
            background: "black",
          }}
        ></div>
        <Activity
          color="rgba(48, 204, 118, 80)"
          time={date}
          text="Account Activate"
        />
        <div
          style={{
            width: "2px",
            height: "30px",
            margin: "0px 20px",
            background: "black",
          }}
        ></div>
        <TransactionDetails
          order={order}
          transaction={transaction}
          initial_amount={initial_amount}
          total_charge={total_charges}
          payment_ref={payment_reference}
          name={name}
          email={email}
          phone={phone}
        />
        <Button variant="success" onClick={downloadBtn}>
          Click For Download
        </Button>
      </div>
    )
  );
}
