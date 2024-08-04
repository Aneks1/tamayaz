<template>
		<div>
			{{ text }}
		</div>
</template>
<script>
export default {
	data() {
		return {
			text: ''
		}
	},
	mounted() {
        const session = useCookie('session', {
            maxAge: 60*60*24,
            path: '/'
        })
        // session.value = ''
        if(session && session.value && session.value.length > 1) this.text = 'logged in'
		else this.text = 'not logged in'
    },
}
</script>