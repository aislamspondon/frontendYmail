import {
  CONSUMER_ADD_FAIL,
  CONSUMER_ADD_REQUEST,
  CONSUMER_ADD_SUCCESS,
  CREATE_PREVIEW_FAIL,
  CREATE_PREVIEW_REQUEST,
  CREATE_PREVIEW_SUCCESS,
  DELETE_PREVIEW_FAIL,
  DELETE_PREVIEW_REQUEST,
  DELETE_PREVIEW_SUCCESS,
  DOWNLOAD_PREVIEW_FAIL,
  DOWNLOAD_PREVIEW_REQUEST,
  DOWNLOAD_PREVIEW_SUCCESS,
  GET_CONSUMER_LIST_FAIL,
  GET_CONSUMER_LIST_REQUEST,
  GET_CONSUMER_LIST_SUCCESS,
  LATEST_PREVIEW_FAIL,
  LATEST_PREVIEW_REQUEST,
  LATEST_PREVIEW_SUCCESS,
  PREVIEW_LIST_FAIL,
  PREVIEW_LIST_REQUEST,
  PREVIEW_LIST_SUCCESS,
  UPDATE_PREVIEW_FAIL,
  UPDATE_PREVIEW_REQUEST,
  UPDATE_PREVIEW_SUCCESS,
} from "./actionType";

export const addConsumerReducer = (state = {}, action) => {
  switch (action.type) {
    case CONSUMER_ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONSUMER_ADD_SUCCESS:
      return {
        loading: false,
        consumer: action.payload,
        success: true,
        isError: false,
      };
    case CONSUMER_ADD_FAIL:
      return {
        loading: false,
        consumer: {},
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const ConsumerListReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CONSUMER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CONSUMER_LIST_SUCCESS:
      return {
        loading: false,
        consumers: action.payload,
        success: true,
        isError: false,
      };
    case GET_CONSUMER_LIST_FAIL:
      return {
        loading: false,
        consumers: [],
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const createPreviewReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PREVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PREVIEW_SUCCESS:
      return {
        loading: false,
        preview: action.payload,
        success: true,
        isError: false,
      };
    case CREATE_PREVIEW_FAIL:
      return {
        loading: false,
        preview: {},
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const previewListReducer = (state = {}, action) => {
  switch (action.type) {
    case PREVIEW_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PREVIEW_LIST_SUCCESS:
      return {
        loading: false,
        preview: action.payload,
        success: true,
        isError: false,
      };
    case PREVIEW_LIST_FAIL:
      return {
        loading: false,
        preview: [],
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const latestPreviewReducer = (state = {}, action) => {
  switch (action.type) {
    case LATEST_PREVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LATEST_PREVIEW_SUCCESS:
      return {
        loading: false,
        preview: action.payload,
        success: true,
        isError: false,
      };
    case LATEST_PREVIEW_FAIL:
      return {
        loading: false,
        preview: {},
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const updatePreviewReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PREVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PREVIEW_SUCCESS:
      return {
        loading: false,
        preview: action.payload,
        success: true,
        isError: false,
      };
    case UPDATE_PREVIEW_FAIL:
      return {
        loading: false,
        preview: {},
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deletePreviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PREVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PREVIEW_SUCCESS:
      return {
        loading: false,
        preview: action.payload,
        success: true,
        isError: false,
      };
    case DELETE_PREVIEW_FAIL:
      return {
        loading: false,
        preview: {},
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const downloadPreviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DOWNLOAD_PREVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DOWNLOAD_PREVIEW_SUCCESS:
      return {
        loading: false,
        preview: action.payload,
        success: true,
        isError: false,
      };
    case DOWNLOAD_PREVIEW_FAIL:
      return {
        loading: false,
        preview: {},
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
