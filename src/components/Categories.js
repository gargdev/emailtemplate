// import React from "react";
// import "../styles/categories.css";
// function Categories() {
//   return (
//     <div className="mb-4 categories-section">
//       <button className="btn btn-light mr-2">Announcement</button>
//       <button className="btn btn-light mr-2">Educate & Inform</button>
//       <button className="btn btn-light mr-2">Invitation</button>
//       <button className="btn btn-light">Occasions</button>
//     </div>
//   );
// }

// export default Categories;


import React from 'react';
import "../styles/categories.css";

function Categories() {
    return (
        <div className="mb-4 categories-section">
            <p>Categories</p>
            <label className="mr-3">
                <input type="checkbox" className="mr-1" />
                Announcement
            </label>
            <label className="mr-3">
                <input type="checkbox" className="mr-1" />
                Educate & Inform
            </label>
            <label className="mr-3">
                <input type="checkbox" className="mr-1" />
                Invitation
            </label>
            <label>
                <input type="checkbox" className="mr-1" />
                Occasions
            </label>
        </div>
    );
}

export default Categories;