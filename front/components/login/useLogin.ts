import { useState } from 'react';
import { useRouter } from 'next/router';
import { customAxios } from '../../lib/customAxios';

export const useLogin = () => {
    const router = useRouter();

    const [userInfo, setUserInfo] = useState({ id: "", password: "" });

    const onChange = (value: string, name: string) => {
        setUserInfo((prev) => ({ ...prev, [name]: value }))
    }

    const handleLogin = async () => {
        try {
            await customAxios.post("/login", userInfo).then(({ data }) => {
                if (data.status == 200) {
                    alert("로그인을 성공")
                    localStorage.setItem("token", data.data)
                    router.push("/")
                } else {
                    alert(data.message)
                }

            })
        } catch (error) {


        }
    }

    return {
        userInfo,
        onChange,
        handleLogin
    }
}
