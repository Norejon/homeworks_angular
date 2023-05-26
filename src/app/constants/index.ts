import {environment} from "../../environments/environment";

let {API} = environment;

const posts= `${API}/posts`;
const comments=`${API}/comments`;

const urls={
  posts:{
    full:posts,
    byId:(id:number):string=>`${posts}/${id}`
  },
  comments:{
    full:comments,
    byId:(id:number):string=>`${comments}/${id}`
  }
}
export {
  urls
}

