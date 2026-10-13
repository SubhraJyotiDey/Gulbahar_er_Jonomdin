// CMS Dashboard Logic - LocalStorage Configuration & Fonts

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
  
  // Scrapbook
  scrapbookTitle: "Our Scrapbook",
  scrapbookSubtitle: "A collection of beautiful moments 📸",
  spotifyTitle: "Gulbahar (গুলবাহার)",
  spotifyArtist: "Ishaan x Shuvendu Das Shuvo",
  captions: [
    "That glowing smile... 😍",
    "Every second with you is a gift ✨",
    "Captured happiness 🎥❤️", // (For the video card)
    "The sweetest moments 🍯",
    "Stunning as always 🌸",
    "Staring into your eyes... 👀💖",
    "My absolute favorite 🥇❤️"
  ],
  captionsBack: [
    "You are my sunshine on the cloudiest days. ☀️💖",
    "I cherish every single laugh we share. You are my home. 🏡✨",
    "This video of you is my favorite thing on the internet! 📹❤️",
    "Sweetest memory in the world. Forever with you. 🍯👩‍❤️‍👨",
    "You look absolutely stunning. Simply gorgeous! 🌸👑",
    "Staring into your beautiful eyes is my favorite pastime. 👀💖",
    "I love you more than words could ever tell. Happy Birthday! 🥇❤️"
  ],
  
  // Game
  gameTitle: "Happy Jump! 🎮",
  gameSubtitle: "Reach score 20 to unlock your gift!",
  gameStartTitle: "Flappy Koninika 🎈",
  gameStartDesc: "Tap the screen to fly, dodge the guitars & ukuleles, and collect floating hearts to reach score **20**!",
  voucherTitle: "A Day of Spoiling 👑",
  voucherDesc: "This voucher entitles **Koninika** to a complete day of whatever she wishes! A candlelit dinner, unlimited shopping, and endless hugs. 🍽️🛍️🫂",
  voucherSeal: "VALID FOREVER • SIGNED WITH LOVE ❤️",
  
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
  const form = document.getElementById('cms-form');
  const compContainer = document.getElementById('compliments-list-container');
  const addCompBtn = document.getElementById('add-compliment-btn');
  const resetBtn = document.getElementById('reset-btn');
  const previewIframe = document.getElementById('preview-iframe');
  const refreshPreviewBtn = document.getElementById('refresh-preview-btn');
  const configCodeBox = document.getElementById('config-code-box');
  const exportBtn = document.getElementById('export-config-btn');
  const importBtn = document.getElementById('import-config-btn');

  // Load existing config or fallback to defaults
  let config = JSON.parse(localStorage.getItem('koninika_birthday_config')) || defaultConfig;

  // Initialize input fields with values from config
  function populateForm() {
    // Basic text inputs
    for (const key in config) {
      if (typeof config[key] === 'string') {
        const input = document.querySelector(`[name="${key}"]`) || document.getElementById(key);
        if (input) {
          input.value = config[key];
        }
      }
    }

    // Scrapbook captions
    config.captions.forEach((caption, index) => {
      const capInput = document.getElementById(`caption-${index}`);
      if (capInput) {
        capInput.value = caption;
      }
    });

    // Scrapbook back captions
    if (config.captionsBack) {
      config.captionsBack.forEach((backCaption, index) => {
        const capBackInput = document.getElementById(`back-caption-${index}-in`);
        if (capBackInput) {
          capBackInput.value = backCaption;
        }
      });
    }

    // Populate Compliments List
    compContainer.innerHTML = '';
    config.compliments.forEach(compliment => {
      addComplimentInput(compliment);
    });
  }

  // Add a compliment input element to the list manager
  function addComplimentInput(value = '') {
    const item = document.createElement('div');
    item.className = 'compliment-item';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'compliment-input';
    input.value = value;
    input.placeholder = "Enter reason/compliment (Bengali supported)...";

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'btn-remove';
    removeBtn.innerText = '✕';
    removeBtn.addEventListener('click', () => item.remove());

    item.appendChild(input);
    item.appendChild(removeBtn);
    compContainer.appendChild(item);
  }

  addCompBtn.addEventListener('click', () => addComplimentInput());

  // Handle Form Submit (Save Changes)
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Map basic text inputs back to config
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
      if (key !== 'compliment-input') {
        config[key] = value;
      }
    }

    // Capture date target manually
    config.targetDate = document.getElementById('target-date').value;

    // Capture captions manually
    config.captions = [];
    config.captionsBack = [];
    for (let i = 0; i < 7; i++) {
      const capVal = document.getElementById(`caption-${i}`).value;
      config.captions.push(capVal);
      
      const capBackVal = document.getElementById(`back-caption-${i}-in`).value;
      config.captionsBack.push(capBackVal);
    }

    // Capture Compliments
    config.compliments = [];
    const compInputs = document.querySelectorAll('.compliment-input');
    compInputs.forEach(input => {
      if (input.value.trim() !== '') {
        config.compliments.push(input.value.trim());
      }
    });

    // Save to LocalStorage
    localStorage.setItem('koninika_birthday_config', JSON.stringify(config));

    // Reload Live Preview Iframe
    if (previewIframe) {
      previewIframe.contentWindow.location.reload();
    }

    alert('✅ Content saved successfully! Live preview updated.');
  });

  // Reset to Defaults
  resetBtn.addEventListener('click', () => {
    if (confirm('🔄 Are you sure you want to reset everything back to the original text and fonts? All custom edits will be erased.')) {
      config = defaultConfig;
      localStorage.removeItem('koninika_birthday_config');
      populateForm();
      if (previewIframe) {
        previewIframe.contentWindow.location.reload();
      }
    }
  });

  // Refresh Preview Iframe Button
  if (refreshPreviewBtn && previewIframe) {
    refreshPreviewBtn.addEventListener('click', () => {
      previewIframe.contentWindow.location.reload();
    });
  }

  // Export Config
  exportBtn.addEventListener('click', () => {
    // Force grab current form inputs without submitting
    const currentConfig = { ...config };
    
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
      currentConfig[key] = value;
    }
    currentConfig.targetDate = document.getElementById('target-date').value;
    
    currentConfig.captions = [];
    currentConfig.captionsBack = [];
    for (let i = 0; i < 7; i++) {
      currentConfig.captions.push(document.getElementById(`caption-${i}`).value);
      currentConfig.captionsBack.push(document.getElementById(`back-caption-${i}-in`).value);
    }
    
    currentConfig.compliments = [];
    const compInputs = document.querySelectorAll('.compliment-input');
    compInputs.forEach(input => {
      if (input.value.trim() !== '') {
        currentConfig.compliments.push(input.value.trim());
      }
    });

    // Output JSON string
    configCodeBox.value = JSON.stringify(currentConfig, null, 2);
    configCodeBox.select();
  });

  // Import Config
  importBtn.addEventListener('click', () => {
    const rawCode = configCodeBox.value.trim();
    if (!rawCode) {
      alert('❌ Code box is empty! Paste an exported JSON configuration first.');
      return;
    }
    try {
      const parsedConfig = JSON.parse(rawCode);
      // Basic validation check
      if (!parsedConfig.targetDate || !parsedConfig.letterBody) {
        throw new Error("Invalid configuration structure.");
      }
      config = parsedConfig;
      localStorage.setItem('koninika_birthday_config', JSON.stringify(config));
      populateForm();
      if (previewIframe) {
        previewIframe.contentWindow.location.reload();
      }
      alert('📥 Configuration imported successfully! Click Save to confirm.');
    } catch (err) {
      alert('❌ Failed to parse config JSON: ' + err.message);
    }
  });

  // Load and Populate
  populateForm();
});
