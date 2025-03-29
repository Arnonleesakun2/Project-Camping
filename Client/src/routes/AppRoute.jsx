import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../layouts/Layout";
import LayoutAdmin from "../layouts/LayoutAdmin";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/admin/Dashboard";
import Camping from "../pages/admin/Camping";
import Profile from "../pages/user/Profile";
import PotectRoute from "./PotectRoute";
import CampingDetail from "../pages/user/CampingDetail";
import Checkout from "../pages/user/Checkout";
import CheckoutComplete from "../pages/user/CheckoutComplete";
import MyBooking from "../pages/user/MyBooking";
import MyCamping from "../pages/user/MyCamping";
import AdminPotectRoute from "./AdminPotectRoute";
const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="ss" element={<About />} />
          <Route path="camping/:id" element={<CampingDetail />} />
        </Route>

        {/* Private user */}
        <Route path="user" element={<PotectRoute eL={<Layout />} />}>
          <Route path="profile" element={<Profile />} />
          <Route path="checkout/:id" element={<Checkout />} />
          <Route path="complete/:session" element={<CheckoutComplete />} />
          <Route path="mybooking" element={<MyBooking />} />
          <Route path="mycamping" element={<MyCamping />} />
          <Route path="camping" element={<Camping />} />
        </Route>
        {/* Private admin */}
        <Route path="admin" element={<AdminPotectRoute eL={<LayoutAdmin />} />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
