import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import fetchDeleteConsumer from "../redux/thunk/fetchDeletePreview";
import fetchUpdateConsumer from "../redux/thunk/fetchUpdatePreview";
export default function PreviewList({ preview, onChildClick }) {
  const {
    id: preview_id,
    order,
    transaction,
    initial_amount,
    total_charges,
    payment_reference,
  } = preview || {};
  const dispatch = useDispatch();
  const [convertForm, setConvertForm] = useState(false);
  const [editOrder, setEditOrder] = useState(order);
  const [editTransaction, setEditTransaction] = useState(transaction);
  const [initialAmount, setInitialAmount] = useState(initial_amount);
  const [totalCharges, setTotalCharges] = useState(total_charges);
  const [paymentReference, setPaymentReference] = useState(payment_reference);
  const cancel = () => {
    setConvertForm(false);
  };

  const save = () => {
    dispatch(
      fetchUpdateConsumer(
        preview_id,
        editOrder,
        editTransaction,
        initialAmount,
        totalCharges,
        paymentReference
      )
    );
    setConvertForm(false);
  };
  const editHandler = () => {
    setConvertForm(true);
  };
  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete this case?")) {
      dispatch(fetchDeleteConsumer(preview_id));
      onChildClick(preview_id);
    }
  };

  return (
    <tr>
      <td>{preview_id}</td>
      <td>
        {convertForm ? (
          <input
            type="text"
            name="order"
            value={editOrder}
            style={{
              background: "#3E444A",
              border: "none",
              color: "#FFFFFF",
              outline: "none",
              width: "100%",
              height: "45px",
              textAlign: "center",
            }}
            onChange={(e) => setEditOrder(e.target.value)}
          />
        ) : (
          editOrder
        )}
      </td>
      <td>
        {convertForm ? (
          <input
            type="text"
            name="transaction"
            value={editTransaction}
            style={{
              background: "#3E444A",
              border: "none",
              color: "#FFFFFF",
              outline: "none",
              width: "100%",
              height: "45px",
              textAlign: "center",
            }}
            onChange={(e) => setEditTransaction(e.target.value)}
          />
        ) : (
          editTransaction
        )}
      </td>
      <td>
        {convertForm ? (
          <input
            type="text"
            name="initialAmount"
            value={initialAmount}
            style={{
              background: "#3E444A",
              border: "none",
              color: "#FFFFFF",
              outline: "none",
              width: "100%",
              height: "45px",
              textAlign: "center",
            }}
            onChange={(e) => setInitialAmount(e.target.value)}
          />
        ) : (
          editOrder
        )}
      </td>
      <td>
        {convertForm ? (
          <input
            type="text"
            name="totalCharge"
            value={totalCharges}
            style={{
              background: "#3E444A",
              border: "none",
              color: "#FFFFFF",
              outline: "none",
              width: "100%",
              height: "45px",
              textAlign: "center",
            }}
            onChange={(e) => setTotalCharges(e.target.value)}
          />
        ) : (
          totalCharges
        )}
      </td>
      <td>
        {convertForm ? (
          <input
            type="text"
            name="order"
            value={paymentReference}
            style={{
              background: "#3E444A",
              border: "none",
              color: "#FFFFFF",
              outline: "none",
              width: "100%",
              height: "45px",
              textAlign: "center",
            }}
            onChange={(e) => setPaymentReference(e.target.value)}
          />
        ) : (
          paymentReference
        )}
      </td>
      <td style={{ textAlign: "center" }}>
        <Button variant="success" onClick={convertForm ? save : editHandler}>
          {convertForm ? "Save" : "Edit"}
        </Button>
      </td>
      <td style={{ textAlign: "center" }}>
        <Button variant="danger" onClick={convertForm ? cancel : deleteHandler}>
          {convertForm ? "Cancel" : "Delete"}
        </Button>
      </td>
    </tr>
  );
}
