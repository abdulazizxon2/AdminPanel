import { FormTypes } from "./ActionTypes";

function sendForm(p) {
  return {
    type: FormTypes.submit,
    payload: p,
  };
}
function handleGet(p) {
  return {
    type: "dataGet",
    payload: p,
  };
}
function handleDelete(param) {
  return {
      type: FormTypes.delete,
      payload: param,
  };
}
function Open() {
  return {
    type: FormTypes.open
  }
}

export { sendForm, handleGet,handleDelete,Open };
