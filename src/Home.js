
import './Home.css'
import React, { useContext } from 'react';
import { MovieContext } from './bindings';
import { Search } from './Search'
import { Result } from './Result'

export const getImageForResult = ({
  profile_path,
  backdrop_path,
  poster_path,
  known_for,
}) => (
  profile_path // person
  || backdrop_path // movie
  || poster_path // movie
  || (known_for && (known_for.find((kf) => kf.backdrop_path) || {}).backdrop_path) // person
)

export const Home = () => {
  const { results = [] } = useContext(MovieContext);
  return (
    <>
      <header>
        <h1>Sky movie search test</h1>
      </header>
      <main>
        <Search/>
        <ul className="home__results">
          {results.map((result) => (
            <li className="home__result" key={result.url}>
              <Result
                name={result.name}
                artistName={result.artistName}
                profile_path={getImageForResult(result)}
                url={result.url}
                copyright={result.copyright}
              />
            </li>
          ))}
        </ul>
      </main>
      <footer>
        © 2020 SolidKode Ltd. All rights reserved.
      </footer>
    </>
  );
}
