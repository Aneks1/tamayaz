<template>
	<div class="bg-gradient-to-t from-base-100 via-base-100 to-base-100/95">
		<div id="homeContextOverlay" :style="`pointer-events: ${contextMenu.visible ? 'all' : 'none'}`" @click="toggleContextOverlay('card', false)">
			<div 
				id="notePrevMenu"
				:style="`
					top: ${contextMenu.card.top}px;
					left: ${contextMenu.card.left}px;
					display: ${contextMenu.card.visible ? 'flex' : 'none'};
				`"
			>
			<button class="npmBtn" datatype="delete" @click="removeItem()">Remove</button>
		</div>
    </div>
		<div class="mx-auto py-32">
			<div
				class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
			>
				<h2
					class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-base-content sm:text-4xl md:mx-auto"
				>
					Cart
				</h2>
			</div>
			<div
				class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 w-full lg:w-3/4 p-2 lg:mx-auto"
			>
				<button
					class="group w-full h-full"
					v-for="(item, index) in items"
					@contextmenu="toggleContextOverlay('card', true, $event, index)"
					:key="index"
				>
					<div
						class="rounded-2xl flex flex-col items-start gap-4 5 text-xprimary-content card-bg"
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
									class="flex flex-row items-center justify-between text-md text-xprimary-content"
								>
									<p class="flex flex-col font-bold">
										{{ 	item["chosenPrice"] == '1' ? '1st trimestre' : 
											item["chosenPrice"] == '2' ? '2nd  trimestre':
											item["chosenPrice"] == '3' ? '3rd trimestre':
											'whole year' }}
									</p>
									<p>
										{{ `$${parseFloat(item.price[item["chosenPrice"]]).toFixed(2)}` }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</button>
			</div>
			<div
				class="max-w-xl my-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
			>
			<a href="/signup" class="shadow-lg px-10 font-bold bg-xprimary hover:bg-xsecondary text-base border-0 text-xprimary-content hover:text-xsecondary-content box-border p-2 py-3 rounded-3xl transition-all duration-200">Checkout</a>
			</div>
		</div>
	</div>
</template>

<script>
import nuxtStorage from 'nuxt-storage'
export default {
	data() {
		return {
			items: null,
			currentSubCard: null,
			contextMenu: {
                visible: false,
                card: {
                    visible: false,
                    itemIndex: 0,
                    top: 0,
                    left: 0
                }
            }
		};
	},
	mounted() {
		this.items = nuxtStorage.localStorage.getData('cart') ? JSON.parse(nuxtStorage.localStorage.getData('cart')).items : []
	},
	methods: {
		removeItem() {
			this.items.splice(this.contextMenu.card.itemIndex, 1)
			nuxtStorage.localStorage.setData('cart', JSON.stringify({ items: this.items }))
		},
		toggleContextOverlay(overlay, visible, ...args) {
            this.contextMenu.visible = visible;
            if(overlay == 'card') {
                this.contextMenu.card.visible = visible
                if(visible) {
                    const e = args[0]
					e.preventDefault()
                    this.contextMenu.card.itemIndex = args[1]
                    this.contextMenu.card.top = e.clientY
                    this.contextMenu.card.left = e.clientX
                }
            }
        },
	}
};
</script>
<style>
#homeContextOverlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 1;
}

#notePrevMenu {
    width: 14rem;
    height: fit-content;
    position: absolute;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 4px;
    pointer-events: all;
    flex-direction: column;
    padding: 3px;
    box-sizing: border-box;
}

.npmBtn {
    background: none;
    border: none;
    height: 2.2rem;
    width: 100%;
    border-radius: 5px;
    text-align: start;
    box-sizing: border-box;
    padding-left: 10px;
}

.npmBtn:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background 0.2s, color 0.2s;
    color: rgb(0, 0, 0);
}

.npmBtn[datatype="delete"] {
    color: rgb(255, 54, 54);
    font-family: 'Noto Sans', sans-serif;
    font-size: 15px;
}

.npmBtn[datatype="delete"]:hover {
    color: white;
    background-color: rgba(255, 54, 54, 0.75);
}

.card-bg:hover {
	transition: all 0.5s;
	background: #d9d9d9;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}
.card-bg {
	background: linear-gradient(to bottom right, rgb(250, 250, 250), rgb(245, 245, 245));
	border: 1px solid rgba(0, 0, 0, 0.05);
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
}
</style>