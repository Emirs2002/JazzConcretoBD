import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserContextProvider } from '../../contexts/userContext';
import { Navbar } from "../Navbar/Navbar"

export function Layout() {
  return (
    <main>

      <UserContextProvider>

        <Navbar/>
        <section>
            <Outlet />
        </section>
        
      </UserContextProvider>
    </main>
  );
}