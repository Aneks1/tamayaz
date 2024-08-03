<template>
	<div class="bg-base-100 py-24">
		<div class="mx-auto w-3/4 flex flex-col gap-5">
			<h1 class="text-black font-semibold text-4xl select-none">Feedback</h1>
			<div class="navigation-wrapper">
				<div ref="container" class="keen-slider pb-6">
					<div
						class="keen-slider__slide card-bg border-xprimary w-72 mx-auto rounded-xl p-4 drop-shadow-md"
						v-for="(item, index) in items"
						:key="index"
					>
						<p class="text-base-content">
							<span class="text-lg font-bold text-xprimary"> “ </span>
							{{ item.quote }}
							<span class="text-lg font-bold text-xprimary"> ” </span>
						</p>
						<div class="flex items-center mt-4">
							<a href="#" class="relative block">
								<img
									alt="profil"
									:src="item.img"
									class="mx-auto object-cover rounded-full h-10 w-10"
								/>
							</a>
							<div class="flex flex-col justify-between ml-2">
								<span class="text-sm font-semibold text-xsecondary-content">
									{{ item.name }}
								</span>
								<span class="flex items-center text-xs text-base-content">
									{{ item.org }}
								</span>
							</div>
						</div>
					</div>
				</div>
				<svg
					@click="slider.prev()"
					class="text-xprimary fill-xprimary -ml-9"
					stroke="currentColor"
					:class="{
						arrow: true,
						'arrow--left': true,
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
					class="text-xprimary fill-xprimary -mr-9"
					stroke="currentColor"
					:class="{
						arrow: true,
						'arrow--right': true,
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
					quote:
						'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
				{
					name: 'test2',
					org: 'test2',
					img: 'https://picsum.photos/600/800?random=2',
					quote:
						'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
				{
					name: 'test3',
					org: 'test3',
					img: 'https://picsum.photos/600/800?random=3',
					quote:
						'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
				{
					name: 'test4',
					org: 'test4',
					img: 'https://picsum.photos/600/800?random=4',
					quote:
						'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
				{
					name: 'test5',
					org: 'test5',
					img: 'https://picsum.photos/600/800?random=5',
					quote:
						'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
				{
					name: 'test6',
					org: 'test6',
					img: 'https://picsum.photos/600/800?random=6',
					quote:
						'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
				},
				{
					name: 'test7',
					org: 'test7',
					img: 'https://picsum.photos/600/800?random=7',
					quote:
						'dasdawjdhwiuas dasdh uwadsadoa dajkwhds akdj wasdkja dasdiow askd wahdgs di',
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
[class^='number-slide'],
[class*=' number-slide'] {
	background: grey;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50px;
	color: #fff;
	font-weight: 500;
	height: 200px;
}
.number-slide1 {
	background: rgb(64, 175, 255);
	background: linear-gradient(
		128deg,
		rgba(64, 175, 255, 1) 0%,
		rgba(63, 97, 255, 1) 100%
	);
}
.number-slide2 {
	background: rgb(255, 75, 64);
	background: linear-gradient(
		128deg,
		rgba(255, 154, 63, 1) 0%,
		rgba(255, 75, 64, 1) 100%
	);
}
.number-slide3 {
	background: rgb(182, 255, 64);
	background: linear-gradient(
		128deg,
		rgba(182, 255, 64, 1) 0%,
		rgba(63, 255, 71, 1) 100%
	);
	background: linear-gradient(
		128deg,
		rgba(189, 255, 83, 1) 0%,
		rgba(43, 250, 82, 1) 100%
	);
}
.number-slide4 {
	background: rgb(64, 255, 242);
	background: linear-gradient(
		128deg,
		rgba(64, 255, 242, 1) 0%,
		rgba(63, 188, 255, 1) 100%
	);
}
.number-slide5 {
	background: rgb(255, 64, 156);
	background: linear-gradient(
		128deg,
		rgba(255, 64, 156, 1) 0%,
		rgba(255, 63, 63, 1) 100%
	);
}
.number-slide6 {
	background: rgb(64, 76, 255);
	background: linear-gradient(
		128deg,
		rgba(64, 76, 255, 1) 0%,
		rgba(174, 63, 255, 1) 100%
	);
}
.navigation-wrapper {
	position: relative;
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
.arrow {
	width: 30px;
	height: 30px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	fill: #fff;
	cursor: pointer;
}
.arrow--left {
	left: 5px;
}
.arrow--right {
	left: auto;
	right: 5px;
}
.arrow--disabled {
	fill: rgba(255, 255, 255, 0.5);
}
</style>
