import React, { useState, useEffect } from 'react';
import ApplicantList from './components/ApplicantList';
import ApplicantForm from './components/ApplicantForm';
import EditApplicantForm from './components/EditApplicantForm';

//reusing my API from week 12 assignment 
const apiUrl = 'https://658de4137c48dce94739d123.mockapi.io/applicants';

function App() {
  // State to manage the list of applicants
  const [applicants, setApplicants] = useState([]);

  // State to manage the applicant being edited
  const [editingApplicant, setEditingApplicant] = useState(null);

  // UseEffect hook to load applicants when the component mounts
  useEffect(() => {
    loadApplicants();
  }, []);

  // Function to fetch and load applicants from the API
  const loadApplicants = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setApplicants(data))
      .catch((error) => console.error('Error loading applicants:', error));
  };

  // Function to add a new applicant to the API
  const addApplicant = (name, position) => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, position }),
    })
      .then(() => {
        loadApplicants(); // Reload the list of applicants after adding a new one
      })
      .catch((error) => console.error('Error adding applicant:', error));
  };

  // Function to delete an applicant from the API
  const deleteApplicant = (id) => {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        loadApplicants(); // Reload the list of applicants after deleting one
      })
      .catch((error) => console.error('Error deleting applicant:', error));
  };

  // Function to fetch an applicant for editing
  const editApplicant = (id) => {
    fetch(`${apiUrl}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEditingApplicant(data); // Set the applicant being edited in state
      })
      .catch((error) => console.error('Error fetching applicant for editing:', error));
  };

  // Function to save changes after editing an applicant
  /* This function encapsulates the logic for saving changes after editing an applicant. 
  It involves fetching the existing data, determining the updated data, 
  sending a PUT request to update the applicant, and handling 
  the UI updates after a successful update or error. */
  const saveEditedApplicant = (id, editedName, editedPosition) => {
    fetch(`${apiUrl}/${id}`)
      .then((response) => response.json())
      .then((existingApplicant) => {
        // Determine the updated data for the applicant
        const updatedApplicant = {
          name: editedName || existingApplicant.name,
          position: editedPosition || existingApplicant.position,
        };

        // Send a PUT request to update the applicant
        fetch(`${apiUrl}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedApplicant),
        })
          .then(() => {
            setEditingApplicant(null); // Reset the editing state to hide the edit form
            loadApplicants(); // Reload the list of applicants after editing
          })
          .catch((error) => console.error('Error updating applicant:', error));
      })
      .catch((error) => console.error('Error fetching existing applicant data:', error));
  };

  // JSX structure for rendering the main component
  return (
    <div className="App">
      <h1>CRUD App</h1>
      <ApplicantForm addApplicant={addApplicant} />
      {editingApplicant ? (
        <EditApplicantForm
          applicant={editingApplicant}
          saveEditedApplicant={saveEditedApplicant}
        />
      ) : (
        <ApplicantList
          applicants={applicants}
          deleteApplicant={deleteApplicant}
          editApplicant={editApplicant}
        />
      )}
    </div>
  );
}

export default App;
