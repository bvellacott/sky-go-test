
import React from 'react';
import { useParams } from 'react-router-dom'
import { MovieDetails } from './MovieDetails'
import { TvDetails } from './TvDetails'
import { PersonDetails } from './PersonDetails'

export const Details = () => {
  const { mediaType } = useParams()
  if (mediaType === 'movie') {
    return <MovieDetails/>
  } else if (mediaType === 'tv') {
    return <TvDetails/>
  } else if (mediaType === 'person') {
    return <PersonDetails/>
  }
  return null
}
