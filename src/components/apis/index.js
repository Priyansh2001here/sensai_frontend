import AXIOS from '../../services/axios';

export const getUserList = async () => {
    const response = {data: null, error: null};
    try {
        const {data} = await AXIOS.get(
            `${process.env.REACT_APP_API_KEYS_SERVER_ROOT}/users/list`
        );
        response.data = data;
    } catch (err) {
        response.error = err.response;
    }
    return response;
}

export const deleteUser = async (userId) => {
    const response = {data: null, error: null};
    try {

        const {data} = await AXIOS.post(
            `${process.env.REACT_APP_API_KEYS_SERVER_ROOT}/users/delete/${userId}`
        );

        response.data = data;

    } catch (err) {
        response.error = err.response;
    }

    return response;
}

export const registerUser = async (postData) => {
    const response = {data: null, error: null};
    try {

        const {data} = await AXIOS.post(
            `${process.env.REACT_APP_API_KEYS_SERVER_ROOT}/users/register`,
            {
                email: postData.email,
                fullName: postData.fullName,
                password: postData.password,
                invitedCode: postData.invitedCode
            }
        );

        response.data = data;

    } catch (err) {
        response.error = err.response;
    }

    return response;

}

export const getUserDetails = async () => {
    const response = {data: null, error: null};
    try {

        const {data} = await AXIOS.get(
            `${process.env.REACT_APP_API_KEYS_SERVER_ROOT}/users/details`,
        );

        response.data = data;

    } catch (err) {
        response.error = err.response;
    }

    return response;
}

export const getNewInviteCode = async () => {

    const response = {data: null, error: null};
    try {

        const {data} = await AXIOS.post(
            `${process.env.REACT_APP_API_KEYS_SERVER_ROOT}/users/invite`,
        );

        response.data = data;

    } catch (err) {
        response.error = err.response;
    }

    return response;
}

export const updateUser = async (updateData) => {
    const response = {data: null, error: null};
    try {

        const {data} = await AXIOS.put(
            `${process.env.REACT_APP_API_KEYS_SERVER_ROOT}/users/edit`,
            updateData
        );

        response.data = data;

    } catch (err) {
        response.error = err.response;
    }

    return response;
}