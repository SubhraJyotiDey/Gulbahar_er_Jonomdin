document.addEventListener('DOMContentLoaded', () => {
  // ─── DOM References ───────────────────────────────────────────────
  const canvas = document.getElementById('design-canvas');
  const elementsLayer = document.getElementById('elements-layer');
  const previewFrame = document.getElementById('preview-frame');
  const toolbar = document.getElementById('toolbar');
  const propFont = document.getElementById('prop-font');
  const propFontSize = document.getElementById('prop-font-size');
  const propFontSizeVal = document.getElementById('prop-font-size-val');
  const propColor = document.getElementById('prop-color');
  const propBold = document.getElementById('prop-bold');
  const propItalic = document.getElementById('prop-italic');
  const propDelete = document.getElementById('prop-delete');
  const btnSave = document.getElementById('btn-save');
  const btnExport = document.getElementById('btn-export');
  const btnImport = document.getElementById('btn-import');
  const importFile = document.getElementById('import-file');
  const btnClear = document.getElementById('btn-clear');
  const photoGrid = document.getElementById('photo-grid');
  const photoUpload = document.getElementById('photo-upload');
  const toast = document.getElementById('toast');
  const propGroups = document.querySelectorAll('.toolbar-group.props');
  const btnTogglePreview = document.getElementById('btn-toggle-preview');

  // ─── State ────────────────────────────────────────────────────────
  let elements = [];
  let selectedId = null;
  let nextId = 1;
  let isDragging = false;
  let isResizing = false;
  let isRotating = false;
  let dragOffset = { x: 0, y: 0 };
  let resizeStart = {};
  let rotateStart = 0;
  let activeHandle = null;
  let undoStack = [];

  // ─── Toast ────────────────────────────────────────────────────────
  function showToast(msg, isError = false) {
    toast.textContent = msg;
    if (isError) {
      toast.classList.add('error');
    } else {
      toast.classList.remove('error');
    }
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

  // ─── Undo Helper ─────────────────────────────────────────────────
  function pushUndo() {
    undoStack.push(JSON.stringify({ elements, nextId, selectedId }));
    if (undoStack.length > 30) undoStack.shift();
  }

  function undo() {
    if (undoStack.length === 0) return;
    const state = JSON.parse(undoStack.pop());
    elements = state.elements;
    nextId = state.nextId;
    selectedId = state.selectedId;
    renderAll();
  }

  // ─── Sidebar Tab Switching ────────────────────────────────────────
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.sidebar-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panelId = btn.getAttribute('data-panel');
      const panel = document.getElementById(panelId);
      if (panel) panel.classList.add('active');
    });
  });

  // ─── Photo Grid Population ───────────────────────────────────────
  const photoFiles = [
    '476134404_17875232112256380_4600796461829010859_n.webp',
    '519678648_17894596167256380_6073353271219685461_n.webp',
    '520164675_17894596158256380_7637606030160676168_n.webp',
    '523806356_17895735537256380_6116778299933055935_n.webp',
    '523972189_17895735630256380_2857830293981355875_n.webp',
    '524112172_17895735555256380_3351294853834111698_n.webp',
    '524172701_17895735594256380_3562323303874430975_n.webp',
    '540689864_17900363727256380_3030173048801433640_n.webp',
    '542453050_17900363691256380_4953315977784329185_n.webp',
    '559723147_17904207987256380_8549932647310780811_n.webp',
    '559868666_17904207948256380_1472536652549086301_n.webp',
    '560551909_17904207969256380_4514501628863416138_n.webp',
    '567283153_17905639755256380_8523918674073294407_n.webp',
    '567459477_17905639791256380_5496578577729039722_n.webp',
    '571800585_17907049944256380_2969910480933092566_n.webp',
    '621437366_17916172293256380_2938892839299599836_n.webp',
    '621633406_17916172260256380_3081414813452718117_n.webp',
    '622078047_17916172365256380_4307768692941245159_n.webp',
    '658275412_17925218328256380_2714796768547271920_n.webp',
    '658770840_17925218355256380_114934240232903129_n.webp',
    '658804541_17925218304256380_3820186122590297636_n.webp'
  ];

  photoFiles.forEach(filename => {
    const img = document.createElement('img');
    img.className = 'photo-thumb';
    img.src = 'photos of her/' + filename;
    img.addEventListener('click', () => addPhotoElement(img.src));
    photoGrid.appendChild(img);
  });

  // ─── Photo Upload ─────────────────────────────────────────────────
  photoUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => addPhotoElement(ev.target.result);
    reader.readAsDataURL(file);
    photoUpload.value = '';
  });

  // ─── Add Element Functions ────────────────────────────────────────
  function makeBaseElement(type) {
    return {
      id: nextId++,
      type,
      x: 100 + Math.random() * 50,
      y: 100 + Math.random() * 50,
      width: 200,
      height: 40,
      rotation: 0,
      zIndex: nextId,
      content: '',
      fontFamily: 'Inter',
      fontSize: 16,
      color: '#23243a',
      bold: false,
      italic: false,
      shapeType: 'rect'
    };
  }

  function addTextElement(preset) {
    pushUndo();
    const el = makeBaseElement('text');
    switch (preset) {
      case 'heading':
        el.fontSize = 32;
        el.bold = true;
        el.content = 'Heading';
        el.height = 50;
        break;
      case 'subheading':
        el.fontSize = 24;
        el.content = 'Subheading';
        el.height = 40;
        break;
      case 'body':
        el.fontSize = 16;
        el.content = 'Type your text here...';
        el.height = 30;
        break;
      case 'caption':
        el.fontSize = 13;
        el.italic = true;
        el.color = '#888';
        el.content = 'Caption text';
        el.height = 25;
        break;
      case 'bengali':
        el.fontSize = 22;
        el.fontFamily = 'Atma';
        el.content = 'আমি তোমায় ভালোবাসি 💖';
        el.height = 40;
        break;
    }
    elements.push(el);
    renderAll();
    selectElement(el.id);
  }

  function addPhotoElement(src) {
    pushUndo();
    const el = makeBaseElement('photo');
    el.width = 150;
    el.height = 150;
    el.content = src;
    elements.push(el);
    renderAll();
    selectElement(el.id);
  }

  function addStickerElement(emoji) {
    pushUndo();
    const el = makeBaseElement('sticker');
    el.width = 60;
    el.height = 60;
    el.content = emoji;
    elements.push(el);
    renderAll();
    selectElement(el.id);
  }

  function addShapeElement(shapeType) {
    pushUndo();
    const el = makeBaseElement('shape');
    el.shapeType = shapeType;
    el.width = 120;
    if (shapeType === 'circle') {
      el.height = 120;
    } else if (shapeType === 'line') {
      el.height = 4;
    } else {
      el.height = 80;
    }
    elements.push(el);
    renderAll();
    selectElement(el.id);
  }

  // ─── Rendering ────────────────────────────────────────────────────
  function renderAll() {
    elementsLayer.querySelectorAll('.canvas-element').forEach(el => el.remove());
    elements.forEach(el => renderElement(el));
  }

  function renderElement(el) {
    const div = document.createElement('div');
    div.className = 'canvas-element';
    div.style.position = 'absolute';
    div.style.left = el.x + 'px';
    div.style.top = el.y + 'px';
    div.style.width = el.width + 'px';
    div.style.height = el.height + 'px';
    div.style.transform = `rotate(${el.rotation}deg)`;
    div.style.zIndex = el.zIndex;
    div.dataset.id = el.id;

    switch (el.type) {
      case 'text':
        div.classList.add('text-element');
        div.contentEditable = 'false';
        div.innerText = el.content;
        div.style.fontFamily = el.fontFamily;
        div.style.fontSize = el.fontSize + 'px';
        div.style.color = el.color;
        div.style.fontWeight = el.bold ? 'bold' : 'normal';
        div.style.fontStyle = el.italic ? 'italic' : 'normal';
        break;

      case 'photo':
        div.classList.add('photo-element');
        const img = document.createElement('img');
        img.src = el.content;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.pointerEvents = 'none';
        img.draggable = false;
        div.appendChild(img);
        break;

      case 'sticker':
        div.classList.add('sticker-element');
        div.innerText = el.content;
        break;

      case 'shape':
        div.classList.add('shape-element');
        if (el.shapeType === 'circle') {
          div.classList.add('circle');
        }
        if (el.shapeType === 'heart') {
          div.innerHTML = `<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--accent)" opacity="0.6"/></svg>`;
        }
        break;
    }

    // Selection visuals
    if (el.id === selectedId) {
      div.classList.add('selected');

      // Resize handles
      ['nw', 'ne', 'sw', 'se'].forEach(pos => {
        const handle = document.createElement('div');
        handle.className = 'resize-handle ' + pos;
        handle.dataset.handle = pos;
        div.appendChild(handle);
      });

      // Rotate handle
      const rotHandle = document.createElement('div');
      rotHandle.className = 'rotate-handle';
      div.appendChild(rotHandle);
    }

    elementsLayer.appendChild(div);

    // Pointerdown for drag/select
    div.addEventListener('pointerdown', (e) => onElementPointerDown(e, el));
  }

  // ─── Selection & Property Panel ───────────────────────────────────
  function selectElement(id) {
    selectedId = id;
    propGroups.forEach(g => g.classList.add('show'));
    const el = elements.find(e => e.id === id);
    if (el) {
      propFont.value = el.fontFamily;
      propFontSize.value = el.fontSize;
      propFontSizeVal.textContent = el.fontSize;
      propColor.value = el.color;
      if (el.bold) {
        propBold.classList.add('active');
      } else {
        propBold.classList.remove('active');
      }
      if (el.italic) {
        propItalic.classList.add('active');
      } else {
        propItalic.classList.remove('active');
      }
    }
    renderAll();
  }

  function deselectAll() {
    selectedId = null;
    propGroups.forEach(g => g.classList.remove('show'));
    renderAll();
  }

  // ─── Property Change Listeners ────────────────────────────────────
  propFont.addEventListener('change', () => {
    const el = elements.find(e => e.id === selectedId);
    if (!el) return;
    pushUndo();
    el.fontFamily = propFont.value;
    renderAll();
  });

  propFontSize.addEventListener('input', () => {
    const el = elements.find(e => e.id === selectedId);
    if (!el) return;
    pushUndo();
    el.fontSize = parseInt(propFontSize.value, 10);
    propFontSizeVal.textContent = propFontSize.value;
    renderAll();
  });

  propColor.addEventListener('input', () => {
    const el = elements.find(e => e.id === selectedId);
    if (!el) return;
    pushUndo();
    el.color = propColor.value;
    renderAll();
  });

  propBold.addEventListener('click', () => {
    const el = elements.find(e => e.id === selectedId);
    if (!el) return;
    pushUndo();
    el.bold = !el.bold;
    propBold.classList.toggle('active');
    renderAll();
  });

  propItalic.addEventListener('click', () => {
    const el = elements.find(e => e.id === selectedId);
    if (!el) return;
    pushUndo();
    el.italic = !el.italic;
    propItalic.classList.toggle('active');
    renderAll();
  });

  propDelete.addEventListener('click', () => {
    if (selectedId === null) return;
    pushUndo();
    elements = elements.filter(e => e.id !== selectedId);
    deselectAll();
    renderAll();
  });

  // ─── Drag, Resize, Rotate ────────────────────────────────────────
  function onElementPointerDown(e, el) {
    e.preventDefault();
    e.stopPropagation();

    const target = e.target;
    const canvasRect = canvas.getBoundingClientRect();

    if (target.classList.contains('resize-handle')) {
      isResizing = true;
      activeHandle = target.dataset.handle;
      resizeStart = {
        x: e.clientX,
        y: e.clientY,
        elX: el.x,
        elY: el.y,
        elW: el.width,
        elH: el.height
      };
    } else if (target.classList.contains('rotate-handle')) {
      isRotating = true;
      const cx = el.x + el.width / 2;
      const cy = el.y + el.height / 2;
      const px = e.clientX - canvasRect.left;
      const py = e.clientY - canvasRect.top;
      rotateStart = Math.atan2(py - cy, px - cx) - (el.rotation * Math.PI / 180);
    } else {
      isDragging = true;
      const px = e.clientX - canvasRect.left;
      const py = e.clientY - canvasRect.top;
      dragOffset.x = px - el.x;
      dragOffset.y = py - el.y;
    }

    pushUndo();
    selectElement(el.id);
  }

  document.addEventListener('pointermove', (e) => {
    if (!isDragging && !isResizing && !isRotating) return;
    const el = elements.find(e2 => e2.id === selectedId);
    if (!el) return;

    const canvasRect = canvas.getBoundingClientRect();
    const px = e.clientX - canvasRect.left;
    const py = e.clientY - canvasRect.top;

    if (isDragging) {
      let newX = px - dragOffset.x;
      let newY = py - dragOffset.y;
      // Clamp to canvas bounds
      newX = Math.max(0, Math.min(newX, canvasRect.width - el.width));
      newY = Math.max(0, Math.min(newY, canvasRect.height - el.height));
      el.x = newX;
      el.y = newY;
      renderAll();
    }

    if (isResizing) {
      const dx = e.clientX - resizeStart.x;
      const dy = e.clientY - resizeStart.y;

      let newX = resizeStart.elX;
      let newY = resizeStart.elY;
      let newW = resizeStart.elW;
      let newH = resizeStart.elH;

      if (activeHandle.includes('e')) {
        newW = Math.max(20, resizeStart.elW + dx);
      }
      if (activeHandle.includes('w')) {
        newW = Math.max(20, resizeStart.elW - dx);
        newX = resizeStart.elX + (resizeStart.elW - newW);
      }
      if (activeHandle.includes('s')) {
        newH = Math.max(20, resizeStart.elH + dy);
      }
      if (activeHandle.includes('n')) {
        newH = Math.max(20, resizeStart.elH - dy);
        newY = resizeStart.elY + (resizeStart.elH - newH);
      }

      el.x = newX;
      el.y = newY;
      el.width = newW;
      el.height = newH;
      renderAll();
    }

    if (isRotating) {
      const cx = el.x + el.width / 2;
      const cy = el.y + el.height / 2;
      const angle = Math.atan2(py - cy, px - cx);
      el.rotation = ((angle - rotateStart) * 180 / Math.PI) % 360;
      renderAll();
    }
  });

  document.addEventListener('pointerup', () => {
    isDragging = false;
    isResizing = false;
    isRotating = false;
    activeHandle = null;
  });

  // ─── Double-Click to Edit Text ────────────────────────────────────
  elementsLayer.addEventListener('dblclick', (e) => {
    let target = e.target;
    if (!target.classList.contains('text-element')) {
      target = target.closest('.text-element');
    }
    if (!target) return;

    target.contentEditable = 'true';
    target.focus();

    // Select all text for easy replacement
    const range = document.createRange();
    range.selectNodeContents(target);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    const elId = parseInt(target.dataset.id, 10);

    const onBlur = () => {
      const el = elements.find(e2 => e2.id === elId);
      if (el) {
        pushUndo();
        el.content = target.innerText;
      }
      target.contentEditable = 'false';
      target.removeEventListener('blur', onBlur);
    };
    target.addEventListener('blur', onBlur);
  });

  // ─── Canvas Click to Deselect ─────────────────────────────────────
  elementsLayer.addEventListener('click', (e) => {
    if (e.target === elementsLayer) {
      deselectAll();
    }
  });

  // ─── Preview Toggle ───────────────────────────────────────────────
  btnTogglePreview.addEventListener('click', () => {
    previewFrame.classList.toggle('hidden');
    btnTogglePreview.classList.toggle('active');
    const status = document.querySelector('.canvas-status');
    if (previewFrame.classList.contains('hidden')) {
      status.textContent = 'Canvas: 412 × 915 px · Samsung Galaxy A-Series · Preview OFF';
    } else {
      status.textContent = 'Canvas: 412 × 915 px · Samsung Galaxy A-Series · Live Preview ON';
    }
  });

  // ─── Sticker Buttons ─────────────────────────────────────────────
  document.querySelectorAll('.sticker-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      addStickerElement(btn.textContent);
    });
  });

  // ─── Shape Buttons ───────────────────────────────────────────────
  document.querySelectorAll('.shape-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      addShapeElement(btn.dataset.shape);
    });
  });

  // ─── Text Add Buttons ────────────────────────────────────────────
  const textBtnMap = {
    'add-heading': 'heading',
    'add-subheading': 'subheading',
    'add-body': 'body',
    'add-caption': 'caption',
    'add-bengali': 'bengali'
  };
  Object.entries(textBtnMap).forEach(([btnId, preset]) => {
    const btn = document.getElementById(btnId);
    if (btn) btn.addEventListener('click', () => addTextElement(preset));
  });

  // ─── Save / Load / Export / Import / Clear ────────────────────────
  const STORAGE_KEY = 'koninika_designer_layout';

  btnSave.addEventListener('click', () => {
    const data = JSON.stringify({ elements, nextId });
    localStorage.setItem(STORAGE_KEY, data);
    showToast('Design saved!');
  });

  btnExport.addEventListener('click', () => {
    const data = JSON.stringify({ elements, nextId }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'koninika-design.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Design exported!');
  });

  btnImport.addEventListener('click', () => {
    importFile.click();
  });

  importFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        elements = data.elements || [];
        nextId = data.nextId || 1;
        selectedId = null;
        renderAll();
        showToast('Design imported!');
      } catch (err) {
        showToast('Invalid file format', true);
      }
    };
    reader.readAsText(file);
    importFile.value = '';
  });

  btnClear.addEventListener('click', () => {
    if (!confirm('Clear all elements? This cannot be undone.')) return;
    elements = [];
    nextId = 1;
    selectedId = null;
    localStorage.removeItem(STORAGE_KEY);
    renderAll();
    showToast('Canvas cleared!');
  });

  // ─── Keyboard Shortcuts ───────────────────────────────────────────
  document.addEventListener('keydown', (e) => {
    // Don't intercept when editing text
    const activeEl = document.activeElement;
    const isEditing = activeEl && activeEl.contentEditable === 'true';

    if ((e.key === 'Delete' || e.key === 'Backspace') && !isEditing) {
      if (selectedId !== null) {
        e.preventDefault();
        pushUndo();
        elements = elements.filter(el => el.id !== selectedId);
        deselectAll();
        renderAll();
      }
    }

    if (e.key === 'Escape') {
      deselectAll();
    }

    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      const data = JSON.stringify({ elements, nextId });
      localStorage.setItem(STORAGE_KEY, data);
      showToast('Design saved!');
    }

    if (e.ctrlKey && e.key === 'z') {
      e.preventDefault();
      undo();
    }
  });

  // ─── Load Saved State on Init ─────────────────────────────────────
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const data = JSON.parse(saved);
      elements = data.elements || [];
      nextId = data.nextId || 1;
    } catch (e) {
      // Ignore corrupt data
    }
  }
  renderAll();
});
