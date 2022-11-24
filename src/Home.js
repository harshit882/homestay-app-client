import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css';
function Home() {
  return (
    <div className='home'>
      {/* <h1>home component</h1> */}
      <Banner/>

      <div className="home__section home__section_1">
      <Card src ="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600" title ="Entire homes" description="Comfortable private places,with room for friends and family" price =""/>
      <Card src ="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600" title ="Online Experiences" description="Unique activity we can do together, led by world of hosts" price =""/>
      <Card src ="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600" title ="Unique stays" description="Spaces that are more than just a place to sleep" price =""/>
      
      </div>

      <div className="home__section">
      <Card src ="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600" title ="Entire homes" description="Comfortable private places,with room for friends and family" price =""/>
      <Card src ="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600" title ="Online Experiences" description="Unique activity we can do together, led by world of hosts" price =""/>
      <Card src ="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600" title ="Unique stays" description="Spaces that are more than just a place to sleep" price =""/>
      </div>

      <div className="home__section">
      <Card src ="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600" title ="Entire homes" description="Comfortable private places,with room for friends and family" price =""/>
      <Card src ="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600" title ="Online Experiences" description="Unique activity we can do together, led by world of hosts" price =""/>
      <Card src ="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600" title ="Unique stays" description="Spaces that are more than just a place to sleep" price =""/>
      </div>
      
    </div>
    
  )
}

export default Home
