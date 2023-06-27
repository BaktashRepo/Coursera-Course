import React from 'react'
import food from './Assets/restauranfood.jpg'

function Herobanner() {
  return (
    <div>
        <div id='Card'>
            <h1 id='CardTitle'>
                Little Lemon
            </h1>
            <h2>
                Chicago
            </h2>
            <p>We are a family owned <br></br> Mediterranean restaurant.<br></br> Focused on traditional<br></br> recipes served with a modern<br></br> twist</p>
            <button className='button'>Reserve a Table</button>
        
         <img id='foodPic' src={food} />
        </div>

       
        
    </div>
  )
}

export default Herobanner