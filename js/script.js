/* global $ */

// BELOW Update the songs array with four of your favorites songs.
 var song = ["Congratulations","Issues","Diego","It's Been so long"];
var Artist= ["Post Malone","Alan Walker","Tory Lanez","Living Tombstone"];
var Lengths=["3:30","3:12","4:12","3:57"]
var links=["https://uproxx.files.wordpress.com/2016/08/tory-lanez1.jpg?quality=95","https://ichef.bbci.co.uk/news/660/cpsprodpb/930C/production/_103344673_gettyimages-1022492306.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Alan_Walker.jpg/220px-Alan_Walker.jpg","https://i.kym-cdn.com/photos/images/newsfeed/001/036/339/bde.png"]
 var vidlinks=["https://www.youtube.com/watch?v=SC4xMk98Pdc","https://www.youtube.com/watch?v=4IefnBAiu64","https://www.youtube.com/watch?v=-rO7_UAxBqk","https://www.youtube.com/watch?v=gk-aCL6eyGc"]
  // BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
links.forEach(function(images) {
    $("body").append("<img src=" + images + ">")
    });


function displaySongInfo(){
   song.forEach(function(hey){
       $("SongName").append(hey);("<p>" + SongName + "</p>")
   });
   Artist.forEach(function(hello){
       $("ArtistName").append(hello);("<p>" + ArtistName + "</p>")
   });
   Lengths.forEach(function(he){
       $("SongLength").append(he);("<p>" + SongLength + "</p>")
   });
links.forEach(function(hen){
       $("ImageURL").append(hen);("<p>" + ImageURL + "</p>")
   });
vidlinks.forEach(function(heyyyy){
       $("SongLinkAddress").append(heyyyy);("<p>" + SongLinkAddress + "</p>") 
   });
function emptySongInfo(){
    $("#songs").empty();
   var songs =["Congratulations","Issues","Diego","It's Been ao long"];
   var Artist =["Post Malone","Alan Walker","Tory Lanez","The Living Tombstone"];
   

}


function addSongInfo(){
    
    
    
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});







































