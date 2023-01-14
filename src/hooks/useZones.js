import { useMutation } from "@tanstack/react-query";
import axios from "../lib/axios";

const createZone = async (data) => {
  const res = await axios.post("/zones", data);
  return res.data;
};

export const useCreateZone = (onSuccess, onError) => {
  return useMutation(createZone, {
    onSuccess,
    onError,
  });
};
