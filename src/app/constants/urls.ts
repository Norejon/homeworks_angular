import {environment} from "../../environments/environment.development";

let {API} = environment;

const posts = `${API}/posts`;

const urls= {
  posts:{
    posts,
    byId:(id: number): string => `${posts}/${id}`
  }
}

export {
  urls
}
