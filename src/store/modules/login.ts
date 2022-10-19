import { defineStore } from 'pinia'
import { loginState } from '@/type/store/login'

const useLoginStore = defineStore({
    id: 'login',
    state: (): loginState => ({
        nickname: 'haha1'
    }),
    actions: {},

})

export default useLoginStore;