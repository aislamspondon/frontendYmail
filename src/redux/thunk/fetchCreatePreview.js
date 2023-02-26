import { createPreview } from "../consumer/actions";
import {
  CREATE_PREVIEW_FAIL,
  CREATE_PREVIEW_REQUEST,
} from "../consumer/actionType";
import axios from "../utils/axios";

const fetchCreatePreview = (
  order,
  transaction,
  initialAmount,
  totalCharges,
  paymentReference
) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_PREVIEW_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `api/consumer/createpreview`,
        {
          order: order,
          transaction: transaction,
          initial_amount: initialAmount,
          total_charges: totalCharges,
          payment_reference: paymentReference,
        },
        config
      );
      dispatch(createPreview(data));
    } catch (error) {
      dispatch({
        type: CREATE_PREVIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchCreatePreview;
