import { Grid, GridItem,} from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import Portfoliosection from "./components/Portfoliosection"
import PriceSection from "./components/PriceSection"
import Transaction from "./components/Transaction"
import InfoCard from "./components/InfoCard"
import { useContext, useEffect } from "react"
import {useQuery}  from 'react-query'
import { fetchexample } from "../../api/Query/exampleQuery"


const Dashboard = () => {

 const exampleQuery =  useQuery({
    queryKey : ["example"],
    queryFn : fetchexample,
})
  if(exampleQuery.isLoading) return <div>Loading...</div>
  return (
    <DashboardLayout title="Dashboard" >
        
        <Grid 
        gridTemplateColumns={{
          base : "repeat(1,1fr)",
          xl  : "repeat(2,1fr)",
        }}
        gap = "6">
          <GridItem
            colSpan={{
              base: 1,
              xl : 2,
            }}
          >
            <Portfoliosection/>
          </GridItem>
          <GridItem
          colSpan={1}>
            <PriceSection/>
          </GridItem>
          <GridItem
          colSpan={1}>
            <Transaction/>
          </GridItem>
          <GridItem
          colSpan={1}>
            <InfoCard imgUrl={"/dot_bg.svg"}
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            tagText = "Loan"
            inverted={false} />
          </GridItem>
          <GridItem
          colSpan={1}>
            <InfoCard imgUrl={"/Visual2.svg"}
            tagText="Contact"
            text="Learn more about our real estate, mortgage, and  corporate account services"
            inverted={true}
             />
          </GridItem>
        </Grid>
        
    </DashboardLayout>
  )
}

export default Dashboard
