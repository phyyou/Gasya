import { fetcher } from "@lib/fetcher";
import { GasAPI } from "@lib/types/gas";
import useSWR from "swr";

function useGas() {
  const { data, error } = useSWR<GasAPI>("/api/gas", fetcher, {
    refreshInterval: 10000,
    onErrorRetry: (_error, key, config, revalidate, { retryCount }) => {
      setTimeout(() => revalidate({ retryCount }), 7000);
    },
  });

  return {
    gas: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useGas;
