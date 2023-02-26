import React from "react";

export default function CustomerInfo({ index, consumer }) {
  const { name, email, address, phone } = consumer || {};
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{address}</td>
    </tr>
  );
}
