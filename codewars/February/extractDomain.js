// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// 26 February 2024

function domainName(url) {
  const domain = url.match(/(?:http[s]?:\/\/)?(?:www\.)?([^\/]+)/);

  return domain ? domain[1] : "";
}

console.log(domainName("http://github.com/carbonfive/raygun"));
