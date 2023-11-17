import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddRestaurent = () => {
  const navigate = useNavigate();
  const notify = () => {
    toast("Restaurant Added SuccessFully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const errorNotify = (msg) => {
    toast(msg);
  };
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = { ...formData };
    const regexNumber = /^[0-9]{10}$/;
    if (!regexNumber.test(formData.contact)) {
      console.log("Plesae Enter a Valid Phone Number");
      errorNotify("Plesae Enter a Valid Phone Number");
      return;
    } else if (
      formData.name.trim().length == 0 ||
      formData.address.trim().length == 0
    ) {
      console.log("Please Add Valid Details");
      errorNotify("Please Add Valid Details");
      return;
    } else {
      axios
        .post("http://localhost:8090/crud/postData", newData)
        .then((res) => {
          notify();
          return;
        })
        .then((error) => {
          errorNotify(error.message);
          return;
        });
    }
  };
  return (
    <div className="d-flex justify-content-center ">
      <form
        className="d-flex flex-column gap-3 p-4 border rounded  shadow-lg mt-4 mx-4"
        onSubmit={(e) => submitHandler(e)}>
        <h1>Enter Restaurent Details Here</h1>
        <div className="d-flex flex-column">
          <label htmlFor="name">Enter Restaurant Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            className="border rounded p-2"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value.trim() });
            }}
            required
          />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="address">Enter Restaurent Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            id="address"
            className="border rounded p-2"
            value={formData.address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value.trim() });
            }}
            required
          />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="contact">Enter Restaurent Contact</label>
          <input
            type="text"
            placeholder="Enter Contact"
            id="contact"
            className="border rounded p-2"
            value={formData.contact}
            onChange={(e) => {
              setFormData({ ...formData, contact: e.target.value });
            }}
            required
          />
        </div>
        <button className="bg-info border-0  rounded p-2 mt-2">Submit</button>
      </form>
      <ToastContainer autoClose={800} />
    </div>
  );
};

export default AddRestaurent;
