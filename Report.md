# React Native application to search the nearby restaurants. 

## Aim of the project: 

- To make a cross platform mobile application, making use of React framework in Javascript. Since React-Native was a new technology for me to get hands on, my aim for was to learn as much as I can, in the span of 8 weeks or so. 

## What is this project?

- In this project, I have levegraged the Yelp API as a primary database for the application. The best part of React Native framework is you can make multiple resuable components inside your project directory which can save writing a lot of redundent code. 

- This application consist of 5 screens and 4 reusable components. The goal of this application is to search restaurants nearby you according to the query you enter in the search bar. I have also made a protocol of `Saved Items` feature inside this application where you can press `Like` button and that ID is saved inside `Saved Items` screen. 

- When I was developing this application, I was also cautious about making the code efficient when executed. For obvious reasons, React Navigation plays an important role in the entire process. To avoid passing all the data from `StackNavigator` to the child components through parent components all the time, React makes use of the Function call Context where the contents can be retrieved directly in the child components. This function makes a huge impact on the speed of execution when the application consists of a lot screens/reusable components. 

- Making use of Functions like `useEffect`, `useState` the code avoids rerendering the application multiple times, stopping it from going in the infinite loop. This increases the overall performance of the product. This might not be very significant in the the current application due to the smalled size of it. But I understood that it is a good practice to make use of these functions. 

- The Application has, `Start Screen` which is a starter screen as the name suggests
- `Search Screen` Consists of all the by default results of the restaurants. These results are segregated according to the price range. You can also see their respective `Stars` and `Ratings` based on the reviews given by the users on this page. 
- When you tap on the image of any one particular restaurant, you are nagivated to `Result Show Screen` which basically shows you the name and the images of that particular restaurant. 
- Coming back to `Search Screen` you can also tap on `Contact Information` which navigates you to `Address Show` screen. As the name suggests, you can get detailed information about how to reach that particular restaurant here. 
- On the `Search Screen` you also see a heart shaped icon. That icon signifies the action of `Save` when tapped. You get an alert message when you tap on that icon saying, `Restaurant saved in Saved Items`. You can see these saved items when you tap on the button called `Saved Items`. 
- For a prototype purpose, the application is currently generating it's random IDs and it is making use of it to save the Restaurants in `Saved Items` screen. These IDs are not similar to the ones given by YELP API. 
- When you navigate into `Saved Items` screen, you see `Restaurnt #1 - ID`. If you do not want any particular item to be in that list, you also have an option to delete it. At the backend, when you hit the delete icon, the code knows which ID to delete and you see that item removed from the screen. 

## How to run this project on your device?

1. Download/ Clone this repo on your device. 
2. Download `Expo` app on your mobile device if you are using one. 
3. If you are using Simulator/Emulator, please refer to the doc mentioned in [README.md](README.md)
2. Start with running `npm install` on your device
3. Run `npm start` to start the expo bundler
4. If you are using your mobile device, scan the QR code through your camera and the project will start running on your device inside `Expo` application.
5. Play with it :) 


## Challenges that I faced during development of this project:

1. For some reason, my application could not be connected to the JSON server that I was planning on integrating as a second database. 

2. My future goal is to understand the process where I can use multiple APIs and cross reference them inside the application to make use of all the available data. 

## Credits: 

- I learnt using React Native from scratch and I made use of few references that I have mentioned below. 

1. @<https://github.com/StephenGrider/rn-casts/tree/master/food>
2. @<https://github.com/StephenGrider/rn-casts/tree/master/blog/src/context>
3. @<https://docs.expo.io/versions/latest/workflow/ios-simulator/>
4. @<https://www.youtube.com/watch?v=DLX62G4lc44>

- I also made use of few backgrounds pictures that I downloaded for free of cost from the internet

1. @<https://www.pexels.com/search/food/>
2. @<https://unsplash.com/search/photos/food>