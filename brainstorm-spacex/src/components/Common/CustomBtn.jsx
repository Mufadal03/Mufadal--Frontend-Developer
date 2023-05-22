import { Button } from '@chakra-ui/react'
import React from 'react'

const CustomBtn = ({bg,color,text,size,onClick,disable}) => {
  return (
      <Button isDisabled={disable} onClick={()=>onClick()} bgColor={bg} border={'1px solid black'} color={color} borderRadius={'none'} size={size} _hover={{backgroundColor:"transparent",color:bg}} fontWeight={'md'} fontFamily={'Ubuntu'}>
          {text}
    </Button>
  )
}

export default CustomBtn