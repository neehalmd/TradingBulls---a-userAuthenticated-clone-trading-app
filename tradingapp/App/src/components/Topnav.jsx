import React from 'react'
import  { Container,Flex,Heading,Menu,MenuButton,MenuItem,MenuList, Button, HStack, Box,Icon } from "@chakra-ui/react"
import { FaUserTie } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';
const Topnav = ({title,onOpen}) => {
  const {logout} = useAuth();
  return (
    <Box px="4" bg="white" >

    
    <HStack maxW="1000px"  h="64px" justify="space-between"  mx="auto">
      <Icon as={FaBars} onClick={onOpen}  display={{
        base : "block",
        lg : "none"
      }}/>
        <Heading fontSize="28px" fontWeight={"meduium"}>{title}</Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaUserTie} fontSize={"24px"}/>
          </MenuButton>
          
          <MenuList>
            <MenuItem onClick={logout}>Logout</MenuItem>
            <Link to={"/support"}>
            <MenuItem>Support</MenuItem>
            
            </Link>
            
          </MenuList>
        </Menu>
      
    </HStack>
    </Box>
  );
}

export default Topnav
