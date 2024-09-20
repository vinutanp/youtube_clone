import React from 'react'
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { logo } from '../utilities/constants';
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
    <Stack direction="row" alignItems='center' p={2} 
    sx={{background:"#000", position:'sticky', top:0, justifyContent:'space-between'}}>
    <Link to="/" state={{display:"flex",alignItems:'center'}}>
    <img src={logo} alt='logo' height={50} />
    </Link>
<SearchBar/>
    </Stack>

    
  )
}

export default Navbar
