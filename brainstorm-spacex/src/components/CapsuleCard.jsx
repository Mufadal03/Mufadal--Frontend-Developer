import { Box, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import capsule from '../assets/images/space-capsule.jpg'
const CapsuleCard = ({ capsule_id, capsule_serial, details, landings, missions, original_launch, reuse_count, status, type }) => {
    
      const { isOpen, onOpen, onClose } = useDisclosure()
  return (
      <>
        <Flex onClick={()=>onOpen()} h='100%' bgImage={capsule} bgPos={'center'} bgSize={'cover'} p='1rem' color='white' fontFamily={'Ubuntu'} direction={'column'} alignItems={'flex-start'} gap='.5rem' cursor={'pointer'}>
          <Text>{capsule_id} - ( {capsule_serial} )</Text>
          <Text textAlign={'left'}>{details}</Text>
          <Text>Status : {status}</Text>
          <Text>Type : {type}</Text>
          <Text>Re-used : {reuse_count}</Text>
          </Flex> 
          

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
                <ModalContent>
                     <ModalHeader><Text>{capsule_id} - ( {capsule_serial} )</Text></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text textAlign={'left'}>{details}</Text>
                        <Text>Status : {status}</Text>
                        <Text>Type : {type}</Text>
                        <Text>Re-used : {reuse_count}</Text>
                        <Text>Landings : { landings}</Text>
                        <Text>Missions :</Text>
                            <Flex direction="column" align={'flex-start'} >
                                            {
                                missions.map((elem)=>{
                                return <Text>{elem.flights }{elem.name} </Text>
                                })
                            }
                            </Flex>
                      <Text>Launched : {JSON.stringify(new Date(original_launch) )}</Text>
                    </ModalBody>
            </ModalContent>
      </Modal>
      </>
  )
}

export default CapsuleCard