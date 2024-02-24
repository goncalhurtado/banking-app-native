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
