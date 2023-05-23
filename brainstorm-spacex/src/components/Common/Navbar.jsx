import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../assets/images/logo.png'
import CustomBtn from './CustomBtn'
const Navbar = () => {
  return (
      <Flex w='90vw' m='0 auto' h='8vh' alignItems={'center'} justifyContent={'space-between'} p='.5rem'>
          <Image src={Logo} alt='LOGO' h='50px' aspectRatio={'10/3'} />
          <Flex w='40%' alignItems={'center'} gap='2rem'  justifyContent={'flex-end'} fontFamily={'Ubuntu'}>
              <Link href='/login' >
                  <CustomBtn text={"Login"} bg='black' color={'white'} size={"lg"} />
              </Link>
          </Flex>
     </Flex>
  )
}

export default Navbar