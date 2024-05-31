/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const music = [];


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(title,artist,genre,releasedIn,album) {
    const obj = {
        "title" : title,
        "artist" : artist,
        "genre" : genre,
        "releasedIn" : releasedIn,
        "album" : album
    };
    music.push(obj);
    console.log("Minted: " + title);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < music.length; i++) {
    console.log("\nID: \t\t" + (i+1));
    console.log("Title: \t\t" + music[i].title);
    console.log("Artist: \t" + music[i].artist);
    console.log("Genre: \t\t" + music[i].genre);
    console.log("Released: \t" + music[i].releasedIn);
    console.log("Album: \t\t" + music[i].album);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + music.length);
}

// call your functions below this line
mintNFT("Without Me", "Eminem", "Hip-Hop/Rap", "2002", "The Eminem Show");
mintNFT("Counting Stars", "OneRepublic", "Pop Rock", "2013", "Native");
mintNFT("Bloody Mary", "Lady Gaga", "Pop", "2011", "Born This Way");
mintNFT("Cold", "Maroon5(ft. Future)", "Pop", "2017", "Red Pill Blues");
mintNFT("Remember the Name", "Fort Minor", "Hip-Hop, Rap Rock", "2005", "The Rising Tide");
mintNFT("Venom", "Eminem", "Hip-Hop,Rap", "2018", "Kamikaze");

listNFTs();
getTotalSupply();