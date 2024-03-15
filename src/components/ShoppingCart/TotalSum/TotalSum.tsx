import React from 'react'
import goods from '../../../store/goods'
import { Typography } from '@mui/material'

const TotalSum = () => {
  return (
    <Typography variant='h4' color='#0077ff'>Итого: {goods.totalSum} руб.</Typography>
  )
}

export default TotalSum