import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { HStack,Input,Stack,Text,Checkbox, Button,Box } from '@chakra-ui/react'

const Form = () => {
  return (
    <CustomCard flexGrow={1}>
        <Stack spacing={7}>
        <Text>You will receive response within 24 hours of time of submit.</Text>
        <HStack justify={'space-between'}>
            <Stack>
                <Text fontSize="15px" fontWeight={700}>
                    Name
                </Text>
                <Input placeholder='Enter Name' />
            </Stack>
            <Stack>
                <Text  fontSize="15px" fontWeight={700}>
                    Surname
                </Text>
                <Input placeholder='Enter lastname' />
            </Stack>
        </HStack>
        <Stack>
            <Text  fontSize="15px" fontWeight={700}>Email</Text>
            <Input placeholder='Enter email'/>
        </Stack>
        <Stack>
            <Text  fontSize="15px" fontWeight={700}>
                Message
            </Text>
            <Input placeholder='Your message'/>
        </Stack>

        <Checkbox colorScheme='green' defaultChecked>
    I agree with <Box as = 'span' color={'p.purple'}>Terms and Conditions</Box>
  </Checkbox>
    <Stack>
        <Button color={'black'} bg={'#D8DDE2'} px={'10px'} py={'16px'}>
            Send a Message
        </Button>
        <Button colorScheme="gray" color={'black'} bg={'#EEEEF4'} px={'10px'} py={'16px'}>
            Book a Meeting
        </Button>
    </Stack>
    </Stack>
    </CustomCard>
  )
}

export default Form
