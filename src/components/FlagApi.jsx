import { useState, useEffect } from 'react';

export default function CountryFlag({ playGame, currScore }) {
  const countryCodes = [
    'LT',
    'LV',
    'ES',
    'MX',
    'RU',
    'US',
    'GR',
    'GB',
    'FR',
    'CZ',
  ];

  const [flagsIsSet, setFlagState] = useState(false);
  const [allFlags, setAllFlags] = useState([]);

  // Fetch flags with given country codes and adds it to allFlag state
  useEffect(() => {
    setFlagState(false);
    function fetchFlag() {
      // iterate trough country codes array and fetch each flag based on code
      setAllFlags([]);
      countryCodes.map(async (code) => {
        try {
          const response = await fetch(
            `https://api.api-ninjas.com/v1/countryflag?country=${code}`,
            {
              headers: {
                'X-Api-Key': '7kkUWrh067PfIrhU8q4IeQ==vUAqeS7YRVJ7Qs3W',
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
          setFlagState(true);
        } catch (error) {
          console.log(error);
        }
      });
    }

    return () => fetchFlag();
  }, [currScore]);

  return (
    <div>
      {/* If flag state is empty display United Nation flag */}
      {flagsIsSet ? (
        <ul className='max-w-[1100px] md:grid md:grid-cols-2 lg:grid-cols-3 m-auto'>
          {allFlags.map((flag) => (
            <li
              className='w-[300px] m-auto'
              key={flag.country}
              onClick={() => {
                playGame(flag.country, countryCodes);
              }}
            >
              <img
                className='mx-4 mt-[4rem] border-1'
                src={
                  flag
                    ? flag.url
                    : 'https://api-ninjas-data.s3.us-west-2.amazonaws.com/flags/4x3/l29EOW4J/un.svg'
                }
                alt={`${flag.country} flag`}
              />
              <p className='text-center text-2xl font-bold'>{flag.country}</p>
            </li>
          ))}
        </ul>
      ) : (
        <ul className='max-w-[1100px] md:grid md:grid-cols-2 lg:grid-cols-3 m-auto'>
          {countryCodes.map((flag) => (
            <li key={flag} className='w-[300px] m-auto'>
              <img
                className='mx-4 mt-[4rem] border-1'
                src='https://api-ninjas-data.s3.us-west-2.amazonaws.com/flags/4x3/l29EOW4J/un.svg'
                alt={`EU flag`}
              />
              <p className='text-center text-2xl font-bold'>{flag.country}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
