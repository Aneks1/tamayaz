<template>
	<div class="h-[80vh] lg:h-screen pb-32 lg:pb-0 w-1/2 flex flex-col justify-center items-center">
		<div class="signup-form2">
				<div class="text-center flex flex-col justify-center items-center gap-4 w-full px-16">
					<h2
						class="text-2xl text-black font-bold"
					>
						{{ total == '' ? 'Total' : total }}
					</h2>
					<input
						type="text"
						v-model="total"
						readonly
						disabled
						:placeholder="total == '' ? 'Total' : total"
					/>
				</div>
				<div class="text-center flex flex-col justify-center items-center gap-4 w-full px-16">
					<h2
						class="text-2xl text-black font-bold"
					>
						Help
					</h2>
					<div class="flex items-center col-span-2 gap-2 w-full">
						<input
							type="text"
							v-model="methods.method1"
							readonly
							disabled
							placeholder="This one was empty"
						/>
						<button
							@click="copyToClipboard('', 'method1')"
							class="border border-solid border-black box-content inline-flex items-center p-4 text-sm font-medium text-center text-white bg-xsecondary rounded-full hover:bg-xprimary transition-all duration-300"
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
				<div class="text-center px-10 flex flex-col justify-center items-center gap-4">
					<h2 class="text-2xl text-black font-bold">Title</h2>
					<div class="grid grid-cols-1 gap-3">
							<div class="flex items-center col-span-2 gap-2 w-full">
								<input
									type="text"
									v-model="methods.method31"
									readonly
									disabled
									placeholder="CCP"
								/>
								<button
									@click="copyToClipboard('', 'method31')"
									class="border border-solid border-black box-content inline-flex items-center p-4 text-sm font-medium text-center text-white bg-xsecondary rounded-full hover:bg-xprimary transition-all duration-300"
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
							<div class="flex items-center w-full gap-2">
								<input
									type="text"
									v-model="methods.method32"
									readonly
									disabled
									placeholder="ClÃ©"
								/>
								<button
									@click="copyToClipboard('', 'method32')"
									class="border border-solid border-black box-content inline-flex items-center p-4 text-sm font-medium text-center text-white bg-xsecondary rounded-full hover:bg-xprimary transition-all duration-300"
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
						<div class="flex items-center gap-2">
							<input
								type="text"
								v-model="methods.method33"
								readonly
								disabled
								placeholder="NOM"
							/>
							<button
								@click="copyToClipboard('', 'method33')"
								class="border border-solid border-black box-content inline-flex items-center p-4 text-sm font-medium text-center text-white bg-xsecondary rounded-full hover:bg-xprimary transition-all duration-300"
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
				<!-- <div class="card-body text-center px-1">
					<p class="text-md text-white text-bold">'help2'</p>
				</div> -->
				<div class="text-center px-12 flex flex-col justify-center items-center gap-4 w-full">
					<div class="flex justify-start gap-2 items-center">
						<svg
							class="h-7 w-7 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="black"
							viewBox="0 0 448 512"
						>
							<path
								d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
							/>
						</svg>
						<h2 class="text-2xl font-bold text-black">Whatsapp</h2>
					</div>
					<div class="flex items-center col-span-2 gap-2 w-full">
						<input
							id="website-url"
							type="text"
							v-model="methods.wpnum"
							readonly
							disabled
							placeholder="Contact"
						/>
						<button
							@click="copyToClipboard('', 'wpnum')"
							class="border border-solid border-black box-content inline-flex items-center p-4 text-sm font-medium text-center text-white bg-xsecondary rounded-full hover:bg-xprimary transition-all duration-300"
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
</template>

<style>
.signup-form2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 30rem;
    height: 40rem;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    background: white;
    box-sizing: border-box;
    padding-top: 2rem;
    padding-bottom: 2rem;
    gap: 2rem;
}
@media (max-width: 550px) {
    .signup-form2 {
        width: 100vw;
		border-radius: 0px;
    }
}
.signup-form2 input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 10rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid black;
    color: black;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
}
.signup-form2 input[type="submit"] {
    background: rgb(255, 217, 0);
    font-weight: bold;
    width: 50%;
}
.signup-form2 input[type="submit"]:hover {
    background-color: #ffa400;
    transition: all 200ms;
}
.signup-form2 input::placeholder {
    color: rgba(0, 0, 0, 0.5);
}
.disable-arrows::-webkit-outer-spin-button,
.disable-arrows::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.disable-arrows[type='number'] {
	-moz-appearance: textfield;
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