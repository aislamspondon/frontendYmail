import { previewList } from "../consumer/actions";
import {
  PREVIEW_LIST_FAIL,
  PREVIEW_LIST_REQUEST,
} from "../consumer/actionType";
import axios from "../utils/axios";

const fetchPreviewList = async (dispatch, getState) => {
  try {
    dispatch({ type: PREVIEW_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`api/consumer/previewlist`, config);
    dispatch(previewList(data));
  } catch (error) {
    dispatch({
      type: PREVIEW_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchPreviewList;
