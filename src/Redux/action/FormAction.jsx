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

export { sendForm, handleGet };
