# Getting Started with Create React App
some basic info for Create React App
 # Initialize

 npm install create-react-app -g
 create-react-app .

 # File Set Up

 Delete default source files
 Add index.js
 Add App.js

# index.js
 import React from 'react'
 import ReactDOM from 'react-dom'

 import App from "./App"

 ReactDOM.render(<App/>, document.getElementById("root"))

 # App.js

 import React, { useState } from "react";
 import "./styles.css";

 const App = () => {

     const [count, setCount] = useState(0)

     return (
         <div>
             <h1>Hello world"
        </div>
    );
 }

export default App; 

# Start React 

npm start

# ReactJS
A JS library for building user interfaces using declarative code
Declarative code: each line declares what each element of the app is
Benefit:
Low learning curve 
Reusable components – how a section of the UI should appear and function
Performance

Components – JS function that accepts inputs
Component = section of a website
Individual UI element

Every React App will have an ID root

# JSX
We use JSX to create components
JavaScript XML – allows us to write HTML in ReactJS
JSX- allows us to use JS expressions, use variables, and JS loops as well as if else statements


# Styling React 
Inline styling – specify style in an element
CSS style sheet – import CSS file in your JS file

# Props 
Arguments passed into React components  

# Save data with Hooks
Data storage device
Used to expand functionality in your app by letting you “hook into” a react state and lifecycle features. 

# Save Data in you app using State
States = parts of an app that can change. 
Each component can have its own state
As state changes components re-render
Example likes going from 20 to 21 when a user likes a photo

