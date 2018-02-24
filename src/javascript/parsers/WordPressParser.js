import { JSDOM } from 'jsdom';

export function getImageLinksForPosts(wpResponse) {
  var imageLinksForPosts = wpResponse.data.map((wpPostData) => {
    var postImageLinks = [];
    var wpPostDOM = new JSDOM(wpPostData.content.rendered);
    wpPostDOM.window.document.querySelectorAll('.gallery-item img').forEach((imageTag) => {
      postImageLinks.push(imageTag.src);
    });
    
    return postImageLinks.reverse();
  });
  
  return imageLinksForPosts;
}