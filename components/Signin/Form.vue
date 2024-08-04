<template>
    <div class="form-bg w-vw h-screen w-screen flex flex-row items-center justify-center">
        <div class="flex flex-col items-center justify-center">
            <div class="signup-form">
                <div class="w-full box-border px-10">
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
                <div class="flex flex-col gap-4 w-full items-center">
                    <h1 class="text-3xl font-bold text-black">Sign In</h1>
                    <form @submit.prevent="submit()">
                        <input type="text" placeholder="Email" v-model="email">
                        <input type="text" placeholder="Phone" v-model="phone">
                        <input type="submit" value="Sign In">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            phone: '',
        }
    },
    mounted() {
        const session = useCookie('session', {
            maxAge: 60*60*24,
            path: '/'
        })
        // session.value = ''
        if(session && session.value && session.value.length > 1) navigateTo('/')
    },
    methods: {
        async submit() {         
            if(!this.email || !this.phone) return window.alert('Please complete all the fields')

            const res = await $fetch(`/api/login`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    email: this.email,
                    phone: this.phone,
                }
            })

            if(!res.data.token) return window.alert('Invalid email/phone.')

            const session = useCookie('session', {
                maxAge: 60*60*24,
                path: '/'
            })
            session.value = res.data.token
            navigateTo('/')
        }
    }
}
</script>
<style>

.form-bg {
    background: linear-gradient(to bottom right, #ffe13a, #ffbc35);
}
.file-upload-input {
    display: none;
}
.signup-form {
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
    gap: 6rem;
}
.signup-form form {
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    box-sizing: border-box;
    padding: 4rem;
}
.signup-form input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 10rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid black;
    color: black;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
}
.signup-form input[type="submit"] {
    background: rgb(255, 217, 0);
    font-weight: bold;
    width: 50%;
}
.signup-form input[type="submit"]:hover {
    background-color: #ffa400;
    transition: all 200ms;
}
.signup-form input::placeholder {
    color: rgba(0, 0, 0, 0.5);
}
</style>