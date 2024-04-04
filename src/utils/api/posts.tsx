import axios from 'axios';
import { Tag } from "../types/Tag";

type FetchedTags = {
    items: Tag[];
}

export const getTags = (): Promise<FetchedTags> => {
    return axios.get('https://api.stackexchange.com/2.3/tags?site=stackoverflow')
    .then(res => res.data);
}