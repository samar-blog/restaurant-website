import React from 'react';
import {SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute} from './Sidebar';

const Sidebar = ({isOpen, toggle}) => {
  return (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
          <CloseIcon />
      </Icon>
      <SidebarMenu>
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="/">Our Menu</SidebarLink>
          <SidebarLink to="/">Actions</SidebarLink>
          <SidebarLink to="/">Desserts</SidebarLink>
          <SidebarLink to="/">Contact With</SidebarLink>
      </SidebarMenu>
      <SidebarBtnWrap>
          <SidebarRoute to="/">Order Now</SidebarRoute>
      </SidebarBtnWrap>
  </SidebarContainer>
  )
};

export default Sidebar;

