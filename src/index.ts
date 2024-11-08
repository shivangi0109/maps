/// <reference types="@types/google.maps" />
import dotenv from "dotenv";
dotenv.config();

// Get the API key from the environment
const apiKey = process.env.API_KEY;

if (apiKey) {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.async = true;
  script.defer = true;

  // Append the script to the document head
  document.head.appendChild(script);
} else {
  console.error("API Key is missing!");
}

// Callback function for Google Maps
(window as any).initMap = function () {
  // Initialize your map or other code here

  new google.maps.Map(document.getElementById('map') as HTMLElement, {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0
    }
  });
};

// import { User } from './User';
// import { Company } from './Company';

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);

