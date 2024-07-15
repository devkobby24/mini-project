// import axios from "axios";

// const BASE_URL="https://places.googleapis.com/v1/places:searchNearby";
// const API_KEY="AIzaSyDGAs9NQQD_LzlJ88zSYWDyWMwQXkOMo8M";

// const config={
//     headers:{
//         'Content-Type':'application/json',
//         'X-Goog-Api-Key': API_KEY,
//         'X-Goog-FieldMask': ['places.displayName',
//             'places.formattedAddress',
//             'places.location',
//             'places.evChargeOptions',
//             'place.shortFormattedAddress',
//             'places.photos']
//     }
// }

// const NewNearByPlace=(data)=>axios.post(BASE_URL, data, config);

// export default {
//     NewNearByPlace,
//     API_KEY
// };

import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY = "AIzaSyDGAs9NQQD_LzlJ88zSYWDyWMwQXkOMo8M"; // Replace with your actual API key

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.location,places.evChargeOptions,place.shortFormattedAddress,places.photos'
    }
};

const NewNearByPlace = async (data) => {
    try {
        console.log("Sending request with data:", JSON.stringify(data, null, 2));
        const response = await axios.post(BASE_URL, data, config);
        console.log("Response received:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error making API request:", error.response ? error.response.data : error.message);
        throw error;
    }
};

export default {
    NewNearByPlace,
    API_KEY
};

