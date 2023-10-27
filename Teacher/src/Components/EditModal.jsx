// import React, { useState } from "react";

// const EditModal = ({ faq, onSave, onCancel }) => {
//   const [editedFaq, setEditedFaq] = useState({ ...faq });

//   const handleSave = () => {
//     onSave(editedFaq);
//   };

//   return (
//     <div className="edit-modal">
//       <input
//         type="text"
//         value={editedFaq.question}
//         onChange={(e) =>
//           setEditedFaq({ ...editedFaq, question: e.target.value })
//         }
//       />
//       <textarea
//         value={editedFaq.answer}
//         onChange={(e) => setEditedFaq({ ...editedFaq, answer: e.target.value })}
//       ></textarea>
//       <button onClick={handleSave}>Save</button>
//       <button onClick={onCancel}>Cancel</button>
//     </div>
//   );
// };

// export default EditModal;
