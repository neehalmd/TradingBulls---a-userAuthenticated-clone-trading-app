import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Card from '../../../components/Card'
import { Center, VStack,Icon,Text ,Button,Box, useToast, Spinner} from '@chakra-ui/react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { verifyEmailAddress } from '../../../api/Query/userQuery';

const Registersuccess = () => {

  const toast = useToast();
  const navigate = useNavigate();
  const {token}  = useParams();
  const {isSuccess,isLoading} = useQuery({
    queryKey : ["verify-email-token"],
    queryFn: ()=> verifyEmailAddress({ token}),
    enabled : !!token,
    onError: (error) => {
      toast({
        title: "SignUp Error",
        description: error.message,
        status: "error",
      });
        navigate("/signup")
    },
  })
  if(isLoading){
    return (
      <Center h="100vh">
        <Spinner/>
      </Center>
    )
  }
  return (
    <Center minH={"100vh"} bg={"#F3F3F7"}>
      {
        isSuccess && (
           <Card
        p={{
          base  : "4",
          md : "10",
        }}
        showCard={true}>
            <VStack  mt="10px" mb={"10px"} gap={6}>
                <Icon boxSize="48px" color="green" as={FaCheckCircle}/>
                <Text fontSize={'20px'} fontWeight={500} lineHeight={'24px'} color="p.black">
                    Successful Registration
                </Text>
                <Text fontSize={'14px'} fontWeight={400} lineHeight={'18px'} color="black.60" textAlign={'center'}>
                Hurray! You have successfully created your account. Enter the app to explore all it’s features.
                </Text>
                <Link to={"/signin"}>
                <Button bg={"#EEEEF4"} w='full' color={"black"}> Enter The App</Button>
                </Link>
                
            </VStack>
        </Card>
    
        )
      }
       
    </Center>
  )
}

export default Registersuccess
