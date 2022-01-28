import React from 'react';
import { Outlet } from 'react-router-dom';
import ButtonAppBar from './navbar';


export const Layout = ({children}) => {
  return (
    <div className="layout">
      <ButtonAppBar/>
      <Outlet />
    </div>
  )
}

export default Layout;