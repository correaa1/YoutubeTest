const baseUrl = 'https://www.googleapis.com/youtube/v3/'
export const getSearch = async id => {

    try {
        const response = await fetch(`${baseUrl}/search=${id}`);
        const responseData = await response.json();
        return responseData.data;
    } catch (err) {
        return console.log(err);
    }
};

export const getVideos = async () => {
    try {
        //const token = await AsyncStorage.getItem("@token");
        
        const response = await fetch(`${baseUrl}/search?q=boating&key=AIzaSyD7XZQf-k9SuLkH2tLFHbJgt_y8nD6wLHI`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        const responseData = await response.json();
        return responseData.data;
    } catch (error) {
        console.log(error);
    }
};
