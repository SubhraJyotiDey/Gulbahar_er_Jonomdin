// App logic for Koninika's 20th Birthday Website

const defaultConfig = {
  // General & Fonts
  targetDate: "October 14, 2026 00:00:00",
  // Fonts Configuration
  heroTitleFont: "'Fredoka', sans-serif",
  heroSubtitleFont: "'Fredoka', sans-serif",
  sectionHeaderFont: "'Fredoka', sans-serif",
  polaroidCaptionFont: "'Caveat', cursive",
  spotifyFont: "'Fredoka', sans-serif",
  gameFont: "'Playpen Sans', sans-serif",
  voucherFont: "'Playpen Sans', sans-serif",
  jarLabelFont: "'Caveat', cursive",
  jarBubbleFont: "'Caveat', cursive",
  letterSalutationFont: "'Caveat', cursive",
  letterBodyFont: "'Playpen Sans', sans-serif",
  letterSignatureFont: "'Caveat', cursive",
  wishCardFont: "'Fredoka', sans-serif",
  
  // Hero Screen
  heroTitle: "Koninika's",
  heroSubtitle: "Birthday",
  heroBadge: "14.10.2026",
  heroFooter: "Wednesday, 14th Oct 2026",
  
  // Countdown Screen
  countdownTitle: "Counting Down...",
  countdownSubtitle: "to the happiest day of the year!",
  countdownAge: "💖 Turning 20! 💖",
  
  // Scrapbook / Good Moments
  scrapbookTitle: "Good Moments",
  scrapbookSubtitle: "A collection of beautiful moments 📸",
  spotifyTitle: "Gulbahar (গুলবাহার)",
  spotifyArtist: "Ishaan x Shuvendu Das Shuvo",
  captions: [],
  captionsBack: [
    "You bring the biggest smiles on the gloomiest days! ☀️✨",
    "I cherish every single laugh, joke, and memory we share! 🏡✨",
    "This video of you is genuinely the funniest & cutest thing! 📹✨",
    "Sweetest memory ever! So glad to have a friend like you. 🍯🤝",
    "You look absolutely stunning. Simply gorgeous! 🌸👑",
    "Your smile brings genuine joy to everyone around you. 🌸✨",
    "You are genuinely the truest and best friend anyone could ask for. Happy Birthday! 🥇🎉",
    "Walking under the starry night sky with great company is pure magic. 🌌🍃✨"
  ],
  
  // Game
  gameTitle: "Happy Jump! 🎮",
  gameSubtitle: "Reach score 20 to unlock your gift!",
  gameStartTitle: "Flappy Koninika 🎈",
  gameStartDesc: "Tap the screen to fly, dodge the guitars & ukuleles, and collect floating hearts to reach score **20**!",
  voucherTitle: "The Golden Friendship Pass 👑",
  voucherDesc: "This golden pass entitles **Koninika** to 1 unconditional favor, an unlimited food & dessert feast, anytime hangouts, and 24/7 listening support! 🍕🎉🤝",
  voucherSeal: "★ TICKET #KONU-20 • FROM YOUR BEST FRIEND 🤝✨ • VALID FOREVER ★",
  
  // Jar
  jarTitle: "Love Candy Jar",
  jarSubtitle: "Tap the jar to pop a sweet reason why I love you! 🍬",
  jarLabel: "Koninika's Sweets 💖",
  compliments: [
    "Your smile lights up my entire world. ☀️💖",
    "How deeply you care about the people around you. 🌟👩‍❤️‍👨",
    "Your adorable laugh is my absolute favorite sound! 🎶🌸",
    "How you always find beauty in the smallest things. 🍀✨",
    "You make even the most ordinary days feel like an adventure. 🚀💫",
    "Your kindness inspires me to be a better person. 🤝❤️",
    "How cute you look when you're sleepy or focused on something. 💤🧸",
    "You are my absolute favorite person to laugh with. 😂💞",
    "Your incredible style and grace in everything you do. 👗💅",
    "The way you hold my hand and instantly make everything okay. 🤝🥰",
    "Your sweet voice that instantly calms me down. 🎙️❤️",
    "How supportive and proud you always are of me. 🏆💖"
  ],
  
  // Letter
  letterTitle: "My Message",
  letterSubtitle: "A letter written just for you ✉️",
  letterHeader: "Dearest Koninika,",
  letterBody: "Happy 20th Birthday! 💖\n\nToday is a milestone, and I wanted to make something as unique and beautiful as you are. Watching you grow, smile, and light up every room you enter is the greatest joy of my life. \n\nYou make every day feel like a celebration, and today is all about celebrating YOU. Thank you for being your amazing, kind, and wonderful self.\n\nHere's to 20 years of you spreading joy, and to many, many more shared birthdays, laughs, and beautiful memories. You deserve the world today and always.",
  letterSignature: "With all my love,\nYour Birthday Boy",
  
  // Cake
  cakeTitle: "Make a Wish",
  cakeSubtitle: "Tap the candles or blow into mic to blow them out! 🎂",
  wishTitle: "🎉 HAPPY 20TH BIRTHDAY! 🎉",
  wishText: "May all your wishes, dreams, and hopes come true, Koninika. You are the most special person in the world, and I hope this birthday brings you endless happiness, laughter, and love. 💖✨"
};

