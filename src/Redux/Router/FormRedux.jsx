import { FormTypes } from "../action/ActionTypes";

const data = {
  products: [],
};

export const FormRedux = (state = data, { type, payload }) => {
  switch (type) {
    case FormTypes.open:
      state = { ...state, open: !state.open }
      return state;
    case FormTypes.dataGet:
      let { katalogdata } = payload;
      state = { ...state, products: [...katalogdata] };
      return state;
    case FormTypes.submit:
      console.log(payload);
      state = { ...state, products: [...state.products, payload] };
      return state;
      case FormTypes.delete:
        console.log(state);
      state = {
        ...state,
        products: state.products.filter((param) => param.id !== payload),
      };
      // toast.success("O'chirildi");
      return state;
    default:
      return state;
  }
};
