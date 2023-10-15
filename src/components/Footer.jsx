import { Avatar, Box, Center, Stack, Text, VStack, withDefaultSize } from '@chakra-ui/react'
import React from 'react';
import avtarSrc from '../assets/me.jpg'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'} minH={'48'} px={'16'} py={['16', '8']}>
      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center', 'flex-start']} >
<Text fontWeight={'bold'}>About Us</Text>
<Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center', 'left']}>We are the best crypto trading app in India. We provide our guidance at a very reasonable price.</Text>
        </VStack>
        <VStack>
          <a href='https://www.instagram.com/tamsa_banna/'>
          <Avatar src={avtarSrc} boxSize={'28'} mt={['4', '0']}></Avatar>
          </a>
          <Text>Our Founder SSR.</Text>
        </VStack>

      </Stack>
    </Box>
  )
}

export default Footer