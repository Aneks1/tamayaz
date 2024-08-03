import { defineEventHandler, getQuery, readBody } from 'h3'

export default defineEventHandler(async (event) => {
console.log('a')
return { a: 'a' }
})