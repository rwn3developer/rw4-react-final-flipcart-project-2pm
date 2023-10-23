import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate  = useNavigate();
    localStorage.removeItem('checkUserLogin');
    navigate('/');
    
}

export default Logout