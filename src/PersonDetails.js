import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { MovieContext } from './bindings';
import { DetailsTemplate } from './DetailsTemplate'
import { Results } from './Results';

export const PersonDetails = () => {
  const {
    details = {},
    results = [],
    runSearch,
    getDetails,
  } = useContext(MovieContext)
  const { mediaType, id } = useParams()
  const {
    name,
    profile_path,
    biography,
  } = details
  useEffect(() => {
    getDetails(mediaType, id)
    if (mediaType && name) {
      runSearch(mediaType, name)
    }
  }, [mediaType, id, name])
  const extraDetails = results.find(({ id: resId }) => resId === Number(id))
  const { known_for = [] } = extraDetails || {}
  return (
    <DetailsTemplate
      testid="person-details"
      title={name}
      image={profile_path}
      waffle={biography}
      waffleTitle={`About ${name}`}
    >
      <Results results={known_for} />
    </DetailsTemplate>
  );
}
