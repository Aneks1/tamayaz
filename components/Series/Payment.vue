<template>
	<dialog id="my_modal_1" class="modal modal-bottom sm:modal-middle">
		<div class="modal_container bg-base-100 text-base-content relative">
			<form method="dialog" class="absolute top-2 right-2">
				<button class="btn btn-sm btn-circle btn-ghost">
					✕
				</button>
			</form>
			<h2
				class="p-4 my-5 text-3xl font-bold rounded text-center selection:bg-xsecondary selection:text-xsecondary-content"
			>
				Description and Details Text
		</h2>

			<div
				class="p-4 py-2 rounded selection:bg-xsecondary selection:text-xsecondary-content "
			>
				<div class="cursor-pointer flex flex-row justify-between p-2" :class="price == '1' ? 'chose' : ''" @click="price = '1'">
					<p class="text-center text-lg flex flex-col justify-center">1 st Quater</p>
					<p class="price">
						{{ `$${parseFloat(item.price["1"]).toFixed(2)}` }}
					</p>
				</div>

				<div class="cursor-pointer flex flex-row justify-between border-y-1 p-2 border-y boder-base-200 " :class="price == '2' ? 'chose' : ''" @click="price = '2'">
					<p class="text-center text-lg flex flex-col justify-center">2 st Quater</p>
					<p class="price">
						{{ `$${parseFloat(item.price["2"]).toFixed(2)}` }}
					</p>
				</div>

				<div class="cursor-pointer flex flex-row justify-between p-2" @click="price = '3'" :class="price == '3' ? 'chose' : ''">
					<p class="text-center text-lg flex flex-col justify-center">3 st Quater</p>
					<p class="price">
						{{ `$${parseFloat(item.price["3"]).toFixed(2)}` }}
					</p>
				</div>
			</div>
			<div
				class="cursor-pointer whole_year my-5 flex flex-row justify-between align-center"  :class="price == 'whole' ? 'chose' : ''" @click="price = 'whole'"
			>
				<p class="text-center text-lg font-bold flex flex-col justify-center">Whole Year</p>
				<p class="price">
					{{ `$${parseFloat(item.price["whole"]).toFixed(2)}` }}
				</p>
			</div>

			<form method="dialog">
				<button
				@click="setCart()"
				class="font-bold shadow-lg w-full bg-xprimary hover:bg-xsecondary text-base border-0 text-xprimary-content hover:text-xsecondary-content box-border p-2 py-3 rounded-3xl transition-all duration-200"
			>
				Add To Cart
			</button>
			</form>
		</div>
	</dialog>
</template>
<script>
import nuxtStorage from 'nuxt-storage'
export default {
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			price: null
		}
	},
	methods: {
		setCart() {
			if(this.price == null) return window.alert('Choose a price')
			console.log(this.item)

			const data = nuxtStorage.localStorage.getData('cart') ? JSON.parse(nuxtStorage.localStorage.getData('cart')).items : []
			let itemToStore = this.item
			itemToStore["chosenPrice"] = this.price
			data.push(this.item)

			nuxtStorage.localStorage.setData('cart', JSON.stringify({ items: data }))
			console.log(nuxtStorage.localStorage.getData('cart'))
		}
	},
	mounted()
 {
	console.log('item', this.item)
 }}
</script>
<style scoped>
.chose {
	background: rgba(255, 217, 0, 0.75);
	border-radius: 10px;
}
.chose .price {
	background: none;
	box-shadow: none;
}
.modal_container {
	width: fit-content;
	height: fit-content;
	padding: 2rem;
	padding-bottom: 4rem;
	padding-top: 4rem;
	border-radius: 10px;
}
.price {
	padding: 0.5rem;
	background: linear-gradient(to bottom right, rgba(255, 217, 0, 0.75), rgba(255, 236, 131, 0.75));
	box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.25);
	border-radius: 2rem;
}
.whole_year {
	padding: 1rem;
	border: 3px solid rgb(255, 217, 0);
	border-radius: 10px;
	box-shadow: 0px 0px 20px rgba(255, 217, 0, 0.75),
				0px 0px 20px rgba(255, 217, 0, 0.75) inset;
}
</style>