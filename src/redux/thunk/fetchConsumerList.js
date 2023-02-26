import { getConsumerList } from "../consumer/actions";
import {
  GET_CONSUMER_LIST_FAIL,
  GET_CONSUMER_LIST_REQUEST,
} from "../consumer/actionType";
import axios from "../utils/axios";

const fetchConsumerList = async (dispatch, getState) => {
  try {
    dispatch({ type: GET_CONSUMER_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`api/consumer/customerlist`, config);
    dispatch(getConsumerList(data));
  } catch (error) {
    dispatch({
      type: GET_CONSUMER_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchConsumerList;
