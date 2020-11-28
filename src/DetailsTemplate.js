
import './DetailsTemplate.css'
import React, { Fragment } from 'react';

export const DetailsTemplate = ({
  testid,
  children,
  title,
  type,
  waffle,
  image,
  contentTitle,
  waffleTitle,
}) => (
  <article data-testid={testid} className="details-template">
    {title && (
      <>
        <h2 className="details-template__type">{type}</h2>
        <div className="details-template__heading">
          <h1 className="details-template__title">{title}</h1>
          <img
            data-testid={`${testid}-image`}
            className="details-template__image" 
            src={
              image 
                ? `//image.tmdb.org/t/p/original${image}`
                : '/im-an-actor.jpeg'
            }
          />
        </div>
        <h3 className="details-template__content-heading">{contentTitle}</h3>
        <div className="details-template__content">
          {children}
        </div>
        <h3 className="details-template__content-heading">{waffleTitle}</h3>
        <p className="details-template__waffle">{waffle}</p>
      </>
    )}
  </article>
)
