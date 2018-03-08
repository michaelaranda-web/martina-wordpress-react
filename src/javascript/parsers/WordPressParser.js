import cheerio from 'cheerio';

export function getImageLinksForPosts(wpResponse) {
  var imageLinksForPosts = wpResponse.data.map((wpPostData, i) => {
    var postImageLinks = [];
    const $ = cheerio.load(wpPostData.content.rendered);
    
    var imageTags = $('.gallery-item img');
    
    if (imageTags.length > 0) {
      imageTags.map((i, image) => {
        postImageLinks.push($(image).attr('src'));
      });
    } 
    
    return postImageLinks;
  });
  
  return imageLinksForPosts;
}

export function getAnimationInfoForPosts(wpResponse) {
  var animationInfoForPosts = wpResponse.data.map((wpPostData, i) => {
    var postInfoObjects = [];
    const $ = cheerio.load(wpPostData.content.rendered);
    
    var featuredMediaLinks = $('iframe').map(function(i, iframe) { 
      return $(iframe).attr('src');
    })
    
    featuredMediaLinks = convertNodeListToArray(featuredMediaLinks);
    
    var frameLinks = $('img').map(function(i, image) { 
      return $(image).attr('src');
    })
    
    frameLinks = convertNodeListToArray(frameLinks);
    
    var textContent = $('p').text().trim();
    var keyValuePairs = parseKeyValuePairs(textContent);
    
    return {
      title: wpPostData.title.rendered,
      featuredMediaLinks: featuredMediaLinks,
      details: keyValuePairs,
      frameLinks: frameLinks
    };
  });
  
  return animationInfoForPosts;
}

function parseKeyValuePairs(content) {
  var keyValueRegex = /([0-9A-Za-z_]*):(.*?)(?:$|\n)/g;
  var keyValuePairs = {};
  var match;
  
  do {
    match = keyValueRegex.exec(content);
    if (match) {
      keyValuePairs[match[1].trim()] = match[2].trim();
    }
  } while (match);
  
  return keyValuePairs;
}

function convertNodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
}