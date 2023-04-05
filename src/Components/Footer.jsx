import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className=' mt-5 bg-info text-white'>
        <div className='container'>
          <div className='row'>
            <div className='col col-md-5 mt-3'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu3i1uwi18kzNfLv2_j-kyhLXP8Fz1K9MK91PfB_jLYLp9NGjmZnEZ6A1nv-ZotGym8Ds&usqp=CAU' alt='news_logo' width='80px' height='90px' className="rounded-circle"/ >
<span className='h3 mr-2'>News App</span>
<h3>TOP NEWS APP</h3>
<h5 className='text-dark'>Get daily news alerts & updates on current events sent straight to your phone, because a small news reader makes a big difference to communities! Keep up to date with news that impacts</h5>
            </div>
            <div className='col col-md-2 mt-3'>
              <h5 className='text-dark'>Categories</h5>
              <h6>General</h6>
              <h6>Entetainment</h6>
              <h6>Sports</h6>
              <h6>Politics</h6>
              <h6>Bussiness</h6>
              <h6>Health</h6>
             <h6>Science</h6>
             <h6>Technology</h6>
            </div>
            <div className='col col-md-2 mt-4'>
            <h5 className='text-dark'>Trending</h5>
              <h6>Top News</h6>
              <h6>Trending News</h6>
              <h6>Latest News</h6>
              <h6>Top 10 News</h6>
              <h6>Reloginal News</h6>
              <h6>Local News</h6>
              <h6>Global News</h6>
            </div>
            <div className='col col-md-3 mt-5'>
           <h3 className='text-dark mb-3' style={{marginLeft:'40px'}}>Follow us on</h3>
           <div className="d-flex justify-content-evenly">
              <i className="fa-brands fa-facebook mr-3  fa-2x"></i>
              <i className="fa-brands fa-linkedin fa-2x"></i>
              <i className="fa-brands fa-twitter fa-2x"></i>
              <i className="fa-brands fa-youtube fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-3 bg-secondary">
   <h5>Copyrights © 2023 All Rights Reserved by News App</h5>
  </div>
      </footer>
    </div>
  )
}

export default Footer