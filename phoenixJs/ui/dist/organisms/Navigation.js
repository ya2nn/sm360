import { Outlet, Link } from 'react-router-dom';
import React from "react";
import Container from '../../dist/grid/Container';

const Navigation = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "flex h-[50px] items-center bg-[#2CD5C4]"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", {
    className: "flex space-x-6"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/en/new-inventory"
  }, "New Inventory Listing")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/inventory-vdp"
  }, "Inventory Details")))))), /*#__PURE__*/React.createElement(Outlet, null));
};

export default Navigation;