// import React, { useState } from "react";

// function Syllabus({ faq, index, toggleFAQ, toggleEdit, handleEdit }) {
//   const [editedContent, setEditedContent] = useState(faq.answer);

//   const handleInputChange = (e) => {
//     setEditedContent(e.target.value);
//   };

//   return (
//     <div>
//       <div
//         className={"faq " + (faq.open ? "open" : "")}
//         key={index}
//         onClick={() => toggleFAQ(index)}
//       >
//         <div className="faq-question">{faq.question}</div>
//         {faq.isEditing ? (
//           <div>
//             <textarea
//               value={editedContent}
//               onChange={handleInputChange}
//             ></textarea>
//             <button
//               onClick={() => handleEdit(index, editedContent)}
//               className="btn btn-sm btn-primary SaveSyllabus"
//             >
//               Save
//             </button>
//           </div>
//         ) : (
//           <div className="faq-answer">{faq.answer}</div>
//         )}
//         <button className="EditSyllabus" onClick={() => toggleEdit(index)}>
//           Edit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Syllabus;

// --------------------------------------

// function Syllabus({
//   faq,
//   index,
//   toggleFAQ,
//   toggleEdit,
//   handleEdit,
//   handleDelete,
// }) {
//   const [editedContent, setEditedContent] = useState(faq.answer);

//   const handleInputChange = (e) => {
//     setEditedContent(e.target.value);
//   };

//   return (
//     <div>
//       <div
//         className={"faq " + (faq.open ? "open" : "")}
//         key={index}
//         onClick={() => toggleFAQ(index)}
//       >
//         <div className="faq-question">{faq.question}</div>
//         {faq.isEditing ? (
//           <div>
//             <textarea
//               value={editedContent}
//               onChange={handleInputChange}
//             ></textarea>
//             <button
//               onClick={() => handleEdit(index, editedContent)}
//               className="btn btn-sm btn-primary SaveSyllabus"
//             >
//               Save
//             </button>
//           </div>
//         ) : (
//           <div className="faq-answer">{faq.answer}</div>
//         )}
//         <button className="EditSyllabus" onClick={() => toggleEdit(index)}>
//           Edit
//         </button>
//         <button className="DeleteSyllabus" onClick={() => handleDelete(index)}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Syllabus;

// -------------------------------------------------

import React, { useState } from "react";

function Syllabus({
  faq,
  index,
  toggleFAQ,
  toggleEdit,
  handleEdit,
  handleDelete,
}) {
  const [editedContent, setEditedContent] = useState(faq.answer);

  const handleInputChange = (e) => {
    setEditedContent(e.target.value);
  };

  return (
    <div>
      <div
        className={"faq " + (faq.open ? "open" : "")}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        <div className="faq-question">{faq.question}</div>
        {faq.isEditing ? (
          <div>
            <textarea
              value={editedContent}
              onChange={handleInputChange}
            ></textarea>
            <button
              onClick={() => handleEdit(index, editedContent)}
              className="btn btn-sm btn-primary SaveSyllabus"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="faq-answer">{faq.answer}</div>
        )}
        <button className="EditSyllabus" onClick={() => toggleEdit(index)}>
          Edit
        </button>
        {/* <button className="DeleteSyllabus" onClick={handleDelete}>
          Delete
        </button> */}
      </div>
    </div>
  );
}

export default Syllabus;
