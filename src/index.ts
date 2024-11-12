/// <reference types="@types/google.maps" />
import dotenv from "dotenv";
import { User } from './User';
import { CustomMap } from "./CustomMap";

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

  const user = new User();
  const customMap = new CustomMap('map');
  
  customMap.addUserMarker(user);
};

// import { User } from './User';
// import { Company } from './Company';

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);

