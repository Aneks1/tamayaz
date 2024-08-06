<template>
	<div class="bg-base-100">
		<div class="mx-auto w-3/4 flex flex-col gap-5">
			<h1 class="text-black font-semibold text-4xl select-none">Profiles</h1>
			<div class="navigation-wrapper">
				<div ref="container" class="keen-slider pb-6">
					<div
						class="keen-slider__slide card-bg text-xprimary-content rounded-2xl w-full h-full"
						v-for="(item, index) in items"
						:key="index"
					>
					<div class="flex flex-col items-start gap-4">
						<img :src="item.img" class="rounded-t-lg h-76 w-full" /> 
						<div class="flex flex-col justify-between w-full h-full p-4">
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
								<div class="w-full p-2 rounded-lg">
									<div
										class="flex items-center justify-between text-md text-gray-400 dark:text-black"
									>
										<p class="flex flex-col">
											{{ item.desc }}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<svg
					@click="slider.prev()"
					class="text-xprimary fill-xprimary arrow arrow--left -ml-9"
					stroke="currentColor"
					:class="{
						'arrow--disabled': current === 0,
					}"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
						fill="currentColor"
					></path>
				</svg>
				<svg
					v-if="slider"
					@click="slider.next()"
					class="text-xprimary fill-xprimary arrow arrow--right -mr-9"
					stroke="currentColor"
					:class="{
						'arrow--disabled':
							current === slider.track.details.slides.length - 1,
					}"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
						fill="currentColor"
					></path>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
import { useKeenSlider } from 'keen-slider/vue.es';
import 'keen-slider/keen-slider.min.css';

export default {
	data() {
		return {
			items: [
				{
					name: 'test',
					org: 'test',
					img: 'https://picsum.photos/600/800?random=1',
					desc: 'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
				{
					name: 'test2',
					org: 'test2',
					img: 'https://picsum.photos/600/800?random=2',
					desc: 'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
				{
					name: 'test3',
					org: 'test3',
					img: 'https://picsum.photos/600/800?random=3',
					desc: 'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
				{
					name: 'test4',
					org: 'test4',
					img: 'https://picsum.photos/600/800?random=4',
					desc: 'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
				{
					name: 'test5',
					org: 'test5',
					img: 'https://picsum.photos/600/800?random=5',
					desc: 'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
				{
					name: 'test6',
					org: 'test6',
					img: 'https://picsum.photos/600/800?random=6',
					desc: 'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
				{
					name: 'test7',
					org: 'test7',
					img: 'https://picsum.photos/600/800?random=7',
					desc: 'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
			],
		};
	},
	setup() {
		const current = ref(0); // Default to 0
		const [container, slider] = useKeenSlider({
			loop: true,
			mode: 'free-snap',
			slides: {
				perView: 3,
				spacing: 24,
			},
			breakpoints: {
				'(max-width: 640px)': {
					slides: {
						perView: 1,
					},
				},
			},
			slideChanged: (s) => {
				current.value = s.track.details.rel;
			},
		});

		const dotHelper = computed(() =>
			slider.value
				? [...Array(slider.value.track.details.slides.length).keys()]
				: []
		);

		return { container, current, dotHelper, slider };
	},
};
</script>

<style>
.navigation-wrapper {
	position: relative;
	display: flex;
	align-items: center; /* Center the arrows vertically */
}

.keen-slider {
	flex: 1; /* Allow the slider to take up available space */
}
.card-bg {
	background: linear-gradient(to bottom right, rgb(250, 250, 250), rgb(245, 245, 245));
	border: 1px solid rgba(0, 0, 0, 0.05);
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
}
.card-bg:hover {
	transition: all 0.5s;
	background: #d9d9d9;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}
.arrow {
	width: 30px;
	height: 30px;
	fill: #fff;
	cursor: pointer;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 1; /* Ensure arrows are above the slider content */
}

.arrow--left {
	left: -40px; /* Adjust as needed to position outside the slider */
}

.arrow--right {
	right: -40px; /* Adjust as needed to position outside the slider */
}

.arrow--disabled {
	fill: rgba(255, 255, 255, 0.5);
}

.dots {
	display: flex;
	padding: 10px 0;
	justify-content: center;
}
.dot {
	border: none;
	width: 10px;
	height: 10px;
	background: #c5c5c5;
	border-radius: 50%;
	margin: 0 5px;
	padding: 5px;
	cursor: pointer;
}
.dot:focus {
	outline: none;
}
.dot.active {
	background: #000;
}
</style>
