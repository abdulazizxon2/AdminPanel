import React from "react";
import { useSelector } from "react-redux";

export default function Table() {
  let { products } = useSelector((state) => state.FormRedux);
  return (
    <div>
      <table border={"1px"}>
        <thead>
          <tr>
            <th className="number">№</th>
            {/* <th>img</th> */}
            <th>nomi</th>
            <th>soni</th>
            <th>narx</th>
            <th>chegirma</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((elem, index) => {
            return (
              <tr key={elem?.id}>
                <th>{index + 1}</th>
                {/* <td><img src={elem?.img} alt="" /></td> */}
                <td>{elem?.nomi}</td>
                <td>{elem?.count}</td>

                {elem?.skidka ? (
                  <td>
                    <b className="b1">
                      {(elem?.narxi - (elem?.narxi / 100) * elem?.skidka).toFixed(
                        2
                      )}
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
