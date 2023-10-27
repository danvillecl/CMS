function Student(props) {
  return (
    <li className="list-group-item">
      {props.name}{" "}
      <button className="btn btn-sm float-end bgcolor">
        <a href="/ChatPage" className="text-decoration-none text-white">
          Message
        </a>
      </button>
    </li>
  );
}

export default Student;
