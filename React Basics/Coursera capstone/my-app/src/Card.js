import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";  
import React from "react"; 
 
const Card = ({ title, description, imageSrc, price }) => { 
   return ( 
     <VStack 
       color="black" 
       backgroundColor="#EDEFEE" 
       cursor="pointer" 
       borderRadius="xl" 
       width={'350px'}
     > 
       <Image borderRadius="12px" src={imageSrc} alt={title} width={'100%'} height={'100%'} /> 
       <VStack spacing={4} p={4} alignItems="flex-start"> 
         <HStack justifyContent="space-between" alignItems="center"> 
           <Heading  size="18pt"> 
             {title} 
             {price}               
           </Heading> 

           
         </HStack> 
         <Text color="#64748b" fontSize="16pt" noOfLines={3}> 
           {description} 
         </Text> 
         <HStack spacing={2} alignItems="center"> 
          <Text as={'b'}> Order a delivery</Text>
           
          <FontAwesomeIcon icon={faTruckFast} />
         </HStack> 
       </VStack> 
     </VStack> 
   ); 
}; 
 
export default Card; 