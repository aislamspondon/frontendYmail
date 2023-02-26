import {
  CONSUMER_ADD_SUCCESS,
  CREATE_PREVIEW_SUCCESS,
  DELETE_PREVIEW_SUCCESS,
  DOWNLOAD_PREVIEW_SUCCESS,
  GET_CONSUMER_LIST_SUCCESS,
  LATEST_PREVIEW_SUCCESS,
  PREVIEW_LIST_SUCCESS,
  UPDATE_PREVIEW_SUCCESS,
} from "./actionType";

export const addConsumer = (data) => {
  return {
    type: CONSUMER_ADD_SUCCESS,
    payload: data,
  };
};

export const getConsumerList = (data) => {
  return {
    type: GET_CONSUMER_LIST_SUCCESS,
    payload: data,
  };
};

export const createPreview = (data) => {
  return {
    type: CREATE_PREVIEW_SUCCESS,
    payload: data,
  };
};

export const previewList = (data) => {
  return {
    type: PREVIEW_LIST_SUCCESS,
    payload: data,
  };
};

export const latestPreview = (data) => {
  return {
    type: LATEST_PREVIEW_SUCCESS,
    payload: data,
  };
};

export const updatePreview = (data) => {
  return {
    type: UPDATE_PREVIEW_SUCCESS,
    payload: data,
  };
};

export const deletePreview = (data) => {
  return {
    type: DELETE_PREVIEW_SUCCESS,
    payload: data,
  };
};

export const downloadPreview = (data) => {
  return {
    type: DOWNLOAD_PREVIEW_SUCCESS,
    payload: data,
  };
};
