import ComplexNavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar'    
import PropTypes from 'prop-types';
import Profile from '../../pages/Profile';
function DefaultLayout({children}) {
    return (  
        <div>
            <div>{children}</div> 
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;