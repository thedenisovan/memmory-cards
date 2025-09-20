import { useState, useEffect } from 'react';

export default function CountryFlag({ playGame, currScore }) {
  const countryCodes = ['LT', 'LV', 'ES', 'MX', 'RU', 'US', 'GR', 'GB', 'FR'];

  const [allFlags, setAllFlags] = useState([]);

  // Fetch flags with given country codes and adds it to allFlag state
  useEffect(() => {
    function fetchFlag() {
      // iterate trough country codes array and fetch each flag based on code
      setAllFlags([]);
      countryCodes.map(async (code) => {
        try {
          const response = await fetch(
            `https://api.api-ninjas.com/v1/countryflag?country=${code}`,
            {
              headers: {
                'X-Api-Key': 's6x+NPhLcnIrBf/3qO5U7w==ojs2CSSWu64nj56J',
              },
            }
          );
          if (!response.ok) throw new Error('Failed to fetch flag');
          const result = await response.json();
          // Flag object to act as template for current flag
          const newFlag = {
            url: result.rectangle_image_url,
            country: result.country,
          };
          setAllFlags((prev) => [...prev, newFlag]);
        } catch (error) {
          console.log(error);
        }
      });
    }

    return () => fetchFlag();
  }, [currScore]);

  return (
    <div>
      {/* If flag state is empty display loading */}
      {allFlags.length ? (
        <ul>
          {allFlags.map((flag) => (
            <li
              key={flag.country}
              onClick={() => {
                playGame(flag.country, countryCodes);
              }}
            >
              <img
                className='mx-4 mt-[4rem] border-1'
                src={flag.url}
                alt={`${flag.country} flag`}
              />
              <p className='text-center text-2xl font-bold'>{flag.country}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
