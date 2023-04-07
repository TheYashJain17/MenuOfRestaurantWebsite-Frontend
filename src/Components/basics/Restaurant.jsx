import React, { useState } from 'react';

import './style.css';

import Menu from './menuAPI';

import MenuCard from './menuCard';

import NavBar from './NavBar';

const uniqueList = [
  
  ... new Set(
  
  Menu.map((element) => {

  return element.category;

})
  )
]


const Restaurant = () => {

  const [menuData , setMenuData] = useState(Menu);

  const [menuList , setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

    const updatedList = Menu.filter((element) => {

      return element.category === category

    })

    setMenuData(updatedList);

  }

  return (

    <>

    <NavBar filterItem={filterItem} setMenuData={setMenuData} menuList={menuList}/>
    
    <MenuCard data ={menuData}/>
    
    </>

    
  )
}

export default Restaurant