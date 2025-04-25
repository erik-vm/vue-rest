import { BaseService } from './BaseService';
import { useUserDataStore } from '@/stores/userDataStore';
export class BaseEntityService extends BaseService {
    basePath;
    store = useUserDataStore();
    constructor(basePath) {
        super();
        this.basePath = basePath;
    }
    async getAllAsync() {
        try {
            const response = await BaseService.axios.get(this.basePath);
            console.log('getAll response', response);
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
    async addAsync(entity) {
        try {
            let options = {};
            if (this.store.jwt) {
                options = {
                    headers: {
                        Authorization: `Bearer ${this.store.jwt}`,
                    },
                };
            }
            const response = await BaseService.axios.post(this.basePath, entity, options);
            console.log('login response', response);
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
//# sourceMappingURL=BaseEntityService.js.map