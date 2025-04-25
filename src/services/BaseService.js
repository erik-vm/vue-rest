import axios from 'axios';
import { useUserDataStore } from '@/stores/userDataStore';
export class BaseService {
    static get axios() {
        const userStore = useUserDataStore();
        const instance = axios.create({
            baseURL: 'https://sportmap.akaver.com/api/v1.0/',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...(userStore.jwt ? { 'Authorization': `Bearer ${userStore.jwt}` } : {})
            }
        });
        return instance;
    }
}
//# sourceMappingURL=BaseService.js.map