import { addConsumer } from "../consumer/actions";
import {
  CONSUMER_ADD_FAIL,
  CONSUMER_ADD_REQUEST,
} from "../consumer/actionType";
import axios from "../utils/axios";

const fetchAddConsumer = (name, phone, email, address) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CONSUMER_ADD_REQUEST });
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "api/consumer/input",
        {
          name: name,
          phone: phone,
          email: email,
          address: address,
        },
        config
      );
      dispatch(addConsumer(data));
    } catch (error) {
      dispatch({
        type: CONSUMER_ADD_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchAddConsumer;
