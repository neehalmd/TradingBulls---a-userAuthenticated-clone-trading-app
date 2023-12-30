import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Card from '../../../components/Card'
import { Center, VStack,Icon,Text ,Button,Box} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';

const SuccessfullySent = () => {
  const { email } =useParams()
  return (
    <Center minH={"100vh"} bg={"#F3F3F7"}>
    <Card>
        <VStack   gap={8}>
            <Icon boxSize="48px" color="green" as={FaCheckCircle}/>
            <Text fontSize={'22px'} fontWeight={500} lineHeight={'26px'} color="p.black">
                Successfully Sent
            </Text>
            <Text fontSize={'14px'} fontWeight={400} lineHeight={'18px'} color="black.60" textAlign={'center'}>
            We have sent instructions on how to reset your password to <Box as='b'  color='p.black'>{email}</Box> Please follow the instructions from the email.
            </Text>
            
            
        </VStack>
    </Card>

</Center>
  )
}

export default SuccessfullySent
