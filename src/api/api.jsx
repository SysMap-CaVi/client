const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/geocode/json?";
const params = {
  address: "",
  key: process.env.REACT_APP_API_KEY,
};

export async function fetchPlaces(searchText) {
  const searchParams = {
    ...params,
    address: searchText,
  };

  const queryString = new URLSearchParams(searchParams).toString();

  try {
    const response = await fetch(`${GOOGLE_API_URL}${queryString}`);
    const data = await response.json();
    return data.results;
  } catch {
    (error) => console.error("Error fetching data:", error);
    return [];
  }
}
