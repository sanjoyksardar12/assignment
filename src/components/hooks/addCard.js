import React, { useState , memo } from "react";
import { useDispatch } from "react-redux";

const useAddCard =function useAddCard(callback, setExpandAddForm) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ title: "", body: "", id: "" });
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    dispatch(callback(inputs));
    setInputs({});
    setExpandAddForm(false);
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useAddCard;