import axios from "axios"
interface payload {
    name: string,
    email: string,
    message: string,
    subject: string
}
export let clientApi = async (payload: payload) => {
    try {
        const response = await axios({
            url: `${process.env.API_END_POINT}client`,
            method: 'Post',
            data: payload
        })

        return response
    } catch (error) {
        return error
    }

}