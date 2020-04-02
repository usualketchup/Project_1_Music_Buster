// AudioDB Ajax Call
function audioDB() {
    const artistName = "";
    const queryURL = `https://www.theaudiodb.com/api/v1/json/5d656564694f534d656564/search.php?s=${artistName}`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then (function(response) {
        console.log(response);
    })
}

function lyricsOVH() {
    const lyricArtist = ""; 
    const lyricSong = "";
    const lyricURL = `https://api.lyrics.ovh/v1/${lyricArtist}/${lyricSong}`;

    $.ajax({
        url: lyricURL,
        method: "GET"
    }).then (function(response) {
        console.log(response);
    })
}

audioDB();
lyricsOVH();