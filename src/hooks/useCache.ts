import { useQueryClient } from "react-query";

const useCache = <T extends unknown>(key: string) => {
  const queryClient = useQueryClient();
  return {
    data: queryClient.getQueryData<T>(key),
  };
};

export default useCache;
