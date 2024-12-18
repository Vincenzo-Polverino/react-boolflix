import React from 'react';

const AppHeader = ({ query, handleChange, handleSearch }) => {
    return (
        <header>
            <a href="/" onClick={(e) => { e.preventDefault(); window.location.reload(); }}>
                <img className="logo" src="./public/logo.png" alt="Logo" />
            </a>

            <div className="m-3 d-flex">
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Cerca..."
                />
                <button className="btn btn-danger" onClick={handleSearch}>
                    Cerca
                </button>
            </div>
        </header>
    );
};

export default AppHeader;
