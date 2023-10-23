import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Userauth from '../Users/Userauth'
import { useState } from 'react'
import { useEffect } from 'react'

const Header = () => {
    return (
      
            <>
                <nav className="navbar navbar-expand-lg bg-primary ">
                    <div className="container-fluid">
                        <NavLink to='/' className="navbar-brand text-white fs-2">Flipcart App</NavLink>


                        <input className='form-control' style={{ width: '50%' }} type='text' placeholder='search product' />


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse custom-nav" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                                {
                                    !Userauth() ? (
                                        <>
                                            <li className="nav-item">
                                                <Link to='/login' className="nav-link active  text-white" aria-current="page" >Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to='/register' className="nav-link active  text-white" aria-current="page" >Register</Link>
                                            </li>
                                        </>
                                    ) : (
                                        <li className="nav-item">
                                            <Link to='/logout' className="nav-link active  text-white" aria-current="page" >Logout</Link>
                                        </li>
                                    )
                                }



                                <li className="nav-item">
                                    <Link to='/' className="nav-link active  text-white" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/product' className="nav-link text-white">Product</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-white">Product Details</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">Cart</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">Contact</Link>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
            </>
    )
}

export default Header