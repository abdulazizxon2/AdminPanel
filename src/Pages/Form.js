import React, { useState } from "react";
// import { MdDriveFileMoveOutline } from "react-icons/md";
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
    color: "",
    brend: "",
    kategorya: "",
    material: "",
  });
  let dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    Clear();
    dispatch(sendForm(inpValue));
    console.log(inpValue);
  }

  function Clear() {
    setInput({
      nomi: "",
      count: 0,
      narxi: 0,
      skidka: 0,
      img: "",
      color: "",
      brend: "",
      kategorya: "",
      material: "",
    });
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
          value={inpValue.count === 0 ? false : inpValue.count}
          id="soni"
          onChange={(e) => setInput({ ...inpValue, count: e.target.value })}
        />
        <label htmlFor="narxi" className="labels">
          Narxi
        </label>
        <input
          value={inpValue.narxi === 0 ? false : inpValue.narxi}
          type="number"
          name="narx"
          id="narxi"
          onChange={(e) => setInput({ ...inpValue, narxi: e.target.value })}
        />
        <label htmlFor="chegirmasi" className="labels">
          Chegirma
        </label>
        <input
          value={inpValue.skidka === 0 ? false : inpValue.skidka}
          type="number"
          name="chegirma"
          id="chegirmasi"
          onChange={(e) => setInput({ ...inpValue, skidka: e.target.value })}
        />
        <label htmlFor="rang" className="labels">
          Rangi
        </label>
        <input
          value={inpValue.color}
          type="text"
          name="color"
          id="rang"
          onChange={(e) => setInput({ ...inpValue, color: e.target.value })}
        />
        <label htmlFor="brend" className="labels">
          Brand
        </label>
        <input
          value={inpValue.brend}
          type="text"
          name="brend"
          id="brend"
          onChange={(e) => setInput({ ...inpValue, brend: e.target.value })}
        />
        <label htmlFor="kategorya" className="labels">
          Kategorya
        </label>
        <input
          value={inpValue.kategorya}
          type="text"
          name="kategorya"
          id="katgorya"
          onChange={(e) => setInput({ ...inpValue, kategorya: e.target.value })}
        />
        <label htmlFor="material" className="labels">
          Material
        </label>
        <input
          value={inpValue.material}
          type="text"
          name="material"
          id="material"
          onChange={(e) => setInput({ ...inpValue, material: e.target.value })}
        />
     
        <button className="send">
          submit <BsSendPlusFill />
        </button>
      </form>
    </div>
  );
}
