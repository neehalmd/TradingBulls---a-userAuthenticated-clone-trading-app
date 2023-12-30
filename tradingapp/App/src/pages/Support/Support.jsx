import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Grid, GridItem,Icon,Stack,Text,Box } from '@chakra-ui/react'
import { CustomCard } from '../../chakra/CustomCard'
import { MdMessage } from "react-icons/md";
import Form from './components/Form';
import Contactbox from './components/Contactbox';
import InfoCard from '../Dashboard/components/InfoCard';
import { FaEnvelope } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";

const Support = () => {
  return (
  <DashboardLayout >
    
    <Grid 
    gridTemplateColumns={{
      base : "repeat(1,1fr)",
      xl  : "repeat(2,1fr)",
    }} >
      <GridItem
      colSpan={0.5}>
         <Contactbox number={4} icon={FaEnvelope} text1={'Contact Us'} text2={'Have a question or just want to know more? Feel free to reach out to us.'}/>
      </GridItem>   
      <GridItem
      colSpan={1.5}>
         <Form/>
      </GridItem>   
      <GridItem
      colSpan={1} mt={5} >
         <Contactbox number={2} icon={BiSolidMessageRounded} text1={'Live Chat'} text2={'Don’t have time to wait for the answer? Chat with us now.'}/>
      </GridItem>    
      <GridItem colSpan={1} mt={5} >
      <InfoCard imgUrl={"/Visual2.svg"}
            tagText="ChatBot"
            text="Chat With Us Now"
            inverted={true}
             />
      </GridItem>
      
      
      
  
    </Grid>
     </DashboardLayout>
  )
}

export default Support
