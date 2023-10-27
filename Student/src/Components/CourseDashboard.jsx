// import { Link } from 'react-router-dom';

import React from 'react'
const CourseDashboard = () => {
  return (
    <div>
      <div className="container mt-4">
        <h3 className="pb-1 mb-4">Course Panel</h3>
        <div className="row md-4 CourseDash-Card" >
          <div className="col-md-4">
            <div className="d-flex">
              <div className="card courseDashboardCard">
                <a href="/Categories"><img src="https://source.unsplash.com/1800x1800/?course&1" className="card-img-top" alt="#" /></a>
                <div className="card-body">
                  <h5 className="card-title"><a href="/Categories" className="btn btn-primary btn-color">Courses Category</a></h5>
                </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card courseDashboardCard">
              <a href="/CourseList"><img src="https://source.unsplash.com/1800x1800/?course&2" className="card-img-top" alt="..." /></a>
              <div className="card-body">
                <h5 className="card-title"><a href="/CourseList" className="btn btn-primary btn-color">Ongoing Course</a></h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card courseDashboardCard">
              <a href="CourseList"><img src="https://source.unsplash.com/1800x1800/?course&3" className="card-img-top" alt="..." /></a>
              <div className="card-body">
                <h5 className="card-title"><a href="/CourseList" className="btn btn-primary btn-color">Completed Course</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CourseDashboard

 

// function CourseDashboard() {

//     return (

//       <div className="container mt-4">

//         <h3 className="pb-1 mb-4">Course Panel</h3>

//         <div className="row md-4">

//           <div className="col-md-3">

//             <div className="d-flex">

//               <div className="card">

//                 <a href="/AddNewCourse"><img src="https://source.unsplash.com/1800x1800/?course&1" className="card-img-top" alt="#" /></a>

//                 <div className="card-body">

//                   <h5 className="card-title"><a href="/About" class="btn btn-primary btn-color">Add New Courses</a></h5>

//                 </div>

//               </div>

//             </div>

//           </div>

//           <div className="col-md-3">

//             <div className="card">

//               <a href="#"><img src="https://source.unsplash.com/1800x1800/?course&2" className="card-img-top" alt="..." /></a>

//               <div className="card-body">

//                 <h5 className="card-title"><a href="#">Ongoing Course</a></h5>

//               </div>

//             </div>

//           </div>

//           <div className="col-md-3">

//             <div className="card">

//               <a href="#"><img src="https://source.unsplash.com/1800x1800/?course&3" className="card-img-top" alt="..." /></a>

//               <div className="card-body">

//                 <h5 className="card-title"><a href="#">Completed Course</a></h5>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     );

//   }

 

//   export default CourseDashboard;