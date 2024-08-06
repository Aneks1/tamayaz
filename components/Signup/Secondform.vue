<template>

		<div
			class="hero-content text-center w-full mt-20 border-2 rounded-[50px] border-blue-200 bg-white my-4"
		>
			<div class="w-full mx-auto">
				<div class="mx-auto my-auto py-8 lg:py-12 px-1 text-center w-full">
					<div class="card shadow-xl">
						<div class="card-body text-center px-1">
							<h2
								class="card-title mx-auto text-center font-semibold text-white"
							>
								{{ total }}
							</h2>
							<div class="grid grid-cols-1 gap-y-2">
								<div class="flex items-center">
									<span
										class="h-12 w-fit inline-flex items-center py-2 text-sm font-medium text-center rounded-s-lg bg-[#000032]/40 text-white"
									>
										{{ total }}</span
									>
									<input
										type="text"
										class="bg-[#000032]/20 text-white text-lg font-bold border-0 block w-full p-2 h-12 rounded-e-lg"
										v-model="total"
										readonly
										disabled
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="card shadow-xl">
						<div class="card-body text-center px-1">
							<p class="text-lg text-white text-bold">Help</p>
						</div>
					</div>
					<div class="card shadow-xl">
						<div class="card-body text-center px-1 py-4">
							<div class="flex items-center">
								<span
									class="h-12 w-fit inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-s-lg bg-[#000032] text-white"
									></span
								>
								<input
									type="text"
									class="bg-[#000032]/50 text-white text-sm border-0 block w-full p-2 h-12"
									v-model="methods.method1"
									readonly
									disabled
								/>
								<button
									@click="copyToClipboard('', 'method1')"
									class="h-12 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#000032] rounded-e-lg hover:bg-[#000032]/20"
									type="button"
								>
									<svg
										v-if="!copyStatus.method1"
										class="w-4 h-4"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 18 20"
									>
										<path
											d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
										/>
									</svg>
									<svg
										v-else
										class="w-4 h-4"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 16 12"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5.917 5.724 10.5 15 1.5"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div class="card shadow-xl">
						<div class="card-body text-center px-1 py-4">
							<h2 class="card-title text-start text-white"></h2>
							<div class="grid grid-cols-1 gap-3">
								<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
									<div class="flex items-center md:col-span-2">
										<span
											class="h-12 w-fit inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-s-lg bg-[#000032] text-white"
											>CCP</span
										>
										<input
											type="text"
											class="bg-[#000032]/50 text-white text-sm border-0 block w-full p-2 h-12"
											v-model="methods.method31"
											readonly
											disabled
										/>
										<button
											@click="copyToClipboard('', 'method31')"
											class="h-12 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#000032] rounded-e-lg hover:bg-[#000032]/20"
											type="button"
										>
											<svg
												v-if="!copyStatus.method31"
												class="w-4 h-4"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 18 20"
											>
												<path
													d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
												/>
											</svg>
											<svg
												v-else
												class="w-4 h-4"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 16 12"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M1 5.917 5.724 10.5 15 1.5"
												/>
											</svg>
										</button>
									</div>
									<div class="flex items-center w-full">
										<span
											class="h-12 w-fit inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-s-lg bg-[#000032] text-white"
											>ClÃ©</span
										>
										<input
											type="text"
											class="bg-[#000032]/50 text-white text-sm border-0 block w-full p-2 h-12"
											v-model="methods.method32"
											readonly
											disabled
										/>
										<button
											@click="copyToClipboard('', 'method32')"
											class="h-12 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#000032] rounded-e-lg hover:bg-[#000032]/20"
											type="button"
										>
											<svg
												v-if="!copyStatus.method32"
												class="w-4 h-4"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 18 20"
											>
												<path
													d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
												/>
											</svg>
											<svg
												v-else
												class="w-4 h-4"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 16 12"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M1 5.917 5.724 10.5 15 1.5"
												/>
											</svg>
										</button>
									</div>
								</div>
								<div class="flex items-center">
									<span
										class="h-12 w-fit inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-s-lg bg-[#000032] text-white"
										>NOM</span
									>
									<input
										type="text"
										class="bg-[#000032]/50 text-white text-sm border-0 block w-full p-2 h-12"
										v-model="methods.method33"
										readonly
										disabled
									/>
									<button
										@click="copyToClipboard('', 'method33')"
										class="h-12 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#000032] rounded-e-lg hover:bg-[#000032]/20"
										type="button"
									>
										<svg
											v-if="!copyStatus.method33"
											class="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 18 20"
										>
											<path
												d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
											/>
										</svg>
										<svg
											v-else
											class="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5.917 5.724 10.5 15 1.5"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="card shadow-xl">
						<div class="card-body text-center px-1">
							<p class="text-md text-white text-bold">'help2'</p>
						</div>
					</div>

					<div class="card shadow-xl">
						<div class="card-body text-center px-1">
							<div class="flex justify-start card-title">
								<svg
									class="h-7 w-7 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 448 512"
								>
									<path
										d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
									/>
								</svg>
								<h2 class="text-2xl font-bold text-white py-3">Whatsapp</h2>
							</div>
							<div class="flex items-center">
								<span
									class="h-12 w-fit inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-s-lg bg-[#000032] text-white"
									>Contact</span
								>
								<input
									id="website-url"
									type="text"
									class="bg-[#000032]/50 text-white text-sm border-0 block w-full p-2 h-12"
									v-model="methods.wpnum"
									readonly
									disabled
								/>
								<button
									@click="copyToClipboard('', 'wpnum')"
									class="h-12 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#000032] rounded-e-lg hover:bg-[#000032]/20"
									type="button"
								>
									<svg
										v-if="!copyStatus.wpnum"
										class="w-4 h-4"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 18 20"
									>
										<path
											d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
										/>
									</svg>
									<svg
										v-else
										class="w-4 h-4"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 16 12"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5.917 5.724 10.5 15 1.5"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

</template>

<style>
.disable-arrows::-webkit-outer-spin-button,
.disable-arrows::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.disable-arrows[type='number'] {
	-moz-appearance: textfield;
}

.background-joinnow {
	background-color: #f9f9fe;
	background-image: radial-gradient(
			at 99% 50%,
			rgb(247, 248, 250) 0,
			transparent 65%
		),
		radial-gradient(at 1% 50%, rgb(249, 251, 251) 0, transparent 65%);
}
</style>



<script>
export default {
	data() {
		return {
			submitLoading: false,
			formValid: false,
			coupon: '',
			total: '',
			methods: {
				wpnum: '',
				method1: '',
				method2: '',
				method31: '',
				method32: '',
				method33: '',
				method34: '',
			},
			copyStatus: {
				wpnum: false,
				method1: false,
				method2: false,
				method31: false,
				method32: false,
				method33: false,
				method34: false,
			},
			options: {
				url: '',
			},
			alert: false,
			alertmsg: null,
		};
	},
	methods: {
		async copyToClipboard(text, key) {
			await navigator.clipboard.writeText(text);
			this.copyStatus[key] = true;
			setTimeout(() => {
				this.copyStatus[key] = false;
			}, 2000);
		},
	},
};
</script>