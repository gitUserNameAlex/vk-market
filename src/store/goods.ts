import { makeAutoObservable, runInAction } from 'mobx'
import axios from 'axios'
import { IGood } from '../types/interfaces'

class Goods {
	goods = []
    totalSum: number = 0
    //Чтобы не рендерить компонент суммы или пустой корзины, пока не получен массив goods
    isDataFetched: boolean = false

	constructor() {
		makeAutoObservable(this)
		this.fetchGoods()
	}

	async fetchGoods() {
		try {
			const response = await axios.get('https://dummyjson.com/products?limit=5')
			const data = response.data.products
			//По дефолту в корзине лежит по 1 элементу товара - pickedAmount
			const modifiedData = data.map((good: IGood) => ({
				...good,
				pickedAmount: 1,
			}))

			runInAction(() => {
				this.goods = modifiedData
                this.sumAll()
                this.isDataFetched = true
			})
		} catch (err) {
			console.log('Error fetching goods: ', err)
		}
	}

    sumAll() {
        this.totalSum = this.goods.reduce((sum: number, good: IGood) => sum + (good.price * good.pickedAmount), 0);
    }

	addItem(id: number) {
        this.goods.find((good: IGood) => (good.id === id && good.pickedAmount < 10) ? good.pickedAmount += 1 : false)
        this.sumAll()
	}

	removeItem(id: number) {
        this.goods.find((good: IGood) => (good.id === id && good.pickedAmount > 1) ? good.pickedAmount -= 1 : false)
        this.sumAll()
    }

	deleteGood(id: number) {
        this.goods = this.goods.filter((good: IGood) => good.id !== id)
        this.sumAll()
    }

}

export default new Goods()