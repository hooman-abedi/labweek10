import React, { useState } from "react";
import "./App.css";

const PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
];

const EMPTY_FORM = {
  email: "",
  fullName: "",
  address: "",
  address2: "",
  city: "",
  province: "",
  postalCode: "",
  agree: false,
};

function App() {
  // Part I: form state (controlled inputs)
  const [formData, setFormData] = useState(EMPTY_FORM);
  // Part II: data shown below the form after Submit
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h1>Data Entry Form</h1>

        <div className="row">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="fullName">Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="1234 Main St"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="address2">Address 2</label>
          <input
            type="text"
            id="address2"
            name="address2"
            placeholder="Apartment, studio, or floor"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="province">Province</label>
            <select
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              {PROVINCES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="check">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <label htmlFor="agree">Agree Terms &amp; Condition?</label>
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>

      {/* Part II: show the entered information after Submit */}
      {submittedData && (
        <table className="result">
          <tbody>
            <tr>
              <th>Email:</th>
              <td>{submittedData.email}</td>
            </tr>
            <tr>
              <th>Full Name:</th>
              <td>{submittedData.fullName}</td>
            </tr>
            <tr>
              <th>Address:</th>
              <td>
                {submittedData.address}
                {submittedData.address2 && `, ${submittedData.address2}`}
              </td>
            </tr>
            <tr>
              <th>City:</th>
              <td>{submittedData.city}</td>
            </tr>
            <tr>
              <th>Province:</th>
              <td>{submittedData.province}</td>
            </tr>
            <tr>
              <th>Postal Code:</th>
              <td>{submittedData.postalCode}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;