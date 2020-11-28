
import './DetailsTemplate.css'
import React from 'react';

export const DetailsTemplate = ({
  children,
  title,
  type,
  waffle,
  image,
  keyValTitle,
}) => (
  <article className="details-template">
    <div className="details-template__heading">
      <h1 className="details-template__title">{title}</h1>
      <h2 className="details-template__type">{type}</h2>
      <img 
        className="details-template__image" 
        src={
          image 
            ? `//image.tmdb.org/t/p/original${image}`
            : '/im-an-actor.jpeg'
        }
      />
    </div>
    <p className="details-template__waffle">{waffle}</p>
    <h3 className="details-template__content-heading">{keyValTitle}</h3>
    <div className="details-template__content">
      {children}
    </div>
  </article>
)
