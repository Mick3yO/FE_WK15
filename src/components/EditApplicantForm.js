import React, { useState } from 'react';

// Functional component for rendering a form to edit an applicant
const EditApplicantForm = ({ applicant, saveEditedApplicant }) => {
  // State variables to track the edited values for name and position
  const [editedName, setEditedName] = useState(applicant.name);
  const [editedPosition, setEditedPosition] = useState(applicant.position);

  // Function to handle saving changes after editing an applicant
  const handleSaveChanges = () => {
    // Call the saveEditedApplicant function passed as a prop with the edited values
    saveEditedApplicant(applicant.id, editedName, editedPosition);

  };

  // JSX structure for rendering the edit form
  return (
    <form>
      {/* Form group for the edited name */}
      <div className="form-group">
        <label htmlFor="editApplicantName">Applicant Name:</label>
        {/* Input field for the edited name with value and onChange handlers */}
        <input
          type="text"
          className="form-control"
          id="editApplicantName"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          required
        />
      </div>

      {/* Form group for the edited position */}
      <div className="form-group">
        <label htmlFor="editApplicantPosition">Position:</label>
        {/* Input field for the edited position with value and onChange handlers */}
        <input
          type="text"
          className="form-control"
          id="editApplicantPosition"
          value={editedPosition}
          onChange={(e) => setEditedPosition(e.target.value)}
          required
        />
      </div>

      {/* Button to trigger the handleSaveChanges function */}
      <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
        Save changes
      </button>
    </form>
  );
};

export default EditApplicantForm;

