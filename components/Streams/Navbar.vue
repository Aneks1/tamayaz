<template>
	<nav class="absolute w-full p-6 bg-transparent z-40">
		<div class="flex items-center justify-between">
			<div>
				<svg
					class="w-auto lg:block h-10"
					xmlns="http://www.w3.org/2000/svg"
					width="82"
					height="40"
					fill="none"
					viewBox="0 0 82 40"
				>
					<path
						fill="#FFD43D"
						d="M73.365 19.71c0 2.904-2.241 5.31-5.27 5.31-3.03 0-5.228-2.406-5.228-5.31 0-2.905 2.199-5.312 5.228-5.312s5.27 2.407 5.27 5.311Z"
					></path>
					<path
						fill="#FF0C81"
						d="M48.764 19.544c0 2.946-2.323 5.145-5.27 5.145-2.904 0-5.227-2.2-5.227-5.145 0-2.947 2.323-5.104 5.228-5.104 2.946 0 5.27 2.158 5.27 5.104Z"
					></path>
					<path
						fill="#11EEFC"
						d="M20.074 25.02c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312Z"
					></path>
					<path
						fill="#171A26"
						d="M68.095 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.855-10.83 11.12-10.83 6.349 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.03 0 5.27-2.406 5.27-5.31 0-2.905-2.24-5.312-5.27-5.312-3.029 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM43.08 40c-4.813 0-8.506-2.116-10.373-5.934l4.896-2.655c.913 1.784 2.614 3.195 5.394 3.195 3.486 0 5.85-2.448 5.85-6.473v-.374c-1.12 1.411-3.111 2.49-6.016 2.49-5.768 0-10.373-4.481-10.373-10.581 0-5.934 4.813-10.788 11.12-10.788 6.431 0 11.162 4.605 11.162 10.788v8.299C54.74 35.27 49.76 40 43.08 40Zm.415-15.311c2.946 0 5.27-2.2 5.27-5.145 0-2.947-2.324-5.104-5.27-5.104-2.905 0-5.228 2.158-5.228 5.104s2.323 5.145 5.228 5.145ZM20.074 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.854-10.83 11.12-10.83 6.348 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM0 0h5.892v30H0V0ZM82 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
					></path>
				</svg>
			</div>

			<div class="lg:hidden flex flex-row gap-4">
				<a class="btn btn-ghost btn-circle" href="/cart">
							<div class="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="size-5 fill-xprimary-content"
								>
									<path
										d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
									/>
								</svg>

								<span
									class="badge badge-xs badge-xprimary bg-xprimary indicator-item"
								></span>
							</div>
						</a>
				<button @click="drawer">
					<svg
						class="h-8 w-8 fill-current text-black"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>

			<div class="hidden lg:block">
				<ul class="flex space-x-8 text-sm font-sans">
					<li>
						<a
							href="/"
							class="active border-b-2 border-b-xprimary pb-1 btn rounded-b-none rounded-t btn-ghost"
							>Home</a
						>
					</li>
					<li><a href="/streams" class="btn btn-ghost">Series</a></li>
					<li><a href="#" class="btn btn-ghost">Blogs</a></li>
					<li>
						<a
							href="/signin"
							class="btn bg-xprimary hover:bg-xaccent border-0 px-3 py-2 rounded text-xprimary-content font-semibold"
							>Sign In</a
						>
					</li>
					<li>
						<a class="btn btn-ghost btn-circle" href="/cart">
							<div class="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="size-5 fill-xprimary-content"
								>
									<path
										d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
									/>
								</svg>

								<span
									class="badge badge-xs badge-xprimary bg-xprimary indicator-item"
								></span>
							</div>
						</a>
					</li>
				</ul>
			</div>

			<transition
				enter-class="opacity-0"
				enter-active-class="ease-out transition-medium"
				enter-to-class="opacity-100"
				leave-class="opacity-100"
				leave-active-class="ease-out transition-medium"
				leave-to-class="opacity-0"
			>
				<div
					@keydown.esc="isOpen = false"
					v-show="isOpen"
					class="z-10 fixed inset-0 transition-opacity"
				>
					<div
						@click="isOpen = false"
						class="absolute inset-0 bg-black opacity-50"
						tabindex="0"
					></div>
				</div>
			</transition>

			<aside
				class="p-5 transform top-0 left-0 w-full bg-white fixed h-2/5 overflow-auto ease-in-out transition-all duration-300 z-40"
				:class="isOpen ? 'translate-y-0' : '-translate-y-full'"
			>
				<div class="close">
					<button
						class="absolute top-0 right-0 mt-7 mr-4"
						@click="isOpen = false"
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>

				<span
					@click="isOpen = false"
					class="flex w-full items-center p-2 border-b"
				>
					<svg
						class="w-auto lg:block h-8"
						xmlns="http://www.w3.org/2000/svg"
						width="82"
						height="40"
						fill="none"
						viewBox="0 0 82 40"
					>
						<path
							fill="#FFD43D"
							d="M73.365 19.71c0 2.904-2.241 5.31-5.27 5.31-3.03 0-5.228-2.406-5.228-5.31 0-2.905 2.199-5.312 5.228-5.312s5.27 2.407 5.27 5.311Z"
						></path>
						<path
							fill="#FF0C81"
							d="M48.764 19.544c0 2.946-2.323 5.145-5.27 5.145-2.904 0-5.227-2.2-5.227-5.145 0-2.947 2.323-5.104 5.228-5.104 2.946 0 5.27 2.158 5.27 5.104Z"
						></path>
						<path
							fill="#11EEFC"
							d="M20.074 25.02c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312Z"
						></path>
						<path
							fill="#171A26"
							d="M68.095 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.855-10.83 11.12-10.83 6.349 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.03 0 5.27-2.406 5.27-5.31 0-2.905-2.24-5.312-5.27-5.312-3.029 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM43.08 40c-4.813 0-8.506-2.116-10.373-5.934l4.896-2.655c.913 1.784 2.614 3.195 5.394 3.195 3.486 0 5.85-2.448 5.85-6.473v-.374c-1.12 1.411-3.111 2.49-6.016 2.49-5.768 0-10.373-4.481-10.373-10.581 0-5.934 4.813-10.788 11.12-10.788 6.431 0 11.162 4.605 11.162 10.788v8.299C54.74 35.27 49.76 40 43.08 40Zm.415-15.311c2.946 0 5.27-2.2 5.27-5.145 0-2.947-2.324-5.104-5.27-5.104-2.905 0-5.228 2.158-5.228 5.104s2.323 5.145 5.228 5.145ZM20.074 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.854-10.83 11.12-10.83 6.348 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM0 0h5.892v30H0V0ZM82 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
						></path>
					</svg>
				</span>

				<ul class="font-sans">
					<li>
						<a href="/" @click="isOpen = false" class="my-4 inline-block"
							>Home</a
						>
					</li>
					<li>
						<a href="/series" @click="isOpen = false" class="my-4 inline-block"
							>Series</a
						>
					</li>
					<li>
						<a href="#" @click="isOpen = false" class="my-4 inline-block"
							>Blogs</a
						>
					</li>
					<li class="flex flex-row items-center justify-between mx-auto py-4">
						<a
							href="/signin"
							@click="isOpen = false"
							class="btn bg-xprimary hover:bg-xaccent border-0 px-3 py-2 rounded text-xprimary-content font-semibold"
							>Sign In</a
						>
					</li>
				</ul>
			</aside>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		drawer() {
			this.isOpen = !this.isOpen;
		},
	},
	watch: {
		isOpen: {
			immediate: true,
			handler(isOpen) {
				if (process.client) {
					if (isOpen) document.body.style.setProperty('overflow', 'hidden');
					else document.body.style.removeProperty('overflow');
				}
			},
		},
	},
	mounted() {
		document.addEventListener('keydown', (e) => {
			if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
		});
	},
};
</script>
