import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const Error = ({message}) => {
  return (
    <Alert left={'50%'} bottom={'4'} position={'fixed'} status='error' transform={'translatex(-50%)'} w={'container.lg'}>

<AlertIcon />
{message}

    </Alert>
  )
}

export default Error