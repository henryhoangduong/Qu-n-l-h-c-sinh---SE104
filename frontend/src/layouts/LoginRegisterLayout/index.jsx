import PropTypes from 'prop-types';

function LoginRegisterLayout({children}) {
    return (  
        <div>{children}</div> 
    );
}

LoginRegisterLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LoginRegisterLayout;