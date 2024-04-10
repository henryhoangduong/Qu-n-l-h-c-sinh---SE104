import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      No: "",
      Class: "",
      Quantity: "",
      QuantitySuccess: "",
      Rate: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formState.Class &&
      formState.Quantity &&
      formState.QuantitySuccess 
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="Class">Lớp </label>
            <input
              type="text"
              name="Class"
              onChange={handleChange}
              value={formState.Class}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Quantity">Số Lượng</label>
            <input
              type="number"
              name="Quantity"
              max = {40}
              onChange={handleChange}
              value={formState.Quantity}
            />
          </div>
          <div className="form-group">
            <label htmlFor="QuantitySuccess">Số Lượng Đạt</label>
            <input
              type="number"
              name="QuantitySuccess"
              max = {40}
              onChange={handleChange}
              value={formState.QuantitySuccess}
            />
          </div>
        
          {errors && (
            <div className="error">{`Hãy điền các trường còn thiếu: ${errors}`}</div>
          )}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
