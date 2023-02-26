import { latestPreview } from "../consumer/actions";
import {
  LATEST_PREVIEW_FAIL,
  LATEST_PREVIEW_REQUEST,
} from "../consumer/actionType";
import axios from "../utils/axios";

const fetchLatestPreview = async (dispatch, getState) => {
  try {
    dispatch({ type: LATEST_PREVIEW_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`api/consumer/latestpreview`, config);
    dispatch(latestPreview(data));
  } catch (error) {
    dispatch({
      type: LATEST_PREVIEW_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchLatestPreview;
