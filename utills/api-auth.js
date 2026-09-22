const getToken = async (request) => {

    const response = await request.post(
        'https://reqres.in/api/login',
        {
            data: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            }
        }
    );

    const data = await response.json();

    return data.token;
};

module.exports = { getToken };