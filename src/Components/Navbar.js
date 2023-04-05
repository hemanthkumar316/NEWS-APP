import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark fixed-top p-0">
                <div className="container-fluid">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu3i1uwi18kzNfLv2_j-kyhLXP8Fz1K9MK91PfB_jLYLp9NGjmZnEZ6A1nv-ZotGym8Ds&usqp=CAU' alt='news_logo' width='70px' height='80px' className="rounded-circle"/ >

                    <Link className="navbar-brand" to="/"><h1 className='mr-2'>News App</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto h5">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>

                        </ul>
                        
                        <div className='buttons'>
          <button  className='btn btn-outline-info me-2'>{' '}
            <i className='fa fa-sign-in me-3'>Login</i>
          </button>
          <button className='btn btn-outline-info me-2'>
            <i className="fa-solid fa-user-plus">Register</i>
          </button>
          
        </div>
                        
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar