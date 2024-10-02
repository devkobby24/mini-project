import axios from "axios";
import {GOOGLE_PLACES_API_KEY} from '@env';

const BASE_URL="https://places.googleapis.com/v1/places:searchNearby";
const API_KEY=GOOGLE_PLACES_API_KEY;

const config={
    headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key':API_KEY,
        'X-Goog-FieldMask':[
            'places.displayName',
            'places.formattedAddress',
            'places.location',
            'places.evChargeOptions',
            'places.shortFormattedAddress',
            'places.photos',
            'places.id']
    }
}

const NewNearByPlace=(data)=>axios.post(BASE_URL,data,config);

export default {
    NewNearByPlace,
    API_KEY
};