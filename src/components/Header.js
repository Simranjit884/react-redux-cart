import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
      <Container>
        <NavLink to="/" className="text-decoration-none text-light mx-3">
          AddToCart
        </NavLink>
        <Nav className="me-auto">
          <NavLink to="/" className="text-decoration-none text-light">
            Home
          </NavLink>
        </Nav>
        <Badge badgeContent={0} color="primary">
          <i
            className="fa-solid fa-cart-shopping text-light"
            style={{ fontSize: 25, cursor: "pointer" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          ></i>
        </Badge>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem", padding: 10, position: "relative"}}>
          <i className="fas fa-close smallclose" style={{position:"absolute", top:2, right:20, fontSize:23, cursor:"pointer"}} />
          <p style={{fontSize:22}}> Your cart is empty</p>
          </div>
        </Menu>
      </Container>
    </Navbar>
  );
};

export default Header;
