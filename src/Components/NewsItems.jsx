import React from 'react'
 import './NewsItems.css'
const NewsItems = (newsData) => {
 let {title,image,description,newsUrl,author,date,source}=newsData
  return (
    <>
     <div className="my-3">
      <div className="card border-warning">
      <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
      <img src={!image? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":image} alt={title} className='card-img-top'/>
       <div className="card-body">
<h5 className='card-title'>{title}</h5>
<p className='card-text'>{description}</p>
<p className='card-text'><small>BY Author {!author?'Unknown':author} on  {new Date(date).toGMTString()}</small></p>
<div className='text-center'>
<a target='_blank' rel='noreferrer' href={newsUrl}> 
<button className='btn btn-dark'>Read More</button>

</a>
</div>
       </div>
      </div>
     </div>
    </>
  )
}

export default NewsItems