import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utilities/constants';



const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
    direction="row"
    sx={{
    
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}>
        {categories.map((category)=>{
            return<button className='category-btn'
           onClick={()=>setSelectedCategory(category.name)}
            style={{backgroundColor: category.name===selectedCategory && 
           '#FC1503', color:'white', 
           borderRadius: '20px',
           padding: '10px 15px', 
           margin: '5px', 
           display: 'flex',
            }}
            key={category.name}>
                 <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
                 {category.icon}   
                </span>
                <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                 {category.name}   
                </span>
            </button>
        })}
      
    </Stack>
  )
}

export default SideBar
