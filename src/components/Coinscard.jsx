import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


    const Coinscard = ({price, name, img, symbol, id, currencySymbol='₹'})=>(
        <Link to={`/coin/${id}`} >
          <VStack 
          w={'52'} 
          shadow={'lg'} 
          p={'8'} 
          borderRadius={'lg'} 
          transition={'all 0.5s'}
          m={'4'} 
          css={{'&:hover':{transform:'scale(1.1)',}}}
          >
            <Image 
            src={img} 
            objectFit={'contain'} 
            w={'16'} 
            h={'16'} 
            alt={'Coins'} >

            </Image>

            <Heading 
            size={'md'} 
            noOfLines={1}>
                {symbol}
            </Heading>

            <Text 
             noOfLines={1}
             > 
             {name}
            </Text>

            <Text 
            noOfLines={1} 
            >
                {price? `${currencySymbol}${price}`:'NA'}
            </Text>
            
          </VStack>
        </Link>
      )
  


export default Coinscard