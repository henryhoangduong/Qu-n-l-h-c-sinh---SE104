import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      No: "",
      Name: "",
      Sex: "",
      YearofBirth: "",
      Address: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formState.Name &&
      formState.Sex &&
      formState.YearofBirth &&
      formState.Address
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
            <label htmlFor="Name">Họ Tên</label>
            <input
              type="text"
              name="Name"
              onChange={handleChange}
              value={formState.Name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Sex">Gới Tính</label>
            <select name="Sex" onChange={handleChange} value={formState.Sex}>
              <option value="" disabled="disabled">
                Hãy chọn giới tính{" "}
              </option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="YearofBirth">Năm Sinh</label>
            <input
              type="date"
              name="YearofBirth"
              onChange={handleChange}
              value={formState.YearofBirth}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Address">Địa chỉ</label>
            <textarea
              name="Address"
              onChange={handleChange}
              value={formState.Address}
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
