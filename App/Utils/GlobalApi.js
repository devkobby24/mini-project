const BASE_URL="https://places.googleapis.com/v1/places:searchNearby";
const API_KEY="AIzaSyB9ctiAb-J9CZil_ZlpAg3ZOXpxwudHlNw";

const config={
    headers:{
        'content-type':'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': ['places.displayName',
            'places.formattedAddress',
            'places.location',
            'places.evChargerOptions',
            'places.photos']
    }
}