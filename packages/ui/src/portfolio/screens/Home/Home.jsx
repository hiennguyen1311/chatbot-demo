import React from 'react'
import { Title } from '../../components/index'
import Navbar from '@/portfolio/components/Navbar/Navbar'

function Home() {
    return (
        <div>
					<Navbar></Navbar>
          <Title>{'Welcome'}</Title>
        </div>
    )
}

export default Home
