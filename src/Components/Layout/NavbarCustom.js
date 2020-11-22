import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import links from "../../Utils/links";

/*  El Nav recibe un array de links 
    los cuales seran accesibles por el usuario
*/
const NavbarCustom = () => {
  return (
    <>
      <Navbar bg="primary" className="justify-content-center" activeKey="/">
        <Nav>
          {links.map(({ id, path, title }) => (
            <NavLink
              style={{ color: "white", "text-decoration": "none" }}
              to={path}
              exact
              activeStyle={{ color: "red" }}
              key={id}
              className="ml-3"
            >
              {" "}
              {title}
            </NavLink>
          ))}
        </Nav>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
