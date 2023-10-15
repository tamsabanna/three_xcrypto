import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'4'} bgColor={'blackAlpha.900'} shadow={'base'}>
        <Button color={'whiteAlpha.900'} variant={'unstyled'}>
            <Link to={'/'}>Home</Link>
        </Button>
        <Button color={'whiteAlpha.900'} variant={'unstyled'}>
            <Link to={'/coin'}>Coin</Link>
        </Button>
        <Button color={'whiteAlpha.900'} variant={'unstyled'}>
            <Link to={'/exchanges'}>Exchanges</Link>
        </Button>
    </HStack>
  )
}

export default Header