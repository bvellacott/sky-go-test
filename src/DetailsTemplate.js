
import './DetailsTemplate.css'
import React, { Fragment } from 'react';

export const DetailsTemplate = ({
  children,
  title,
  type,
  waffle,
  image,
  contentTitle,
}) => (
  <article className="details-template">
    {title && (
      <>
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
        <h3 className="details-template__content-heading">{contentTitle}</h3>
        <div className="details-template__content">
          {children}
        </div>
      </>
    )}
  </article>
)
