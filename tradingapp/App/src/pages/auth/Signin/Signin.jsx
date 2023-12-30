import React from 'react'
import Card from '../../../components/Card'
import {  Stack, Text, HStack, Input, FormControl, FormLabel, Checkbox, Button, Flex, Box,Container,Center,FormErrorMessage, useToast, useAccordion } from '@chakra-ui/react'
import { BsCardList } from 'react-icons/bs'
import {Formik,Form,Field} from "formik";
import { object, string,ref} from 'yup';
import { Link, useNavigate, } from 'react-router-dom';
import { useMutation } from 'react-query';
import { signinUser } from '../../../api/Query/userQuery';
import useAuth from '../../../Hooks/useAuth';



const Signin = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const {login} = useAuth();

  const {mutate,isLoading} = useMutation({
    mutationKey: ["signin"],
    mutationFn : signinUser,
    onSuccess : (data) =>{
      const {token} = data;
      if(token){
        login(token)
      }
    },
    onError  : (error) =>{
      toast({
        title : 'Signin Error',
        description  : error.message,
        status : 'error',
      })
    },
  });
 
 
    const signinValidationSchema = object({
       
        email : string().email('email is invalid').required('email is required'),
        password : string()
                    .min(6,'password must be atleast 6 character').required('password is required')
       
      });
      
  return (
    <Box bgImage={"Signupbg.jpg"}  bgSize={'contain'}>
    <Container >
        <Center minH={'100vh'}>
            <Flex>
                <Card  borderRadius={"16"} flexDirection={'column'} w={'408px'}
                p={{
                  base  : "4",
                  md : "10",
                }}
                showCard={true}>
                    <Stack gap={'10px'}>
                        <Stack gap={'16px'}>
                            <Text fontSize={'28px'} fontWeight={'500'}> Welcome To TradingBulls</Text>
                            <Text fontSize={'14px'} color={'#797E82'}>Enter your credentials to access the account.</Text>
                        </Stack>
       
                    <Stack gap={'24px'}>

                    <Formik
            initialValues={{
              email: "test5@gmail.com",
              password: "dhotegar1234",
            }}
            onSubmit={(values) => {
              
              mutate(values);
            }}
            validationSchema={signinValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="7" spacing={6}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enter your email...."
                        />{" "}
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          type="password"
                          placeholder="Enter your password...."
                        />{" "}
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <HStack justify="space-between">
                    <Checkbox>
                      <Text textStyle="p3">Remember me</Text>
                    </Checkbox>

                    <Link to="/forgotpassword">
                      <Text textStyle="p3" as="span" color="p.purple">
                        Forgot password?
                      </Text>
                    </Link>
                  </HStack>
                  <Box>
                    <Button isLoading={isLoading}  w="full" type="submit">
                      Login
                    </Button>
                    <Link to="/signup">
                      <Button variant="outline" mt="3" w="full">
                        Create Account
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
                    
                        
                        
                      
       </Stack>

       
   </Stack>
       
</Card>
</Flex>
</Center>
</Container>
</Box>
  )
}

export default Signin


