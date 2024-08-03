<template>
	<div
		class="flex items-center justify-center gap-4 bg-xprimary px-4 py-3 text-xprimary-content"
	>
		<p class="text-sm font-medium">
			Ends In
			<a href="#" class="inline-block underline"
				>{{ days }} Days  {{ hours }} Hours {{ minutes }} Mins</a
			>!
		</p>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const targetDate = new Date('2024-07-30T23:59:59').getTime();
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);

const updateTimer = () => {
	const now = new Date().getTime();
	const distance = targetDate - now;

	days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
	hours.value = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
};

onMounted(() => {
	updateTimer();
	setInterval(updateTimer, 8000);
});
</script>
