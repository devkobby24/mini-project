# EV Charging Station Tracker

## Overview

The **EV Charging Station Tracker** is a mobile application developed with React Native and Expo that helps electric vehicle (EV) owners locate nearby charging stations. The app integrates with the Google Maps API and Google Places API to provide real-time location data and information about charging stations. User authentication is handled through Clerk, and Firebase is used for data storage and management.

## Features

- **Map View**: Real-time map displaying nearby EV charging stations.
- **Search Functionality**: Search for charging stations by location or name.
- **Station Details**: View detailed information about each charging station, including availability, connector types, and more.
- **User Authentication**: Secure user login and registration using Clerk.
- **Favorites**: Save favorite charging stations for quick access.
- **Data Storage**: User data, favorite stations, and other information are stored securely in Firebase.
- **Responsive Design**: Optimized for both iOS and Android devices.

## Technologies Used

- **React Native**: Framework for building the mobile app.
- **Expo**: Toolchain for developing, building, and deploying the app.
- **Google Maps API**: For displaying maps and location data.
- **Google Places API**: For searching and retrieving information about places.
- **Clerk**: For user authentication and management.
- **Firebase**: For real-time database and user data storage.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Expo CLI installed globally (`npm install -g expo-cli`)
- A Google Cloud account with Maps and Places APIs enabled
- A Clerk account for user authentication
- A Firebase project set up for data storage

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/devkobby24/ev-charging-station-tracker.git
   cd ev-charging-station-tracker
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root of the project and add your API keys and other credentials:

   ```plaintext
   REACT_NATIVE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   REACT_NATIVE_GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
   CLERK_FRONTEND_API=your_clerk_frontend_api_key_here
   FIREBASE_API_KEY=your_firebase_api_key_here
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
   FIREBASE_PROJECT_ID=your_firebase_project_id_here
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket_here
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id_here
   FIREBASE_APP_ID=your_firebase_app_id_here
   ```

4. **Start the Expo server**:

   ```bash
   expo start
   ```

5. **Run the app**:

   - Use the Expo Go app to scan the QR code and run the app on your device.
   - Alternatively, run the app on an iOS or Android emulator.

### File Structure

- **/src**: Contains all source code files
  - **/components**: Reusable UI components (e.g., MapView, StationCard)
  - **/screens**: Different screens of the app (e.g., HomeScreen, StationDetailsScreen, ProfileScreen)
  - **/services**: API service files for interacting with Google Maps, Places, and Firebase
  - **/navigation**: React Navigation setup for handling navigation between screens
  - **/styles**: Global styles and theming
- **App.js**: Main entry point of the app
- **firebase.js**: Firebase configuration and initialization
- **.env**: Environment variables for API keys and credentials

### Key Integrations

1. **Google Maps API**: 
   - Used to display maps within the app.
   - Documentation: [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)

2. **Google Places API**:
   - Used to search and retrieve information about EV charging stations.
   - Documentation: [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)

3. **Clerk**:
   - Manages user authentication, including sign-ups, logins, and secure sessions.
   - Documentation: [Clerk Authentication](https://clerk.dev/docs)

4. **Firebase**:
   - Stores user data, including favorite stations and user profiles.
   - Documentation: [Firebase Documentation](https://firebase.google.com/docs)

### Usage

1. **Map Interaction**: 
   - Users can view charging stations on the map, tap on markers to see more details, and navigate to the station.
   
2. **Search**: 
   - The search bar allows users to find charging stations by entering a location or station name.
   
3. **Favorites**: 
   - Logged-in users can save their favorite charging stations for quick access.

4. **User Authentication**: 
   - Users must sign in via Clerk to access certain features like saving favorites or viewing their profile.

### Deployment

To deploy the app:

1. **Expo Build**:
   - Run `expo build:android` or `expo build:ios` to create production builds.
   - Follow the instructions provided by Expo for publishing on the Google Play Store or Apple App Store.

2. **Firebase Hosting**:
   - If using Firebase Hosting, deploy any associated web app or backend services.

## Contributing

We welcome contributions to improve this app! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- **Google** for providing the Maps and Places APIs.
- **Clerk** for their user authentication service.
- **Firebase** for their real-time database and storage solutions.
- **React Native Community** for their extensive documentation and support.
