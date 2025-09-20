import { useState, useEffect } from 'react';

export default function CountryFlag({ countryCode }) {
  const [flag, setFlag] = useState(null);
  const [allFlags, setAllFlags] = useState([]);

  // Fetch flag with given country code and set it inside current flag url state
  useEffect(() => {
    async function fetchFlag() {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/countryflag?country=${countryCode}`,
          {
            headers: {
              'X-Api-Key': 's6x+NPhLcnIrBf/3qO5U7w==ojs2CSSWu64nj56J',
            },
          }
        );
        if (!response.ok) throw new Error('Failed to fetch flag');
        const result = await response.json();
        const newFlag = {
          url: result.rectangle_image_url,
          country: result.country,
        };
        setFlag(newFlag);
        setAllFlags((prev) => [...prev, newFlag]);
      } catch (error) {
        console.log(error);
      }
    }

    return () => fetchFlag();
  }, [countryCode]);

  return (
    <div>
      {flag ? (
        <ul>
          {allFlags.map((flag) => (
            <li key={flag.country}>
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
