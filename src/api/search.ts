import axios from './'

namespace Search {
    export interface  SearchRequest {
        keyword: string;
        songName: string;
        artist: string;
        album: string;
    }

    export interface SearchResponse {
        results: Search.SearchResult
    }

    export interface SearchResult {
        name: string;
        artist: string;
        album: string;
        duration: number;
        url: string;
        resourceForbidden: boolean;
        source: string;
        fromMusicPlatform: boolean;
        score: number;
    }
}

export const search = (params: Search.SearchRequest) => {
    return axios.get<Search.SearchResponse>('/api/search/', params)
}
