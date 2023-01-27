import React from 'react'

function HomeCard({data}) {
  return (
    <div>
        <div className='title'>{data.title}</div>
        <div>
            <img className='image' src={data.image} alt="true"></img>
        </div>
    </div>
  )
}

export default HomeCard