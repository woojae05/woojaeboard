import { customAxios } from "../lib/customAxios"
import { UserInfo } from "../interface/userInfo"

class AuthApi {
    tryLogin = async (userInfo: { id: string, password: string }) => {
        const { data } = await customAxios.post("/login", userInfo)
        return data;
    }
    tryRegister = async (userInfo: UserInfo) => {
        await customAxios.post("/register", userInfo)
    }

    GetUserInfo = async () => {
        const { data } = await customAxios.get('/userinfo', {
            headers: {
                Authorization: `${localStorage.getItem("token")}`,
            }
        })
        return data
    }
}

export default new AuthApi()