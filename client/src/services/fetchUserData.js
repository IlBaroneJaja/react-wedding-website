import env from "react-dotenv";

const fetchGuestData = async (email) => {
    try {
        const response = await fetch(`${env.REACT_APP_API_URL}${env.REACT_APP_GET_GUEST_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email}),
        });
        return await response.json();
    } catch
        (error) {
        console.error('API call error', error);
        // Handle error scenarios
    }
};

export default fetchGuestData;
