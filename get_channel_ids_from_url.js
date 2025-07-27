// You want to get all the channel IDs that you are subscribed to on YouTube. You do:
function getChannelIdFromURL(p_url) {
  var rx = /(@.*)/g;
  var arr = rx.exec(p_url);
  return arr[1]; 
}

elems = document.getElementsByClassName("channel-link yt-simple-endpoint style-scope ytd-channel-renderer")
elem_arr = {}
elem_arr[elems[0].href] = true;
for (let x = 1; x < elems.length; x++) { elem_arr[elems[x].href] = true }
elem_arr = Object.keys(elem_arr)
elem_str = elem_arr[0];
for (let x = 1; x < elems.length; x++) { elems_str = elems_str + ", " + getChannelIdFromURL(elem_arr[x]) }

console.log(elem_str);
