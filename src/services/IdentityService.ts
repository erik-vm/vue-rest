import type { IResultObject } from '@/types/IResultObject'
import { BaseService } from './BaseService'
import type { LoginDto } from '@/types/LoginDto'

export abstract class IdentityService extends BaseService {
  static async login(email: string, password: string): Promise<IResultObject<LoginDto>> {
    const url = 'account/login'
    try {
      const loginData = {
        email,
        password,
      }

      const response = await this.axios.post<LoginDto>(url, loginData)

      console.log('login response', response)

      if (response.status <= 300) {
        return { data: response.data }
      }

      return {
        errors: [(response.status.toString() + ' ' + response.statusText).trim()],
      }
    } catch (error) {
      console.log('error: ', (error as Error).message)
      return {
        errors: [JSON.stringify(error)],
      }
    }
  }
}
