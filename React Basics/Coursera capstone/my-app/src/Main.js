import React from 'react'
import {Box, Heading} from "@chakra-ui/react"

import Card from './Card'


const foods = [ 
  { 
    title: "Greek salad", 
    description: 
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", 
    getImageSrc: () => require("./Assets/greek salad.jpg"), 
    price: '  12.99',
  }, 
  { 
    title: "Bruchetta", 
    description: 
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil", 
    getImageSrc: () => require("./Assets/bruschetta.png"), 
    price: '  5.99' ,
  }, 
  { 
    title: "Lemon dessert", 
    description: 
      "This comes straight from grandma;s recipe book, every last ingredient has been sources and is as authentic as can be imagined.", 
    getImageSrc: () => require("./Assets/lemon dessert.jpg"), 
    price: '  5.00',
  }, 
 ]; 

function Main() {

  return (
    <div>

      
      <Heading as="h1" id="projects-section"> 
       This weeks specials! <button id='menuButton' className='button'>Online Menu</button>
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(3,minmax(0,1fr))" 
       gridGap={10} 
     > 
       {foods.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           imageSrc={project.getImageSrc()} 
           price={project.price}
         /> 
       ))} 
     </Box>
         

    </div>
  )
}

export default Main