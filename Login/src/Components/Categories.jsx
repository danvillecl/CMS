import React, { useState } from 'react';

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  
  const categories = [
    { id: 1, name: 'Agile' },
    { id: 2, name: 'Scrum' },
    { id: 3, name: 'Category-3' },
    { id: 4, name: 'Category-4' },
    { id: 5, name: 'Category-5'},
    // Add more categories as needed
  ];

  const handleSearch = () => 
  {
    if (!searchTerm.trim()) {
      // Display a pop-up message when the search term is empty or only contains whitespace
      alert('Item not valid');
      return;
    }

    // Check if the entered text matches any of the category names
    if (!categories.some(category => category.name.toLowerCase() === searchTerm.toLowerCase())) {
      // Display a pop-up message when the category is not found
      alert('Category is not found');
      return;
    }
    
    const filtered = categories.filter(category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-10 d-flex flex-wrap">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: "850px" }} 
            />
          </div>
          <div className="search-button">
            <button onClick={handleSearch} className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-15">
          <div className="d-flex flex-wrap">
            {filteredCategories.length === 0 ? (
              categories.map(category => (
                <div key={category.id} className="card courseDashboardCard m-2">
                  <a href="/CoursesCategory">
                    <img src={`https://source.unsplash.com/1800x1800/?course&${category.id}`} className="card-img-top" alt="#" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="/CoursesCategory" className="btn btn-primary btn-color">{category.name}</a>
                    </h5>
                  </div>
                </div>
              ))
            ) : (
              filteredCategories.map(category => (
                <div key={category.id} className="card courseDashboardCard m-2">
                  <a href="/CoursesCategory">
                    <img src={`https://source.unsplash.com/1800x1800/?course&${category.id}`} className="card-img-top" alt="#" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="/CoursesCategory" className="btn btn-primary btn-color">{category.name}</a>
                    </h5>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

