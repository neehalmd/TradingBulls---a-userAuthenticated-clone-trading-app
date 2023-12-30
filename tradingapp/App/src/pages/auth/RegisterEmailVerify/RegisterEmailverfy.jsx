import React, { useEffect } from 'react'
import Card from '../../../components/Card'
import { Center, VStack,Icon,Text ,Button,Box, Spinner,useToast,} from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";
import {  useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { sendVerificationMail } from '../../../api/Query/userQuery';

const RegisterEmailverfy = () => {
    
    const toast = useToast();
    const {email} = useParams();
    
    if(email === ""){
        return<Center h="100vh">
            Invaid Email
        </Center>
    }
    
    const { mutate,isSuccess,  isLoading } = useMutation({
     mutationKey: ["registeremailverify"],
     mutationFn: ()=> sendVerificationMail({email}),
     onSettled: (data) => {
        
        console.log(data)
      },
      onError: (error) => {
        toast({
          title: "SignUp Error",
          description: error.message,
          status: "error",
        });
      },
      enabled : !!email,
    });
    useEffect(()=>{
      mutate({email})
    },[email])

  
  return (
    <Center minH={"100vh"} bg={"#F3F3F7"}>
 
            <Card 
            p={{
                base  : "4",
                md : "10",
              }}
              showCard={true}>
                <VStack mt="10px" mb={"10px"} gap={6}>
    
                    <Icon boxSize="48px" color="p.purple" as={MdEmail}/>
                    <Text fontSize={'20px'} fontWeight={500} lineHeight={'24px'} color="p.black">
                        Email Verification
                    </Text>
                    <Text fontSize={'14px'} fontWeight={500} lineHeight={'18px'} color="black.60" textAlign={'center'}>
                    We have sent you an email verification to  <Box as='b' color='p.black'>{email}</Box>. If you didn’t receive it, click the button below.
                    </Text>
                    <Button bg={"#EEEEF4"} w='full' color={"black"}
                    onClick={()=>{
                      mutate({email});
                    }}> Re-SEND Email</Button>
                </VStack>
            </Card>
        

    </Center>
   
        
    )
}

export default RegisterEmailverfy
