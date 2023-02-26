import { updatePreview } from "../consumer/actions";
import {
  UPDATE_PREVIEW_FAIL,
  UPDATE_PREVIEW_REQUEST,
} from "../consumer/actionType";
import axios from "../utils/axios";

const fetchUpdateConsumer = (
  preview_id,
  editOrder,
  editTransaction,
  initialAmount,
  totalCharges,
  paymentReference
) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_PREVIEW_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `api/consumer/updatepreview/${preview_id}`,
        {
          order: editOrder,
          transaction: editTransaction,
          initial_amount: initialAmount,
          total_charges: totalCharges,
          payment_reference: paymentReference,
        },
        config
      );
      dispatch(updatePreview(data));
    } catch (error) {
      dispatch({
        type: UPDATE_PREVIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchUpdateConsumer;
