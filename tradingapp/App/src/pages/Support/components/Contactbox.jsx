import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Icon,Stack,Text } from '@chakra-ui/react'
import { FaEnvelope } from "react-icons/fa";
const Contactbox = ({icon,text1,text2,number}) => {
  return (
    <Stack maxW={'390px'}>
        <Stack spacing={number}>
            <Icon as={icon}  fontSize={"28px"} color={'p.purple'}/>
            <Text as={'h1'} textStyle={'h1'} fontSize={"32px"} fontWeight='medium'> 
            {text1}
            </Text>
            <Text fontSize={'15px'} fontWeight={400} color={'#535D66'}>
                
            {text2}
            </Text>    
        </Stack>
    </Stack>
  )
}

export default Contactbox
