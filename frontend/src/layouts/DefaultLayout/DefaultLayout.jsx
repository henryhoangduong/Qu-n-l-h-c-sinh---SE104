import PropTypes from 'prop-types';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header/Header';

function DefaultLayout({children}) {
    return (  
        <div className=" flex flex-row">
            <Sidebar />
            <div className='overflow-scroll px-10' style={{height : "100vh",  width : "100%"}} >
            <Header/>
                {children}
            </div> 
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;