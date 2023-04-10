import axios from "axios"

const useAuth = () => {

    const createUser = async (api, formData) => {
        try {
            const res = await axios.post(api, formData)
            if (res?.data.email !== 'Email already exists') {
                return 'user created successfully'
            }
            return res.data.email
        } catch (error) {
            return error
        }
    }

    const loginUser = async (api, formData) => {
        try {
            const res = await axios.post(api, formData)
            if (res?.data.emailnotfound !== "Email not found") {
                localStorage.setItem('token', res.data.token)
                return res.data.token
            }
            return 'login unsuccessfully'
        } catch (error) {
            return error
        }
    }

    const updateStatus = async (api, formData) => {
        try {
            const res = await axios.patch(api, formData);
            return res
        } catch (error) {
            return error
        }
    }

    return { createUser, loginUser, updateStatus }
}

export default useAuth