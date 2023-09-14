import React from "react";
import Header from "./Header";
import Sidebar from "./SideBar";
interface IMainLayoutProp {
  children: any;
}

const MainLayout: React.FC<IMainLayoutProp> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <main className="main-content mx-2">{children}</main>
    </div>
  );
};

export default MainLayout;
