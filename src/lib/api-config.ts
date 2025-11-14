// API configuration for different environments
const getApiUrl = () => {
  // In production (deployed), use the deployed URL
  if (import.meta.env.PROD) {
    return "https://melody-smiles-web.vercel.app/api";
  }
  
  // In development, use localhost
  return "/api";
};

export const API_URL = getApiUrl();

