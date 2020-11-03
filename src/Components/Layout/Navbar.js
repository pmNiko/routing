import {Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import links from '../../Utils/links';

/*  El Nav recibe un array de links 
    los cuales seran accesibles por el usuario
*/
const Navbar = () => {    
    return (  
        <>
            <Nav className="justify-content-center" activeKey="/">
            {links.map(({id,path,title}) => (                
                <Nav.Item key={id}>
                    <NavLink
                        to={path}
                        exact activeStyle={{color: 'red'}}
                        className="mr-1"> {title}                   
                    </NavLink>
                </Nav.Item>       
            ))}
            </Nav>
        </>
    );
}
 
export default Navbar;