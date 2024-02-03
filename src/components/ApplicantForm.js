import React, { useState } from 'react';

// Functional component for the form to add a new applicant
const ApplicantForm = ({ addApplicant }) => {
  // State variables to track the input values for name and position
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Call the addApplicant function passed as a prop with the current input values
    addApplicant(name, position);

    // Clear the input fields after adding an applicant
    setName('');
    setPosition('');
  };

  // JSX structure for rendering the form
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        {/* Input field for the applicant's name with value and onChange handlers */}
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Position:
        {/* Input field for the applicant's position with value and onChange handlers */}
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
      </label>
      {/* Submit button to add the applicant */}
      <button type="submit">Add Applicant</button>
    </form>
  );
};

export default ApplicantForm;
