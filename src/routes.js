import React from 'react';
import {IndexRoute, Router as Route} from 'react-router';
import App from './components/App';
import HomePage from './components/homePage/HomePage';
import LoginPage from './components/loginPage/LoginPage';
import ForgotPassword from "./components/loginPage/ForgotPassword";
import SignUpPage from './components/signUpPage/SignUpPage';
import SignupForm from "./components/signUpPage/SignUpForm";
import AdminPage from './components/adminPage/AdminPage';
import RegisteredStudents from './components/adminPage/StudentsList';
import Notetakers from './components/adminPage/NotetakersList';
import CasForms from './components/adminPage/CasForms';
import StudentPage from './components/studentPages/StudentPage';
import StudentClasses from './components/studentPages/StudentClassesPage';
import StudentClass1 from './components/classPages/StudentClass1Page';
import StudentClass2 from './components/classPages/StudentClass2Page';
import StudentClass3 from './components/classPages/StudentClass3Page';
import StudentClass4 from './components/classPages/StudentClass4Page';
import StudentClass5 from './components/classPages/StudentClass5Page';
import StudentNotes from './components/notesPages/StudentNotesPage';
import AdminNotes from './components/notesPages/AdminNotesPage';
import NotetakerPage from "./components/notetakerPages/NotetakerPage";
import NotetakerClasses from "./components/notetakerPages/NotetakerClassesPage";
import NotetakerClass1 from "./components/classPages/NotetakerClass1Page";
import NotetakerClass2 from "./components/classPages/NotetakerClass2Page";
import NotetakerClass3 from "./components/classPages/NotetakerClass3Page";
import NotetakerClass4 from "./components/classPages/NotetakerClass4Page";
import NotetakerClass5 from "./components/classPages/NotetakerClass5Page";
import NotetakerUploadNotes from "./components/notetakerPages/NotetakerUploadNotes";
import FacultyPage from "./components/facultyPage/FacultyPage";
import FacultyStudentsPage from "./components/facultyPage/FacultyStudentsPage";
import FacultyVolunteersPage from "./components/facultyPage/FacultyVolunteersPage";
import FacultyClassesPage from "./components/facultyPage/FacultyClassesPage";
import FacultyClass1Page from "./components/facultyPage/FacultyClass1Page";
import FacultyClass2Page from "./components/facultyPage/FacultyClass2Page";
import FacultyClass3Page from "./components/facultyPage/FacultyClass3Page";
import pprs from "./components/notetakerPages/pprs";
import proctoringRequestForm from "./components/notetakerPages/proctoringRequestForm";
import RequestForAccommodationsForm from "./components/accomodations/RequestForAccommodationsForm";
import AcademicAccommodationsContract from "./components/accomodations/AcademicAccommodationsContract";
import hub from "./components/forPresentationOnly/hub";
import regProgressBar from "./components/utilities/regProgressBar";
import volSignUpProgress from  "./components/utilities/volSignUpProgress";
import volSignUpForm from "./components/notetakerPages/volunteerSignUpForm";
import adminPendingUserPage from "./components/adminPage/adminPendingUserPage";
import testPage from "./components/adminPage/testPage";
import nonAdminClassPage from "./components/classPages/studentClassPage";
import adminClassPage from "./components/classPages/adminClassPage";
import volFacClassPage from "./components/classPages/volFacClassPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        {/*indexRoute used for homepage only*/}
        <Route path="/testForIsaac" component={testPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/forgotPassword" component={ForgotPassword}/>
        <Route path="/signupForm" component={SignupForm}/>
        <Route path="/signUp" component={SignUpPage}/>
        <Route path="/regProgressBar" component={regProgressBar}/>
        <Route path="/volunteerSignUpProgress" component={volSignUpProgress}/>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/adminPendingUser" component={adminPendingUserPage}/>
        <Route path="/studentsList" component={RegisteredStudents}/>
        <Route path="/notetakersList" component={Notetakers}/>
        <Route path="/casForms" component={CasForms}/>
        <Route path="/student" component={StudentPage}/>
        <Route path="/studentClasses" component={StudentClasses}/>
        <Route path="/studentClass1" component={StudentClass1}/>
        <Route path="/studentClass2" component={StudentClass2}/>
        <Route path="/studentClass3" component={StudentClass3}/>
        <Route path="/studentClass4" component={StudentClass4}/>
        <Route path="/studentClass5" component={StudentClass5}/>
        <Route path="/studentNotes" component={StudentNotes}/>
        <Route path="/adminNotes" component={AdminNotes}/>
        <Route path="/notetaker" component={NotetakerPage}/>
        <Route path="/notetakerClasses" component={NotetakerClasses}/>
        <Route path="/notetakerClass1" component={NotetakerClass1}/>
        <Route path="/notetakerClass2" component={NotetakerClass2}/>
        <Route path="/notetakerClass3" component={NotetakerClass3}/>
        <Route path="/notetakerClass4" component={NotetakerClass4}/>
        <Route path="/notetakerClass5" component={NotetakerClass5}/>
        <Route path="/volunteerSignUpForm" component={volSignUpForm}/>
        <Route path="/pprs" component={pprs}/>
        <Route path="/proctoringRequestForm" component={proctoringRequestForm}/>
        <Route path="/uploadNotes" component={NotetakerUploadNotes}/>
        <Route path="/faculty" component={FacultyPage}/>
        <Route path="/facultyClasses" component={FacultyClassesPage}/>
        <Route path="/facultyClass1" component={FacultyClass1Page}/>
        <Route path="/facultyClass2" component={FacultyClass2Page}/>
        <Route path="/facultyClass3" component={FacultyClass3Page}/>
        <Route path="/facultyVolunteers" component={FacultyVolunteersPage}/>
        <Route path="/facultyStudents" component={FacultyStudentsPage}/>
        <Route path="/requestForAccommodationsForm" component={RequestForAccommodationsForm}/>
        <Route path="/academicAccommodationsContract" component={AcademicAccommodationsContract}/>
        <Route path="/hub" component={hub}/>
        <Route path="/studentClassPage" component={nonAdminClassPage}/>
        <Route path="/adminClassPage"   component={adminClassPage}/>
        <Route path="/volFacClassPage" component={volFacClassPage}/>

    </Route>
);
