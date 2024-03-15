import { Typography } from '@mui/material'
import styles from './EmptyCart.module.css'

const EmptyCart = () => {
  return (
		<Typography variant='h5' color='#0077ff' className={styles.emptyCart}>
			Ваша корзина пуста
		</Typography>
	)
}

export default EmptyCart