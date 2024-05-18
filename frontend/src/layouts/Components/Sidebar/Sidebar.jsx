import { faCalendarCheck, faSchool, faHouse, faRightFromBracket, faSquarePollVertical, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './SideBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import config from '../../../config';
import { useAuth } from '../../../hooks/AuthProvider';

function SideBarStudent() {
  const auth = useAuth();
  const sidebarItem = [
    {
      icon: <FontAwesomeIcon icon={faHouse} className={styles.sidebar__icon} />,
      title: 'Thêm học sinh',
      to: config.routes.themhocsinh
    },
    {
      icon: <FontAwesomeIcon icon={faUser} className={styles.sidebar__icon} />,
      title: 'Xếp lớp',
      to: config.routes.xeplop
    },
    {
      icon: <FontAwesomeIcon icon={faCalendarCheck} className={styles.sidebar__icon} />,
      title: 'Bảng diểm',
      to: config.routes.bangdiem
    },
    {
      icon: <FontAwesomeIcon icon={faSchool} className={styles.sidebar__icon} />,
      title: 'Tra cứu',
      to: config.routes.tracuu
    },
    {
      icon: <FontAwesomeIcon icon={faSquarePollVertical} className={styles.sidebar__icon} />,
      title: 'Tổng kết môn',
      to: config.routes.tongketmon
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} className={styles.sidebar__icon} />,
      title: 'Tổng kết học kì',
      to: config.routes.tongkethocki
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} className={styles.sidebar__icon} />,
      title: 'Thay đổi',
      to: config.routes.change
    }
  ];

  const location = useLocation();

  return (
    <div className={`${ styles.sidebar } items-center flex flex-col justify-between`} style={{ height: '100vh', padding: 0}}>
      <a href='/' className=' mb-2 text-3xl font-semibold tracking-tight text-gray-900' style={{top:'10px' , position:'relative'}}> Group 23</a>
     <div className='flex flex-none flex-col  justify-between'  >
      {sidebarItem.map((item, index) => (
        <div key={index}>
          <Link to={item.to} className='no-decoration'>
            <div style={{width:'17rem',marginLeft:'20px',marginRight:'20px'}} className={`${styles.sidebar_item} flex items-center  mx-0 ${location.pathname === item.to ? styles.active : ''}`}>
              {item.icon}
              <div className='flex flex-none justify-center  items-center'><p className='sidebar__title'>{item.title}</p></div>
            </div>
          </Link>
        </div>
      ))}
        
      </div>
      <button onClick={() => { auth.logOut() }} className='btn border-2 border-black w-20 rounded-lg' style={{bottom: '10px', position:'relative',backgroundColor:'#EB7979'}}> Sign Out</button>
    </div>
    
  );
}

export default SideBarStudent;