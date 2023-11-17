import React from "react";
import { Route, Routes } from "react-router-dom";
import RestaurantList from "./../components/RestaurantList/RestaurantList";
import AddRestaurent from "./../components/AddRestaurent/AddRestaurent";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RestaurantList />} />
      <Route path="/add" element={<AddRestaurent />} />
    </Routes>
  );
};

export default PageRoutes;
