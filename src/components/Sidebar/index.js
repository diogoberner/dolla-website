import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth
            duration={500}
            spy
            exact
            offset={0}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="discover"
            onClick={toggle}
            smooth
            duration={500}
            spy
            exact
            offset={0}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to="services"
            onClick={toggle}
            smooth
            duration={500}
            spy
            exact
            offset={0}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to="signup"
            onClick={toggle}
            smooth
            duration={500}
            spy
            exact
            offset={0}
          >
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
