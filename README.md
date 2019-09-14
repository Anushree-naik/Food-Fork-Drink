# Food-Fork-Drink

React Native application for searching restaurants using a query given by the user. 
This application makes use of React Native with Hooks and React-Navigation.  

---
## Technology 

- JavaScript
- React Native Framework, JSX
- React-Navigation 
- Node.js

---
## Prerequites, Install and Run

- To start with this project, there are few setting you have to do before hand. Since react native development is a cross platform development, you can either execute this program on your physical mobile (iOS/Android) device or on simulator or on emulator. 

- This particular project, makes use of `expo-cli` library to get started. This adds up a ton of different configurations to use features common in apps, like icons, videos, etc. To get started with the project, let's follow the following commands: 

1. Download/ Clone this repo on your device. 
2. Download `Expo` app on your mobile device if you are using one.
3. To make use of emulator/simulator follow the guide
    - Simulator @<https://docs.expo.io/versions/latest/workflow/ios-simulator/>
    - Emulator @<https://docs.expo.io/versions/v34.0.0/workflow/android-studio-emulator/>
4. Start with running `npm install` on your device.
5. Run `npm start` to start the expo bundler.
6. If you are using your mobile device, scan the QR code through your camera and the project will start running on your device inside `Expo` application.
7. Play with it :)  
 
---

## YELP signup 

- `YELP API` is a free API  that we can use to search big group of restaurants given some search term.

- You can find the documentation @<yelp.com/fusion>

- To make use of `YELP API` you have follow few steps. 
    1. Visit @<https://www.yelp.com/fusion> or Google YELP API(in case you get an error saying 404 page not found)
    2. Sign up or Log in to the YELP account.
    3. After signing up, YELP is automatically going to redirect you to their home page. In this case, manually redirect yourself to @<https://www.yelp.com/fusion>
    4. Click on `Get Started` button. You will be redirected to their Developer's page @<https://www.yelp.com/developers/v3/manage_app>
    5. You first will have to create an app and fill out the information in the form asked on that page. Few of the important fields are: `App Name` , `Industry`, `Contact Email`, `Description`. 
    6. After all these fields are filled, go ahead and accept the terms of use by Yelp and click on `Create New App`. 
    7. Once your app is created, you will be provided with the `Client ID` and the `API Key`
    8. On this page you would want to look into `Business Endpoints` in more detail. This app primarily makes use of `Business Search` and `Business Details` which are `Business Endpoints`'s sub-sections. But if you want to contribute in developing this app more, you can look into other points as as well.
    9. On `Business Search` page @<https://www.yelp.com/developers/documentation/v3/business_search>, you can find a URL under `Request` section, which we would request to through our app in order to form a network connection and get the data from API : `/businesses/search`
    10. In this application, I made use of various paramaters from `/businesses/search`, those are : `term`, `location`, `categories`, `limit`, `price`, `transactions`, etc
    11. On `Business Details` page @<https://www.yelp.com/developers/documentation/v3/business>, you can find a similar URL as mentioned in the previous point under `Request` section, which we would request to through our app in order to form a network connection and get the data from API. The only difference here is, to make use of attibutes from this page, you would put `{id}` at the end of the URL : `/businesses/{id}`. 
    12. In `/businesses/{id}`, you would find a restaurant specific information. I made use of `photos` parameters to get an access to pictures available for a specific restaurant. 
    
- When you go through all these steps, you would want to change the API key in [yelp.js](https://github.com/Anushree-naik/Food-Fork-Drink/blob/master/src/api/yelp.js). 

- **In [yelp.js](https://github.com/Anushree-naik/Food-Fork-Drink/blob/master/src/api/yelp.js), make sure you have one space inbetween `Bearer` and your API key. In my case, `FlG-H_TaiuiEdp7zhiLgFZ-Uy4KQSxOYce-REKreXCTxcB2h6YpCUG1zRO-nsA5GJ4Cescr2Bgz4BWRDw09LpJG5ELczqANneNCIDCkJbQ1B2Cm3TkniZFlip7BNXXYx` is the YELP API key. 

---

## Configuring Axios 

- Anytime we are making a network request through the React Native application, we can make use of various options like `fetch` or `axios`. 
- In this application, I make use of `axios`
- `axios`is a separate library for making request.
- To make use of `axios`, we first have to install it as a package in your project directory using the cmd `npm install axios`. 
- Once you have this library installed, you can make use of it in your api folder, like how I have done in [yelp.js](https://github.com/Anushree-naik/Food-Fork-Drink/blob/master/src/api/yelp.js)

---

## Demo

[![Demo](https://github.com/Anushree-naik/Food-Fork-Drink/blob/master/demo.gif)

---
## Future Work

- Integrating multiple APIs together to search variety of events happening around your area.
- Add `Recommendation` feature
- Make JSON server work properly.

---

## Contribute

Interested in contributing to this project? I'd love to have you! Please take a moment to review my [guide to contributing](CONTRIBUTING.md) before getting started.

I welcome developers of any background and skill level. 🌱

---
## Detailed Report

You can find the detailed report of this project [here](Report.md).

---
## Contributors

- Anushree Naik - @<anushree317@gmail.com>

---
## Licence & Copyrights 

- Distributed under the MIT License. See [LICENSE](LICENSE.md) for more information.
- &copy; Anushree Naik



