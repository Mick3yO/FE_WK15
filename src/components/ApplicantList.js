import React from 'react';

// Functional component for rendering a list of applicants
const ApplicantList = ({ applicants, deleteApplicant, editApplicant }) => {
  return (
    <ul>
      {/* Map through the list of applicants and render each one */}
      {applicants.map((applicant) => (
        <li key={applicant.id}>
          {/* Display the applicant's name and position */}
          {`${applicant.name} - ${applicant.position}`}

          {/* Button to trigger the editApplicant function */}
          <button onClick={() => editApplicant(applicant.id)}>Edit</button>

          {/* Button to trigger the deleteApplicant function */}
          <button onClick={() => deleteApplicant(applicant.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ApplicantList;
