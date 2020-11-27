
import './DetailsTemplate.css'
import React from 'react';

export const DetailsTemplate = ({
  title,
  waffle,
  image,
  keyValTitle,
  keyValList = [],
}) => (
  <article>
    <div className="details-template__heading">
      {image && <img className="details-template__image" src={`//image.tmdb.org/t/p/original${image}`} />}
      <h1>{title}</h1>
    </div>
    <p className="details-template__waffle">{waffle}</p>
    <h2 className="details-template__key-val-heading">{keyValTitle}</h2>
    <ul className="details-template__key-val">
      {keyValList && (
        keyValList.map(([key, val]) => (
          <li key={key} className="details-template__key-val-item">
            <span className="details-template__key">{key}</span>
            <span className="details-template__val">{val}</span>
          </li>
        ))
      )}
    </ul>
  </article>
)
