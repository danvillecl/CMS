import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import CourseDashboard from "./CourseDashboard";
import CourseList from "./CourseList";
import Course from "./Course";
import NewCourse from "./NewCourse";
import AllStudents from "./AllStudents";
import ChatPage from "./ChatPage";
import QuizDashboard from "./QuizDashboard";
import Quizes from "./Quizes";
import NewQuiz from "./NewQuiz";
import AddVideo from "./AddVideo";
import AddTopic from "./AddTopic";

import Footer from "./Footer";

import { Routes as Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div className="App">
      <Header />

      <Switch>
        {/* <Route path="Login" element={<Login/>}/> */}
        <Route path="/" element={<Home />} />
        <Route path="/CourseDashboard" element={<CourseDashboard />} />
        <Route path="/NewCourse" element={<NewCourse />} />
        <Route path="/CourseList" element={<CourseList />} />
        <Route path="/detail/:id" element={<Course />} />
        <Route path="/AllStudents" element={<AllStudents />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/ChatPage" element={<ChatPage />} />
        <Route path="/QuizDashboard" element={<QuizDashboard />} />
        <Route path="/Quizes" element={<Quizes />} />
        <Route path="/NewQuiz" element={<NewQuiz />} />
        <Route path="/AddVideo" element={<AddVideo />} />
        <Route path="/AddTopic" element={<AddTopic />} />
      </Switch>

      <Footer />
    </div>
  );
}

export default Main;

// import Login from "./Login";
// import Home from "./Home";
// import Header from "./Header";
// import Profile from "./Profile";
// import EditProfile from "./EditProfile";
// import CourseDashboard from "./CourseDashboard";
// import CourseList from "./CourseList";
// import Course from "./Course";
// import NewCourse from "./NewCourse";
// import AllStudents from "./AllStudents";
// import QuizManagement from "./Quiz";

// import Footer from "./Footer";

// import { Routes as Switch, Route } from "react-router-dom";
// // import QuizDashboard from "./QuizDashboard";

// function Main() {
//   return (
//     <div className="App">
//       <QuizManagement />
//     </div>
//   );
// }

// export default Main;
