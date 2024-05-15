import { faCalendarCheck, faSchool, faHouse, faRightFromBracket, faSquarePollVertical, faUser } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import config from '../../../config';

function SideBarStudent() {
  const sidebarItem = [
    {
      icon: <FontAwesomeIcon icon={faHouse} className='sidebar__icon' />,
      title: 'Thêm học sinh',
    //   to: config.routes.customerhome
    },
    {
      icon: <FontAwesomeIcon icon={faUser} className='sidebar__icon' />,
      title: 'Xếp lớp',
    //   to: config.routes.studentprofile
    },
    {
      icon: <FontAwesomeIcon icon={faCalendarCheck} className='sidebar__icon' />,
      title: 'Bảng diểm',
    //   to: config.routes.studentattendance
    },
    {
      icon: <FontAwesomeIcon icon={faSchool} className='sidebar__icon' />,
      title: 'Tra cứu',
    //   to: config.routes.c
    },
    {
      icon: <FontAwesomeIcon icon={faSquarePollVertical} className='sidebar__icon' />,
      title: 'Tổng kết môn',
    //   to: config.routes.customerorderhis
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} className='sidebar__icon' />,
      title: 'Tổng kết học kì',
    //   to: config.routes.login
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} className='sidebar__icon' />,
      title: 'Thay đổi',
    //   to: config.routes.login
    }
  ];

  const location = useLocation();

  return (
   <div style={{height: '90vh'}}>
     <div className='flex flex-col items-center h-4/5 mt-32' >
      {sidebarItem.map((item, index) => (
        <div key={index}>
          <Link to={item.to} className='no-decoration'>
            <div className={`sidebar-item ${location.pathname === item.to ? 'active' : ''}`}>
              {item.icon}
              <div className='flex justify-center items-center'><p className='sidebar__title'>{item.title}</p></div>
            </div>
          </Link>
        </div>
      ))}
    </div>
   </div>
  );
}

export default SideBarStudent;