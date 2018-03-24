import React from "react";

/**
 * constructs an array of the given length
 * @param len length the constructed array should be
 * @returns {Array}
 */
const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

//Maybe add information from database here
/**
 * creates a data structure representation of an Admin Account with 4 attributes:
 * firstName, lastName, accountType, and studentID
 * @returns {{firstName: string, lastName: string, accountType: string, studentID: string}}
 */
const newAdminStruct = () => {
    const statusChance = Math.random();
    return {
        firstName: "Isaac",
        lastName: "Hutchinson",
        accountType: "Administrator",
        studentID: "000000000"
    };
};

//Maybe add information from database here
/**
 * creates a data structure representation of a Student Accounts with 4 attributes:
 * firstName, lastName, accountType, and studentID
 * @returns {{firstName: string, lastName: string, accountType: string, studentID: string}}
 */
const newStudentStruct = () => {
    const statusChance = Math.random();
    return {
        firstName: "Tevin",
        lastName: "Scott",
        accountType: "Note Viewer",
        studentID: "000000000"
    };
};
//Maybe add information from database here
const newNoteTakerStruct = () => {
    const statusChance = Math.random();
    return {
        firstName: "Brandon",
        lastName: "Phillips",
        accountType: "Note Taker",
        studentID: "000000000"
    };
};

//Amount of data to make
export function makeListOfAdmins(len = 1000) {
    return range(len).map(d => {
        return {
            ...newAdminStruct(),
            children: range(10).map(newAdminStruct)
        };
    });
}
export function makeListOfStudents(len = 1000) {
    return range(len).map(d => {
        return {
            ...newStudentStruct(),
            children: range(10).map(newStudentStruct)
        };
    });
}
export function makeListOfNoteTakers(len = 1000) {
    return range(len).map(d => {
        return {
            ...newNoteTakerStruct(),
            children: range(10).map(newNoteTakerStruct)
        };
    });
}