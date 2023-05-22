import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCapsule } from '../redux/appRedux/action'

const Capsules = () => {
    const dispatch = useDispatch()
    const { data, isLoading, isError } = useSelector((state) => {
        return {
        data: state.appReducer.data,
        isLoading: state.appReducer.isLoading,
        isError:state.appReducer.isError
       }
    })
    console.log(data,isLoading,isError)
    useEffect(() => {
        dispatch(getCapsule())
    },[])
  return (
    <Box>Capsules</Box>
  )
}

export default Capsules