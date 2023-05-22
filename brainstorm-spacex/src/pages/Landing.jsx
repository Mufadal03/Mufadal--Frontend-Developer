import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Common/Navbar'
import CustomBtn from '../components/Common/CustomBtn'

const Landing = () => {
  return (
    <Flex h='100vh' bgImage={'https://sxcontent9668.azureedge.us/cms-assets/assets/Axiom2_PPF_DSC_6564_desktop_d1927b5484.jpg'} bgPos={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} direction={'column'}>
      
      <Navbar />
      
      <Flex direction={'column'} h='80vh' justifyContent={'center'} w='90%' m='1rem auto' alignItems={'flex-start'} color={''} gap='2rem'>

        <Heading fontFamily={'Ubuntu'} fontSize={'5xl'} textAlign={'left'}>Reaching <Text as='span' >New Horizons</Text>, <br />Together</Heading>
        
        <Text fontSize={'xl'}>Pioneering the Future of Space Exploration and Beyond</Text>
        
        <CustomBtn text={"Capsules"} bg='black' size='lg' color={'white'}/>
      </Flex>
      
   </Flex>
  )
}

export default Landing