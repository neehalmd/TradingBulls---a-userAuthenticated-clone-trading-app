import { HStack,Icon,Stack,Text,Tag,Button} from '@chakra-ui/react'
import React from 'react'
import { IoIosInformationCircleOutline, IoMdDownload} from "react-icons/io";
import { MdUpload } from "react-icons/md";


const Portfoliosection = () => {
  return (
    <HStack justify={"space-between"} bg={"#FFFFFF"} borderRadius={"xl"} p="6" align={{
        base: 'flex-start',
        xl : "center",
    }} flexDir={{
        base : 'column',
        xl : 'row'
    }}
    spacing={{
        base: 4,
        xl: 0,
      }}> //here 16 spacing means a spacing of 64px ,as in chakra we can write pixels as multiplr of 4.
        <HStack spacing={{
            base : "0",
            xl : "16"
        }}
         align={{
        base: 'flex-start',
        xl : "center",
    }} flexDir={{
        base : 'column',
        xl : 'row'
    }}>
             <Stack>
            <HStack color="black.80"> //using chakra theme setup in the theme folder
                <Text fontSize="sm">Total Portfolio Value</Text> //sm resolves to a value preset by me in chakra theme
            
                <Icon as={IoIosInformationCircleOutline}/>
            </HStack>
            <Text textStyle="h2"  fontWeight={"medium"}>₹ 112,312.24</Text>
        </Stack>

        <Stack>
            <HStack color="black.80"> //using chakra theme setup in the theme folder
                <Text fontSize={"sm"}>Wallet Balances</Text> //sm resolves to a value preset by me in chakra theme
            
                
            </HStack>
            <HStack spacing={2}
             align={{
                base: 'flex-start',
                xl : "center",
            }} flexDir={{
                base : 'column',
                xl : 'row'
            }}
            
            >

            
            <HStack>
                <Text textStyle="h2" fontWeight="medium">22.39401000</Text>{" "}
                <Tag colorScheme='gray'  fontWeight="medium">BTC</Tag>
            </HStack>
            
        

        
           
            <HStack>
                <Text textStyle="h2"  fontWeight="medium">₹ 1,300.00</Text>
                <Tag colorScheme='gray'>INR</Tag>
            </HStack>
            </HStack>
        
      </Stack>
        </HStack>
       
      <HStack>
        
            
            <Button leftIcon={ <Icon as={IoMdDownload}/>} >  Deposit</Button>
        
        
            
            <Button leftIcon={<Icon as={MdUpload}/> }>Withdraw</Button>
        
        
      </HStack>
    </HStack>
  )
}

export default Portfoliosection
