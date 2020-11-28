
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { MovieContext } from './bindings';
import { DetailsTemplate } from './DetailsTemplate'

export const TvDetails = () => {
  const { details = {} } = useContext(MovieContext)
  const { mediaType, id } = useParams()
  const { getDetails } = useContext(MovieContext);
  const {
    name,
    backdrop_path,
    poster_path,
    overview,
  } = details
  useEffect(() => { getDetails(mediaType, id) }, [mediaType, id])
  return (
    <DetailsTemplate
      title={name}
      type="TV Show"
      image={backdrop_path || poster_path}
      waffle={overview}
    />
  );
}
