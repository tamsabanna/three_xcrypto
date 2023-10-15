import { Box, Center, Container, HStack, Image, Radio, RadioGroup, Stack, StatLabel, Stat, StatArrow, StatHelpText, StatNumber, Text, VStack, Badge, Progress, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import {useParams} from 'react-router-dom'
import { server } from '..';
import axios from 'axios';
import Error from './Error';
import Chart from './Chart';

const CoinDetails = () => {

  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState('inr');
  const [days, setDays] = useState('24h');
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol = currency==='inr'?'₹':currency==='eur'?'€':'$'

  const btns = ['24H', '7D','14D', '30D', '60D', '180D', '365D', 'max']

  const switchChartStats = (key)=>{

    switch (key) {
      case '24H':
        setDays('24H');
        setLoading(true);
        break;
        case '7D':
        setDays('7D');
        setLoading(true);
        break;
        case '14D':
        setDays('14D');
        setLoading(true);
        break;
        case '30D':
        setDays('30D');
        setLoading(true);
        break;
        case '60D':
        setDays('60D');
        setLoading(true);
        break;
        case '180D':
        setDays('180D');
        setLoading(true);
        break;
        case '365D':
        setDays('365D');
        setLoading(true);
        break;
        case 'max':
        setDays('max');
        setLoading(true);
        break;
    
      default : case '24H':
        setDays('24H');
        setLoading(true);
        break;
        
    }

  }
const params = useParams();

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const {data} = await axios.get(`${server}/coins/${params.id}`);
        const {data:chartData} = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);

      setCoin(data);
      setChartArray(chartData.prices);
      setLoading(false);
      console.log(chartData)
        
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  if (error) return <Error message={'Error while fetching Coin'} />

  return (
    <Container maxW={'container.xl'}>
{
  loading? <Loader /> : (
<>
<Box 
borderWidth={1} 
width={'full'}>

<Chart arr={chartArray} currency={currencySymbol} days={days}></Chart>
</Box>


<HStack p={'4'} overflowX={'auto'}>
  {
btns.map((i)=>(
  <Button key={i} onClick={()=>switchChartStats(i)}>
    {i}
  </Button>
)
)
  }
</HStack>


<RadioGroup value={currency} onChange={setCurrency} p={'8'}>
  <HStack spacing={'4'}>
    <Radio value={'inr'}>₹ INR</Radio>
    <Radio value={'usd'}>$ USD</Radio>
    <Radio value={'eur'}>€ EUR</Radio>
  </HStack>
</RadioGroup>

<VStack spacing={'4'}
p={'16'}
alignItems={'flex-start'}

>
  <Text
  fontSize={'small'}
  alignSelf={'center'}
  opacity={0.7}
  >
Last updated on {Date(coin.market_data.last_updated).split('G')[0]}

  </Text>

  <Image 
  src={coin.image.large}
  w={'16'}
  h={'16'}
  objectFit={'contain'}
  >

  </Image>

  <Stat>
    <StatLabel>{coin.name}</StatLabel>
    <StatNumber >
    {currencySymbol} {coin.market_data.current_price[currency]}
    </StatNumber>
<StatHelpText>

  <StatArrow type={coin.market_data.price_change_percentage_24h > 0? "increase" : 'decrease'} />
  {coin.market_data.price_change_percentage_24h}%
</StatHelpText>
  </Stat>

  <Badge fontSize={'2xl'} bgColor={'blackAlpha.800'} color={'white'}>
    {`#${coin.market_cap_rank}`}
  </Badge>

  <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
  low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
  ></CustomBar>

  <Box w={'full'} p={'4'} >
    <Item title={'Max Supply'} value={coin.market_data.max_supply} />
    <Item title={'Circulating Supply'} value={coin.market_data.circulating_supply} />
    <Item title={'Market Cap'} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
    <Item title={'All Time Low'} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
    <Item title={'All Time High'} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />
  </Box>

</VStack>

</>
  )
}
    </Container>


  )
}

const Item = ({title, value}) =>(
  <HStack w={'full'} justifyContent={'space-between'} my={'4'}>
    <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>{title}</Text>
    <Text>{value}</Text>
  </HStack>
)

const CustomBar = ({high, low}) => (
  <VStack w={'full'}>
    <Progress value={50} colorScheme='teal' w={'full'}></Progress>
    <HStack justifyContent={'space-between'} w={'full'}>
      <Badge  children={low} colorScheme='red'/>
      <Text fontSize={'sm'}>24H Range</Text>
      <Badge  children={high} colorScheme='green'/>
    </HStack>
  </VStack>
)

export default CoinDetails