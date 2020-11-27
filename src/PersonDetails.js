
import './Home.css'
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { MovieContext } from './bindings';
import { DetailsTemplate } from './DetailsTemplate'

export const PersonDetails = () => {
  const { details = {} } = useContext(MovieContext)
  const { mediaType, id } = useParams()
  const { getDetails } = useContext(MovieContext);
  const {
    name,
    profile_path,
    biography,
    also_known_as,
  } = details
  useEffect(() => { getDetails(mediaType, id) }, [])
  return (
    <DetailsTemplate
      title={name}
      image={profile_path}
      waffle={biography}
      keyValTitle={'Also known as'}
      keyValList={(also_known_as || []).map(
        (alias) => [alias, '']
      )}
    />
  );
}
