import { IconButton, Typography, Card, CardMedia, CardHeader, CardContent, CardActions } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'
import goods from '../../../store/goods'
import { IGood } from '../../../types/interfaces'
import styles from './CartItem.module.css'
import { red } from '@mui/material/colors'
  

const CartItem = (good: IGood) => {
  return (
		<Card className={styles.cartItem} sx={{ width: 400}}>

			<CardMedia component='img' image={good.thumbnail} alt='card-image'/>

			<CardHeader title={good.title} subheader={`Цена: ${good.price * good.pickedAmount}`}/>

			<CardContent className={styles.cardContent}>
				<Typography variant='body2' color='text.secondary'>{good.description}</Typography>
				<Typography>{`Выбрано: ${good.pickedAmount}`}</Typography>
			</CardContent>

			<CardActions className={styles.cardItemActions}>
				<div>
					<IconButton onClick={() => goods.addItem(good.id)}><AddIcon color='primary' /></IconButton>
					<IconButton onClick={() => goods.removeItem(good.id)}><RemoveIcon color='primary' /></IconButton>
				</div>
				<div>
					<IconButton aria-label='delete' onClick={() => goods.deleteGood(good.id)}><DeleteIcon sx={{ color: red[500] }}/></IconButton>
				</div>
			</CardActions>
			
		</Card>
	)
}

export default CartItem