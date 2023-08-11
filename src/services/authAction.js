import axios from "axios";

export const loginUser = async (email, password) => {
    const response = {data: null, error: null};
    try {
        const {data} = await axios.post(
            `${process.env.REACT_APP_API_KEYS_SERVER_ROOT}/users/login`,
            {
                email: email,
                password: password,
            }
        );
        response.data = data;
    } catch (err) {
        response.error = err;
    }
    return response;
};