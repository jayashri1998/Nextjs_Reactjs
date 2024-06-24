'use client'
import {useState, useEffect} from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving";

const ImagesScrollingCard = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api-demo.eeko.ai/sectors');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setItems(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Failed to fetch data');
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
  return (
    <div className='text-3xl text-center mt-4 mb-4'>
      <h2>Sector Gallery
      </h2>
      <div>
        <div className=''>
        <InfiniteMovingCards
        items={items}
        direction="right"
        speed="slow"
      />
        </div>
      </div>
    </div>
  )
}

export default ImagesScrollingCard
