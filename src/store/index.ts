import useLoginStore from './modules/login'

const useStore = () => ({
    login: useLoginStore()
})

export default useStore;