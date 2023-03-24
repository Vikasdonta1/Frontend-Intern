# Getting Started with Create React App

This project was bootstrapped with [Create React App] 
In this sample code, we first define two states users and isLoading using the useState hook. We then define a function fetchUsers that makes an API call to get the user data and updates the users state with the fetched data. We also set the isLoading state to true while the API fetches the data and set it back to false when the data is fetched

We then use the useEffect hook to call the fetchUsers function once when the component mounts.

We then create the UI using HTML and CSS. We have a navbar that displays the brand name and a button that calls the fetchUsers function when clicked. We also display a loader using the isLoading state.

Finally, we display the user data in a grid layout using the map function to iterate over the users state and display each user as a card.

## Available Scripts

In the project directory,  To run the Project:

### 'npm install' 'npm install axios' `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
