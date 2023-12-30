import { Button, Card, Flex, Icon,Tab,TabPanel,TabList,Tabs,TabPanels, Tag,InputGroup,InputLeftElement,
Input,HStack } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { IoMdDownload } from "react-icons/io";
import Transactiontable from './components/Transactiontable';
import { IoMdSearch } from "react-icons/io";
const TransactionPage = () => {
  const tabs = [
    {
      name  : "All",
      count : 349

    },
    {
      name  : "Deposit",
      count : 114

    },
    {
      name  : "Withdraw",
      count : 213

    },
    {
      name  : "Trade",
      count : 22

    }
    
  ]

 
  return (
    <DashboardLayout title={"Transactions"}>
      <Flex justify={"end"} mt={"6"} mb="3">
        <Button leftIcon={<Icon as={IoMdDownload} />} w="130px" h={"38px"}>
          Export CSV
        </Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList pt="4" display={"flex"} w="full" justifyContent={"space-between"}>
            <HStack>
            {tabs.map((tab) => (
              <Tab key={tab.name} display={"flex"} gap={"2"} pb={"4"}>
                {tab.name}{" "}
                <Tag colorScheme="gray" borderRadius={"full"}>
                  {tab.count}
                </Tag>{" "}
              </Tab>
            ))}
            </HStack>
            <InputGroup maxW={"200px"}  pr={"6"}>
              <InputLeftElement pointerEvents="none">
                <Icon as={IoMdSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
}

export default TransactionPage
