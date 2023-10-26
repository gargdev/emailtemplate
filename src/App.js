import React from "react";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import TemplateGrid from "./components/TemplateGrid";
import { categories } from "./components/data";
import "./App.css";

function App() {
  return (
    <>
      <div className="background">
        
      </div>
      <div className="container">
      <div className="header-section">
        <h5>Marketplace</h5>
        <h1 className="primary-heading mb-2">Email Templates</h1>
        <h1 className="secondary-heading mb-2">
          by the community, for the community.
        </h1>
        <p>
          100s of free templates to help you craft the perfect marketing
          journey.
        </p>
      </div>
        <div className="hero-section">
          <div className="hero-left">{<Categories />}</div>
          <div className="hero-right">
            <div className="container srch-filter-section">
            <SearchBar />
            <div className="mb-4 filter">
              <strong>Sort by: </strong>
              <select className="ml-2 option">
                <option>Recent</option>
                <option>Popular</option>
              </select>
            </div>
            </div>
            {categories.map((category) => (
              <TemplateGrid key={category.name} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
