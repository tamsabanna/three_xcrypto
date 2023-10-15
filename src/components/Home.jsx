import { Box, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Img from '../assets/btc.png';
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'}>
      <motion.div style={{height:'80vh', }}
      animate={{translateY:'20px'}}
      transition={{duration:1, repeat:Infinity, repeatType:'reverse',}}>
      <Image w={'full'} h={'full'} objectFit={'contain'} src={Img} filter={'grayscale(1)'} ></Image>
      </motion.div>

    
    <Text fontSize={'6xl'} fontWeight={'thin'} color={'white'} textAlign={'center'} mt={'-20'}>XCrypto</Text>
    </Box>
  )
}

export default Home