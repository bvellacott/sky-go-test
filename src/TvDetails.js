
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { MovieContext } from './bindings';
import { DetailsTemplate } from './DetailsTemplate'
import { Results } from './Results';

export const TvDetails = () => {
  const {
    details = {},
    similar = [],
    getDetails,
    getSimilar,
  } = useContext(MovieContext)
  const { mediaType, id } = useParams()
  useEffect(() => {
    getDetails(mediaType, id)
    getSimilar(mediaType, id)
  }, [mediaType, id])
  const {
    name,
    backdrop_path,
    poster_path,
    overview,
  } = details
  return (
    <DetailsTemplate
      testid="tv-details"
      title={name}
      type="TV Show"
      image={backdrop_path || poster_path}
      waffle={overview}
      waffleTitle={`About ${name}`}
      contentTitle={`Similar to '${name}'`}
    >
      <Results results={similar} mediaType={mediaType} />
    </DetailsTemplate>
  );
}
