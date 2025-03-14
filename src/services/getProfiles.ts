
export const getProfiles = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=20");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const profiles = await response.json();
    return profiles.results
  } catch (e) {
    console.error(e + 'Algo esta mal capo');
  }
};
