const baseUrl = 'https://www.googleapis.com/youtube/v3/'

export const getCommentsBook = async id => {

    try {
        const response = await get(`${baseUrl}/search=${id}`);
        const responseData = await response.json();
        return responseData.data;
    } catch (err) {
        return console.log(err);
    }
};
