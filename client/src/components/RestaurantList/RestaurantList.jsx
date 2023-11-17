import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const RestaurantList = () => {
  const [toggle, setToggle] = useState(false);
  const [list, setList] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8090/crud/getData")
      .then((result) => {
        setList(result.data.data.reverse());
      })
      .catch((err) => console.log(err));
  }, [toggle]);

  const deleteHandler = (id) => {
    setToggle(!toggle);
    axios
      .delete(`http://localhost:8090/crud/${id}`)
      .then((result) => {
        setToggle(!toggle);
      })
      .catch((err) => console.log(err));
  };

  const editHandler = () => {};
  return (
    <div
      className="d-flex flex-column flex-wrap flex-md-row p-4 gap-4  h-100 "
      style={{ marginLeft: "1.5rem" }}>
      {list &&
        list.map((ele) => (
          <div
            className="border border-secondary rounded p-3"
            key={ele.id}
            style={{ width: "18em" }}>
            <h5>{ele.name}</h5>
            <div className="d-flex align-items-center gap-1 mb-2">
              <IoCallOutline />
              <span>{ele.contact}</span>
            </div>
            <div className="d-flex align-items-center gap-1 mb-2 ">
              <CiLocationOn />
              <span>{ele.address}</span>
            </div>
            <div>
              <button
                className="bg-danger text-white border-0 rounded px-2 py-1 me-2"
                onClick={() => deleteHandler(ele.id)}>
                Delete
              </button>
              <button className="bg-success text-white border-0 rounded px-2 py-1">
                Edit
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RestaurantList;
