import React from 'react'


function Card({data}) {
  return (
    <div className="card">
      <img src={data?.image} alt={data?.title} className="card-image" />

      <div className="card-content">
        <h2 className="card-title">{data?.title}</h2>
        <p className="card-description">{data?.description}</p>

        <div className="card-footer">
          <span className="card-price">${data?.price}</span>
          <span className="card-rating">⭐ {data?.rating?.rate}</span>
        </div>

        <button className="card-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;

