import type { IGpsSession } from '@/domain/IGpsSession'
import { BaseEntityService } from './BaseEntityService'
import type { IResultObject } from '@/types/IResultObject'

export class GpsSessionService extends BaseEntityService<IGpsSession> {
  constructor() {
    super('gpsSessions')
  }

 static async createSession(name: string, description: string, gpsSessionTypeId:string, recordedAt:string, paceMin:number, paceMax:number): Promise<IResultObject<IGpsSession>> {
    const url = 'gpsSessions'
    try {
      const registerData = {
      name,
      description,
      gpsSessionTypeId,
      recordedAt,
      paceMin,
      paceMax
      }


      const response = await this.axios.post<IGpsSession>(url, registerData)

      console.log('create session response', response)

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
