import React from "react";

function Form({ data, setData }) {

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handlePhotoChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      const reader = new FileReader();

      reader.onloadend = () => {
        setData({
          ...data,
          photo: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form">

      <h2>Enter Details</h2>

      {/* Profile Photo */}
      <label>Profile Photo</label>

      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
      />

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={data.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={data.phone}
        onChange={handleChange}
      />

      <textarea
        name="skills"
        placeholder="Skills"
        value={data.skills}
        onChange={handleChange}
      />

      <textarea
        name="education"
        placeholder="Education"
        value={data.education}
        onChange={handleChange}
      />

      <textarea
        name="experience"
        placeholder="Work Experience"
        value={data.experience}
        onChange={handleChange}
      />

    </div>
  );
}

export default Form;
