import React, { useState } from 'react';

const FormEdit = (props) => {
  const { handleFormEdit } = props;

  const [patientName, setPatientName] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleFormEdit([
        ['patient_name', patientName],
      ]);
    }}
    >
      Patient Name:
      <input
        type="text"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        placeholder="first last"
      />
      <br />
      <input type="submit" value="Review form" />
    </form>
  );
};

export default FormEdit;
