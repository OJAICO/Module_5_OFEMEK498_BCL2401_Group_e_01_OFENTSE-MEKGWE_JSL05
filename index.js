// Array of song objects
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Kakapa Ya Mmino", artist: "Peace Modise", genre: "Afro-Beat" },
    { title: "Can't Be Broken", artist: "Lil Wayne", genre: "Hip-Hop" },
    { title: "Carnival", artist: "Kanye West and TY Dolla $ign", genre: "Hip-Hop" },
    { title: "Culture Vulture", artist: "25k", genre: "Hip-Hop" },
    { title: "God Did", artist: "Dj Khaled", genre: "Hip-Hop" }
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylistByGuardian(guardians, songs) {
    return Object.keys(guardians).map(guardian => {
        const genre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === genre);
        return { guardian, playlist };
    });
}

// Function to create HTML elements for a playlist
function createPlaylistElement(playlist) {
    const playlistDiv = document.createElement("div");
    playlistDiv.classList.add("playlist");

    const guardianHeading = document.createElement("h4");
    guardianHeading.textContent = `${playlist.guardian}'s Playlist`;
    playlistDiv.appendChild(guardianHeading);

    playlist.playlist.forEach(song => {
        const songDiv = document.createElement("div");
        songDiv.classList.add("song");

        const songTitle = document.createElement("span");
        songTitle.classList.add("song-title");
        songTitle.textContent = song.title;
        songDiv.appendChild(songTitle);

        const songArtist = document.createElement("span");
        songArtist.classList.add("song-artist");
        songArtist.textContent = ` by ${song.artist}`;
        songDiv.appendChild(songArtist);

        playlistDiv.appendChild(songDiv);
    });

    return playlistDiv;
}

// Function to display playlists for each Guardian
function displayPlaylists(playlists) {
    const playlistsDiv = document.getElementById("playlists");
    if (!playlistsDiv) {
        console.error("Element with ID 'playlists' not found.");
        return;
    }

    playlists.forEach(playlist => {
        const playlistElement = createPlaylistElement(playlist);
        playlistsDiv.appendChild(playlistElement);
    });
}

// Generate playlists for each guardian
const playlists = generatePlaylistByGuardian(guardians, songs);

// Display playlists
displayPlaylists(playlists);