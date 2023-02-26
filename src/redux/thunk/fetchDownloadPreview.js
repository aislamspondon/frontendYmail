import { downloadPreview } from "../consumer/actions";
import {
  DOWNLOAD_PREVIEW_FAIL,
  DOWNLOAD_PREVIEW_REQUEST,
} from "../consumer/actionType";
import axios from "../utils/axios";

const fetchDownloadPreview = (
  order,
  transaction,
  initial_amount,
  total_charge,
  payment_reference,
  name,
  address,
  email,
  phone
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DOWNLOAD_PREVIEW_REQUEST });
      const { data } = await axios.post(
        "api/consumer/downloadinvoice",
        {
          order: order,
          transaction: transaction,
          initial_amount: initial_amount,
          total_charges: total_charge,
          payment_reference: payment_reference,
          name: name,
          address: address,
          email: email,
          phone: phone,
        },
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "invoice.pdf");
      document.body.appendChild(link);
      link.click();
      dispatch(downloadPreview(data));
    } catch (error) {
      dispatch({
        type: DOWNLOAD_PREVIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchDownloadPreview;
