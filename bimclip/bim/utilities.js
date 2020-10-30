// Function to separate path name and extension from full path string
function pathToFile(str)
{
    var nOffset = Math.max(0, Math.max(str.lastIndexOf('\\'), str.lastIndexOf('/')));
    var eOffset = str.lastIndexOf('.');
    if(eOffset < 0 && eOffset < nOffset)
    {
        eOffset = str.length;
    }
    return {isDirectory: eOffset === str.length, // Optionally: && nOffset+1 === str.length if trailing slash means dir, and otherwise always file
            path: str.substring(0, nOffset),
            name: str.substring(nOffset > 0 ? nOffset + 1 : nOffset, eOffset),
            extension: str.substring(eOffset > 0 ? eOffset + 1 : eOffset, str.length)};
}

// Function to extract filename parameter from url
function getQueryStringParameterByName(name, url) 
{
   if (!url) {
    url = window.location.href;

   }
   name = name.replace(/[\[\]]/g, "\\$&");

   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
      results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return '';

   return decodeURIComponent(results[2].replace(/\+/g, " "));
}
