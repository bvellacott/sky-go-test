
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContext } from '../bindings'
import { DetailsTemplate } from './DetailsTemplate'
import { Results } from './Results'

export const MovieDetails = () => {
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
    title,
    backdrop_path,
    poster_path,
    overview,
  } = details
  return (
    <DetailsTemplate
      testid="movie-details"
      title={title}
      type="Movie"
      image={backdrop_path || poster_path}
      waffle={overview}
      waffleTitle={`About ${title}`}
      contentTitle={`Similar to '${title}'`}
    >
      <Results results={similar} mediaType={mediaType} />
    </DetailsTemplate>
  )
}
