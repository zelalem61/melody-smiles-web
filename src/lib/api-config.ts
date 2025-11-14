// API configuration for different environments
const getApiUrl = () => {
  // Use relative path for both dev and production (same domain)
  // Vercel will handle the routing automatically
  return "/api";
};

export const API_URL = getApiUrl();

