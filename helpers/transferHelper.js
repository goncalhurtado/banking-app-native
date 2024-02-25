import { axiosInstance } from "../config/axiosInstance";

export const checkDestination = async (text, setError, setLoading) => {
  try {
    setLoading(true);
    const response = await axiosInstance.get(`/checkDestination/${text}`);
    setLoading(false);
    const { destinationUser } = response.data;
    return destinationUser;
  } catch (error) {
    console.log(error.response.data.message || error.message);
    setLoading(false);
    setError({
      boolean: true,
      message: error.response.data.message || error.message,
    });
    return false;
  }
};

export const makeTransaction = async (transferData, setError, setLoading) => {
  const data = {
    origin: transferData.origin,
    destination: transferData.destination,
    amount: transferData.amount,
    notes: transferData.notes,
  };

  try {
    setLoading(true);
    const response = await axiosInstance.post("/transaction", data);
    setLoading(false);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message || error.message);
    setLoading(false);
    setError({
      boolean: true,
      message: error.response.data.message || error.message,
    });
    return false;
  }
};
