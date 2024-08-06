<template>
	<div class="bg-gradient-to-t from-base-100 via-base-100 to-base-100/95">
		<div class="mx-auto py-32">
			<div
				class="text-center mb-12 flex flex-col justify-center items-center w-screen box-border px-20"
			>
				<h2
					class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-base-content sm:text-4xl md:mx-auto"
				>
					Title
				</h2>
				<p class="text-base text-gray-700 md:text-lg">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque rem aperiam, eaque ipsa quae.
				</p>
			</div>
			<div
				class="
					grid 
					gap-16
					md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 
					box-border p-20 sm:p-32
					w-full lg:mx-auto"
			>
				<button
					class="group w-full h-full"
					v-for="(item, index) in items"
					@click="showPayModal(item)"
					:key="index"
				>
					<div
						class="rounded-2xl flex flex-col items-start gap-4 group-hover:scale-105 text-xprimary-content duration-300 card-bg"
					>
						<img :src="item.img" class="rounded-t-lg h-76 w-full" />
						<div class="flex flex-col justify-between w-full h-full">
							<div class="pb-2">
								<p
									class="text-xl font-medium text-xprimary-content text-center"
								>
									{{ item.name }}
								</p>
								<p class="text-md text-xsecondary-content text-center">
									{{ item.org }}
								</p>
							</div>
							<div class="w-full p-4">
								<div
									class="flex items-center justify-between text-md text-xprimary-content"
								>
									<p class="flex flex-col">
										{{ item.desc }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</button>
			</div>
		</div>
		<SeriesPayment :item="currentSubCard"></SeriesPayment>
	</div>
</template>

<script>
import subCards from './SubCards.ts'
export default {
	data() {
		return {
			items: null,
			currentSubCard: {
				name: '',
				org: '',
				img: '',
				desc: '',
				price: {
					"1": 0,
					"2": 0,
					"3": 0,
					"whole": 0
				}
			},
		};
	},
	mounted() {
		const route = useRoute()
		console.log('param: ', route.params.element)
		this.items = subCards.get(route.params.element)
		this.currentSubCard = this.items[0]
	},
	methods: {
		showPayModal(item) {
			const modal = document.getElementById('my_modal_1')
			this.currentSubCard = item
			console.log('item and subcard', item, this.currentSubCard)
			modal.showModal()
		}
	}
};
</script>
<style>
.card-bg:hover {
	transition: all 0.5s;
	background: #d9d9d9;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}
.card-bg {
	background: linear-gradient(to bottom right, rgb(250, 250, 250), rgb(245, 245, 245));
	border: 1px solid rgba(0, 0, 0, 0.05);
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
	border: 2px solid #ffa400;
}</style>