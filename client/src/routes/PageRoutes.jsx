import React from "react";
import { Route, Routes } from "react-router-dom";
import RestaurantList from "./../components/RestaurantList/RestaurantList";
import AddRestaurent from "./../components/AddRestaurent/AddRestaurent";
import EditModal from "../components/EditModal/EditModal";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RestaurantList />} />
      <Route path="/add" element={<AddRestaurent />} />
      <Route path="/edit" element={<EditModal />} />
    </Routes>
  );
};

export default PageRoutes;
