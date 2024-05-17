import PropTypes from 'prop-types';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header/Header';

function DefaultLayout({children}) {
    return (  
        <div className="w-max container flex flex-row">
            <Sidebar />
            <div className='overflow-y-scroll w-screen px-10' style={{ width: '83rem' }}>
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