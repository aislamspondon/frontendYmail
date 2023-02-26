import { deletePreview } from "../consumer/actions";
import {
  DELETE_PREVIEW_FAIL,
  DELETE_PREVIEW_REQUEST,
} from "../consumer/actionType";
import axios from "../utils/axios";

const fetchDeleteConsumer = (preview_id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: DELETE_PREVIEW_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      console.log(preview_id);
      const { data } = await axios.delete(
        `api/consumer/deletepreview/${preview_id}`,
        config
      );
      dispatch(deletePreview(data));
    } catch (error) {
      dispatch({
        type: DELETE_PREVIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchDeleteConsumer;
