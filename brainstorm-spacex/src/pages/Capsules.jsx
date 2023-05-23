import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCapsule } from '../redux/appRedux/action'
import CapsuleCard from '../components/CapsuleCard'
import Pagination from '../components/Pagination'

const Capsules = () => {
    const dispatch = useDispatch()
    const { data, isLoading, isError,currentPage ,query} = useSelector((state) => {
        return {
        data: state.appReducer.data,
        isLoading: state.appReducer.isLoading,
        isError: state.appReducer.isError,
          currentPage: state.appReducer.currentPage,
        query :state.appReducer.query
       }
    })
  useEffect(() => {
      dispatch(getCapsule(query))
    },[currentPage,query])
  return (
    <Box minH='100vh'  bgColor={'#fefffe'}>
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