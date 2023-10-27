import React, { useState, useEffect } from "react";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import TemplateGrid from "./components/TemplateGrid";
import { categories as allCategories } from "./components/data";
import LoadingScreen from './components/loadingScreen';
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true)


  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((cat) => cat !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const filteredCategories = allCategories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTemplates = filteredCategories.filter((category) => {
    if (selectedCategories.length === 0) {
      return true;
    }
    return selectedCategories.includes(category.name);
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
          {loading && <LoadingScreen />}
      <div className="background"></div>
      <div className="container">
        <div className="header-section">
          <h5>Marketplace</h5>
          <h1 className="primary-heading mb-2">Email Templates</h1>
          <h1 className="secondary-heading mb-2">
            by the community, for the community.
          </h1>
          <p>100s of free templates to help you craft the perfect marketing journey.</p>
        </div>
        <div className="hero-section">
          <div className="hero-left">
            <Categories onCategoryChange={handleCategoryChange} />
          </div>
          <div className="hero-right">
            <div className="container srch-filter-section">
              <SearchBar onSearch={handleSearch} />
              <div className="mb-4 filter">
                <strong>Sort by: </strong>
                <select className="ml-2 option">
                  <option>Recent</option>
                  <option>Popular</option>
                </select>
              </div>
            </div>
            {filteredTemplates.map((category) => (
              <TemplateGrid key={category.name} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
