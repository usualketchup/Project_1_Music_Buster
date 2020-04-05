$(document).ready(function() {
    $("#submit-button").on("click", function() {

        function artistAudioDB() {
            const artistName = $("#search-artist").val().trim();
            const queryURL = `https://www.theaudiodb.com/api/v1/json/5d656564694f534d656564/search.php?s=${artistName}`;
    
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then (function(response) {
                console.log(response);
               
                function albumAudioDB() {
                    const albumName = "";
                    const queryURL = `https://www.theaudiodb.com/api/v1/json/5d656564694f534d656564/searchalbum.php?s=${artistName}&a=${albumName}`
    
                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).then (function(response) {
                        console.log(response);
                    })
                }
    
                function trackAudioDB() {
                    const trackName = "";
                    const queryURL = `https://www.theaudiodb.com/api/v1/json/5d656564694f534d656564/searchtrack.php?s=${artistName}&t=${trackName}`;
                
                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).then (function(response) {
                        console.log(response);
                    })
                }
    
                function discographyAudioDB() {
                    const queryURL = `https://www.theaudiodb.com/api/v1/json/5d656564694f534d656564/discography.php?s=${artistName}`;
    
                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).then (function(response) {
                        console.log(response);
                    })
                }
    
                function musicVideos() {
                    // const artistID = $("response.artists")
    
                    const queryURL = `https://www.theaudiodb.com/api/v1/json/5d656564694f534d656564/mvid.php?i=${response.artists[0].idArtist}`
    
                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).then (function(response) {
                        console.log(response);
                    })
                }
    
                function mostLovedTracks() {
                    const queryURL = `https://www.theaudiodb.com/api/v1/json/5d656564694f534d656564/track-top10.php?s=${artistName}`
    
                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).then (function(response) {
                        console.log(response);
                    })
                }
    
                albumAudioDB();
                trackAudioDB();
                discographyAudioDB();
                musicVideos();
                mostLovedTracks();
    
            })
        }
    
        function currentTrendingAlbums() {
            const queryURL = `https://theaudiodb.com/api/v1/json/5d656564694f534d656564/trending.php?country=us&type=itunes&format=albums`
    
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then (function(response) {
                console.log(response);
                function currentTrendingSongs() {
                    const queryURL = `https://theaudiodb.com/api/v1/json/5d656564694f534d656564/trending.php?country=us&type=itunes&format=singles`
    
                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).then (function(response) {
                        console.log(response);
                    })
                }
                currentTrendingSongs();
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
    
        function songSearchLy() {
            const songName = ""
            const songURL = `https://searchly.asuarez.dev/api/v1/song/search?query=${songName}`
    
            $.ajax({
                url: songURL,
                method: "GET"
            }).then (function(response) {
                console.log(response);
            })
        }
    
        function searchPlaylists() {
            const queryURL = `https://www.theaudiodb.com/api/v1/json/5d656564694f534d656564/playlist.php?id=15524`
    
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then (function(response) {
                console.log(response);
            })
        }
    artistAudioDB();
    currentTrendingAlbums();
    lyricsOVH();
    songSearchLy();
    searchPlaylists();
    })
   
});