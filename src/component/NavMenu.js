import {Link} from 'react-router-dom';

function NavMenu(){
    return (
        <div>
            <nav>
                <Link to={"/"}>Polaznici</Link>
                <Link to={"/contact"}>Kontakt</Link>
                
            </nav>
        </div>
    )
}

export default NavMenu;