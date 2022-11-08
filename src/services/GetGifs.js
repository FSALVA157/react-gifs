
export const getGifs = async (category) => {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=mhVXB17Q2Z09QhipR3Z2iHZwQns8Vi5v&q=${category}&limit=10`;
    const result = await fetch(url);
    const {data} = await result.json();
    const gifs = data.map((obj) => ({
      title: obj.title,
      url: obj.images.downsized_medium.url,
      id: obj.id
    }));
    return gifs;
  }