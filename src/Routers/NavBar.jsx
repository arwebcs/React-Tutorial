import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import About from "./About";
import Home from "./Home";
import NavLinks from "./NavLinks";
import PageNotFound from "./PageNotFound";
import Nested from "./Nested";
import CollageDetails from "./CollageDetails";
import Departments from "./Departments";
import CollageStudent from "./CollageStudent";
import Login from "../UserComp";
import Member from "./Member";
import MemberDetails from "./MemberDetails";

function NavBar() {
  return (
    <>
      <h1>React router</h1>
      <h2>Install process : npm i react-router </h2>
      <BrowserRouter>
        <NavLinks />
        <Routes>
          {/* <Route element={<NavLinks />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="user">
              <Route path="login" element={<Login />} />
            </Route>
          </Route> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Optional routing */}
          <Route path="/member/list?" element={<Member />} />

          <Route path="/member/:id/:test" element={<MemberDetails />} />
          {/* Group Prefix */}
          <Route path="/user">
            <Route path="login" element={<Login />} />
          </Route>
          {/* Nested Routing */}
          <Route path="/nested" element={<Nested />}>
            {/* <Route path="student" element={<CollageStudent />} /> */}
            <Route index element={<CollageStudent />} />
            <Route path="departments" element={<Departments />} />
            <Route path="details" element={<CollageDetails />} />
          </Route>
          {/* <Route path="/*" element={<PageNotFound />} /> */}
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default NavBar;
