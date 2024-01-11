import React, { useState } from "react";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { BsSendPlusFill } from "react-icons/bs";
import { sendForm } from "../Redux/action/FormAction";
import { useDispatch } from "react-redux";

export default function Form() {
  let [inpValue, setInput] = useState({
    nomi: "",
    count: 0,
    narxi: 0,
    skidka: 0,
    img: "",
  });
  let dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(sendForm(inpValue));
    console.log(inpValue);
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="nom" className="labels">
          Nomi
        </label>
        <input
          type="text"
          name="nom"
          id="nom"
          value={inpValue.nomi}
          onChange={(e) => setInput({ ...inpValue, nomi: e.target.value })}
        />
        <label htmlFor="soni" className="labels">
          Soni
        </label>
        <input
          type="number"
          name="son"
          id="soni"
          onChange={(e) => setInput({ ...inpValue, count: e.target.value })}
        />
        <label htmlFor="narxi" className="labels">
          Narxi
        </label>
        <input
          type="number"
          name="narx"
          id="narxi"
          onChange={(e) => setInput({ ...inpValue, narxi: e.target.value })}
        />
        <label htmlFor="chegirmasi" className="labels">
          Chegirma
        </label>
        <input
          type="number"
          name="chegirma"
          id="chegirmasi"
          onChange={(e) => setInput({ ...inpValue, skidka: e.target.value })}
        />
        <label htmlFor="img" className="imges">
          <MdDriveFileMoveOutline />
        </label>
        <input type="file" name="img" id="img" className="img-inp" />
        <button className="send">
          submit <BsSendPlusFill />
        </button>
      </form>
    </div>
  );
}
