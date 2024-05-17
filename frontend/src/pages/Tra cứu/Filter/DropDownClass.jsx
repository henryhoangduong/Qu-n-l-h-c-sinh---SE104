import styles from './DropDown.module.css'
import React, { useState, useEffect, useRef } from 'react';


export default function DropDownClass({ data, name,option}) {
  const [isOpen, setIsOpen] = useState(false);
  const [nameState, setNameState] = useState(name);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
   return (
    <div className={styles.dropdown} ref={dropdownRef}>
       <button onClick={toggleDropdown} className={styles.dropbtn}>{ nameState}</button>
      <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}>
         <ul>
           {data.map((item) => (
             <li onClick={() => {
               setNameState(item.tenlop)
             }} name='malop' value={item.malop} key={item.malop}>{ item.tenlop}</li>
           ))}
        </ul>
      </div>
    </div>
  );
}
