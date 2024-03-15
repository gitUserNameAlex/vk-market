import { observer } from 'mobx-react-lite'
import goods from '../../store/goods'
import { IGood } from '../../types/interfaces'
import CartItem from './CartItem/CartItem'
import TotalSum from './TotalSum/TotalSum'
import EmptyCart from './EmptyCart/EmptyCart'
import styles from './ShoppingCart.module.css'

const ShoppingCart = observer(() => {


  return (
		<div className={styles.shoppingCart}>
			{goods.goods.length > 0 && (
				<div className={styles.goodsList}>
					{goods.goods.map((good: IGood) => (
						<CartItem key={good.id} {...good} />
					))}
				</div>
			)}

			{goods.isDataFetched && (
				<div>{goods.goods.length > 0 ? <TotalSum /> : <EmptyCart />}</div>
			)}
		</div>
	)
})

export default ShoppingCart