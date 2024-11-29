import React from 'react';

const AppHeader = ({ query, handleChange, handleSearch }) => {
    return (
        <header>
            <img className="logo" src="./public/logo.png" alt="Logo" />

            <div className="m-3 d-flex">
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Cerca..."
                />
                <button className="btn btn-secondary" onClick={handleSearch}>
                    Cerca
                </button>
            </div>
        </header>
    );
};

export default AppHeader;
