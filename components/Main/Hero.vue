<template>
	<div class="bg-base-100">
		<div class="min-h-screen heroo w-full bg-base-100">
			<div
				class="md:flex-row flex-col heroo-content place-content-between content-between justify-between xl:gap-96 w-full"
			>
				<div
					class="text-center lg:text-start xl:pr-24 lg:px-24 md:px-12 w-full lg:w-1/2"
				>
					<h1
						class="md:text-5xl text-4xl px-4 md:px-0 font-semibold text-xprimary"
					>
						Title
					</h1>
					<p class="py-6 text-xaccent px-8 md:px-0">Slogan</p>
				</div>
				<div
					class="w-screen flex flex-row justify-center items-center"
				>
					<iframe
						ref="example"
						src="https://player.vimeo.com/video/942028100?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 "
						frameborder="0"
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
						title="Super"
						class="bg-transparent 2xl:w-[860px] 2xl:h-[440px] xl:w-[660px] xl:h-[340px] lg:w-[470px] lg:h-[264px] md:w-[540px] md:h-[220px] sm:w-[520px] sm:h-[297px] medium:w-[412px] medium:h-[241px] smoll:h-[214px] smoll:w-[365px] w-[308px] h-[147px] rounded-lg"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.heroo {
	display: grid;
	width: 100%;
	place-items: center;
	background-size: cover;
	background-position: center;
}
.heroo > * {
	grid-column-start: 1;
	grid-row-start: 1;
}
.heroo-content {
	z-index: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
