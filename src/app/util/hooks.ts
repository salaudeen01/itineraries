import { useQuery } from '@tanstack/react-query';
import { fetchHotels, searchAttraction, searchDestination, searchFlight } from "./apis";
import { Filters } from '@/type';

export async function fetchCombinedSearch(query: string) {
    const [destinations, flights, hotels] = await Promise.all([
      searchAttraction(query),
        searchFlight(query),
        searchDestination(query),
    ]);
    return { destinations, flights, hotels };
  }


export const useCombinedSearch = (query: string) => {
  return useQuery({
    queryKey: ['combinedSearch', query],
    queryFn: () => fetchCombinedSearch(query),
    enabled: false, 
  });
};

export const useFilter = (query: Filters, enabled: boolean) => {
  return useQuery({
    queryKey: ['hotels', query],
    queryFn: () => fetchHotels(query),
    enabled, // only run when user submits
  });
};