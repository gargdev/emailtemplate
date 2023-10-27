import React, { useState } from "react";
import "../styles/categories.css";

function Categories({ onCategoryChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((cat) => cat !== category);
      } else {
        return [...prevCategories, category];
      }
    });
    onCategoryChange(category);
  };

  return (
    <div className="mb-4 categories-section">
      <p>Categories</p>
      <label className="mr-3">
        <input
          type="checkbox"
          className="mr-1"
          checked={selectedCategories.includes("Announcement")}
          onChange={() => handleCategoryChange("Announcement")}
        />
        Announcement
      </label>
      <label className="mr-3">
        <input
          type="checkbox"
          className="mr-1"
          checked={selectedCategories.includes("Educate & Inform")}
          onChange={() => handleCategoryChange("Educate & Inform")}
        />
        Educate & Inform
      </label>
      <label className="mr-3">
        <input
          type="checkbox"
          className="mr-1"
          checked={selectedCategories.includes("Invitation")}
          onChange={() => handleCategoryChange("Invitation")}
        />
        Invitation
      </label>
      <label>
        <input
          type="checkbox"
          className="mr-1"
          checked={selectedCategories.includes("Occasions")}
          onChange={() => handleCategoryChange("Occasions")}
        />
        Occasions {/* Corrected category name here */}
      </label>
    </div>
  );
}

export default Categories;
