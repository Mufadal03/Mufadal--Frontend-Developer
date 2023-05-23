import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomBtn from '../components/Common/CustomBtn'
import { handleIncrementPage } from '../redux/appRedux/action'
import { useSearchParams } from 'react-router-dom'
const Pagination = () => {
    const dispatch = useDispatch()
    const { currentPage ,totalProd} = useSelector(state => {
        return {
            currentPage: state.appReducer.currentPage,
            totalProd:state.appReducer.totalProd
        }
    })
    const incrementPage = (num) => {
        const val = currentPage > num ? -(currentPage - num) : Math.abs(currentPage - num)
        dispatch(handleIncrementPage(val))
    }
  return (
      <Flex my='2rem' justifyContent={'center'}>
          <CustomBtn text={'Prev'} bg={'teal'} color='white' size={'md'} onClick={() => dispatch(handleIncrementPage(-1))} disable={currentPage==1?true:false } />
          <Flex mx='2rem' gap='1rem'>
         {
                  new Array(Math.floor(totalProd / 4)).fill(0).map((_, index) => <CustomBtn bg={currentPage == index + 1 ? 'teal' : ''} color={currentPage == index + 1 ? 'white' : 'black'} text={index + 1} key={index} onClick={()=>incrementPage(index+1)}/>)
          }
          </Flex>
          <CustomBtn text={'Next'} bg={'teal'} color='white' size={'md'} onClick={() => dispatch(handleIncrementPage(1))} disable={currentPage >= Math.floor(totalProd / 4)?true:false} />
          
    </Flex>
  )
}

export default Pagination