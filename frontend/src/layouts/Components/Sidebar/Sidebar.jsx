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
      to: config.routes.themhocsinh
    },
    {
      icon: <FontAwesomeIcon icon={faUser} className='sidebar__icon' />,
      title: 'Xếp lớp',
      to: config.routes.xeplop
    },
    {
      icon: <FontAwesomeIcon icon={faCalendarCheck} className='sidebar__icon' />,
      title: 'Bảng diểm',
      to: config.routes.bangdiem
    },
    {
      icon: <FontAwesomeIcon icon={faSchool} className='sidebar__icon' />,
      title: 'Tra cứu',
      to: config.routes.tracuu
    },
    {
      icon: <FontAwesomeIcon icon={faSquarePollVertical} className='sidebar__icon' />,
      title: 'Tổng kết môn',
      to: config.routes.tongketmon
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} className='sidebar__icon' />,
      title: 'Tổng kết học kì',
      to: config.routes.tongkethocki
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} className='sidebar__icon' />,
      title: 'Thay đổi',
      to: config.routes.change
    }
  ];

  const location = useLocation();

  return (
    <div className='sidebar' style={{ height: '120vh', padding: 0}}>
      <a href='/' className=' mb-2 text-3xl font-semibold tracking-tight text-gray-900' style={{left:'50%',transform: " translateX(-20%)",position:'relative',top:'-20px'}}> Group 23</a>
     <div className='flex flex-none flex-col  justify-between'  >
      {sidebarItem.map((item, index) => (
        <div key={index}>
          <Link to={item.to} className='no-decoration'>
            <div style={{width:'17rem',marginLeft:'20px',marginRight:'20px'}} className={`sidebar-item  mx-0 ${location.pathname === item.to ? 'active' : ''}`}>
              {item.icon}
              <div className='flex flex-none justify-center  items-center'><p className='sidebar__title'>{item.title}</p></div>
            </div>
          </Link>
        </div>
      ))}
    </div>
   </div>
  );
}

export default SideBarStudent;