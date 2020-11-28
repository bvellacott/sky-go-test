
import './DetailsTemplate.css'
import React from 'react';

export const DetailsTemplate = ({
  children,
  title,
  waffle,
  image,
  keyValTitle,
}) => (
  <article className="details-template">
    <div className="details-template__heading">
      <h1 className="details-template__title">{title}</h1>
      <img className="details-template__image" src={
        image 
          ? `//image.tmdb.org/t/p/original${image}`
          : '/im-an-actor.jpeg'}
      />
    </div>
    <p className="details-template__waffle">{waffle}</p>
    <h2 className="details-template__content-heading">{keyValTitle}</h2>
    <div className="details-template__content">
      {children}
    </div>
  </article>
)
