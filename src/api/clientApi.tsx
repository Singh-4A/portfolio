import axios from "axios"
interface payload {
    name: string,
    email: string,
    message: string,
    subject: string
}
export let clientApi = async (payload: payload) => {

    try {
        const response = await axios("http://localhost:500/api/v1/client", {
            method: 'Post',
            data: payload

        })

        return response
    } catch (error) {
        return error
    }

}