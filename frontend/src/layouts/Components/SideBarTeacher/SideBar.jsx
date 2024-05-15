import { faClipboardList, faSchool, faHouse, faRightFromBracket, faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import config from '../../../config';

function SideBarTeacher() {
  const sidebarItem = [
    {
      icon: <FontAwesomeIcon icon={faHouse} className='sidebar__icon' />,
      title: 'Dashboard',
      to: config.routes.customerhome
    },
    {
      icon: <FontAwesomeIcon icon={faUser} className='sidebar__icon' />,
      title: 'Profile Settings',
      to: config.routes.studentprofile
    },
    {
      icon: <FontAwesomeIcon icon={faClipboardList} className='sidebar__icon' />,
      title: 'Semester Sumary',
      to: config.routes.semestersumary
    },
    {
      icon: <FontAwesomeIcon icon={faSchool} className='sidebar__icon' />,
      title: 'Class',
      to: config.routes.c
    },
    {
      icon: <FontAwesomeIcon icon={faBook} className='sidebar__icon' />,
      title: 'Course',
      to: config.routes.customerorderhis
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} className='sidebar__icon' />,
      title: 'Sign Out',
      to: config.routes.login
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

export default SideBarTeacher;