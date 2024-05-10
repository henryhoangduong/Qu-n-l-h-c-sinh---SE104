import ComplexNavBar from '../Components/NavBar'; 
import PropTypes from 'prop-types';

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