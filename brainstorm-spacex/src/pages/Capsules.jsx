import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCapsule } from '../redux/appRedux/action'
import CapsuleCard from '../components/CapsuleCard'
import Pagination from '../components/Pagination'

const Capsules = () => {
    const dispatch = useDispatch()
    const { data, isLoading, isError,currentPage } = useSelector((state) => {
        return {
        data: state.appReducer.data,
        isLoading: state.appReducer.isLoading,
        isError: state.appReducer.isError,
        currentPage:state.appReducer.currentPage
       }
    })
    useEffect(() => {
      dispatch(getCapsule())
    },[currentPage])
    console.log(data)
  return (
    <Box minH='100vh' border={'2px solid blue'} bgColor={'#fefffe'}>
      <Heading my='1rem' fontFamily={'Ubuntu'}>Capsules</Heading>
      <Grid w='90vw' m={'auto'} h='90vh'gridTemplateRows={'repeat(auto)'} gridTemplateColumns={'repeat(2,1fr)'} gap='1rem'>
        {
          data.length > 0 && data?.map((elem, i) => {
            return (
              <GridItem key={i} >
                <CapsuleCard {...elem} />
             </GridItem>
           )
         })
        }
      </Grid>
      <Pagination />
    </Box>
  )
}

export default Capsules