document.addEventListener('DOMContentLoaded', () => {
  // Load configuration
  const config = JSON.parse(localStorage.getItem('koninika_birthday_config')) || defaultConfig;

  // Apply CMS text and fonts to the DOM
  function applyConfigToDOM() {
    // Fonts Overrides
    document.documentElement.style.setProperty('--font-hero-title-override', config.heroTitleFont);
    document.documentElement.style.setProperty('--font-hero-subtitle-override', config.heroSubtitleFont);
    document.documentElement.style.setProperty('--font-section-header-override', config.sectionHeaderFont);
    document.documentElement.style.setProperty('--font-caption-override', config.polaroidCaptionFont);
    document.documentElement.style.setProperty('--font-spotify-override', config.spotifyFont);
    document.documentElement.style.setProperty('--font-game-override', config.gameFont);
    document.documentElement.style.setProperty('--font-voucher-override', config.voucherFont);
    document.documentElement.style.setProperty('--font-jar-label-override', config.jarLabelFont);
    document.documentElement.style.setProperty('--font-jar-bubble-override', config.jarBubbleFont);
    document.documentElement.style.setProperty('--font-letter-salutation-override', config.letterSalutationFont);
    document.documentElement.style.setProperty('--font-letter-body-override', config.letterBodyFont);
    document.documentElement.style.setProperty('--font-letter-sig-override', config.letterSignatureFont);
    document.documentElement.style.setProperty('--font-wish-card-override', config.wishCardFont);

    // Cover Page
    document.querySelector('.retro-title').innerText = config.heroTitle;
    document.querySelector('.retro-title-shadow').innerText = config.heroTitle;
    document.querySelector('.retro-subtitle').innerText = config.heroSubtitle;
    document.querySelector('.retro-subtitle-shadow').innerText = config.heroSubtitle;
    document.querySelector('.birthday-badge').innerText = config.heroBadge;
    document.querySelector('.cover-footer p').innerText = config.heroFooter;

    // Countdown Page
    document.querySelector('#countdown-sec .section-title').innerText = config.countdownTitle;
    document.querySelector('#countdown-sec .section-subtitle').innerText = config.countdownSubtitle;
    document.querySelector('.age-badge-text').innerText = config.countdownAge;

    // Scrapbook Section
    document.querySelector('#scrapbook-sec .section-title').innerText = config.scrapbookTitle;
    document.querySelector('#scrapbook-sec .section-subtitle').innerText = config.scrapbookSubtitle;
    document.querySelector('.spotify-track-title').innerText = config.spotifyTitle;
    document.querySelector('.spotify-track-artist').innerText = config.spotifyArtist;

    // Back Captions for 3D flip notes
    const backCaptions = document.querySelectorAll('.polaroid-back .back-note-text');
    backCaptions.forEach((el, index) => {
      if (config.captionsBack && config.captionsBack[index]) {
        el.innerText = config.captionsBack[index];
      } else if (defaultConfig.captionsBack && defaultConfig.captionsBack[index]) {
        el.innerText = defaultConfig.captionsBack[index];
      }
    });

    // Game Section
    if (document.querySelector('#game-sec')) {
      document.querySelector('#game-sec .section-title').innerText = config.gameTitle;
      document.querySelector('#game-sec .section-subtitle').innerText = config.gameSubtitle;
      const startH4 = document.querySelector('#game-start-overlay h4');
      if (startH4) startH4.innerText = config.gameStartTitle || "Happy Jump! 🎈";
      const startP = document.querySelector('#game-start-overlay p');
      if (startP) startP.innerText = config.gameStartDesc || "Tap to fly, dodge the guitars & ukuleles, and collect hearts!";
      const vTitle = document.querySelector('.voucher-title');
      if (vTitle) vTitle.innerText = config.voucherTitle;
      const vDesc = document.querySelector('.voucher-desc');
      if (vDesc) vDesc.innerText = config.voucherDesc;
      const vSeal = document.querySelector('.voucher-seal');
      if (vSeal) vSeal.innerText = config.voucherSeal;
    }

    // Candy Jar Section (if present)
    if (document.querySelector('#jar-sec')) {
      document.querySelector('#jar-sec .section-title').innerText = config.jarTitle;
      document.querySelector('#jar-sec .section-subtitle').innerText = config.jarSubtitle;
      const jLab = document.querySelector('.jar-label');
      if (jLab) jLab.innerText = config.jarLabel;
    }

    // Letter Section (if present)
    if (document.querySelector('#letter-sec')) {
      document.querySelector('#letter-sec .section-title').innerText = config.letterTitle;
      document.querySelector('#letter-sec .section-subtitle').innerText = config.letterSubtitle;
      const letterContent = document.querySelector('.letter-content');
      if (letterContent) {
        letterContent.innerHTML = '';
        const h4 = document.createElement('h4');
        h4.innerText = config.letterHeader;
        letterContent.appendChild(h4);

        const paragraphs = config.letterBody.split('\n');
        paragraphs.forEach(pText => {
          if (pText.trim() !== '') {
            const p = document.createElement('p');
            p.innerText = pText.trim();
            letterContent.appendChild(p);
          }
        });

        const signature = document.createElement('p');
        signature.className = 'letter-signature';
        const sigLines = config.letterSignature.split('\n');
        signature.innerHTML = `${sigLines[0]} <br><span class="signature-name">${sigLines[1] || ''}</span>`;
        letterContent.appendChild(signature);
      }
    }

    // Cake Section
    document.querySelector('#cake-sec .section-title').innerText = config.cakeTitle;
    document.querySelector('#cake-sec .section-subtitle').innerText = config.cakeSubtitle;
  }

  // Load and apply texts
  applyConfigToDOM();

  // Elements
  const appContainer = document.getElementById('app-container');
  const coverPage = document.getElementById('cover-page');
  const mainContent = document.getElementById('main-content');
  const unlockBtn = document.getElementById('unlock-btn');
  const musicBtn = document.getElementById('music-btn');
  const bgMusic = document.getElementById('bg-music');
  const scrollContainer = document.querySelector('.scroll-container');
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');
  const balloonContainer = document.getElementById('balloon-container');
  const confettiCanvas = document.getElementById('confetti-canvas');
  const sparksCanvas = document.getElementById('sparks-canvas');
  
  // Microphone elements
  const micStatusText = document.getElementById('mic-status-text');
  
  // Spotify elements
  const spotifyPlayBtn = document.getElementById('spotify-widget-play');
  const spotifyPlayIcon = document.getElementById('spotify-widget-play-icon');
  const spotifyProgressFill = document.getElementById('spotify-progress');
  const spotifyTimeCur = document.getElementById('spotify-time-cur');
  const spotifyTimeTotal = document.getElementById('spotify-time-total');
  const spotifyCard = document.querySelector('.spotify-card');

  // Game Elements
  const gameCanvas = document.getElementById('game-canvas');
  const gCtx = gameCanvas.getContext('2d');
  const gameScoreVal = document.getElementById('game-score-val');
  const gameStartOverlay = document.getElementById('game-start-overlay');
  const gameWinOverlay = document.getElementById('game-win-overlay');
  const gameOverOverlay = document.getElementById('game-over-overlay');
  const gameStartBtn = document.getElementById('game-start-btn');
  const gameRestartBtn = document.getElementById('game-restart-btn');
  const gameClaimBtn = document.getElementById('game-claim-btn');
  const gameContinueBtn = document.getElementById('game-continue-btn');
  const gameWinRestartBtn = document.getElementById('game-win-restart-btn');
  const gameViewGiftBtn = document.getElementById('game-view-gift-btn');
  
  // Game & Gift States
  let giftCollected = false;
  let endlessMode = false;
  let isWinScreenShown = false;
  
  // Scratch Card Elements
  const scratchCanvas = document.getElementById('scratch-canvas');
  const scrCtx = scratchCanvas ? scratchCanvas.getContext('2d') : null;

  // Love Jar Elements (if present)
  const loveJar = document.getElementById('love-jar');
  const reasonBubble = document.getElementById('reason-bubble');
  const reasonText = reasonBubble ? reasonBubble.querySelector('.reason-text') : null;

  // Set up background music path safely
  bgMusic.src = "Gulbahar _ গুলবাহার _ Ishaan এর Gaan _ Shuvendu Das Shuvo _ Official Music Video.mp3";

  // Mascot Elements & State
  const aluContainer = document.getElementById('alu-container');
  const aluBubble = document.getElementById('alu-bubble');
  let isGiftUnwrapped = false;
  let bubbleTimeout = null;

  // Flappy Bird Audio Elements & State
  const flappyTheme = document.getElementById('flappy-theme') || new Audio('flappy bird theme.m4a');
  const flappyCollision = document.getElementById('flappy-collision') || new Audio('collision.mp4');
  const flappyCollisionVideo = document.getElementById('flappy-collision-video');
  if (flappyTheme) {
    flappyTheme.volume = 0.45;
  }
  if (flappyCollision) {
    flappyCollision.volume = 0.7;
  }
  let wasBgMusicPlayingBeforeFlappy = false;

  function playFlappyCollisionSound() {
    if (flappyCollision) {
      flappyCollision.currentTime = 0;
      flappyCollision.play().catch(() => {
        if (flappyCollisionVideo) {
          flappyCollisionVideo.currentTime = 0;
          flappyCollisionVideo.play().catch(() => {});
        }
      });
    } else if (flappyCollisionVideo) {
      flappyCollisionVideo.currentTime = 0;
      flappyCollisionVideo.play().catch(() => {});
    }
  }

  // INJECT DYNAMIC BALLOON CSS ANIMATION
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes floatUp {
      0% {
        transform: translateY(105vh) translateX(0) rotate(0deg);
      }
      50% {
        transform: translateY(50vh) translateX(var(--sway-distance)) rotate(var(--sway-angle));
      }
      100% {
        transform: translateY(-150px) translateX(0) rotate(0deg);
      }
    }
    .jar-shake {
      animation: jarShake 0.4s ease;
    }
    @keyframes jarShake {
      0%, 100% { transform: scale(1) rotate(0deg); }
      20% { transform: scale(0.95) rotate(-6deg); }
      40% { transform: scale(0.95) rotate(6deg); }
      60% { transform: scale(1) rotate(-4deg); }
      80% { transform: scale(1) rotate(4deg); }
    }
  `;
  document.head.appendChild(styleSheet);

  function triggerHeartBurst() {
    const buttonRect = unlockBtn.getBoundingClientRect();
    // Safety check if button is visible/rendered
    if (!buttonRect || buttonRect.width === 0) return;
    const startX = buttonRect.left + buttonRect.width / 2;
    const startY = buttonRect.top + buttonRect.height / 2;
    
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.innerText = ['💖', '💝', '✨', '❤️', '🌸'][Math.floor(Math.random() * 5)];
        heart.style.position = 'absolute';
        heart.style.left = startX + 'px';
        heart.style.top = startY + 'px';
        heart.style.fontSize = (Math.random() * 1.2 + 1.2) + 'rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 6 + 4;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity - 3;
        
        let posX = startX;
        let posY = startY;
        let opacity = 1;
        
        document.body.appendChild(heart);
        
        const animate = () => {
          posX += vx;
          posY += vy;
          opacity -= 0.015;
          heart.style.left = posX + 'px';
          heart.style.top = posY + 'px';
          heart.style.opacity = opacity;
          
          if (opacity > 0) {
            requestAnimationFrame(animate);
          } else {
            heart.remove();
          }
        };
        requestAnimationFrame(animate);
      }, i * 40);
    }
  }

  // --- 1. UNLOCK PAGE & AUDIO TRIGGER ---
  unlockBtn.addEventListener('click', () => {
    isGiftUnwrapped = true;

    // Dismiss initial cover bubble when unwrap gift is clicked
    if (aluBubble) {
      aluBubble.classList.remove('reveal');
      if (bubbleTimeout) clearTimeout(bubbleTimeout);
    }

    // Play music (Required user interaction for mobile browsers)
    playMusic();

    // Trigger hearts explosion animation
    triggerHeartBurst();

    // Request microphone access immediately upon user unlock interaction
    startMicrophone();

    // Slide up cover
    coverPage.classList.add('slide-up');
    mainContent.classList.remove('hidden');
    
    // Add micro delay for smooth opacity fade-in of main content
    setTimeout(() => {
      mainContent.classList.add('visible');
      // Trigger opening confetti shower
      triggerConfetti(3);
    }, 400);

    // Start spawning balloons
    startBalloonSpawning();
  });

  // --- 2. MUSIC PLAY / PAUSE CONTROLS ---
  function playMusic() {
    bgMusic.play()
      .then(() => {
        musicBtn.classList.remove('hidden');
        musicBtn.classList.add('playing');
        spotifyCard.classList.add('playing');
        updateSpotifyPlayIcon(true);
      })
      .catch(err => console.log("Audio autoplay failed:", err));
  }

  function pauseMusic() {
    bgMusic.pause();
    musicBtn.classList.remove('playing');
    spotifyCard.classList.remove('playing');
    updateSpotifyPlayIcon(false);
  }

  function toggleMusic() {
    if (bgMusic.paused) {
      playMusic();
    } else {
      pauseMusic();
    }
  }

  musicBtn.addEventListener('click', toggleMusic);
  
  // Spotify Widget play button syncs directly
  if (spotifyPlayBtn) {
    spotifyPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid triggering card zoom
      toggleMusic();
    });
  }

  function updateSpotifyPlayIcon(isPlaying) {
    if (!spotifyPlayIcon) return;
    if (isPlaying) {
      spotifyPlayIcon.innerHTML = `<path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />`;
    } else {
      spotifyPlayIcon.innerHTML = `<path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />`;
    }
  }

  // --- 3. SPOTIFY WIDGET REAL-TIME FEEDBACK ---
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds === Infinity) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  bgMusic.addEventListener('durationchange', () => {
    if (spotifyTimeTotal) {
      spotifyTimeTotal.innerText = formatTime(bgMusic.duration);
    }
  });

  bgMusic.addEventListener('timeupdate', () => {
    if (bgMusic.duration) {
      const percentage = (bgMusic.currentTime / bgMusic.duration) * 100;
      if (spotifyProgressFill) {
        spotifyProgressFill.style.width = `${percentage}%`;
      }
      if (spotifyTimeCur) {
        spotifyTimeCur.innerText = formatTime(bgMusic.currentTime);
      }
    }
  });

  // Tap on Spotify progress bar to scrub track
  const progressContainer = document.querySelector('.spotify-progress-bar');
  if (progressContainer) {
    progressContainer.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid card zoom
      const rect = progressContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const fraction = clickX / width;
      bgMusic.currentTime = fraction * bgMusic.duration;
    });
  }

  // --- 4. COUNTDOWN TIMER LOGIC ---
  const birthdayDate = new Date(config.targetDate).getTime();
  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance < 0) {
      // It is her birthday!
      document.querySelector('.section-title').innerHTML = "🎉 Happy Birthday Koninika! 🎉";
      document.querySelector('.section-subtitle').innerHTML = "Today is your day! 💖";
      document.getElementById('days').innerText = "00";
      document.getElementById('hours').innerText = "00";
      document.getElementById('mins').innerText = "00";
      document.getElementById('secs').innerText = "00";
      return;
    }

    // Calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('mins').innerText = String(minutes).padStart(2, '0');
    document.getElementById('secs').innerText = String(seconds).padStart(2, '0');
  }

  // Initial call and run every second
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // --- 5. FLOATING PASTEL BALLOONS ---
  const pastelColors = [
    'rgba(255, 192, 203, 0.85)', // light pink
    'rgba(173, 216, 230, 0.85)', // light blue
    'rgba(230, 230, 250, 0.85)', // lavender
    'rgba(255, 228, 225, 0.85)', // misty rose
    'rgba(255, 253, 208, 0.85)', // cream
    'rgba(216, 191, 216, 0.85)', // thistle
    'rgba(255, 218, 185, 0.85)'  // peach puff
  ];

  function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    
    const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    balloon.style.backgroundColor = color;
    balloon.style.color = color;

    const width = Math.random() * 15 + 45;
    const height = width * 1.25;
    balloon.style.width = width + 'px';
    balloon.style.height = height + 'px';
    balloon.style.left = Math.random() * 90 + '%';

    const swayDistance = (Math.random() * 50 - 25) + 'px';
    const swayAngle = (Math.random() * 15 - 7.5) + 'deg';
    balloon.style.setProperty('--sway-distance', swayDistance);
    balloon.style.setProperty('--sway-angle', swayAngle);

    const duration = Math.random() * 6 + 7;
    balloon.style.animation = `floatUp ${duration}s linear forwards`;

    const string = document.createElement('div');
    string.className = 'balloon-string';
    balloon.appendChild(string);

    // Interactive Pop Event
    balloon.addEventListener('click', () => popBalloon(balloon));
    balloon.addEventListener('touchstart', (e) => {
      e.preventDefault();
      popBalloon(balloon);
    });

    balloonContainer.appendChild(balloon);

    setTimeout(() => {
      if (balloon.parentNode === balloonContainer) {
        balloon.remove();
      }
    }, duration * 1000);
  }

  function popBalloon(balloon) {
    if (balloon.classList.contains('popped')) return;
    
    balloon.classList.add('popped');
    const rect = balloon.getBoundingClientRect();
    const balloonX = rect.left + rect.width / 2;
    const balloonY = rect.top + rect.height / 2;
    spawnLocalConfetti(balloonX, balloonY, balloon.style.backgroundColor);
    
    setTimeout(() => balloon.remove(), 200);
  }

  function startBalloonSpawning() {
    for(let i=0; i<8; i++) {
      setTimeout(createBalloon, Math.random() * 4000);
    }
    setInterval(createBalloon, 2200);
  }

  // --- 6. INTERACTIVE ENVELOPE OPENING ---
  const envelopeWrapper = document.querySelector('.envelope-wrapper');
  if (envelopeWrapper) {
    envelopeWrapper.addEventListener('click', () => {
      envelopeWrapper.classList.toggle('open');
    });
  }

  // --- 7. CAKE BLOWING GAME (TOUCH + MIC BLOWING) ---
  const candles = document.querySelectorAll('.candle');
  let extinguishedCount = 0;
  let micStream = null;
  let micAudioContext = null;

  // Extinguish next candle logic
  function extinguishNextCandle() {
    const unlitCandles = Array.from(candles).filter(c => !c.classList.contains('extinguished'));
    if (unlitCandles.length > 0) {
      const candle = unlitCandles[0];
      candle.classList.add('extinguished');
      extinguishedCount++;

      const smoke = document.createElement('div');
      smoke.className = 'smoke';
      candle.appendChild(smoke);

      // Confetti pop on candle location
      const rect = candle.getBoundingClientRect();
      spawnLocalConfetti(rect.left + rect.width / 2, rect.top, "#FF1A75");

      if (extinguishedCount === candles.length) {
        stopMicrophone();
        triggerWishUnwrapping();
      }
    }
  }

  // Handle Touch/Click Fallback
  candles.forEach(candle => {
    const extinguishAction = (e) => {
      if (candle.classList.contains('extinguished')) return;
      
      e.preventDefault();
      candle.classList.add('extinguished');
      extinguishedCount++;

      const smoke = document.createElement('div');
      smoke.className = 'smoke';
      candle.appendChild(smoke);

      if (extinguishedCount === candles.length) {
        stopMicrophone();
        triggerWishUnwrapping();
      }
    };

    candle.addEventListener('click', extinguishAction);
    candle.addEventListener('touchstart', extinguishAction);
  });

  function startMicrophone() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.warn("Microphone not supported or blocked by insecure context (HTTP)");
      micStatusText.innerText = "🚨 Mic Disabled on HTTP (Tap candles to blow them out!)";
      micStatusText.classList.remove('hidden');
      return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        micStream = stream;
        micStatusText.classList.remove('hidden');
        
        micAudioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = micAudioContext.createAnalyser();
        const microphone = micAudioContext.createMediaStreamSource(stream);
        const javascriptNode = micAudioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.4;
        analyser.fftSize = 512;

        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(micAudioContext.destination);

        let lastBlowTime = 0;

        javascriptNode.onaudioprocess = () => {
          if (!micStream) return;
          const array = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(array);
          let values = 0;

          const length = array.length;
          for (let i = 0; i < length; i++) {
            values += array[i];
          }

          const average = values / length;
          
          // If average volume exceeds blowing threshold (60)
          if (average > 60) {
            const now = Date.now();
            if (now - lastBlowTime > 500) { // 500ms cooldown
              extinguishNextCandle();
              lastBlowTime = now;
            }
          }
        };
      })
      .catch(err => {
        console.error("Microphone access denied or error:", err);
        micStatusText.innerText = "🚨 Mic Blocked (Tap candles to blow them out!)";
        micStatusText.classList.remove('hidden');
      });
  }

  function stopMicrophone() {
    if (micStream) {
      micStream.getTracks().forEach(track => track.stop());
      micStream = null;
    }
    if (micAudioContext) {
      micAudioContext.close();
      micAudioContext = null;
    }
    micStatusText.classList.add('hidden');
  }

  let sweetsRevealed = false;

  function triggerWishUnwrapping() {
    sweetsRevealed = true;
    if (typeof updateAluForSection === 'function') {
      updateAluForSection('sweets-revealed');
    }
    
    setTimeout(() => {
      triggerConfetti(8);
      
      const sweetsReveal = document.getElementById('sweets-reveal');
      sweetsReveal.classList.add('reveal');

      setTimeout(() => {
        sweetsReveal.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);

      for (let i = 0; i < 25; i++) {
        setTimeout(createBalloon, Math.random() * 1500);
      }
    }, 800);
  }

  // --- Birthday Instrumental plays when cake section scrolls into view ---
  const birthdayInstrumental = document.getElementById('birthday-instrumental');
  const cakeSec = document.getElementById('cake-sec');
  let birthdayMusicPlaying = false;
  let wasMusicPlayingBeforeCake = false;
  let fadeInterval = null;

  function fadeOutMusic(audio, callback) {
    if (fadeInterval) clearInterval(fadeInterval);
    let vol = audio.volume;
    fadeInterval = setInterval(() => {
      if (vol > 0.05) {
        vol -= 0.05;
        audio.volume = Math.max(0, vol);
      } else {
        clearInterval(fadeInterval);
        audio.pause();
        audio.volume = 1.0; // Restore volume
        if (callback) callback();
      }
    }, 50);
  }

  if (birthdayInstrumental && cakeSec) {
    birthdayInstrumental.volume = 0.5;
    birthdayInstrumental.loop = true;

    const cakeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!birthdayMusicPlaying) {
            birthdayMusicPlaying = true;
            wasMusicPlayingBeforeCake = !bgMusic.paused;
            
            if (wasMusicPlayingBeforeCake) {
              fadeOutMusic(bgMusic, () => {
                birthdayInstrumental.volume = 0.5;
                birthdayInstrumental.play().catch(() => {});
              });
            } else {
              birthdayInstrumental.volume = 0.5;
              birthdayInstrumental.play().catch(() => {});
            }
          }
        } else {
          if (birthdayMusicPlaying) {
            birthdayMusicPlaying = false;
            birthdayInstrumental.pause();
            
            if (wasMusicPlayingBeforeCake && musicBtn.classList.contains('playing')) {
              bgMusic.volume = 0.1;
              bgMusic.play().catch(() => {});
              // Fade back in
              let vol = 0.1;
              const fadeInInterval = setInterval(() => {
                if (vol < 1.0) {
                  vol += 0.05;
                  bgMusic.volume = Math.min(1.0, vol);
                } else {
                  clearInterval(fadeInInterval);
                }
              }, 50);
            }
          }
        }
      });
    }, { threshold: 0.3 });

    cakeObserver.observe(cakeSec);
  }

  // --- 8. POLAROID CARD FLIP & ZOOM ---
  const cardContainers = document.querySelectorAll('.card-3d-container');
  
  cardContainers.forEach(container => {
    const img = container.querySelector('.polaroid-front img');
    
    // Zoom photo on image click
    if (img) {
      img.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent flipping
        
        const overlay = document.createElement('div');
        overlay.className = 'showcase-overlay';
        overlay.innerHTML = `
          <div class="overlay-card">
            <img src="${img.src}" alt="Zoomed">
            ${container.querySelector('.card-caption') ? `<p class="overlay-caption">${container.querySelector('.card-caption').innerText}</p>` : ''}
            <span class="close-overlay">✕ Close</span>
          </div>
        `;
        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add('active'), 10);

        const closeOverlay = () => {
          overlay.classList.remove('active');
          setTimeout(() => overlay.remove(), 300);
        };
        overlay.addEventListener('click', closeOverlay);
      });
    }

    // Flip card on card body click
    container.addEventListener('click', (e) => {
      // Don't flip if video element or controls clicked
      if (e.target.tagName === 'VIDEO' || e.target.closest('video') || e.target.hasAttribute('controls')) {
        return;
      }
      container.classList.toggle('flipped');
    });
  });

  // --- 9. INTERACTIVE TOUCH SPARKLES / HEART TRAIL ---
  const sCtx = sparksCanvas.getContext('2d');
  let particles = [];

  function resizeSparksCanvas() {
    sparksCanvas.width = appContainer.clientWidth;
    sparksCanvas.height = appContainer.clientHeight;
  }
  window.addEventListener('resize', resizeSparksCanvas);
  resizeSparksCanvas();

  class TrailParticle {
    constructor(x, y) {
      const parentRect = appContainer.getBoundingClientRect();
      this.x = x - parentRect.left;
      this.y = y - parentRect.top;
      this.size = Math.random() * 8 + 8;
      this.color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * -1.8 - 0.5; // Drift upwards
      this.alpha = 1;
      this.decay = Math.random() * 0.02 + 0.015;
      this.rotation = Math.random() * 360;
      this.rotSpeed = Math.random() * 2 - 1;
      this.type = Math.random() < 0.5 ? 'heart' : 'sparkle';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotSpeed;
      this.alpha -= this.decay;
    }

    draw() {
      sCtx.save();
      sCtx.globalAlpha = this.alpha;
      sCtx.translate(this.x, this.y);
      sCtx.rotate((this.rotation * Math.PI) / 180);
      sCtx.fillStyle = this.color;

      if (this.type === 'heart') {
        sCtx.beginPath();
        const size = this.size;
        sCtx.moveTo(0, size / 4);
        sCtx.quadraticCurveTo(0, -size / 2, -size / 2, -size / 2);
        sCtx.quadraticCurveTo(-size, -size / 2, -size, size / 4);
        sCtx.quadraticCurveTo(-size, size * 0.8, 0, size * 1.3);
        sCtx.quadraticCurveTo(size, size * 0.8, size, size / 4);
        sCtx.quadraticCurveTo(size, -size / 2, size / 2, -size / 2);
        sCtx.quadraticCurveTo(0, -size / 2, 0, size / 4);
        sCtx.closePath();
        sCtx.fill();
      } else {
        sCtx.beginPath();
        const r = this.size;
        for (let i = 0; i < 4; i++) {
          sCtx.lineTo(Math.cos(i * Math.PI / 2) * r, Math.sin(i * Math.PI / 2) * r);
          sCtx.lineTo(Math.cos((i * Math.PI / 2) + Math.PI / 4) * (r / 3.5), Math.sin((i * Math.PI / 2) + Math.PI / 4) * (r / 3.5));
        }
        sCtx.closePath();
        sCtx.fill();
      }
      sCtx.restore();
    }
  }

  function handlePointer(e) {
    particles.push(new TrailParticle(e.clientX, e.clientY));
  }

  function handleTouch(e) {
    const t = e.touches[0];
    if (t) {
      particles.push(new TrailParticle(t.clientX, t.clientY));
    }
  }

  appContainer.addEventListener('pointermove', handlePointer);
  appContainer.addEventListener('touchmove', handleTouch);
  
  appContainer.addEventListener('click', (e) => {
    for (let i = 0; i < 8; i++) {
      const p = new TrailParticle(e.clientX, e.clientY);
      p.speedX = Math.random() * 4 - 2;
      p.speedY = Math.random() * -3 - 1;
      particles.push(p);
    }
  });

  function animateTrails() {
    sCtx.clearRect(0, 0, sparksCanvas.width, sparksCanvas.height);
    particles.forEach((p, idx) => {
      p.update();
      p.draw();
      if (p.alpha <= 0) {
        particles.splice(idx, 1);
      }
    });
    requestAnimationFrame(animateTrails);
  }
  animateTrails();


  // --- 10. CANVAS CONFETTI SYSTEM ---
  const ctx = confettiCanvas.getContext('2d');
  let confettiParticles = [];
  let animationFrameId = null;

  function resizeCanvas() {
    confettiCanvas.width = appContainer.clientWidth;
    confettiCanvas.height = appContainer.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Confetti {
    constructor(x, y, colorCode) {
      this.x = x || Math.random() * confettiCanvas.width;
      this.y = y || Math.random() * -confettiCanvas.height - 20;
      this.size = Math.random() * 6 + 6;
      this.color = colorCode || pastelColors[Math.floor(Math.random() * pastelColors.length)];
      this.speedY = Math.random() * 3 + 2;
      this.speedX = Math.random() * 2 - 1;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 4 - 2;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotationSpeed;
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }

  function triggerConfetti(durationSeconds) {
    for(let i=0; i<80; i++) {
      confettiParticles.push(new Confetti());
    }

    let start = Date.now();
    
    function animate() {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      
      if (Date.now() - start < durationSeconds * 1000) {
        if (Math.random() < 0.4) {
          confettiParticles.push(new Confetti());
        }
      }

      confettiParticles.forEach((p, idx) => {
        p.update();
        p.draw();
        
        if (p.y > confettiCanvas.height) {
          confettiParticles.splice(idx, 1);
        }
      });

      if (confettiParticles.length > 0) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        cancelAnimationFrame(animationFrameId);
      }
    }
    
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    animate();
  }

  function spawnLocalConfetti(x, y, color) {
    const parentRect = appContainer.getBoundingClientRect();
    const canvasX = x - parentRect.left;
    const canvasY = y - parentRect.top;

    const locals = [];
    for(let i=0; i<15; i++) {
      const p = new Confetti(canvasX, canvasY, color);
      p.speedY = Math.random() * 4 - 2;
      p.speedX = Math.random() * 4 - 2;
      locals.push(p);
    }

    confettiParticles.push(...locals);
    if (!animationFrameId || confettiParticles.length === locals.length) {
      triggerConfetti(0.5);
    }
  }

  // --- 11. "HAPPY JUMP!" CANVAS GAME LOGIC ---
  gameCanvas.width = 340;
  gameCanvas.height = 420;

  // Preload Player Avatar Image of her
  const playerImg = new Image();
  playerImg.src = "photos of her/avatar_surprised.png";

  let gameMode = 'idle'; // idle, playing, gameover, win
  let score = 0;
  let gravity = 0.34;
  let player = { x: 60, y: 180, radius: 26, velocity: 0, jump: -6.0 };
  let clouds = [];
  let items = [];
  let cloudTimer = 0;
  let itemTimer = 0;
  let gameLoopId = null;
  let firstTapMade = false;

  function resetGame() {
    score = 0;
    gameScoreVal.innerText = score;
    player.y = 180;
    player.velocity = 0;
    clouds = [];
    items = [];
    cloudTimer = 0;
    itemTimer = 0;
    firstTapMade = false;
    isWinScreenShown = false;
  }

  function startGame() {
    resetGame();
    gameMode = 'playing';
    gameStartOverlay.classList.add('hidden');
    gameOverOverlay.classList.add('hidden');
    gameWinOverlay.classList.add('hidden');
    
    // Stop any ringing collision sound
    if (flappyCollision) {
      flappyCollision.pause();
      flappyCollision.currentTime = 0;
    }
    if (flappyCollisionVideo) {
      flappyCollisionVideo.pause();
      flappyCollisionVideo.currentTime = 0;
    }

    // Pause main background music while playing Flappy Bird
    if (bgMusic && !bgMusic.paused) {
      wasBgMusicPlayingBeforeFlappy = true;
      bgMusic.pause();
    }

    // Play Flappy Bird Theme
    if (flappyTheme) {
      flappyTheme.currentTime = 0;
      flappyTheme.volume = 0.45;
      flappyTheme.play().catch(err => console.log("Flappy theme play error:", err));
    }

    if (gameLoopId) cancelAnimationFrame(gameLoopId);
    gameLoop();
  }

  // Handle Jumps
  function handleGameJump() {
    if (gameMode === 'playing') {
      firstTapMade = true;
      player.velocity = player.jump;
    }
  }

  gameCanvas.addEventListener('click', handleGameJump);
  gameCanvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    handleGameJump();
  });

  gameStartBtn.addEventListener('click', startGame);
  const gamePreviewCard = document.querySelector('.game-preview-card');
  if (gamePreviewCard) {
    gamePreviewCard.addEventListener('click', startGame);
  }
  gameRestartBtn.addEventListener('click', startGame);

  let noteXOffset = 400; // Drifting background musical notes

  // SVG Preloaded Images for Classical Guitar and Ukulele
  const guitarSvg = new Image();
  guitarSvg.src = "data:image/svg+xml;utf8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 300">
      <path d="M 50 120 C 20 120 15 150 15 170 C 15 200 30 210 30 220 C 30 230 20 240 20 260 C 20 285 35 295 50 295 C 65 295 80 285 80 260 C 80 240 70 230 70 220 C 70 210 85 200 85 170 C 85 150 80 120 50 120 Z" fill="#b05c2e" stroke="#2c1a11" stroke-width="2.5"/>
      <path d="M 50 135 C 40 135 35 145 35 155 C 35 170 42 180 50 180 C 58 180 65 170 65 155 C 65 145 60 135 50 135 Z" fill="#fff5e6" opacity="0.12"/>
      <circle cx="50" cy="170" r="14" fill="#2c1a11"/>
      <circle cx="50" cy="170" r="12" fill="#140a05"/>
      <circle cx="50" cy="170" r="15" fill="none" stroke="#e6b800" stroke-width="1.2"/>
      <rect x="35" y="225" width="30" height="7" rx="2" fill="#2c1a11" stroke="#140a05" stroke-width="1"/>
      <rect x="38" y="227" width="24" height="2" fill="#ffffff"/>
      <rect x="44" y="25" width="12" height="100" fill="#4d2612" stroke="#2c1a11" stroke-width="1.5"/>
      <line x1="44" y1="35" x2="56" y2="35" stroke="#d9d9d9" stroke-width="1"/>
      <line x1="44" y1="45" x2="56" y2="45" stroke="#d9d9d9" stroke-width="1"/>
      <line x1="44" y1="55" x2="56" y2="55" stroke="#d9d9d9" stroke-width="1"/>
      <line x1="44" y1="65" x2="56" y2="65" stroke="#d9d9d9" stroke-width="1"/>
      <line x1="44" y1="75" x2="56" y2="75" stroke="#d9d9d9" stroke-width="1"/>
      <line x1="44" y1="85" x2="56" y2="85" stroke="#d9d9d9" stroke-width="1"/>
      <line x1="44" y1="95" x2="56" y2="95" stroke="#d9d9d9" stroke-width="1"/>
      <line x1="44" y1="105" x2="56" y2="105" stroke="#d9d9d9" stroke-width="1"/>
      <line x1="44" y1="115" x2="56" y2="115" stroke="#d9d9d9" stroke-width="1"/>
      <path d="M 42 25 L 40 5 L 45 2 L 55 2 L 60 5 L 58 25 Z" fill="#b05c2e" stroke="#2c1a11" stroke-width="1.8"/>
      <circle cx="36" cy="8" r="3" fill="#f2f2f2" stroke="#2c1a11" stroke-width="1"/>
      <circle cx="36" cy="14" r="3" fill="#f2f2f2" stroke="#2c1a11" stroke-width="1"/>
      <circle cx="36" cy="20" r="3" fill="#f2f2f2" stroke="#2c1a11" stroke-width="1"/>
      <circle cx="64" cy="8" r="3" fill="#f2f2f2" stroke="#2c1a11" stroke-width="1"/>
      <circle cx="64" cy="14" r="3" fill="#f2f2f2" stroke="#2c1a11" stroke-width="1"/>
      <circle cx="64" cy="20" r="3" fill="#f2f2f2" stroke="#2c1a11" stroke-width="1"/>
      <line x1="46" y1="5" x2="46" y2="225" stroke="#cccccc" stroke-width="0.75"/>
      <line x1="47.6" y1="5" x2="47.6" y2="225" stroke="#cccccc" stroke-width="0.75"/>
      <line x1="49.2" y1="5" x2="49.2" y2="225" stroke="#cccccc" stroke-width="0.75"/>
      <line x1="50.8" y1="5" x2="50.8" y2="225" stroke="#cccccc" stroke-width="0.75"/>
      <line x1="52.4" y1="5" x2="52.4" y2="225" stroke="#cccccc" stroke-width="0.75"/>
      <line x1="54" y1="5" x2="54" y2="225" stroke="#cccccc" stroke-width="0.75"/>
    </svg>
  `);

  const ukuleleSvg = new Image();
  ukuleleSvg.src = "data:image/svg+xml;utf8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 300">
      <path d="M 50 120 C 28 120 23 138 23 151 C 23 174 34 183 34 187 C 34 196 27 205 27 218 C 27 236 38 243 50 243 C 62 243 73 236 73 218 C 73 205 66 196 66 187 C 66 183 77 174 77 151 C 77 138 72 120 50 120 Z" fill="#cd853f" stroke="#2c1a11" stroke-width="2.5"/>
      <circle cx="50" cy="156" r="10" fill="#2c1a11"/>
      <circle cx="50" cy="156" r="8.5" fill="#140a05"/>
      <circle cx="50" cy="156" r="11" fill="none" stroke="#fff5e6" stroke-width="0.8"/>
      <rect x="39" y="196" width="22" height="5" rx="1.5" fill="#2c1a11" stroke="#140a05" stroke-width="1"/>
      <rect x="45" y="25" width="10" height="95" fill="#4d2612" stroke="#2c1a11" stroke-width="1.5"/>
      <line x1="45" y1="35" x2="55" y2="35" stroke="#d9d9d9" stroke-width="0.75"/>
      <line x1="45" y1="45" x2="55" y2="45" stroke="#d9d9d9" stroke-width="0.75"/>
      <line x1="45" y1="55" x2="55" y2="55" stroke="#d9d9d9" stroke-width="0.75"/>
      <line x1="45" y1="65" x2="55" y2="65" stroke="#d9d9d9" stroke-width="0.75"/>
      <line x1="45" y1="75" x2="55" y2="75" stroke="#d9d9d9" stroke-width="0.75"/>
      <line x1="45" y1="85" x2="55" y2="85" stroke="#d9d9d9" stroke-width="0.75"/>
      <line x1="45" y1="95" x2="55" y2="95" stroke="#d9d9d9" stroke-width="0.75"/>
      <path d="M 44 25 L 42 6 L 46 3 L 54 3 L 58 6 L 56 25 Z" fill="#cd853f" stroke="#2c1a11" stroke-width="1.8"/>
      <circle cx="38" cy="8" r="2.5" fill="#ffffff" stroke="#2c1a11" stroke-width="1"/>
      <circle cx="38" cy="16" r="2.5" fill="#ffffff" stroke="#2c1a11" stroke-width="1"/>
      <circle cx="62" cy="8" r="2.5" fill="#ffffff" stroke="#2c1a11" stroke-width="1"/>
      <circle cx="62" cy="16" r="2.5" fill="#ffffff" stroke="#2c1a11" stroke-width="1"/>
      <line x1="46.5" y1="5" x2="46.5" y2="196" stroke="#ffffff" opacity="0.75" stroke-width="0.6"/>
      <line x1="48.8" y1="5" x2="48.8" y2="196" stroke="#ffffff" opacity="0.75" stroke-width="0.6"/>
      <line x1="51.2" y1="5" x2="51.2" y2="196" stroke="#ffffff" opacity="0.75" stroke-width="0.6"/>
      <line x1="53.5" y1="5" x2="53.5" y2="196" stroke="#ffffff" opacity="0.75" stroke-width="0.6"/>
    </svg>
  `);

  function drawSVGInstrument(ctx, xCenter, yTip, scale, angle, type, rotated) {
    ctx.save();
    ctx.translate(xCenter, yTip);
    
    // Rotate 180 degrees (Math.PI) if it's the top obstacle pointing down, plus the lean angle
    const baseRotation = rotated ? Math.PI : 0;
    ctx.rotate(baseRotation + angle);
    
    ctx.scale(scale, scale);
    
    const img = type === 'guitar' ? guitarSvg : ukuleleSvg;
    if (img.complete) {
      // Draw SVG centered horizontally at x = 0, and tip anchored at y = 0
      ctx.drawImage(img, -50, -2, 100, 300);
    }
    ctx.restore();
  }

  function varColorHex(varName) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  }

  class InstrumentBarrier {
    constructor(x) {
      this.x = x;
      this.width = 60;
      this.gap = 165; // Wide gap for easy mode!
      this.topHeight = Math.random() * (gameCanvas.height - this.gap - 100) + 50;
      this.bottomY = this.topHeight + this.gap;
      this.passed = false;
      this.speed = 1.7; // Slow scroll speed for easy mode!
      
      // Random lean angles (between -20 and +20 degrees)
      this.topAngle = (Math.random() * 40 - 20) * Math.PI / 180;
      this.bottomAngle = (Math.random() * 40 - 20) * Math.PI / 180;
      
      // Random sizes (scales)
      this.topScale = Math.random() * 0.35 + 0.8; // 0.8 to 1.15
      this.bottomScale = Math.random() * 0.35 + 0.8;
      
      // Random types
      this.topType = Math.random() < 0.5 ? 'guitar' : 'ukulele';
      this.bottomType = Math.random() < 0.5 ? 'guitar' : 'ukulele';
    }

    update() {
      this.x -= this.speed;
    }

    draw() {
      // Top Obstacle: pointing down, headstock tip ends at topHeight
      drawSVGInstrument(gCtx, this.x + this.width / 2, this.topHeight, this.topScale, this.topAngle, this.topType, true);
      
      // Bottom Obstacle: pointing up, headstock tip ends at bottomY
      drawSVGInstrument(gCtx, this.x + this.width / 2, this.bottomY, this.bottomScale, this.bottomAngle, this.bottomType, false);
    }
  }

  const CloudBarrier = InstrumentBarrier; // Alias for backward compatibility

  class CollectibleItem {
    constructor(x) {
      this.x = x;
      this.y = Math.random() * 200 + 80;
      this.radius = 12;
      this.speed = 2.0;
      this.collected = false;
    }

    update() {
      this.x -= this.speed;
    }

    draw() {
      gCtx.save();
      gCtx.fillStyle = "#FF1A75";
      gCtx.beginPath();
      // Draw a tiny pixel heart inside canvas
      const size = this.radius;
      gCtx.translate(this.x, this.y);
      gCtx.moveTo(0, size / 4);
      gCtx.quadraticCurveTo(0, -size / 2, -size / 2, -size / 2);
      gCtx.quadraticCurveTo(-size, -size / 2, -size, size / 4);
      gCtx.quadraticCurveTo(-size, size * 0.8, 0, size * 1.3);
      gCtx.quadraticCurveTo(size, size * 0.8, size, size / 4);
      gCtx.quadraticCurveTo(size, -size / 2, size / 2, -size / 2);
      gCtx.quadraticCurveTo(0, -size / 2, 0, size / 4);
      gCtx.closePath();
      gCtx.fill();
      gCtx.restore();
    }
  }

  function gameLoop() {
    if (gameMode !== 'playing') return;

    // Clear Canvas
    gCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    
    // Draw sky/background details in canvas (Warm Musical Peach/Beige)
    gCtx.fillStyle = "#fff4e6"; 
    gCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

    // Draw scrolling background musical notes decoration
    gCtx.fillStyle = "rgba(183, 105, 53, 0.12)"; 
    gCtx.font = "24px 'Fredoka', sans-serif";
    gCtx.fillText("♪", (noteXOffset + 40) % gameCanvas.width, 90);
    gCtx.fillText("♫", (noteXOffset + 140) % gameCanvas.width, 240);
    gCtx.fillText("♬", (noteXOffset + 240) % gameCanvas.width, 70);
    gCtx.fillText("♩", (noteXOffset + 90) % gameCanvas.width, 320);
    gCtx.fillText("♪", (noteXOffset + 310) % gameCanvas.width, 180);
    noteXOffset = (noteXOffset - 0.6 + gameCanvas.width) % gameCanvas.width;

    // Apply Player Physics (only after first tap/jump)
    if (firstTapMade) {
      player.velocity += gravity;
      player.y += player.velocity;

      // Bound checks
      if (player.y - player.radius < 0) {
        player.y = player.radius;
      }
      if (player.y + player.radius > gameCanvas.height) {
        triggerGameOver();
        return;
      }

      // Spawn Clouds
      cloudTimer++;
      if (cloudTimer > 105) {
        clouds.push(new CloudBarrier(gameCanvas.width));
        cloudTimer = 0;
      }

      // Spawn Hearts
      itemTimer++;
      if (itemTimer > 75) {
        // Spawn items offset from clouds
        items.push(new CollectibleItem(gameCanvas.width + 60));
        itemTimer = 0;
      }
    } else {
      // Slow downward drift at start, clamp at 230 to never die before tap
      player.y += 0.4;
      if (player.y > 230) {
        player.y = 230;
      }
    }

    // Update & Draw Clouds
    clouds.forEach((cloud, index) => {
      cloud.update();
      cloud.draw();

      // Check Pass for Score
      if (!cloud.passed && cloud.x + cloud.width < player.x) {
        cloud.passed = true;
        score++;
        gameScoreVal.innerText = score + (endlessMode ? " 🚀" : "");
        checkWinCondition();
      }

      // Easy Mode Collision Check (smaller player hitbox)
      if (player.x + player.radius - 12 > cloud.x && player.x - player.radius + 12 < cloud.x + cloud.width) {
        if (player.y - player.radius + 12 < cloud.topHeight || player.y + player.radius - 12 > cloud.bottomY) {
          triggerGameOver();
        }
      }

      // Cleanup offscreen
      if (cloud.x + cloud.width < 0) {
        clouds.splice(index, 1);
      }
    });

    // Update & Draw Collectibles
    items.forEach((item, index) => {
      item.update();
      item.draw();

      // Collision check (Distance formula)
      const dist = Math.hypot(player.x - item.x, player.y - item.y);
      if (dist < player.radius + item.radius) {
        // Collect!
        items.splice(index, 1);
        score += 2; // Collecting items gives double points!
        gameScoreVal.innerText = score + (endlessMode ? " 🚀" : "");
        
        // local confetti pop
        spawnLocalConfetti(item.x + gameCanvas.getBoundingClientRect().left, item.y + gameCanvas.getBoundingClientRect().top, "#FF1A75");
        
        checkWinCondition();
      }

      if (item.x + item.radius < 0) {
        items.splice(index, 1);
      }
    });

    // Draw Player Circular Avatar (Crop centered square to protect 1:1 natural aspect ratio)
    gCtx.save();
    gCtx.beginPath();
    gCtx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    gCtx.clip();
    if (playerImg.complete && playerImg.width > 0) {
      const minDim = Math.min(playerImg.width, playerImg.height);
      const sx = (playerImg.width - minDim) / 2;
      const sy = (playerImg.height - minDim) / 2;
      gCtx.drawImage(
        playerImg,
        sx, sy, minDim, minDim,
        player.x - player.radius, player.y - player.radius, player.radius * 2, player.radius * 2
      );
    } else {
      gCtx.fillStyle = "#FFB3C6";
      gCtx.fill();
    }
    gCtx.restore();

    // Draw cute black outlines on player circle
    gCtx.strokeStyle = varColorHex('--text-dark');
    gCtx.lineWidth = 3.5;
    gCtx.beginPath();
    gCtx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    gCtx.stroke();

    // Draw party hat on avatar
    gCtx.save();
    gCtx.fillStyle = "#FF1A75";
    gCtx.strokeStyle = "#FFFDF9";
    gCtx.lineWidth = 2;
    gCtx.beginPath();
    gCtx.moveTo(player.x - 14, player.y - player.radius + 3);
    gCtx.lineTo(player.x + 14, player.y - player.radius + 3);
    gCtx.lineTo(player.x, player.y - player.radius - 22); // Tip
    gCtx.closePath();
    gCtx.fill();
    gCtx.stroke();
    // Pom pom on top of hat
    gCtx.fillStyle = "#FFD23F";
    gCtx.beginPath();
    gCtx.arc(player.x, player.y - player.radius - 24, 6, 0, Math.PI * 2);
    gCtx.fill();
    gCtx.restore();

    gameLoopId = requestAnimationFrame(gameLoop);
  }

  // Pre-render the game world background scene so it is visible behind the preview card thumbnail
  function renderGamePreviewScene() {
    if (!gCtx) return;
    gCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    
    // Warm Musical Peach Background
    gCtx.fillStyle = "#fff4e6"; 
    gCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

    // Drifting musical notes
    gCtx.fillStyle = "rgba(183, 105, 53, 0.16)"; 
    gCtx.font = "26px 'Fredoka', sans-serif";
    gCtx.fillText("♪", 40, 90);
    gCtx.fillText("♫", 160, 240);
    gCtx.fillText("♬", 270, 75);
    gCtx.fillText("♩", 100, 320);
    gCtx.fillText("♪", 290, 195);

    // Preview Acoustic Guitar & Ukulele
    drawSVGInstrument(gCtx, 270, 80, 0.95, 10 * Math.PI / 180, 'guitar', true);
    drawSVGInstrument(gCtx, 270, 260, 0.95, -10 * Math.PI / 180, 'ukulele', false);

    // Preview Heart
    gCtx.font = "24px sans-serif";
    gCtx.fillText("💖", 175, 185);

    // Preview Player Avatar (Radius 26, non-squished)
    const prevX = 75;
    const prevY = 190;
    const prevR = 26;

    gCtx.save();
    gCtx.beginPath();
    gCtx.arc(prevX, prevY, prevR, 0, Math.PI * 2);
    gCtx.clip();
    if (playerImg.complete && playerImg.width > 0) {
      const minDim = Math.min(playerImg.width, playerImg.height);
      const sx = (playerImg.width - minDim) / 2;
      const sy = (playerImg.height - minDim) / 2;
      gCtx.drawImage(playerImg, sx, sy, minDim, minDim, prevX - prevR, prevY - prevR, prevR * 2, prevR * 2);
    } else {
      gCtx.fillStyle = "#FFB3C6";
      gCtx.fill();
    }
    gCtx.restore();

    // Outline
    gCtx.strokeStyle = varColorHex('--text-dark');
    gCtx.lineWidth = 3.5;
    gCtx.beginPath();
    gCtx.arc(prevX, prevY, prevR, 0, Math.PI * 2);
    gCtx.stroke();

    // Party hat
    gCtx.save();
    gCtx.fillStyle = "#FF1A75";
    gCtx.strokeStyle = "#FFFDF9";
    gCtx.lineWidth = 2;
    gCtx.beginPath();
    gCtx.moveTo(prevX - 14, prevY - prevR + 3);
    gCtx.lineTo(prevX + 14, prevY - prevR + 3);
    gCtx.lineTo(prevX, prevY - prevR - 22);
    gCtx.closePath();
    gCtx.fill();
    gCtx.stroke();
    // Pom pom
    gCtx.fillStyle = "#FFD23F";
    gCtx.beginPath();
    gCtx.arc(prevX, prevY - prevR - 24, 6, 0, Math.PI * 2);
    gCtx.fill();
    gCtx.restore();
  }

  // Draw the preview scene immediately when images load
  playerImg.onload = () => { if (gameMode === 'idle') renderGamePreviewScene(); };
  setTimeout(() => { if (gameMode === 'idle') renderGamePreviewScene(); }, 150);

  function triggerGameOver() {
    gameMode = 'gameover';
    cancelAnimationFrame(gameLoopId);

    // Stop Flappy Bird theme
    if (flappyTheme) {
      flappyTheme.pause();
      flappyTheme.currentTime = 0;
    }

    // Play collision sound effect immediately
    playFlappyCollisionSound();

    const gameOverMsg = document.getElementById('game-over-msg');
    if (gameOverMsg) {
      if (endlessMode || giftCollected) {
        gameOverMsg.innerHTML = `Great flight! Your Endless Score: <strong>${score}</strong>! 🏆<br><span style="color:#e91e63;font-size:0.75rem;font-weight:600;">(Your 20th Birthday VIP Pass is safe in your pocket! 🎁)</span>`;
      } else {
        gameOverMsg.innerText = "You bumped into an instrument! Don't worry, try again.";
      }
    }

    if (gameViewGiftBtn) {
      if (giftCollected) {
        gameViewGiftBtn.classList.remove('hidden');
      } else {
        gameViewGiftBtn.classList.add('hidden');
      }
    }

    gameOverOverlay.classList.remove('hidden');
  }

  function checkWinCondition() {
    // Only interrupt with gift win overlay if gift hasn't been collected yet and win screen hasn't shown
    if (score >= 20 && !giftCollected && !isWinScreenShown) {
      isWinScreenShown = true;
      triggerGameWin();
    }
  }

  function triggerGameWin() {
    gameMode = 'win';
    cancelAnimationFrame(gameLoopId);

    // Stop Flappy Bird theme
    if (flappyTheme) {
      flappyTheme.pause();
      flappyTheme.currentTime = 0;
    }

    gameWinOverlay.classList.remove('hidden');
    triggerConfetti(6);
    
    // Initialize Scratch Card Gift Voucher!
    setTimeout(initScratchCard, 400);
  }

  // --- 12. GIFT COLLECTION & ENDLESS MODE MECHANICS ---
  function collectGift() {
    if (giftCollected) return;
    giftCollected = true;
    endlessMode = true;

    // Dissolve scratch canvas
    if (scratchCanvas) {
      scratchCanvas.style.opacity = '0';
      setTimeout(() => {
        scratchCanvas.style.display = 'none';
      }, 350);
    }

    // Show stamped badge on VIP pass
    const badge = document.getElementById('voucher-collected-badge');
    if (badge) badge.classList.remove('hidden');

    // Hide claim button
    if (gameClaimBtn) gameClaimBtn.classList.add('hidden');

    // Reveal action buttons (Continue Endless and Restart)
    const actionBtns = document.getElementById('win-action-buttons');
    if (actionBtns) actionBtns.classList.remove('hidden');

    // Update win subtitle
    const winDesc = document.getElementById('win-desc');
    if (winDesc) {
      winDesc.innerHTML = "🎉 <strong>Gift Collected!</strong> Your VIP Friendship Pass is saved! Keep flying endlessly or restart from score 0!";
    }

    // Show View Gift button in Game Over screen for future crashes
    if (gameViewGiftBtn) gameViewGiftBtn.classList.remove('hidden');

    triggerConfetti(5);
  }

  function continueGameEndless() {
    gameWinOverlay.classList.add('hidden');
    gameMode = 'playing';
    firstTapMade = true;

    // Soft upward impulse so player doesn't plunge
    player.velocity = -3.8;

    // Push away clouds in the immediate path to prevent unfair crash
    clouds.forEach(cloud => {
      if (cloud.x > player.x - 30 && cloud.x < player.x + 130) {
        cloud.x += 160;
      }
    });

    // Resume Flappy Bird playing theme
    if (flappyTheme) {
      flappyTheme.play().catch(() => {});
    }

    // Resume game loop
    if (gameLoopId) cancelAnimationFrame(gameLoopId);
    gameLoop();
  }

  function initScratchCard() {
    if (giftCollected) {
      if (scratchCanvas) scratchCanvas.style.display = 'none';
      const badge = document.getElementById('voucher-collected-badge');
      if (badge) badge.classList.remove('hidden');
      if (gameClaimBtn) gameClaimBtn.classList.add('hidden');
      const actionBtns = document.getElementById('win-action-buttons');
      if (actionBtns) actionBtns.classList.remove('hidden');
      return;
    }

    if (!scratchCanvas || !scrCtx) return;
    scratchCanvas.style.display = 'block';
    scratchCanvas.style.opacity = '1';
    scratchCanvas.width = 290;
    scratchCanvas.height = 195;

    // Draw silver coating cover
    const grad = scrCtx.createLinearGradient(0, 0, scratchCanvas.width, scratchCanvas.height);
    grad.addColorStop(0, '#d1d5db');
    grad.addColorStop(0.5, '#f3f4f6');
    grad.addColorStop(1, '#9ca3af');
    scrCtx.fillStyle = grad;
    scrCtx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);

    // Draw scratch instructions
    scrCtx.font = "bold 15px 'Fredoka', sans-serif";
    scrCtx.fillStyle = "#1f2937";
    scrCtx.textAlign = "center";
    scrCtx.textBaseline = "middle";
    scrCtx.fillText("✨ SCRATCH WITH FINGER ✨", scratchCanvas.width / 2, scratchCanvas.height / 2 - 12);
    
    scrCtx.font = "bold 11px 'Playpen Sans', sans-serif";
    scrCtx.fillStyle = "#4b5563";
    scrCtx.fillText("🎁 Reveal your 20th Birthday VIP Pass!", scratchCanvas.width / 2, scratchCanvas.height / 2 + 14);

    let isDrawing = false;
    
    function scratch(x, y) {
      scrCtx.save();
      scrCtx.globalCompositeOperation = 'destination-out';
      scrCtx.beginPath();
      scrCtx.arc(x, y, 22, 0, Math.PI * 2);
      scrCtx.fill();
      scrCtx.restore();
      
      checkScratchPercentage();
    }

    // Touch and mouse listeners for canvas scratching
    scratchCanvas.onmousedown = (e) => {
      isDrawing = true;
      const rect = scratchCanvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
    };

    scratchCanvas.onmousemove = (e) => {
      if (!isDrawing) return;
      const rect = scratchCanvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
    };

    window.onmouseup = () => { isDrawing = false; };

    scratchCanvas.ontouchstart = (e) => {
      isDrawing = true;
      const rect = scratchCanvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        scratch(touch.clientX - rect.left, touch.clientY - rect.top);
      }
    };

    scratchCanvas.ontouchmove = (e) => {
      e.preventDefault();
      if (!isDrawing) return;
      const rect = scratchCanvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        scratch(touch.clientX - rect.left, touch.clientY - rect.top);
      }
    };

    scratchCanvas.ontouchend = () => { isDrawing = false; };
  }

  function checkScratchPercentage() {
    if (giftCollected || !scrCtx) return;
    const imgData = scrCtx.getImageData(0, 0, scratchCanvas.width, scratchCanvas.height);
    const pixels = imgData.data;
    let transparent = 0;
    
    // Read every 16th pixel to calculate percentage efficiently
    for (let i = 0; i < pixels.length; i += 64) {
      if (pixels[i + 3] === 0) {
        transparent++;
      }
    }

    const percent = (transparent / (pixels.length / 64)) * 100;
    
    if (percent > 45) {
      collectGift();
    }
  }

  // Hook up button event listeners
  if (gameClaimBtn) {
    gameClaimBtn.addEventListener('click', collectGift);
  }
  if (gameContinueBtn) {
    gameContinueBtn.addEventListener('click', continueGameEndless);
  }
  if (gameWinRestartBtn) {
    gameWinRestartBtn.addEventListener('click', () => {
      gameWinOverlay.classList.add('hidden');
      startGame();
    });
  }
  if (gameViewGiftBtn) {
    gameViewGiftBtn.addEventListener('click', () => {
      gameOverOverlay.classList.add('hidden');
      initScratchCard();
      gameWinOverlay.classList.remove('hidden');
    });
  }

  // --- 13. LOVE CANDY JAR SHAKE & REVEAL ---
  const compliments = config.compliments;

  let lastIndex = -1;

  if (loveJar) {
    loveJar.addEventListener('click', () => {
      // Shake jar animation
      loveJar.classList.add('jar-shake');
      setTimeout(() => loveJar.classList.remove('jar-shake'), 400);

      // Confetti pop
      const jarRect = loveJar.getBoundingClientRect();
      spawnLocalConfetti(jarRect.left + jarRect.width/2, jarRect.top, pastelColors[Math.floor(Math.random() * pastelColors.length)]);

      // Display random compliment without repeats
      let index = Math.floor(Math.random() * compliments.length);
      while (index === lastIndex) {
        index = Math.floor(Math.random() * compliments.length);
      }
      lastIndex = index;

      if (reasonText) reasonText.innerText = compliments[index];
      if (reasonBubble) reasonBubble.classList.add('reveal');
    });
  }

  // --- 14. INTERSECTION OBSERVER FOR BOTTOM NAV HIGHLIGHTS ---
  const observerOptions = {
    root: scrollContainer,
    rootMargin: '0px',
    threshold: 0.6 // Highlight when 60% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const activeNav = document.querySelector(`.nav-item[href="#${id}"]`);
        
        if (activeNav) {
          navItems.forEach(item => item.classList.remove('active'));
          activeNav.classList.add('active');
        }

        // Update mascot speech & expression
        if (typeof updateAluForSection === 'function') {
          updateAluForSection(id);
        }

        // Handle leaving or being outside of game section
        if (id !== 'game-sec') {
          if (flappyTheme && !flappyTheme.paused) {
            flappyTheme.pause();
          }
          if (wasBgMusicPlayingBeforeFlappy && bgMusic && bgMusic.paused && musicBtn && musicBtn.classList.contains('playing') && !birthdayMusicPlaying) {
            bgMusic.play().catch(() => {});
            wasBgMusicPlayingBeforeFlappy = false;
          }
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // Hook nav item clicks for smooth snaps without rubber-banding
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      // Temporarily disable snap to prevent scrolling stutters on iOS/Safari
      scrollContainer.style.scrollSnapType = 'none';
      targetSection.scrollIntoView({ behavior: 'smooth' });
      
      // Re-enable snap after the transition finishes (approx 800ms)
      setTimeout(() => {
        scrollContainer.style.scrollSnapType = 'y mandatory';
      }, 800);
    });
  });

  // --- 15. INTERACTIVE MASCOT "ALU" THE BEAR (KNOWLEDGEABLE GUIDE) ---
  let aluCurrentSection = 'cover-page';
  let aluIsInteracting = false;
  let restoreTimeout = null;
  let factIndex = 0;

  const aluMessages = {
    'cover-page': {
      text: "হাই কোণিনিকা! আমি আলু 🐻 জানো কি? ২০ বছর বয়স মানে পৃথিবী সূর্যের চারপাশে প্রায় ১৮.৭ বিলিয়ন কিমি ভ্রমণ করে ফেলেছে! গিফটটা আনর‍্যাপ করো! 🌍📚",
      emote: 'thinking'
    },
    'countdown-sec': {
      text: "সময় হলো স্থান-কালের (Spacetime) একটি অবিচ্ছেদ্য মাত্রা! আইনস্টাইনের রিলেটিভিটি অনুযায়ী সময় কারো জন্য থামে না—আর অল্প কিছু দিন পরেই তোমার ২০ পূর্ণ! ⏳🕒",
      emote: 'thinking'
    },
    'scrapbook-sec': {
      text: "ফটোগ্রাফি হলো আলো ও ফোটন কণা সংরক্ষণের বিজ্ঞান! লেন্সের আলো সেন্সরে অপটিক্যাল ডেটা হয়ে ইতিহাসকে অমর করে রাখে! 📷🔬",
      emote: 'thinking'
    },
    'game-sec': {
      text: "ফিজিক্স চ্যালেঞ্জ: অভিকর্ষজ ত্বরণ g = 9.8 m/s²! স্ক্রিনে ট্যাপ করে ভেলোসিটি আর প্যারাবলিক ট্র্যাজেক্টরি ব্যালেন্স করে স্কোর ২০ করো! 🎮⚡",
      emote: 'gamer'
    },
    'cake-sec': {
      text: "মোমবাতির শিখায় রয়েছে উত্তপ্ত আয়ন ও প্লাজমা! বাতাসে ফুঁ দিলে তাপমাত্রা ইগনিশন পয়েন্টের নিচে নেমে দহন প্রক্রিয়া বন্ধ হয়ে যায়! 🎂🔬",
      emote: 'thinking'
    },
    'sweets-revealed': {
      text: "মিষ্টি বা গ্লুকোজ গ্রহণ করলে মস্তিষ্কে ডোপামিন ও সেরোটোনিন ক্ষরিত হয়, যা স্নায়ুতন্ত্রকে তাত্ক্ষণিক আনন্দ ও শক্তি যোগায়! 😋🧪",
      emote: 'happy'
    }
  };

  const aluKnowledgeFacts = [
    "নিউটনের ৩য় সূত্র: প্রতিটি ক্রিয়ারই সমান ও বিপরীত প্রতিক্রিয়া আছে! কাইনেটিক এনার্জি সোজা মস্তিষ্কে গিয়ে নলেজ আনলক করল! 💡⚡",
    "আলু ফ্যাক্ট: একটি সাধারণ আলুর মধ্যে থাকা ফসফরিক অ্যাসিড ও জিংক দিয়ে বিদ্যুৎ তৈরি করে ঘড়ি বা এলইডি জ্বালানো সম্ভব! 🥔⚡",
    "সূর্যের আলো পৃথিবীতে পৌঁছাতে ৮ মিনিট ২০ সেকেন্ড সময় নেয়—অর্থাৎ আমরা আকাশে সবসময় সূর্যের অতীত রূপ দেখি! ☀️🔭",
    "মানব মস্তিষ্ক মাত্র ২০ ওয়াট বিদ্যুৎ খরচে সেকেন্ডে লক্ষ কোটি স্নায়ুবিক হিসাব কষে ফেলে! 🧠⚡",
    "আমাদের শরীরে থাকা প্রতিটি আয়রন ও ক্যালসিয়াম পরমাণু কোটি কোটি বছর আগে কোনো এক নক্ষত্রের সুপারনোভায় তৈরি হয়েছিল! আমরা সবাই স্টারডাস্ট! 🌟🧬",
    "মহাবিশ্বে পৃথিবীর সমস্ত সমুদ্রসৈকতের মোট বালুকণার চেয়েও বেশি সংখ্যক নক্ষত্র রয়েছে—আনুমানিক ১০²² টি! 🌌🔭",
    "মৌমাছিরা ‘Waggle Dance’ নামক বিশেষ নাচের মাধ্যমে অন্য মৌমাছিদের ফুলের সঠিক কোণ ও জ্যামিতিক দূরত্ব নির্দেশ করে! ন্যাচারাল জিপিএস! 🐝📐",
    "শব্দের গতি বাতাসে ৩৪৩ মি./সে. হলেও কঠিন ইস্পাতে তা প্রায় ১৫ গুণ দ্রুত (৫,০০০+ মি./সে.) পরিবাহিত হয়! 🔊🚄",
    "মানুষের শরীরের সমস্ত ডিএনএ সোজা করে মাপলে তা সূর্য থেকে প্লুটো পর্যন্ত গিয়ে আবার ফিরে আসতে পারবে! 🧬🌌",
    "অক্টোপাসের ৩টি হৃদপিণ্ড, নীল রঙের রক্ত এবং প্রতিটি বাহুতেই আলাদা স্নায়ুবিক মস্তিষ্ক-কেন্দ্র থাকে! 🐙🔬"
  ];

  function showAluBubble(text, duration = 6000) {
    if (bubbleTimeout) clearTimeout(bubbleTimeout);
    if (!aluBubble) return;
    aluBubble.innerText = text;
    aluBubble.classList.add('reveal');
    
    // Auto-hide bubble after duration if duration > 0 (0 = stay on screen indefinitely)
    if (duration > 0) {
      bubbleTimeout = setTimeout(() => {
        aluBubble.classList.remove('reveal');
      }, duration);
    }
  }

  window.updateAluForSection = function(sectionId) {
    // If sweets are already revealed and the user is on the cake section, keep sweets-revealed text
    if (sweetsRevealed && sectionId === 'cake-sec') {
      sectionId = 'sweets-revealed';
    }
    
    aluCurrentSection = sectionId;
    if (aluIsInteracting) return; // Do not interrupt active knowledge interaction

    const config = aluMessages[sectionId] || aluMessages['cover-page'];
    
    // Set class for SVG emote toggling
    if (aluContainer) {
      aluContainer.className = '';
      aluContainer.classList.add(`state-${config.emote}`);
    }
    
    // Display speech bubble:
    // If on cover page and gift is not yet unwrapped, keep on screen permanently until unwrap button is clicked
    if (!isGiftUnwrapped && sectionId === 'cover-page') {
      showAluBubble(config.text, 0); // No auto-hide, stays until unwrap gift clicked!
    } else {
      showAluBubble(config.text, 6000); // 6 seconds on screen for comfortable reading
    }
  };

  // Handle tap on Alu - shares interesting knowledge facts!
  if (aluContainer) {
    aluContainer.addEventListener('click', (e) => {
      e.stopPropagation();
      
      aluIsInteracting = true;
      if (bubbleTimeout) clearTimeout(bubbleTimeout);
      if (restoreTimeout) clearTimeout(restoreTimeout);

      // Lively intellectual thinking animation
      aluContainer.className = 'hit-shake state-thinking';
      
      // Cycle through knowledge facts
      const fact = aluKnowledgeFacts[factIndex % aluKnowledgeFacts.length];
      factIndex++;

      if (aluBubble) {
        aluBubble.innerText = fact;
        aluBubble.classList.add('reveal');
      }

      // Clear hit animation class after animation ends (400ms)
      setTimeout(() => {
        aluContainer.classList.remove('hit-shake');
      }, 400);

      // Restore normal section knowledge state after 6s
      restoreTimeout = setTimeout(() => {
        aluIsInteracting = false;
        if (aluBubble) aluBubble.classList.remove('reveal');
        setTimeout(() => {
          window.updateAluForSection(aluCurrentSection);
        }, 300);
      }, 6000);
    });
  }

  // Dismiss bubble immediately when clicked/tapped
  if (aluBubble) {
    aluBubble.addEventListener('click', (e) => {
      e.stopPropagation();
      aluBubble.classList.remove('reveal');
      if (bubbleTimeout) clearTimeout(bubbleTimeout);
    });
  }

  // Trigger initial mascot bubble
  setTimeout(() => {
    window.updateAluForSection('cover-page');
  }, 1000);

});
