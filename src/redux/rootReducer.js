import { combineReducers } from "redux";
import {
  addConsumerReducer,
  ConsumerListReducer,
  createPreviewReducer,
  deletePreviewReducer,
  downloadPreviewReducer,
  latestPreviewReducer,
  previewListReducer,
  updatePreviewReducer,
} from "./consumer/consumerReducer";
import { userLoginReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  addConsumer: addConsumerReducer,
  consumerList: ConsumerListReducer,
  previewCreate: createPreviewReducer,
  listPreview: previewListReducer,
  previewLatest: latestPreviewReducer,
  previewUpdate: updatePreviewReducer,
  previewDelete: deletePreviewReducer,
  previewDownload: downloadPreviewReducer,
});

export default rootReducer;
