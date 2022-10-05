export const AnimeFind = async (anime) =>{
    try{
        let url = `https://api.jikan.moe/v4/anime?q=${anime}&sfw&limit=10&order_by=title,rating `;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }catch(error){}
}

export const AnimeTop = async () => {
    try{
        let url = `https://api.jikan.moe/v4/top/anime`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }catch(error){}
}


export const MangasApi = async (limit,page) => {
    try{
        let url = `https://api.jikan.moe/v4/manga?page=${page}&limit=${limit}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }catch(error){}
}


export const AnimeApi = async (limit,page) => {
    try{
        let url = `https://api.jikan.moe/v4/anime?page=${page}&limit=${limit}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }catch(error){}
}