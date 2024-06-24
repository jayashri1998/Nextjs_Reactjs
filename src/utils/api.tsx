'use client'

export async function fetchSectorData() {
    try {
      const response = await fetch('https://api-demo.eeko.ai/sectors'); 
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json(); 
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Failed to fetch sector data');
    }
  }
  