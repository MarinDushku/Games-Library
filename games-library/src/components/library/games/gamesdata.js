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

  // FREE ADVENTURE GAMES
  {
    id: 6,
    title: "Genshin Impact",
    category: "Adventure",
    image: "https://fastcdn.hoyoverse.com/content-v2/hk4e/102815/6abfe3b8ab2bb72d3cc4b2d6d3cf29b3_8097346616678178616.png",
    description: "Step into Teyvat, a vast world teeming with life and flowing with elemental energy. Discover mysteries, explore diverse landscapes, and embark on an unforgettable journey.",
    size: "72 GB",
    requirements: "Windows 7, Intel i5-2500K/AMD FX-6300, 8GB RAM, GTX 1030/RX 550",
    downloadLink: "https://genshin.hoyoverse.com/en/download"
  },
  {
    id: 7,
    title: "Honkai Star Rail",
    category: "Adventure",
    image: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/109099/09c3df50ffe432db5bcddffd4b9cce96_7781131822970453704.png",
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
    image: "https://play-lh.googleusercontent.com/nOTk7Z6vGS2ZF-6-3XQKfPtBmCTb-_QqWYQp8bB3TqZRwBmgNQAkVHzQ6xKyJFDUjQ",
    description: "A classic JRPG adventure through time and space. Experience an epic story with beautiful music and timeless gameplay in this free mobile adventure.",
    size: "4 GB",
    requirements: "iOS 9.0+ / Android 4.4+",
    downloadLink: "https://another-eden.jp/en/"
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
    image: "https://play-lh.googleusercontent.com/HIW6JhwOoVxVn5PtlzUe-dTgaYNXXu-4KI5RrEKBVlpGSsJd7r_5ZqBaF3dY3bHzIvI",
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

  // FREE PUZZLE GAMES
  {
    id: 21,
    title: "Tetris (Online)",
    category: "Puzzle",
    image: "https://tetris.com/static/images/og-image.png",
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
    image: "https://play2048.co/images/og_image.png",
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
    image: "https://play-lh.googleusercontent.com/YmIWkgPcf5U3O9mUg6OHTX9e-lP-Vp7pQ6pXUXUQm8QKZVjBZXrRGKOGQ3y8yPNZ",
    description: "The classic number placement puzzle. Train your brain with thousands of Sudoku puzzles across multiple difficulty levels.",
    size: "50 MB",
    requirements: "iOS 9.0+ / Android 4.1+",
    downloadLink: "https://sudoku.com/"
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
    image: "https://foelogo.innogamescdn.com/assets/shared/foe_logo.png",
    description: "Build and manage your city through different historical eras. Develop technologies, expand your empire, and engage with other players online.",
    size: "1 GB",
    requirements: "Web Browser with HTML5 support / Mobile Device",
    downloadLink: "https://en.forgeofempires.com/"
  },
  {
    id: 35,
    title: "0 A.D.",
    category: "Strategy",
    image: "https://play0ad.com/wp-content/uploads/2010/12/0ad_logo.png",
    description: "A free, open-source historical RTS game. Command ancient civilizations and build your empire with detailed historical accuracy and engaging gameplay.",
    size: "6 GB",
    requirements: "Windows 7, Intel Core 2 Duo/AMD Athlon 64 X2, 1GB RAM, OpenGL 1.3 compatible",
    downloadLink: "https://play0ad.com/download/"
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
    image: "https://www.fightcade.com/img/logo.png",
    description: "Play classic arcade fighters online with perfect emulation. Experience legendary games like Street Fighter III, King of Fighters, and more.",
    size: "500 MB",
    requirements: "Windows 7, Intel Dual Core 2.0GHz, 2GB RAM, DirectX 9 compatible",
    downloadLink: "https://www.fightcade.com/"
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
    image: "https://www.classicgaming.cc/classics/asteroids/images/asteroids-logo.png",
    description: "The classic space shooter from 1979. Destroy asteroids and flying saucers while avoiding collisions in this timeless arcade experience.",
    size: "5 MB",
    requirements: "Web Browser with HTML5 support",
    downloadLink: "https://www.classicgaming.cc/classics/asteroids/play-asteroids"
  },
  {
    id: 45,
    title: "Geometry Dash Lite",
    category: "Arcade",
    image: "https://play-lh.googleusercontent.com/B2PlMo7RTqH8LRFnA1sV_MkhBVBZNYq9KJnXdaU9rW4kPAjTTZjLzFWepQOgJHtFB10",
    description: "Jump and fly your way through danger in this rhythm-based action platformer. Featuring awesome soundtrack and addictive gameplay.",
    size: "100 MB",
    requirements: "iOS 8.0+ / Android 4.0+",
    downloadLink: "https://store.steampowered.com/app/322170/Geometry_Dash/"
  }
];

export default gamesData;