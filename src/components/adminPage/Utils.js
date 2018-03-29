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
 * creates a data structure representation of an Admin Account with  with 5 attributes:
 * firstName, lastName, accountType, and studentID, email
 * @returns {{firstName: string, lastName: string, accountType: string, studentID: string, email: string}}
 */
function newAdminStruct() {
    return {
        firstName: "Isaac",
        lastName: "Hutchinson",
        accountType: "Administrator",
        studentID: "000000000"
    };
};

/**
 * creates a data structure representation of a Faculty Accounts with 5 attributes:
 * firstName, lastName, accountType, and studentID, email
 * @returns {{firstName: string, lastName: string, accountType: string, studentID: string, email: string}}
 */
const newFacultyStruct = (faculty) => {
    return {
        firstName: faculty.first_name,
        lastName: faculty.last_name,
        accountType: faculty.role,
        studentID: faculty.ru_id,
        email: faculty.email
    };
};
/**
 * creates a data structure representation of a Student Accounts  with 5 attributes:
 * firstName, lastName, accountType, and studentID, email
 * @returns {{firstName: string, lastName: string, accountType: string, studentID: string, email: string}}
 */
const newStudentStruct = (student) => {
    return {
        firstName: student.first_name,
        lastName: student.last_name,
        accountType: student.role,
        studentID: student.ru_id,
        email: student.email
    };
};

const newNoteTakerStruct = (notetaker) => {
    return {
        firstName: notetaker.first_name,
        lastName: notetaker.last_name,
        accountType: notetaker.role,
        studentID: notetaker.ru_id,
        email: notetaker.email
    };
};

const newDocumentStruct = (document) => {
    return {
        title: document.title,
        version: document.version,
        file: document.file

    };
};

const newNoteStruct = (note) => {
    return {
        course_number: note.course_number,
        date_submitted: note.date_submitted,
        title: note.title,
        file: document.file

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

export function loadUsers(role) {
    var headers = new Headers();
    const body = JSON.stringify({role: role});
    headers.append("Content-Type", "application/json");
    //return (window.fetch('http://137.45.220.128:443/loadUsers',
    return (window.fetch('http://localhost:7555/loadUsers',
            {
                method: 'POST',
                headers: headers,
                body: body
            })
            .then((res) => {
                    return (
                        res.text().then(function (result) {
                            return JSON.parse(result);
                        })
                    )
                }
            )
    )
}

export function loadDocuments(is_fillable) {
    var headers = new Headers();
    const body = JSON.stringify({is_fillable: is_fillable});
    console.log(body);
    headers.append("Content-Type", "application/json");
    //return (window.fetch('http://137.45.220.128:443/loadFiles',
    return (window.fetch('http://localhost:7555/loadDocuments',
            {
                method: 'POST',
                headers: headers,
                body: body
            })
            .then((res) => {
                    return (
                        res.text().then(function (result) {
                            console.log(JSON.parse(result));
                            return JSON.parse(result);
                        })
                    )
                }
            )
    )
}

export function loadNotes(courseNumber) {
    var headers = new Headers();
    const body = JSON.stringify({course_number: courseNumber});
    console.log(body);
    headers.append("Content-Type", "application/json");
    //return (window.fetch('http://137.45.220.128:443/loadFiles',
    return (window.fetch('http://localhost:7555/loadNotes',
            {
                method: 'POST',
                headers: headers,
                body: body
            })
            .then((res) => {
                    return (
                        res.text().then(function (result) {
                            console.log(JSON.parse(result));
                            return JSON.parse(result);
                        })
                    )
                }
            )
    )
}

export async function makeListOfStudents() {
    return loadUsers("student").then((students) => {
            const studentsTotal = students.length;
            var array = [studentsTotal];
            for (var i = 0; i < studentsTotal; i++) {
                array[i] = newStudentStruct(students[i]);
            }
            return array;
        }
    )
}

export async function makeListOfNoteTakers() {
    return loadUsers("notetaker").then((notetakers) => {
            const notetakersTotal = notetakers.length;
            var array = [notetakersTotal];
            for (var i = 0; i < notetakersTotal; i++) {
                array[i] = newNoteTakerStruct(notetakers[i]);
            }
            return array;
        }
    )
}

export async function makeListOfFaculty() {
    return loadUsers("faculty").then((faculty) => {
            const facultyTotal = faculty.length;
            var array = [facultyTotal];
            for (var i = 0; i < facultyTotal; i++) {
                array[i] = newFacultyStruct(faculty[i]);
            }
            return array;
        }
    )
}

export async function makeListOfDocuments(is_fillable) {
    return loadDocuments(is_fillable).then((documents) => {
            const documentsTotal = documents.length;
            var array = [documentsTotal];
            for (var i = 0; i < documentsTotal; i++) {
                array[i] = newDocumentStruct(documents[i]);
            }
            return array;
        }
    )
}

export async function makeListOfNotes(courseNumber) {
    return loadNotes(courseNumber).then((notes) => {
            const total = notes.length;
            var array = [total];
            for (var i = 0; i < total; i++) {
                array[i] = newNoteStruct(notes[i]);
            }
            return array;
        }
    )
}