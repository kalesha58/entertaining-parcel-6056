import React from "react";
import { Routes, Route } from "react-router-dom";
import Business from "../Pages/Business";
import CriptoCarner from "../Pages/CriptoCarner";
import Entertinment from "../Pages/Entertinment";
import Home from "../Pages/Home";
import Maggzine from "../Pages/Maggzine";
import Money from "../Pages/Money";
import Outlook from "../Pages/Outlook";
import Photos from "../Pages/Photos";
import Sports from "../Pages/Sports";
import Travel from "../Pages/Travel";
import Videos from "../Pages/Videos";
import Health from "../Pages/Health";
import Startup from "../Pages/Startup";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Outlook" element={<Outlook/>}></Route>
      {/* <Route path="/" element={<Outlook/>}></Route> */}
      <Route path="/Business" element={<Business/>}></Route>
      <Route path="/Money" element={<Money/>}></Route>
      <Route path="/CriptoCarner" element={<CriptoCarner/>}></Route>
      <Route path="/Travel" element={<Travel/>}></Route>
      <Route path="/Sports" element={<Sports/>}></Route>
      <Route path="/Videos" element={<Videos/>}></Route>
      <Route path="/Entertinment" element={<Entertinment/>}></Route>
      <Route path="/Photos" element={<Photos/>}></Route>
      <Route path="/Maggzine" element={<Maggzine/>}></Route>
      <Route path="/Health" element={<Health/>}></Route>
      <Route path="/Startup" element={<Startup/>}></Route>

    </Routes>
  );
}

export default AllRoutes;
// function AllRouters() {
//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
         
//             <Home />
         
//         }
//       ></Route>
//       <Route path="/About" element={<About />}></Route>
//       <Route path="/Contact" element={<Contact />}></Route>
//       <Route
//         path="/products"
//         element={
//           <PrivateRoute>
//             <Products />
//           </PrivateRoute>
//         }
//       ></Route>
//       <Route
//         path="/products/:product_id"
//         element={
//           <PrivateRoute>
//             <SingleProduct />
//           </PrivateRoute>
//         }
//       ></Route>
//       <Route path="/Login" element={<Login />}></Route>
//       <Route path="*" element={<PageNotFound />}></Route>
//     </Routes>
//   );
// }

// export default AllRouters;
