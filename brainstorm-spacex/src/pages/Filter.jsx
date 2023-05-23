import { Box, Flex, Heading, Input, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FilterDb } from '../assets/filtersDb'
import CustomBtn from '../components/Common/CustomBtn'
import { useDispatch } from 'react-redux'
import { getCapsule, handleFilter } from '../redux/appRedux/action'
const Filter = () => {
  const [data, setData] = useState(null)
  const [val, setVal] = useState(null)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    if (e.target.value == -1) {
      dispatch(getCapsule())
      dispatch(handleFilter({}))
    }
    setData(FilterDb[e.target.value])

  }

  const handleFilterSearch = () => {
    if(!data || !val) return
    dispatch(handleFilter({[data.value]:val}))
    
    
  }
  useEffect(() => {
    setVal('')
  },[data])
  return (
    <Box py='1rem' w='90vw' m='1rem auto'>
      <Heading fontFamily={'Ubuntu'} fontSize={'5xl'}>Filter Capsules</Heading>
      <Flex p='1rem' justifyContent={'space-between'}>
        <Select onChange={handleChange} w='50%' >
        <option value={-1}>Select data you wanna filter</option>
        {
          FilterDb.map((elem,index)=>{
            return (
              <option key={index} value={index}>{ elem.name}</option>
            )
          })
        }
        </Select>
        {
         data && (data?.type == 'Select' ? (
          <Select onChange={(e)=>setVal(e.target.value)}>
              {
                data?.options.map((elem,i) => {
                  return (<option key={ i} value={elem}>{elem }</option>)
                })
            }
          </Select>
          ) : (
              <Input type={data?.type} value={val} placeholder={`Please type ${data?.type}`} onChange={(e)=>setVal(e.target.value)}/>
          ))
        }
      </Flex>
      <CustomBtn text='Filter Search' bg='black' color='white' onClick={()=>handleFilterSearch()} size={'lg'} />
    </Box>
  )
}

export default Filter