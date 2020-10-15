import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const initialFormValues = {
    //id: 999,
    title: "",
    director: "",
    metascore: 0,
    actor1: "",
    actor2: "",
    actor3: "",
    //stars: ["Actor 1", "Actor 2", "Actor 3"],
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form className="form" onSubmit={addMovie(formValues)}>
        <h2>Add New Film!</h2>
        <label>
          {" "}
          title: <span></span>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={formValues.title}
            placeholder="movie title"
          />
        </label>
        <br></br>
        <label>
          {" "}
          director: <span></span>
          <input
            type="text"
            name="director"
            onChange={handleChange}
            value={formValues.director}
            placeholder="movie director"
          />
        </label>
        <br></br>
        <label>
          {" "}
          actor1: <span></span>
          <input
            type="text"
            name="actor1"
            onChange={handleChange}
            value={formValues.actor1}
            placeholder="movie actor1"
          />
        </label>
        <br></br>
        <label>
          {" "}
          actor2: <span></span>
          <input
            type="text"
            name="actor2"
            onChange={handleChange}
            value={formValues.actor2}
            placeholder="movie actor2"
          />
        </label>
        <br></br>
        <label>
          {" "}
          actor3: <span></span>
          <input
            type="text"
            name="actor3"
            onChange={handleChange}
            value={formValues.actor3}
            placeholder="movie actor3"
          />
        </label>
        <br></br>
        <button>Add Movie!</button>
      </form>
    </div>
  );
};

export default AddMovie;
