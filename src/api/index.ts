import axios, { AxiosResponse } from "axios";

export function fetchNewsByCategory(category: string): Promise<AxiosResponse> {
  return axios.get(`https://hacker-news.firebaseio.com/v0/${category}.json?print=pretty`);
}

export function fetchNewsDetailById(id: number): Promise<AxiosResponse> {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
}
