import cheerio from 'cheerio';

export function getImageLinksForPosts(wpResponse) {
  var imageLinksForPosts = wpResponse.data.map((wpPostData, i) => {
    var postImageLinks = [];
    const $ = cheerio.load(wpPostData.content.rendered);
    
    var imageTags = $('.gallery-item img');
    
    if (imageTags.length > 0) {
      imageTags.map((i, image) => {
        postImageLinks.push(image.attribs.src);
      });
    } 
    
    return postImageLinks;
  });
  
  return imageLinksForPosts;
}