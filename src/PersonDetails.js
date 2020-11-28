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
    known_for_department,
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
      title={name}
      type={known_for_department && `Known for ${known_for_department}`}
      image={profile_path}
      waffle={biography}
      contentTitle={'Known for'}
    >
      <Results results={known_for} />
    </DetailsTemplate>
  );
}
