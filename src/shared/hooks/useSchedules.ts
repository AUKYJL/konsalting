import { useQuery } from "react-query";

import { getSchedules } from "@/api/services/scheduleApi";

export const useSchedules = () => {
  const { isLoading, data } = useQuery("schedule", getSchedules, {
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
  const popularSchedules = data?.popularSchedules ?? [];
  const notPopularSchedules = data?.notPopularSchedules ?? [];
  const discountSchedules = data?.discountSchedules ?? [];
  return {
    isLoading,
    popularSchedules,
    notPopularSchedules,
    discountSchedules,
  };
};
