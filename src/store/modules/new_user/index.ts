import { defineStore } from 'pinia'
import { NewUser } from './types'

const useUserStore = defineStore('user', {
  state: (): NewUser => ({
    name: undefined,
    avatar: undefined,
    job: undefined,
    organization: undefined,
    location: undefined,
    email: undefined,
    introduction: undefined,
    personalWebsite: undefined,
    jobName: undefined,
    organizationName: undefined,
    locationName: undefined,
    phone: undefined,
    registrationDate: undefined,
    accountId: undefined,
    certification: undefined,
    role: '',
  }),

  actions: {
    setInfo(partial: Partial<NewUser>) {
      this.$patch(partial)
    },
    // Reset user's information
    resetInfo() {
      this.$reset()
    },
  },
  getters: {
    // 获取到用户信息的副本, 不允许直接修改原值？
    userInfo(state: NewUser): NewUser {
      return { ...state }
    },
  },
})

export default useUserStore
