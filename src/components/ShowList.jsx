import React from 'react';
import ShowCard from './ShowCard';

const ShowList = ({ shows, getRatingStars }) => {
    return (
        <div className="container d-flex justify-content-center">
            <ul className="d-flex flex-wrap">
                {shows.filter((show) => show.media_type !== "person").map((show) => (
                    <ShowCard key={show.id} show={show} getRatingStars={getRatingStars} />
                ))}
            </ul>
        </div>
    );
};

export default ShowList;
