import Login from "./Login";
// import Home from "./Home";
import Header from "./Header";
// import Profile from "./Profile";
// import EditProfile from "./EditProfile";
// import CourseDashboard from "./CourseDashboard";
// import Categories from "./Categories";
// import CoursesCategory from "./CoursesCategory";
// import CourseList from "./CourseList";
// import Course from "./Course";
// import NewCourse from "./NewCourse";
// import AllStudents from "./AllStudents";
// // import StudentQuiz from "./StudentQuiz";

import Footer from "./Footer";

import { Routes as Switch, Route } from 'react-router-dom';
// import QuizDashboard from "./QuizDashboard";

function Main(){
    return(
        <div className="App">
            <Header />
            
            <Switch>
                <Route path="Login" element={<Login/>}/>
            </Switch>
            
            <Footer />
            
            

        </div>
    );
}

export default Main;

//---------------------------------//
// import Login from "./Login";

// import Home from "./Home";

// import Header from "./Header";

// import Profile from "./Profile";

// import EditProfile from "./EditProfile";

// import CourseDashboard from "./CourseDashboard";

// import CourseList from "./CourseList";

// import Course from "./Course";

// import NewCourse from "./NewCourse";



// import StudentQuiz from "./StudentQuiz";


// import Footer from "./Footer";

 

// import { Routes as Switch, Route } from "react-router-dom";

// // import QuizDashboard from "./QuizDashboard";

 

// function Main() {

//   return (

//     <div className="App">

//       {/* <Header /> */}

 

//       {/* <Switch> */}

//       {/* <Route path="Login" element={<Login/>}/> */}

//       {/* <Route path="/" element={<Home />} /> */}

//       {/* <Route path="/CourseDashboard" element={<CourseDashboard />} /> */}

//       {/* <Route path="/NewCourse" element={<NewCourse />} /> */}

//       {/* <Route path="/CourseList" element={<CourseList />} /> */}

//       {/* <Route path="/detail/:id" element={<Course />} /> */}

 

//       {/* <Route path="/Profile" element={<Profile />} /> */}

//       {/* <Route path="/EditProfile" element={<EditProfile />} /> */}

//       {/* <Route path="/QuizDashboard" element={<QuizDashboard />} /> */}

      

        
//       {/* </Switch> */}

 

//       {/* <Footer /> */}

//       <StudentQuiz />

//     </div>

//   );

// }

 

// export default Main;