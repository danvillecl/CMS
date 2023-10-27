import Student from "./Student";

function AllStudents() {
  const data = [
    // Your stundent data here

    {
      id: 1,

      studentID: 1,

      name: "Shresth Arora",

      courseID: 1,
    },

    {
      id: 2,

      studentID: 2,

      name: "Palak Gupta",

      courseID: 1,
    },

    {
      id: 3,

      studentID: 3,

      name: "Harshita",

      courseID: 1,
    },

    {
      id: 4,

      studentID: 4,

      name: "Saikat",

      courseID: 1,
    },

    {
      id: 5,

      studentID: 5,

      name: "Amarnath",

      courseID: 1,
    },
  ];

  return (
    <div>
      <div className="card courseContent-container">
        <div className="card-header class-header-style text-white">
          ENROLLED STUDENTS
          {/* <button className="btn btn-sm float-end bg-white">Message All</button> */}
        </div>

        <ul className="list-group list-group-flush">
          {data.map((student) => (
            <Student
              key={student.id}
              id={student.studentID}
              name={student.name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllStudents;
