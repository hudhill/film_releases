import React, {useState} from 'react';

const FilmForm = ({onFilmSubmit}) => {

  const [name, setName] = useState("");
  const [url, setURL] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleURLChange = (event) => {
    setURL(event.target.value);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const nameToSubmit = name.trim();
    const urlToSubmit = url.trim();
    if(!nameToSubmit || !urlToSubmit){
      return null
    }
    onFilmSubmit({
      name:nameToSubmit,
      url:urlToSubmit
    });
    setName("");
    setURL("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Movie name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={handleURLChange}
      />
      <input
        type="submit"
        value="Add Movie"
      />
    </form>
  )
}

export default FilmForm;