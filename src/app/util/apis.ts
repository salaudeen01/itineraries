import { Filters } from "@/type";

const baseUrl= process.env.NEXT_PUBLIC_BASE_URL

export async function searchDestination(query: string) {
    const res = await fetch(
      `${baseUrl}/hotels/searchDestination?query=${query}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
        },
      }
    );
  
    if (!res.ok) throw new Error('Failed to fetch destination');
    return res.json();
  }


export async function fetchHotels(filters: Filters) {
  const defaultParams = {
    search_type: 'CITY',
    units: 'metric',
    temperature_unit: 'c',
    languagecode: 'en-us',
    currency_code: 'AED',
    location: 'US',
  };

  const params = new URLSearchParams({
    ...defaultParams,
    ...filters,
  });

  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?${params.toString()}`;

  const res = await fetch(url, {
    headers: {
      'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
    },
  });

  if (!res.ok) throw new Error('Failed to fetch hotels');
  return res.json();
}


export async function searchFlight(query: string) {
    const res = await fetch(
      `${baseUrl}/flights/searchDestination?query=${query}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
        },
      }
    );
  
    if (!res.ok) throw new Error('Failed to fetch destination');
    return res.json();
  }

  export async function searchAttraction(query: string) {
      const res = await fetch(
        `${baseUrl}/attraction/searchLocation?query=${query}&languagecode=en-us`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
          },
        }
      );
    
      if (!res.ok) throw new Error('Failed to fetch destination');
      return res.json();
    }