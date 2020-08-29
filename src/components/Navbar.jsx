import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'
import { BsBucketFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function CustomNavbar() {
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><BsBucketFill style={{marginTop: -6}} /> MovieBucket</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link component={NavLink} to="/home">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link component={NavLink} to="/watchlist">
                watchlist
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
}
