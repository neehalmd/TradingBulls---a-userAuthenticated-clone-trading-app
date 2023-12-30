import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Card from '../../../components/Card'
import { Center, VStack,Icon,Text ,Button,Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const ResetSuccess = () => {
  return (
    <Center minH={"100vh"} bg={"#F3F3F7"}>
    <Card
    p={{
      base  : "4",
      md : "10",
    }}
    showCard={true}>
        <VStack  gap={4}>
            <Icon boxSize="48px" color="green" as={FaCheckCircle}/>
            <Text fontSize={'22px'} fontWeight={500} lineHeight={'26px'} color="p.black">
                Password Reset Done
            </Text>
            <Text fontSize={'14px'} fontWeight={400} lineHeight={'18px'} color="black.60" textAlign={'center'}>
            Now you can access your account.
            </Text>
            
            
        </VStack>
        <Link to={"/signin"} >
            <Button bg={"#EEEEF4"} w='full' color={"black"} mt={'20px'}> SignIn</Button>
            </Link>
    </Card>

</Center>
  )
}

export default ResetSuccess
