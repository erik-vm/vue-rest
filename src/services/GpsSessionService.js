import { BaseEntityService } from './BaseEntityService';
export class GpsSessionService extends BaseEntityService {
    constructor() {
        super('gpsSessions');
    }
    static async createSession(name, description, gpsSessionTypeId) {
        const url = 'gpsSessions';
        try {
            const registerData = {
                name,
                description,
                gpsSessionTypeId
            };
            const response = await this.axios.post(url, registerData);
            console.log('create session response', response);
            if (response.status <= 300) {
                return { data: response.data };
            }
            return {
                errors: [(response.status.toString() + ' ' + response.statusText).trim()],
            };
        }
        catch (error) {
            console.log('error: ', error.message);
            return {
                errors: [JSON.stringify(error)],
            };
        }
    }
}
//# sourceMappingURL=GpsSessionService.js.map