import React from 'react';
import {IndexRoute, Router as Route} from 'react-router';
import App from './components/App';
import HomePage from './components/homePage/HomePage';
import LoginPage from './components/loginPage/LoginPage';
import ForgotPassword from "./components/loginPage/ForgotPassword";
import SignUpPage from './components/signUpPage/SignUpPage';
import StudentSignupForm from "./components/studentPages/StudentSignUpForm";
import AdminPage from './components/adminPage/AdminPage';
import RegisteredStudents from './components/adminPage/StudentsList';
import Volunteers from './components/adminPage/VolunteersList';
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
import VolunteerPage from "./components/volunteerPages/VolunteerPage";
import VolunteerClassesPage from "./components/volunteerPages/VolunteerClassesPage";
import VolunteerUploadNotes from "./components/volunteerPages/VolunteerUploadNotes";
import FacultyPage from "./components/facultyPage/FacultyPage";
import FacultyStudentsPage from "./components/facultyPage/FacultyStudentsPage";
import FacultyVolunteersPage from "./components/facultyPage/FacultyVolunteersPage";
import FacultyClassesPage from "./components/facultyPage/FacultyClassesPage";
import FacultyClass1Page from "./components/facultyPage/FacultyClass1Page";
import FacultyClass2Page from "./components/facultyPage/FacultyClass2Page";
import FacultyClass3Page from "./components/facultyPage/FacultyClass3Page";
import pprs from "./components/volunteerPages/pprs";
import proctoringRequestForm from "./components/volunteerPages/proctoringRequestForm";
import RequestForAccommodationsForm from "./components/accomodations/RequestForAccommodationsForm";
import AcademicAccommodationsContract from "./components/accomodations/AcademicAccommodationsContract";
import hub from "./components/forPresentationOnly/hub";
import regProgressBar from "./components/utilities/regProgressBar";
import volSignUpProgress from "./components/utilities/volSignUpProgress";
import volSignUpForm from "./components/volunteerPages/VolunteerSignUpForm";
import adminPendingUserPage from "./components/adminPage/adminPendingUserPage";
import testPage from "./components/adminPage/testPage";
import nonAdminClassPage from "./components/classPages/studentClassPage";
import adminClassPage from "./components/classPages/adminClassPage";
import volFacClassPage from "./components/classPages/volFacClassPage";
import AdminClassesPage from "./components/adminPage/AdminClassesPage";
import CoursesPage from "./components/coursesPage/CoursesPage";
import FacultySignUpForm from "./components/facultyPage/FacultySignUpForm";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        {/*indexRoute used for homepage only*/}
        <Route path="/testForIsaac" component={testPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/forgotPassword" component={ForgotPassword}/>
        <Route path="/studentSignupForm" component={StudentSignupForm}/>
        <Route path="/signUp" component={SignUpPage}/>
        <Route path="/regProgressBar" component={regProgressBar}/>
        <Route path="/volunteerSignUpProgress" component={volSignUpProgress}/>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/adminPendingUser" component={adminPendingUserPage}/>
        <Route path="/studentsList" component={RegisteredStudents}/>
        <Route path="/volunteersList" component={Volunteers}/>
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
        <Route path="/volunteer" component={VolunteerPage}/>
        <Route path="/volunteerClasses" component={VolunteerClassesPage}/>
        <Route path="/adminClasses" component={AdminClassesPage}/>
        <Route path="/volunteerSignUpForm" component={volSignUpForm}/>
        <Route path="/pprs" component={pprs}/>
        <Route path="/proctoringRequestForm" component={proctoringRequestForm}/>
        <Route path="/uploadNotes" component={VolunteerUploadNotes}/>
        <Route path="/faculty" component={FacultyPage}/>
        <Route path="/facultySignUpForm" component={FacultySignUpForm}/>
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
        <Route path="/adminClassPage" component={adminClassPage}/>
        <Route path="/volFacClassPage" component={volFacClassPage}/>
        <Route path="/courses" component={CoursesPage}/>
    </Route>
);
