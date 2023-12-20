class Media{
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(SongData){
        super(SongData);
            this.artist = SongData.artist;
        }
    }
const mySong = new Song({
    artist: "Queen",
    name: "Bohemain Rhapsody",
    publishDate: 1975,
});

console.log(mySong);