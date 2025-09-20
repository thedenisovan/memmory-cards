import { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {
  const [flagUrl, setFlagUrl] = useState(
    'https://api.api-ninjas.com/v1/countryflag?country=US'
  );

  // Fetch flag with given country code and set it inside current flag url state
  useEffect(() => {
    async function fetchFlag() {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/countryflag?country=US',
          {
            headers: {
              'X-Api-Key': 's6x+NPhLcnIrBf/3qO5U7w==ojs2CSSWu64nj56J',
            },
          }
        );
        if (!response.ok) throw new Error('Failed to fetch flag');
        const result = await response.json();
        setFlagUrl(result.rectangle_image_url);
      } catch (error) {
        console.log(error);
      }
    }

    fetchFlag();
  }, [flagUrl]);

  return (
    <div>
      <Header />
      <img className='p-10' src={flagUrl} />
    </div>
  );
}

export default App;
