import React from 'react'
import { useEffect, useState } from 'react'
import HomeCard from './HomeCard'
import { getAllhomes } from '../services/home.service'

function HomeList() {
    const [homes, setHomes] = useState([])
    console.log(homes)

    const listHomes = async () => {
        const home = await getAllhomes()
        setHomes(home)
    }

    const renderHomes = () => {
        return homes && homes.map((home, i) => <HomeCard key={i} data={home} />)
    }

    useEffect(() => {
        listHomes()
    }, [])

  return (
    <div className='container-home'>
        {renderHomes()}
    </div>
  )
}

export default HomeList