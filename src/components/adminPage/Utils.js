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
const newAdminStruct = (admin) => {
    return {
        firstName: admin.first_name,
        lastName: admin.last_name,
        accountType: admin.role,
        studentID: admin.ru_id,
        email: admin.email
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

const newVolunteerStruct = (volunteer) => {
    return {
        firstName: volunteer.first_name,
        lastName: volunteer.last_name,
        accountType: volunteer.role,
        studentID: volunteer.ru_id,
        email: volunteer.email
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

const newCourseStruct = (course) => {
    return {
        course_id: course.course,
        title: course.long_title,
    };
};

const newSubjectStruct = (subject) => {
    return {
        subject_name: subject.subject_name
    };
};

//Amount of data to make
export async function makeListOfAdmins() {
    return loadUsers("admin").then((admins) => {
            const adminsTotal = admins.length;
            var array = [adminsTotal];
            for (var i = 0; i < adminsTotal; i++) {
                array[i] = newAdminStruct(admins[i]);
            }
            return array;
        }
    )
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

export function disableUser(username){
    var headers = new Headers();
    const body = JSON.stringify({username: username});
    headers.append("Content-Type", "application/json");
    //return (window.fetch('http://137.45.220.128:443/disableUser',
    return (window.fetch('http://localhost:7555/disableUser',
            {
                method: 'POST',
                headers: headers,
                body: body
            })
            .then((res) => {
                    return (
                        res.text().then(function (result) {
                            console.log(result);
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
    //return (window.fetch('http://137.45.220.128:443/loadDocuments',
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
    //return (window.fetch('http://137.45.220.128:443/loadNotes',
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

export function loadCourses(subject_name) {
    let headers = new Headers();
    const body = JSON.stringify({subject_name: subject_name});
    console.log(body);
    headers.append("Context-Type", "application/json");
    return (window.fetch('http://localhost:7555/loadCourses',
            //return (window.fetch('http://137.45.220.128:443/loadCourses',
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
            })
    )
}

export function loadSubjects() {
    let headers = new Headers();
    headers.append("Context-Type", "application/json");
    return (window.fetch('http://localhost:7555/loadSubjects',
            //return (window.fetch('http://137.45.220.128:443/loadSubjects',
            {
                method: 'POST',
                headers: headers
            })
            .then((res) => {
                return (
                    res.text().then(function (result) {
                        console.log(JSON.parse(result));
                        return JSON.parse(result);
                    })
                )
            })
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
    return loadUsers("volunteer").then((volunteers) => {
            const volunteersTotal = volunteers.length;
            var array = [volunteersTotal];
            for (var i = 0; i < volunteersTotal; i++) {
                array[i] = newVolunteerStruct(volunteers[i]);
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

export async function makeListOfCourses(subject) {
    console.log(`Making list of courses for ${subject}`);
    return loadCourses(subject).then((courses) => {
        const total = courses.length;
        console.log(total);
        var array = [total];
        for (var i = 0; i < total; i++) {
            array[i] = newCourseStruct(courses[i]);
        }
        return array;
    })
}

export async function makeListOfSubjects() {
    return loadSubjects().then((subjects) => {
        const total = subjects.length;
        var array = [total];
        for (var i = 0; i < total; i++) {
            array[i] = newSubjectStruct(subjects[i]);
        }
        return array;
    })
}

