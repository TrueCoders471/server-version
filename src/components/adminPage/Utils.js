import React from "react";
//import namor from "namor";

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

//Maybe add information from database here
const newPerson = () => {
    const statusChance = Math.random();
    return {
        firstName: "Isaac",
        lastName: "Hutchinson",
        accountType: "Administrator",
        studentID: "000000000"
    };
};

//Amount of data to make
export function makeData(len = 1000) {
    return range(len).map(d => {
        return {
            ...newPerson(),
            children: range(10).map(newPerson)
        };
    });
}
