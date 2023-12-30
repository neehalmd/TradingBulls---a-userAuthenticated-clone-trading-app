import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag,Text } from '@chakra-ui/react'

const InfoCard = ({imgUrl,text,tagText,inverted }) => {
  return (
    <CustomCard
    bg={inverted ? "p.purple" : "white"}
    bgImage={imgUrl} bgSize={"cover"} bgRepeat={'no-repeat'}>
       <Tag bg={inverted ? "white" : "p.purple" } color={inverted ? "p.purple" : "white"} borderRadius={"full"}>{tagText}</Tag>
       <Text textStyle="h5" fontWeight={"medium"} mt={"4"} color={inverted ? "white" : "p.black"}>
       {text}
       </Text>
    </CustomCard>
  )
}

export default InfoCard
