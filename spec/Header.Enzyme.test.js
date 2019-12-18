import React from "react";
import Header from "../src/components/common/Header.jsx";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom"; // necessary for mount/deep rendering

// shallow enzyme testing
it("contains 3 NavLinks via shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

// mount enzyme testing i.e. with access to child nodes
it("constains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;
  expect(numAnchors).toEqual(3);
});
