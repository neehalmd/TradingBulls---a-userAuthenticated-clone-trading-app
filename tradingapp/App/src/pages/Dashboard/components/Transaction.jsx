import {React,Fragment} from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Stack, Text,Flex,Grid,Icon, Divider,Button } from '@chakra-ui/react'
import { FaRupeeSign,FaBtc } from "react-icons/fa";
const Transaction = () => {
  const Transaction = [
    {
      id: "1",
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard>
      <Text mb={"6"} fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack spacing={"4"}>
        {Transaction.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i != 0 && <Divider />}
            <Flex gap={"4"}>
              <Grid
                placeItems={"center"}
                bg={"black.5"}
                boxSize="10"
                borderRadius="full"
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify={"space-between"} w={"full"}>
                <Stack spacing={"0"}>
                  <Text textStyle={"h6"}>{transaction.text}</Text>
                  <Text fontSize={"sm"} color={"black.80"}>
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle={"h6"}>
                  {transaction.amount}
                </Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" colorScheme="gray" mt="5">
        <Text>View All</Text>
      </Button>
    </CustomCard>
  );
}

export default Transaction
