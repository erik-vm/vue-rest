import type { IGpsSessionType } from '@/domain/IGpsSessionType'
import { BaseEntityService } from './BaseEntityService'

export class GpsSessionTypeService extends BaseEntityService<IGpsSessionType> {
  constructor() {
    super('gpsSessionTypes')
  }
}
