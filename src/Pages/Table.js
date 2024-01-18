import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDelete } from "../Redux/action/FormAction";

export default function Table() {
  let { products } = useSelector((state) => state.FormRedux);
  let dispatch = useDispatch();

  return (
    <div>
      <table border={"1px"}>
        <thead>
          <tr>
            <th className="number">№</th>
            <th>Nomi</th>
            <th>Soni</th>
            <th>Narx</th>
            <th>Chegirma</th>
            <th>Rangi</th>
            <th>Brand</th>
            <th>Kategorya</th>
            <th>Material</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((elem, index) => {
            return (
              <tr key={elem?.id}>
                <th>{index + 1}</th>
                <td>{elem?.nomi}</td>
                <td>{elem?.count}</td>
                {elem?.skidka ? (
                  <td>
                    <b className="b1">
                      {(
                        elem?.narxi -
                        (elem?.narxi / 100) * elem?.skidka
                      ).toFixed(2)}
                      ₽
                    </b>
                  </td>
                ) : (
                  <td>
                    <span>
                      <b>{elem?.narxi}₽</b>
                    </span>
                  </td>
                )}
                <td>
                  <b>{elem?.skidka ? `${elem?.skidka}%` : "-"}</b>
                </td>
                <td>{elem?.color}</td>
                <td>{elem?.brend}</td>
                <td>{elem?.kategorya}</td>
                <td>{elem?.material}</td>
                <td>
                  <button onClick={() => dispatch(handleDelete(elem?.id))}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
