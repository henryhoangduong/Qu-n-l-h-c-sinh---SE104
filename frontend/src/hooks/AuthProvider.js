import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";

const AuthContext = createContext();
const url = process.env.REACT_APP_API_URL;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("access_token") || "");
  
  const navigate = useNavigate();
  console.log('navigate: ',navigate)
    useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);
  const loginAction = async (data) => {
    console.log('data: ',data)
    try {
      const res = await axios.post(`${url}/auth/login` ,data);
      console.log('login')
      console.log(res)
      if (res.data) {
        setUser(res.data.user);
        setToken(res.data.access_token);
        localStorage.setItem("access_token", res.data.access_token);
        navigate('/');
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};