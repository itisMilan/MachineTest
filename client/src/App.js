import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a FormData object to send the form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('password', password);
    formData.append('image', image);
    formData.append('address', address);
console.log(formData)
    // Send the form data to the backend
    fetch('/signup', {
      method: 'POST',
      body: formData,
    
    })
      .then((response) => {
        if (response.ok) {
          console.log('Form submitted successfully');
          // Reset the form fields
          setName('');
          setPassword('');
          setImage(null);
          setAddress('');
        } else {
          console.error('Error submitting form');
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div>
          <label>Address:</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
