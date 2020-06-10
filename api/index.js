const url = "https://api.unsplash.com/search/photos";

export const photosByTag = async tag => {
  try {
    debugger
    const response = await fetch(`${url}?query=${tag}`, {
      headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`
      }
    });
    const data = await response.json();
    
    return data.results.map(({id, urls, alt_description, user}) => ({
      id,
      src: urls.thumb,
      alt: alt_description,
      photographer: user.name,
      userName: user.username
    }));
  } catch {
    console.error("Unable to retrieve photos");
    return [];
  }
};
