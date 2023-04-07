import React from 'react'

import Menu from './menuAPI'

const NavBar = ({filterItem  , setMenuData , menuList}) => {
  return (

    <>
    
    <nav className='navbar'>

    <div className="btn-group">

    <button className="btn-group__item"onClick={() => setMenuData(Menu)}>All</button>

    {

        menuList.map((element) => {

            return(

                <>  
                
            <button className="btn-group__item" onClick={() => filterItem(element)}>{element}</button>

                
                </>

            )

        })

    }

    

    </div>

    </nav>
    
    </>

    )
}

export default NavBar