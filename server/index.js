const express = require("express");
//import exercises from './exercises.json';

PORT = 3001;

const app = express();

const exercises = [
    {
        "name": "curls", 
        "intensity" : "low"
    },
    {
        "name": "deadlift", 
        "intensity" :  "high"
    },
    {
        "name": "tricepExtensions", 
        "intensity" : "medium"
    },
    {
        "name": "benchPress", 
        "intensity" : "high"
    },
    {
        "name": "squat", 
        "intensity" : "high"
    },
    {
        "name": "pushUp", 
        "intensity" : "medium"
    },
    {
        "name": "jumpingJacks", 
        "intensity" : "high"
    },
    {
        "name": "buttKicks", 
        "intensity" : "medium"
    },
    {
        "name": "burpees", 
        "intensity" : "high"
    },
    {
        "name": "bentOverRow", 
        "intensity" : "medium"
    },
    {
        "name": "latPull", 
        "intensity" : "high"
    },
    {
        "name": "pullUp", 
        "intensity" : "low"
    },
    {
        "name": "dips", 
        "intensity" : "low"
    },
    {
        "name": "cableFlys", 
        "intensity" : "medium"
    },
    {
        "name": "boxJumps", 
        "intensity" : "high"
    },
    {
        "name": "sitUps", 
        "intensity" : "medium"
    },
    {
        "name": "planks", 
        "intensity" : "low"
    },
    {
        "name": "cableRows", 
        "intensity" : "medium"
    },

]

app.get(`/exercises`, (req, res) => {
    res.json({exercises})
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});