const gamesData = [
  // FREE ACTION GAMES
  {
    id: 1,
    title: "Warframe",
    category: "Action",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg",
    description: "Join the Tenno and defend an ever-expanding universe. Wield your Warframe's tactical abilities, craft devastating weaponry in this genre-defining looter-shooter.",
    size: "50 GB",
    requirements: "Windows 7, Intel i5-4430/AMD FX-6300, 4GB RAM, GTX 660/HD 7850",
    downloadLink: "https://store.steampowered.com/app/230410/Warframe/"
  },
  {
    id: 2,
    title: "Apex Legends",
    category: "Action",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg",
    description: "Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the battle royale genre.",
    size: "75 GB",
    requirements: "Windows 7, Intel i3-6300/AMD FX-4350, 6GB RAM, GTX 660/RX 470",
    downloadLink: "https://store.steampowered.com/app/1172470/Apex_Legends/"
  },
  {
    id: 3,
    title: "Counter-Strike 2",
    category: "Action",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
    description: "The premier competitive FPS experience. Master precise gunplay and tactical gameplay in the evolution of the legendary Counter-Strike series.",
    size: "85 GB",
    requirements: "Windows 10, Intel i5-2400/AMD FX-6300, 8GB RAM, GTX 960/RX 560",
    downloadLink: "https://store.steampowered.com/app/730/CounterStrike_2/"
  },
  {
    id: 4,
    title: "Destiny 2",
    category: "Action",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg",
    description: "Embark on a heroic quest to save humanity in this epic sci-fi MMO shooter. Create your Guardian and explore the solar system in stunning detail.",
    size: "105 GB",
    requirements: "Windows 7, Intel i3-3250/AMD FX-4350, 6GB RAM, GTX 660/RX 470",
    downloadLink: "https://store.steampowered.com/app/1085660/Destiny_2/"
  },
  {
    id: 5,
    title: "Team Fortress 2",
    category: "Action",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg",
    description: "The legendary team-based multiplayer shooter with nine distinct classes. Experience humor, strategy, and endless fun in this timeless classic.",
    size: "15 GB",
    requirements: "Windows 7, Intel Pentium 4 1.7GHz, 1GB RAM, DirectX 8.1 compatible",
    downloadLink: "https://store.steampowered.com/app/440/Team_Fortress_2/"
  },
  {
    id: 46,
    title: "Valorant",
    category: "Action",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdWEGp4UJx4LITMy9cCtibRdKFIOQayE37g&s",
    description: "A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities. Blend your style and experience on a global, competitive stage.",
    size: "30 GB",
    requirements: "Windows 7, Intel i3-370M/AMD FX-4350, 4GB RAM, GTX 1050/RX 560",
    downloadLink: "https://playvalorant.com/"
  },
  {
    id: 47,
    title: "Fortnite",
    category: "Action",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCvksBdzKL6BMv-2UJb--l4m9KgZ8eYghzQ&s",
    description: "The world's largest social sandbox where you can battle, build, create, and compete with friends across platforms in this ever-evolving game.",
    size: "95 GB",
    requirements: "Windows 10, Intel i3-3225/AMD FX-4350, 8GB RAM, GTX 660/RX 460",
    downloadLink: "https://www.epicgames.com/fortnite/"
  },
  {
    id: 48,
    title: "Paladins",
    category: "Action",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/444090/header.jpg",
    description: "Enter a fantasy world of ancient technology in Paladins, a team-based shooter with strategy elements and deep character customization.",
    size: "30 GB",
    requirements: "Windows 7, Intel Core 2 Duo 2.4GHz/AMD Athlon 64 X2 4400+, 4GB RAM, GTX 470/HD 6870",
    downloadLink: "https://store.steampowered.com/app/444090/Paladins/"
  },
  {
    id: 49,
    title: "Call of Duty: Warzone",
    category: "Action",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTocHdbeqthnUs1AMfJWlllbKcHEBw3ZFnKww&s",
    description: "Drop into the free-to-play battle royale experience. Fight to be the last squad standing in this massive combat experience.",
    size: "125 GB",
    requirements: "Windows 10, Intel i5-2500K/AMD Ryzen R5 1600X, 12GB RAM, GTX 970/RX 580",
    downloadLink: "https://www.callofduty.com/warzone"
  },
  {
    id: 50,
    title: "Overwatch 2",
    category: "Action",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2357570/header.jpg",
    description: "Fight for the future in this dynamic team-based shooter. Choose your hero from a diverse cast of soldiers, scientists, adventurers, and oddities.",
    size: "50 GB",
    requirements: "Windows 10, Intel i3-560/AMD Phenom II X3 715, 6GB RAM, GTX 600/HD 7000 series",
    downloadLink: "https://store.steampowered.com/app/2357570/Overwatch_2/"
  },

  // FREE ADVENTURE GAMES
  {
    id: 6,
    title: "Genshin Impact",
    category: "Adventure",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQTY8nn8QQoWVB6UhCshebKJGSWGzJcJLmnZOvHYClD-AVQ-fAQ4abIf7wOVP3e3kK7EuFS",
    description: "Step into Teyvat, a vast world teeming with life and flowing with elemental energy. Discover mysteries, explore diverse landscapes, and embark on an unforgettable journey.",
    size: "72 GB",
    requirements: "Windows 7, Intel i5-2500K/AMD FX-6300, 8GB RAM, GTX 1030/RX 550",
    downloadLink: "https://genshin.hoyoverse.com/en/download"
  },
  {
    id: 7,
    title: "Honkai Star Rail",
    category: "Adventure",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWCGhlN7_oK1s_4rAqY7iFQY4r22k96srDpHB5tiRv3T3N6mUEyIf4d4K9K3T0_okUpLPy-A",
    description: "Board the Astral Express and journey across the galaxy in this turn-based RPG adventure. Discover worlds beyond imagination with strategic combat.",
    size: "40 GB",
    requirements: "Windows 7, Intel i3-2100/AMD A8-5600K, 6GB RAM, GTX 650/HD 7770",
    downloadLink: "https://hsr.hoyoverse.com/en-us/download"
  },
  {
    id: 8,
    title: "Wuthering Waves",
    category: "Adventure",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg",
    description: "Explore a post-apocalyptic world as a Rover awakening to a devastated earth. Master elemental abilities and uncover the truth in this action RPG.",
    size: "35 GB",
    requirements: "Windows 10, Intel i5-4430/AMD Ryzen 3 2200G, 8GB RAM, GTX 1060/RX 580",
    downloadLink: "https://wutheringwaves.kurogames.com/en/main"
  },
  {
    id: 9,
    title: "Sky: Children of the Light",
    category: "Adventure",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2325290/header.jpg",
    description: "A peaceful adventure game about kindness and hope. Soar through clouds, meet fellow travelers, and spread light in breathtaking realms.",
    size: "8 GB",
    requirements: "Windows 10, Intel i5-4590/AMD FX-8350, 4GB RAM, GTX 970/RX 570",
    downloadLink: "https://store.steampowered.com/app/2325290/Sky_Children_of_the_Light/"
  },
  {
    id: 10,
    title: "Another Eden",
    category: "Adventure",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSz9MsVvGsL2JsnkR7yJsUB21bVJmqlDnCFlKmSC9BD_Z5TQLy6HI2KwEW_Vt2hC5CyrglA",
    description: "A classic JRPG adventure through time and space. Experience an epic story with beautiful music and timeless gameplay in this free mobile adventure.",
    size: "4 GB",
    requirements: "iOS 9.0+ / Android 4.4+",
    downloadLink: "https://another-eden.jp/en/"
  },
  {
    id: 51,
    title: "Tower of Fantasy",
    category: "Adventure",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2064650/header.jpg",
    description: "Enter a sci-fi world filled with stunning visuals and immersive gameplay. Explore the open world, fight bosses, and discover the truth behind Aida.",
    size: "25 GB",
    requirements: "Windows 10, Intel i5-7500/AMD Ryzen 5 2600, 16GB RAM, GTX 1060/RX 580",
    downloadLink: "https://store.steampowered.com/app/2064650/Tower_of_Fantasy/"
  },
  {
    id: 52,
    title: "The Elder Scrolls: Blades",
    category: "Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7FG9SIjGfmHYY11mws2e7Yur2V9L-ELKGg&s",
    description: "From Bethesda Game Studios comes The Elder Scrolls: Blades, a classic dungeon crawler reimagined for mobile with console-quality graphics.",
    size: "3 GB",
    requirements: "iOS 11.0+ / Android 6.0+",
    downloadLink: "https://elderscrolls.bethesda.net/en/blades"
  },
  {
    id: 53,
    title: "AdventureQuest 3D",
    category: "Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3UEmyTLz2Z-sSKtYhwZPhA2UD3Zi8PkpTA&s",
    description: "A cross-platform MMORPG that connects mobile, PC, and browser players in the same virtual world. Battle monsters and explore dungeons with friends.",
    size: "2 GB",
    requirements: "Windows 7, Intel i3, 4GB RAM, DirectX 9 compatible",
    downloadLink: "https://www.aq3d.com/"
  },
  {
    id: 54,
    title: "Pokemon GO",
    category: "Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfiNe0e8WHHUtmZobTrZHVGRmoSQk1j15_A&s",
    description: "Explore the world around you and discover Pokémon in this revolutionary mobile adventure. Catch, battle, and trade Pokémon with players worldwide.",
    size: "500 MB",
    requirements: "iOS 12.0+ / Android 6.0+",
    downloadLink: "https://pokemongolive.com/"
  },
  {
    id: 55,
    title: "Ni No Kuni: Cross Worlds",
    category: "Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRApW1OTDnSlIUe_h3ghB7qSC1kgjWR---hw&s",
    description: "Enter the magical world of Ni No Kuni in this mobile MMORPG. Experience Studio Ghibli-inspired visuals and embark on an epic adventure.",
    size: "8 GB",
    requirements: "iOS 11.0+ / Android 7.0+",
    downloadLink: "https://ninokuni.netmarble.com/"
  },

  // FREE RPG GAMES
  {
    id: 11,
    title: "Path of Exile",
    category: "RPG",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg",
    description: "An online Action RPG set in a dark fantasy world. Experience visceral action combat, powerful items, and deep character customization - completely free forever.",
    size: "32 GB",
    requirements: "Windows 7, Intel i3-530/AMD X4 955, 4GB RAM, GTX 650/HD 7750",
    downloadLink: "https://store.steampowered.com/app/238960/Path_of_Exile/"
  },
  {
    id: 12,
    title: "Lost Ark",
    category: "RPG",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1599340/header.jpg",
    description: "Embark on an odyssey for the Lost Ark in a vast, vibrant world. Experience thrilling action combat and explore diverse realms in this fantasy MMORPG.",
    size: "80 GB",
    requirements: "Windows 10, Intel i3-530/AMD FX-6300, 8GB RAM, GTX 460/RX 550",
    downloadLink: "https://store.steampowered.com/app/1599340/Lost_Ark/"
  },
  {
    id: 13,
    title: "Final Fantasy XIV Free Trial",
    category: "RPG",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/39210/header.jpg",
    description: "Experience the critically acclaimed MMORPG right up to level 70 without restrictions on playtime. Join millions of adventurers in Eorzea.",
    size: "60 GB",
    requirements: "Windows 8.1, Intel i5-2400/AMD Phenom II X4 945, 4GB RAM, GTX 750/RX 470",
    downloadLink: "https://store.steampowered.com/app/39210/FINAL_FANTASY_XIV_Online/"
  },
  {
    id: 14,
    title: "Path of Exile 2",
    category: "RPG",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2694490/header.jpg",
    description: "The next generation Action RPG from Grinding Gear Games. Experience a dark new campaign with refined combat and deeper character progression.",
    size: "50 GB",
    requirements: "Windows 10, Intel i5-4430/AMD FX-6300, 8GB RAM, GTX 1050/RX 560",
    downloadLink: "https://store.steampowered.com/app/2694490/Path_of_Exile_2/"
  },
  {
    id: 15,
    title: "Dota 2",
    category: "RPG",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
    description: "The most played game on Steam. Battle in this multiplayer online battle arena with deep strategy, incredible depth, and hero progression systems.",
    size: "15 GB",
    requirements: "Windows 7, Intel Dual Core 2.8GHz, 4GB RAM, GTX 560/HD 6870",
    downloadLink: "https://store.steampowered.com/app/570/Dota_2/"
  },
  {
    id: 56,
    title: "Guild Wars 2",
    category: "RPG",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1284210/header.jpg",
    description: "A free-to-play MMORPG with no subscription fees. Experience dynamic events, personal story, and competitive PvP in the world of Tyria.",
    size: "55 GB",
    requirements: "Windows 7, Intel i5-2300/AMD Athlon II X4 620, 4GB RAM, GTX 460/HD 5770",
    downloadLink: "https://store.steampowered.com/app/1284210/Guild_Wars_2/"
  },
  {
    id: 57,
    title: "Neverwinter",
    category: "RPG",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/109600/header.jpg",
    description: "Based on Dungeons & Dragons, experience this free-to-play MMORPG set in the legendary city of Neverwinter from the Forgotten Realms.",
    size: "15 GB",
    requirements: "Windows 7, Intel Core 2 Duo 2.8GHz/AMD Athlon 64 X2 4400+, 2GB RAM, GTX 8800/HD 2900",
    downloadLink: "https://store.steampowered.com/app/109600/Neverwinter/"
  },
  {
    id: 58,
    title: "Star Wars: The Old Republic",
    category: "RPG",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1y90eeOGat6Z2MHHQzfwr0oabkBLvOq4x3w&s",
    description: "Play as a Jedi, Sith, or one of many other iconic Star Wars roles in this story-driven MMORPG. Experience your own Star Wars saga in a galaxy far, far away.",
    size: "40 GB",
    requirements: "Windows 7, Intel AMD Athlon 64 X2 4000+/Intel Core 2 Duo 2.0GHz, 3GB RAM, ATX 8800/GeForce 210",
    downloadLink: "https://www.swtor.com/"
  },
  {
    id: 59,
    title: "MapleStory",
    category: "RPG",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/216150/header.jpg",
    description: "A classic 2D side-scrolling MMORPG with colorful anime-style graphics. Level up your character and explore the magical world of Maple World.",
    size: "15 GB",
    requirements: "Windows 7, Intel Pentium 4 2.4GHz/AMD Athlon 64 2800+, 4GB RAM, DirectX 9 compatible",
    downloadLink: "https://store.steampowered.com/app/216150/MapleStory/"
  },
  {
    id: 60,
    title: "Albion Online",
    category: "RPG",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/761890/header.jpg",
    description: "A sandbox MMORPG where player choices matter. Shape your own destiny in a medieval fantasy world with classless character development.",
    size: "10 GB",
    requirements: "Windows 7, Intel i3-530/AMD FX-4100, 4GB RAM, GTX 460/HD 6850",
    downloadLink: "https://store.steampowered.com/app/761890/Albion_Online/"
  },

  // FREE HORROR GAMES
  {
    id: 16,
    title: "SCP: Secret Laboratory",
    category: "Horror",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/700330/header.jpg",
    description: "A multiplayer horror game based on SCP Foundation. Each round offers unique gameplay as different classes with conflicting goals fight for survival.",
    size: "5 GB",
    requirements: "Windows 7, Intel i3-2100/AMD FX-4300, 3GB RAM, GTX 1050/RX 560",
    downloadLink: "https://store.steampowered.com/app/700330/SCP_Secret_Laboratory/"
  },
  {
    id: 17,
    title: "Dead by Daylight Mobile",
    category: "Horror",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Dead_by_Daylight_Steam_header.jpg/250px-Dead_by_Daylight_Steam_header.jpg",
    description: "The hit asymmetrical horror game on mobile. Play as survivor or killer in intense 4v1 matches filled with tension and terror.",
    size: "2 GB",
    requirements: "iOS 13.0+ / Android 7.0+",
    downloadLink: "https://deadbydaylight-mobile.com/"
  },
  {
    id: 18,
    title: "Deceit",
    category: "Horror",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/466240/header.jpg",
    description: "A multiplayer horror game where friends become foes. Some players are infected with a virus and must hide their identity while the innocent try to escape.",
    size: "8 GB",
    requirements: "Windows 7, Intel i3-4150/AMD FX-6300, 6GB RAM, GTX 660/RX 470",
    downloadLink: "https://store.steampowered.com/app/466240/Deceit/"
  },
  {
    id: 19,
    title: "Cry of Fear",
    category: "Horror",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/223710/header.jpg",
    description: "A psychological single-player and co-op horror game. Armed with a camera phone and courage, investigate a city shrouded in darkness and mystery.",
    size: "5 GB",
    requirements: "Windows XP, Intel Pentium III 700MHz, 96MB RAM, DirectX 7 compatible",
    downloadLink: "https://store.steampowered.com/app/223710/Cry_of_Fear/"
  },
  {
    id: 20,
    title: "Spooky's Jump Scare Mansion",
    category: "Horror",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/363670/header.jpg",
    description: "Navigate through 1000 rooms of this haunted house. What starts as cute quickly becomes disturbing in this free horror adventure game.",
    size: "2 GB",
    requirements: "Windows XP, Intel i3/AMD equivalent, 4GB RAM, DirectX 9 compatible",
    downloadLink: "https://store.steampowered.com/app/363670/Spookys_Jump_Scare_Mansion/"
  },
  {
    id: 61,
    title: "Phasmophobia (Free Weekend)",
    category: "Horror",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg",
    description: "A 4 player online co-op psychological horror where you and your team investigate paranormal activity. Use ghost hunting equipment to gather evidence.",
    size: "13 GB",
    requirements: "Windows 10, Intel i5-4590/AMD FX 8350, 8GB RAM, GTX 970/RX 470",
    downloadLink: "https://store.steampowered.com/app/739630/Phasmophobia/"
  },
  {
    id: 62,
    title: "The Stanley Parable Demo",
    category: "Horror",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/221910/header.jpg",
    description: "A mind-bending narrative exploration game. Follow the story of Stanley and his choices, or choose to ignore the narrator entirely.",
    size: "3 GB",
    requirements: "Windows 7, Intel Core 2 Duo 2.4GHz, 2GB RAM, DirectX 9 compatible",
    downloadLink: "https://store.steampowered.com/app/221910/The_Stanley_Parable/"
  },
  {
    id: 63,
    title: "Resident Evil 7 Demo",
    category: "Horror",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwJg8ZzSFKrts8w7oVH_DnK85G2eBQtspyw&s",
    description: "Experience survival horror like never before in this free demo. Explore the Baker family mansion in this photorealistic horror experience.",
    size: "8 GB",
    requirements: "Windows 7, Intel i5-4460/AMD FX-6300, 8GB RAM, GTX 760/RX 560",
    downloadLink: "https://store.steampowered.com/app/418370/Resident_Evil_7_Biohazard/"
  },
  {
    id: 64,
    title: "GTFO (Free Weekend)",
    category: "Horror",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/493520/header.jpg",
    description: "A 4-player cooperative horror shooter that demands teamwork and communication. Face the unknown together in this hardcore nightmare.",
    size: "15 GB",
    requirements: "Windows 10, Intel i5-6600K/AMD Ryzen 5 1600, 8GB RAM, GTX 970/RX 480",
    downloadLink: "https://store.steampowered.com/app/493520/GTFO/"
  },
  {
    id: 65,
    title: "No More Room in Hell",
    category: "Horror",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/224260/header.jpg",
    description: "A cooperative survival horror mod. Work together with up to 8 players to complete objectives while fighting off hordes of zombies.",
    size: "4 GB",
    requirements: "Windows 7, Intel Pentium 4 3.0GHz, 1GB RAM, DirectX 8.1 compatible",
    downloadLink: "https://store.steampowered.com/app/224260/No_More_Room_in_Hell/"
  },

  // FREE PUZZLE GAMES
  {
    id: 21,
    title: "Tetris (Online)",
    category: "Puzzle",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2D4RHDWX4Z42gDb__Qlnfdp01hZlasTuw0Q&s",
    description: "The classic block-falling puzzle game that's captivated players for decades. Clear lines, increase speed, and achieve the perfect game.",
    size: "50 MB",
    requirements: "Web Browser with HTML5 support",
    downloadLink: "https://tetris.com/play-tetris"
  },
  {
    id: 22,
    title: "Hexologic",
    category: "Puzzle",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/785890/header.jpg",
    description: "A peaceful logic puzzle game with hexagonal grids. Solve dozens of challenging levels using simple mathematical operations.",
    size: "200 MB",
    requirements: "Windows 7, Intel i3, 2GB RAM, DirectX 9 compatible",
    downloadLink: "https://store.steampowered.com/app/785890/Hexologic/"
  },
  {
    id: 23,
    title: "2048",
    category: "Puzzle",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRers3dyhrg4cWVGCAZ6KMtLoH_dJC0FTUByg&s",
    description: "The addictive number puzzle game. Combine tiles with the same numbers to reach the 2048 tile in this simple yet challenging brain teaser.",
    size: "10 MB",
    requirements: "Web Browser or Mobile Device",
    downloadLink: "https://play2048.co/"
  },
  {
    id: 24,
    title: "Portal Stories: Mel",
    category: "Puzzle",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/317400/header.jpg",
    description: "A free community-made Portal 2 mod. Experience new test chambers and story elements in this high-quality puzzle adventure.",
    size: "3 GB",
    requirements: "Portal 2 required, Windows 7, Intel i3, 2GB RAM, DirectX 9 compatible",
    downloadLink: "https://store.steampowered.com/app/317400/Portal_Stories_Mel/"
  },
  {
    id: 25,
    title: "Sudoku Classic",
    category: "Puzzle",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7gikBXHsxs3yBsNJ0OllIULGP23fVx5cCA&s",
    description: "The classic number placement puzzle. Train your brain with thousands of Sudoku puzzles across multiple difficulty levels.",
    size: "50 MB",
    requirements: "iOS 9.0+ / Android 4.1+",
    downloadLink: "https://sudoku.com/"
  },
  {
    id: 66,
    title: "The Witness (Free Weekend)",
    category: "Puzzle",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/210970/header.jpg",
    description: "An exploration-puzzle game set on a mysterious island. Solve line puzzles while uncovering the secrets of this beautiful world.",
    size: "5 GB",
    requirements: "Windows 7, Intel i5-2300/AMD FX-4350, 4GB RAM, GTX 560/HD 6870",
    downloadLink: "https://store.steampowered.com/app/210970/The_Witness/"
  },
  {
    id: 67,
    title: "Monument Valley (Free Mobile)",
    category: "Puzzle",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYgk0-qMuTVGTuEV8nB3CibMRfkG0QJlxVg&s",
    description: "Guide Princess Ida through fantastical architectures and impossible geometry. A surreal adventure through stunningly beautiful monuments.",
    size: "200 MB",
    requirements: "iOS 8.0+ / Android 4.1+",
    downloadLink: "https://www.monumentvalleygame.com/"
  },
  {
    id: 68,
    title: "Portal (Free Weekend)",
    category: "Puzzle",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/400/header.jpg",
    description: "The game that started it all. Solve puzzles using the revolutionary portal gun in this critically acclaimed first-person puzzle adventure.",
    size: "3 GB",
    requirements: "Windows 7, Intel Pentium 4 3.0GHz, 1GB RAM, DirectX 8.1 compatible",
    downloadLink: "https://store.steampowered.com/app/400/Portal/"
  },
  {
    id: 69,
    title: "World of Goo (Free Demo)",
    category: "Puzzle",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/22000/header.jpg",
    description: "A physics-based puzzle game where you build structures with balls of goo. Experience beautiful visuals and innovative gameplay mechanics.",
    size: "100 MB",
    requirements: "Windows XP, Intel Pentium III 1000MHz, 512MB RAM, DirectX 8 compatible",
    downloadLink: "https://store.steampowered.com/app/22000/World_of_Goo/"
  },
  {
    id: 70,
    title: "Baba Is You (Demo)",
    category: "Puzzle",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/736260/header.jpg",
    description: "A puzzle game where the rules you have to follow are present as blocks you can interact with. Change the rules to change how the game works.",
    size: "200 MB",
    requirements: "Windows 7, Intel i3, 2GB RAM, DirectX 9 compatible",
    downloadLink: "https://store.steampowered.com/app/736260/Baba_Is_You/"
  },

  // FREE SPORTS GAMES
  {
    id: 26,
    title: "Rocket League",
    category: "Sports",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg",
    description: "Rocket-powered cars meet soccer in this physics-based multiplayer game. Master aerial hits, saves, and goals in competitive online matches.",
    size: "30 GB",
    requirements: "Windows 7, Intel i3-2100/AMD FX-6300, 4GB RAM, GTX 660/RX 570",
    downloadLink: "https://store.steampowered.com/app/252950/Rocket_League/"
  },
  {
    id: 27,
    title: "eFootball",
    category: "Sports",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1665460/header.jpg",
    description: "Experience next-generation football simulation. Play with official teams and players in this free-to-play evolution of Pro Evolution Soccer.",
    size: "40 GB",
    requirements: "Windows 10, Intel i5-3470/AMD FX-4350, 8GB RAM, GTX 670/RX 570",
    downloadLink: "https://store.steampowered.com/app/1665460/eFootball/"
  },
  {
    id: 28,
    title: "Fall Guys",
    category: "Sports",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1097150/header.jpg",
    description: "The ultimate party game! Compete in chaotic obstacle courses and mini-games with up to 60 players in this colorful battle royale.",
    size: "26 GB",
    requirements: "Windows 10, Intel i5-2300/AMD FX-4350, 8GB RAM, GTX 660/RX 570",
    downloadLink: "https://store.steampowered.com/app/1097150/Fall_Guys/"
  },
  {
    id: 29,
    title: "Riders Republic Trial",
    category: "Sports",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1975520/header.jpg",
    description: "Experience extreme sports in a massive multiplayer playground. Ski, snowboard, bike, and wingsuit through stunning American national parks.",
    size: "25 GB",
    requirements: "Windows 10, Intel i5-4460/AMD Ryzen 3 1200, 8GB RAM, GTX 960/RX 570",
    downloadLink: "https://store.steampowered.com/app/1975520/Riders_Republic/"
  },
  {
    id: 30,
    title: "Fishing Planet",
    category: "Sports",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/380600/header.jpg",
    description: "The most authentic fishing simulator available. Cast your line in realistic water bodies around the world with true-to-life fishing mechanics.",
    size: "15 GB",
    requirements: "Windows 7, Intel i3-530/AMD Phenom II X4 945, 4GB RAM, GTX 460/HD 6850",
    downloadLink: "https://store.steampowered.com/app/380600/Fishing_Planet/"
  },
  {
    id: 71,
    title: "FIFA Mobile",
    category: "Sports",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRlugHDFkbyIySRQDtJXXkho5yYZyR5iCxg&s",
    description: "Build your Ultimate Team and compete in various football modes. Experience console-quality graphics and gameplay on mobile devices.",
    size: "200 MB",
    requirements: "iOS 11.0+ / Android 5.0+",
    downloadLink: "https://www.ea.com/games/fifa/fifa-mobile"
  },
  {
    id: 72,
    title: "NBA 2K Mobile",
    category: "Sports",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpWeOdb9cGkQbewM3WYykbgKZKki2tuLoxg&s",
    description: "The most authentic NBA experience on mobile. Build your MyTEAM with current and legendary NBA players in this card-collecting basketball game.",
    size: "4 GB",
    requirements: "iOS 11.0+ / Android 7.0+",
    downloadLink: "https://nba.2k.com/2kmobile/"
  },
  {
    id: 73,
    title: "Gran Turismo Sport (Free Weekend)",
    category: "Sports",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZi8itzqKpDNcDDxcpzWy3MeXOlJxpwX29A&s",
    description: "The ultimate driving simulator with stunning graphics and precise controls. Race on famous tracks with the world's most desirable cars.",
    size: "45 GB",
    requirements: "PlayStation 4 / PlayStation 5",
    downloadLink: "https://www.gran-turismo.com/gtsport/"
  },
  {
    id: 74,
    title: "Tony Hawk's Pro Skater Demo",
    category: "Sports",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAf7xo9MGst8Rbb_UyeL6X0VGRgIrgXFzzA&s",
    description: "Experience the legendary skateboarding series that defined a generation. Perform incredible tricks and combos in iconic skate spots.",
    size: "8 GB",
    requirements: "Windows 10, Intel i5-4430/AMD FX-6300, 8GB RAM, GTX 970/RX 580",
    downloadLink: "https://store.steampowered.com/search/?term=tony+hawk"
  },
  {
    id: 75,
    title: "World of Warships",
    category: "Sports",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/552990/header.jpg",
    description: "Command legendary warships in epic naval battles. Experience massive 12vs12 multiplayer battles with historically accurate ships.",
    size: "50 GB",
    requirements: "Windows 7, Intel Core 2 Duo 2.7GHz/AMD Athlon II X2 2.8GHz, 2GB RAM, GTX 8600/HD 4650",
    downloadLink: "https://store.steampowered.com/app/552990/World_of_Warships/"
  },

  // FREE STRATEGY GAMES
  {
    id: 31,
    title: "League of Legends",
    category: "Strategy",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1485260/header.jpg",
    description: "The world's most popular MOBA. Master one of 160+ champions in strategic 5v5 battles on Summoner's Rift in this competitive multiplayer game.",
    size: "22 GB",
    requirements: "Windows 7, Intel i3-530/AMD A6-3650, 2GB RAM, GTX 560/RX 6450",
    downloadLink: "https://www.leagueoflegends.com/en-us/"
  },
  {
    id: 32,
    title: "Dota 2",
    category: "Strategy",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
    description: "The most complex and competitive MOBA. Command powerful heroes with hundreds of items and abilities in deep strategic combat.",
    size: "15 GB",
    requirements: "Windows 7, Intel Dual Core 2.8GHz, 4GB RAM, GTX 560/HD 6870",
    downloadLink: "https://store.steampowered.com/app/570/Dota_2/"
  },
  {
    id: 33,
    title: "Crusader Kings II",
    category: "Strategy",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/203770/header.jpg",
    description: "Lead a medieval dynasty through centuries of warfare, diplomacy, and intrigue. Shape your bloodline's legacy in this grand strategy masterpiece.",
    size: "3 GB",
    requirements: "Windows XP, Intel Pentium IV 2.4GHz/AMD 3500+, 2GB RAM, ATI 4850/GTX 260",
    downloadLink: "https://store.steampowered.com/app/203770/Crusader_Kings_II/"
  },
  {
    id: 34,
    title: "Forge of Empires",
    category: "Strategy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2HouuaX3mXp18ksKlRFNt2FGv4RSqD40_A&s",
    description: "Build and manage your city through different historical eras. Develop technologies, expand your empire, and engage with other players online.",
    size: "1 GB",
    requirements: "Web Browser with HTML5 support / Mobile Device",
    downloadLink: "https://en.forgeofempires.com/"
  },
  {
    id: 35,
    title: "0 A.D.",
    category: "Strategy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3cE5G7f18ir8Qi4jMuEgpdLuXAwllhDYRg&s",
    description: "A free, open-source historical RTS game. Command ancient civilizations and build your empire with detailed historical accuracy and engaging gameplay.",
    size: "6 GB",
    requirements: "Windows 7, Intel Core 2 Duo/AMD Athlon 64 X2, 1GB RAM, OpenGL 1.3 compatible",
    downloadLink: "https://play0ad.com/download/"
  },
  {
    id: 76,
    title: "Age of Empires II: Definitive Edition (Free Weekend)",
    category: "Strategy",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/813780/header.jpg",
    description: "The legendary RTS returns with improved graphics and new content. Command medieval civilizations and experience one of the best strategy games ever made.",
    size: "25 GB",
    requirements: "Windows 10, Intel i5-6300/AMD FX-6300, 8GB RAM, GTX 650/RX 460",
    downloadLink: "https://store.steampowered.com/app/813780/Age_of_Empires_II_Definitive_Edition/"
  },
  {
    id: 77,
    title: "StarCraft II",
    category: "Strategy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhV8cvgr-CLQapKLv_mOeWhsRpnuL5EM2Uw&s",
    description: "The ultimate real-time strategy experience. Master three unique races in fast-paced competitive multiplayer and epic single-player campaigns.",
    size: "30 GB",
    requirements: "Windows 7, Intel Core 2 Duo/AMD Athlon 64 X2, 2GB RAM, GTX 8600/HD 2600",
    downloadLink: "https://starcraft2.com/en-us/"
  },
  {
    id: 78,
    title: "Heroes of the Storm",
    category: "Strategy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7GnFmJDdeowXFd3mHU6CGx80dNw2DhzmVg&s",
    description: "Blizzard's take on the MOBA genre featuring iconic characters from their universes. Team up with heroes from Warcraft, StarCraft, and Diablo.",
    size: "15 GB",
    requirements: "Windows 7, Intel Core 2 Duo 2.4GHz/AMD Athlon 64 X2 4400+, 4GB RAM, GTX 460/HD 6850",
    downloadLink: "https://heroesofthestorm.com/en-us/"
  },
  {
    id: 79,
    title: "Command & Conquer: Remastered Demo",
    category: "Strategy",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1213210/header.jpg",
    description: "Experience the legendary RTS that defined the genre. Command the Global Defense Initiative or Brotherhood of Nod in this remastered classic.",
    size: "20 GB",
    requirements: "Windows 10, Intel i5-4590/AMD FX-8350, 8GB RAM, GTX 970/RX 580",
    downloadLink: "https://store.steampowered.com/app/1213210/Command__Conquer_Remastered_Collection/"
  },
  {
    id: 80,
    title: "Total War: Shogun 2 (Free Weekend)",
    category: "Strategy",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/201270/header.jpg",
    description: "Lead your clan to victory in feudal Japan. Combine turn-based campaign strategy with real-time tactical battles in this acclaimed strategy game.",
    size: "20 GB",
    requirements: "Windows 7, Intel Core 2 Duo 2.4GHz/AMD Athlon 64 X2 4800+, 2GB RAM, GTX 8800/HD 2900",
    downloadLink: "https://store.steampowered.com/app/201270/Total_War_SHOGUN_2/"
  },

  // FREE FIGHTING GAMES
  {
    id: 36,
    title: "Brawlhalla",
    category: "Fighting",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/291550/header.jpg",
    description: "The free platform fighter. Battle with friends locally or online with over 50 legends in this easy-to-learn, hard-to-master brawler.",
    size: "2 GB",
    requirements: "Windows 7, Intel i3-550/AMD Phenom II X2 565, 2GB RAM, GTX 460/HD 5770",
    downloadLink: "https://store.steampowered.com/app/291550/Brawlhalla/"
  },
  {
    id: 37,
    title: "Dead or Alive 6: Core Fighters",
    category: "Fighting",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/838440/header.jpg",
    description: "Experience the fast-paced fighting action of DOA6 for free. Master the triangle system and spectacular stage interactions in 3D combat.",
    size: "50 GB",
    requirements: "Windows 7, Intel i5-4690/AMD FX-8350, 8GB RAM, GTX 770/RX 470",
    downloadLink: "https://store.steampowered.com/app/838440/DEAD_OR_ALIVE_6_Core_Fighters/"
  },
  {
    id: 38,
    title: "Tekken 7 (Free Weekend)",
    category: "Fighting",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/389730/header.jpg",
    description: "Experience the King of Iron Fist Tournament during special free play events. Master the rage system and devastating combo attacks.",
    size: "60 GB",
    requirements: "Windows 7, Intel i3-4160/AMD FX-6300, 6GB RAM, GTX 660/RX 460",
    downloadLink: "https://store.steampowered.com/app/389730/TEKKEN_7/"
  },
  {
    id: 39,
    title: "Granblue Fantasy Versus: Rising",
    category: "Fighting",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2157560/header.jpg",
    description: "A stylish 2.5D fighter based on the popular mobile RPG. Experience beginner-friendly controls with deep fighting mechanics and beautiful animation.",
    size: "20 GB",
    requirements: "Windows 10, Intel i5-3470/AMD FX-8350, 6GB RAM, GTX 660/RX 570",
    downloadLink: "https://store.steampowered.com/app/2157560/Granblue_Fantasy_Versus_Rising/"
  },
  {
    id: 40,
    title: "Fightcade",
    category: "Fighting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkXxI9FucoeDZ-80o0OmnuYi0eVPktkY7-w&s",
    description: "Play classic arcade fighters online with perfect emulation. Experience legendary games like Street Fighter III, King of Fighters, and more.",
    size: "500 MB",
    requirements: "Windows 7, Intel Dual Core 2.0GHz, 2GB RAM, DirectX 9 compatible",
    downloadLink: "https://www.fightcade.com/"
  },
  {
    id: 81,
    title: "Street Fighter 6 (Free Weekend)",
    category: "Fighting",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg",
    description: "The latest evolution of the legendary fighting game franchise. Experience new mechanics, stunning visuals, and competitive gameplay.",
    size: "60 GB",
    requirements: "Windows 10, Intel i5-7500/AMD Ryzen 3 1200, 8GB RAM, GTX 1060/RX 580",
    downloadLink: "https://store.steampowered.com/app/1364780/Street_Fighter_6/"
  },
  {
    id: 82,
    title: "Mortal Kombat 11 (Free Weekend)",
    category: "Fighting",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/976310/header.jpg",
    description: "The ultimate fighting experience with brutal Fatalities and cinematic presentation. Master new gameplay mechanics and iconic characters.",
    size: "100 GB",
    requirements: "Windows 10, Intel i5-4690/AMD FX-9370, 8GB RAM, GTX 1060/RX 480",
    downloadLink: "https://store.steampowered.com/app/976310/Mortal_Kombat11/"
  },
  {
    id: 83,
    title: "Injustice 2 (Free Play)",
    category: "Fighting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzrZyxguLOWGCOJjGQpkQnlgSyWTXJVAPqQ&s",
    description: "Fight as DC superheroes and villains in this cinematic fighting game. Customize your characters with a unique gear system.",
    size: "45 GB",
    requirements: "Windows 7, Intel i5-750/AMD Phenom II X4 965, 4GB RAM, GTX 460/HD 5850",
    downloadLink: "https://store.steampowered.com/app/627270/Injustice_2/"
  },
  {
    id: 84,
    title: "Soul Calibur VI (Free Weekend)",
    category: "Fighting",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/544750/header.jpg",
    description: "Welcome back to the stage of history! Experience weapons-based 3D fighting with stunning visuals and deep combat mechanics.",
    size: "20 GB",
    requirements: "Windows 7, Intel i3-6100/AMD FX-6300, 4GB RAM, GTX 1050/RX 560",
    downloadLink: "https://store.steampowered.com/app/544750/SOULCALIBUR_VI/"
  },
  {
    id: 85,
    title: "King of Fighters XV (Free Weekend)",
    category: "Fighting",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1498570/header.jpg",
    description: "The legendary fighting game series returns with stunning visuals and refined gameplay. Master 3v3 team battles with classic and new fighters.",
    size: "60 GB",
    requirements: "Windows 10, Intel i5-3470/AMD FX-8350, 8GB RAM, GTX 960/RX 570",
    downloadLink: "https://store.steampowered.com/app/1498570/THE_KING_OF_FIGHTERS_XV/"
  },

  // FREE ARCADE GAMES
  {
    id: 41,
    title: "PAC-MAN 256",
    category: "Arcade",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/455400/header.jpg",
    description: "The endless PAC-MAN experience. Navigate infinite mazes, collect dots, and avoid ghosts in this modern twist on the classic arcade game.",
    size: "500 MB",
    requirements: "Windows 7, Intel i3, 2GB RAM, DirectX 9 compatible",
    downloadLink: "https://store.steampowered.com/app/455400/PACMAN_256/"
  },
  {
    id: 42,
    title: "DJMAX RESPECT V Demo",
    category: "Arcade",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/header.jpg",
    description: "The ultimate rhythm game experience. Play along to amazing music tracks with precise timing and stylish presentation.",
    size: "15 GB",
    requirements: "Windows 7, Intel i3-530/AMD Phenom II X4 940, 4GB RAM, GTX 460/HD 6850",
    downloadLink: "https://store.steampowered.com/app/960170/DJMAX_RESPECT_V/"
  },
  {
    id: 43,
    title: "Super Hexagon",
    category: "Arcade",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/221640/header.jpg",
    description: "A minimal action game by Terry Cavanagh. Navigate through pulsing geometric shapes with precise timing in this intensely challenging arcade experience.",
    size: "50 MB",
    requirements: "Windows XP, Intel 1.5GHz, 1GB RAM, OpenGL compatible",
    downloadLink: "https://store.steampowered.com/app/221640/Super_Hexagon/"
  },
  {
    id: 44,
    title: "Asteroids (Browser)",
    category: "Arcade",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqKdwvI-pfzyY2KKvcicxgPB_Ni3DwRpPBQ&s",
    description: "The classic space shooter from 1979. Destroy asteroids and flying saucers while avoiding collisions in this timeless arcade experience.",
    size: "5 MB",
    requirements: "Web Browser with HTML5 support",
    downloadLink: "https://www.classicgaming.cc/classics/asteroids/play-asteroids"
  },
  {
    id: 45,
    title: "Geometry Dash Lite",
    category: "Arcade",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPCD29BqoJxv5lTJ0WFk4QUnq7gAs72nNPw&s",
    description: "Jump and fly your way through danger in this rhythm-based action platformer. Featuring awesome soundtrack and addictive gameplay.",
    size: "100 MB",
    requirements: "iOS 8.0+ / Android 4.0+",
    downloadLink: "https://store.steampowered.com/app/322170/Geometry_Dash/"
  },
  {
    id: 86,
    title: "Pinball FX",
    category: "Arcade",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1671370/header.jpg",
    description: "The next generation of digital pinball with stunning visuals and realistic physics. Experience classic and original tables for free.",
    size: "8 GB",
    requirements: "Windows 10, Intel i5-4590/AMD FX-8350, 8GB RAM, GTX 970/RX 580",
    downloadLink: "https://store.steampowered.com/app/1671370/Pinball_FX/"
  },
  {
    id: 87,
    title: "Beat Saber (Free Weekend)",
    category: "Arcade",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQiA-REpw4FNFdkxqtRV1-7VK8xWNYT_Adpg&s",
    description: "The VR rhythm game phenomenon. Slash blocks to the beat of energetic music in this immersive virtual reality experience.",
    size: "4 GB",
    requirements: "VR Headset, Windows 10, Intel i5-4590/AMD FX-8350, 8GB RAM, GTX 970/RX 480",
    downloadLink: "https://store.steampowered.com/app/620980/Beat_Saber/"
  },
  {
    id: 88,
    title: "Tetris Effect (Free Weekend)",
    category: "Arcade",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1003590/header.jpg",
    description: "The classic puzzle game enhanced with stunning visuals and an amazing soundtrack. Experience Tetris like never before.",
    size: "8 GB",
    requirements: "Windows 10, Intel i3-6100/AMD FX-4350, 4GB RAM, GTX 750/RX 460",
    downloadLink: "https://store.steampowered.com/app/1003590/Tetris_Effect_Connected/"
  },
  {
    id: 89,
    title: "Frogger in Toy Town",
    category: "Arcade",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSuSJeMvIuM1ONbGbpmk9OssnssqX9sM9hsg&s",
    description: "Help Frogger navigate through busy toy-themed levels. Experience the classic arcade gameplay with modern graphics and new challenges.",
    size: "1 GB",
    requirements: "Windows 7, Intel i3, 2GB RAM, DirectX 9 compatible",
    downloadLink: "https://store.steampowered.com/search/?term=frogger"
  },
  {
    id: 90,
    title: "Centipede: Recharged",
    category: "Arcade",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb39nvl-_11t31a-svYzj0GwTPl-ILMY8h8A&s",
    description: "The classic arcade shooter reimagined with modern visuals and enhanced gameplay. Battle through waves of centipedes and other creatures.",
    size: "2 GB",
    requirements: "Windows 10, Intel i3-4130/AMD FX-4300, 4GB RAM, GTX 750/RX 460",
    downloadLink: "https://store.steampowered.com/app/1715870/Centipede_Recharged/"
  }
];

export default gamesData;