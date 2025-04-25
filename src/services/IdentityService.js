import { BaseService } from './BaseService';
export class IdentityService extends BaseService {
    static async login(email, password) {
        const url = 'account/login';
        try {
            const loginData = {
                email,
                password,
            };
            const response = await this.axios.post(url, loginData);
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
    static async register(email, password, firstName, lastName) {
        const url = 'account/register';
        try {
            const registerData = {
                email,
                password,
                firstName,
                lastName
            };
            const response = await this.axios.post(url, registerData);
            console.log('login response', response);
            if (response.status <= 300) {
                return await this.login(email, password);
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
//# sourceMappingURL=IdentityService.js.map