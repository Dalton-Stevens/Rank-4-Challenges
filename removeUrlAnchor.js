const removeUrlAnchor = (url) => {
  return url.indexOf("#") === -1 ? url : url.slice(0, url.indexOf("#"));
};

console.log(removeUrlAnchor("www.codewars.com#about"));
console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about"));
console.log(removeUrlAnchor("www.codewars.com/katas/"));
