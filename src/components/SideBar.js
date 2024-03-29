import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/fa';



function SideBar({ handleSubmit, handleChange, randomize }) {
  return (
    <div className="sideBar">
      <Link to={"/gallery"} id="titleWrap">
        <h1 onClick={randomize} id="title">
          Virtual <br />
          Art-Vault
        </h1>
      </Link>
      <form className="searchForm" onSubmit={handleSubmit}>
        <div className = "searchContainer">
        <input
          placeholder="Keyword ex: Picasso, Modern"
          type="text"
          onChange={handleChange}
          required
        />
        </div>

        <button className="search" type="submit">SEARCH</button>
        </form>
        <div className="buttons-container">
          <button className="random" onClick={randomize}>RANDOM</button>
          <button className="saved">SAVED</button>
          <p className="source">
            Data and images are sourced from the Art Institute of Chicago API.
          </p>
        </div>

        <a href="https://www.nealgarcia.com" target="_blank" className = "author">&copy; Neal Garcia, 2023 </a>
    </div>
  );
}

export default SideBar;
