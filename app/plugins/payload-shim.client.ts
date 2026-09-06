export default defineNuxtPlugin((nextApp) => {
   nextApp.payload.data ??= shallowReactive({})
   nextApp.payload.data.stats ??= reactive({})
})