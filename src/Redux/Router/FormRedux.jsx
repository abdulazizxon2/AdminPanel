import { FormTypes } from "../action/ActionTypes";

const data = {
  products: [],
};

export const FormRedux = (state = data, { type, payload }) => {
  switch (type) {
    case FormTypes.dataGet:
      let { katalogdata } = payload;
      state = { ...state, products: [...katalogdata] };
      return state;
    case FormTypes.submit:
      console.log(payload);
      state = { ...state, products: [...state.products, payload] };
      return state;
    default:
      return state;
  }
};
