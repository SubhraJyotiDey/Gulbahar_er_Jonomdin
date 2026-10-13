import os
import math
from PyQt6.QtWidgets import QApplication
from PyQt6.QtGui import (
    QImage, QPainter, QColor, QFont, QPen, QBrush, 
    QPainterPath, QTransform, QLinearGradient
)
from PyQt6.QtCore import Qt, QRectF, QPointF, QByteArray
from PyQt6.QtSvg import QSvgRenderer
from PIL import Image

GUITAR_SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 300">
  <path d="M 50 120 C 20 120 15 150 15 170 C 15 200 30 210 30 220 C 30 230 20 240 20 260 C 20 285 35 295 50 295 C 65 295 80 285 80 260 C 80 240 70 230 70 220 C 70 210 85 200 85 170 C 85 150 80 120 50 120 Z" fill="#b05c2e" stroke="#2c1a11" stroke-width="2.5"/>
  <path d="M 50 135 C 40 135 35 145 35 155 C 35 170 42 180 50 180 C 58 180 65 170 65 155 C 65 145 60 135 50 135 Z" fill="#fff5e6" opacity="0.15"/>
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
</svg>"""

UKULELE_SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 300">
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
</svg>"""

app = QApplication([])

w, h = 1200, 630
img = QImage(w, h, QImage.Format.Format_ARGB32_Premultiplied)
img.fill(QColor("#FFF5EA"))

p = QPainter(img)
p.setRenderHint(QPainter.RenderHint.Antialiasing)
p.setRenderHint(QPainter.RenderHint.SmoothPixmapTransform)
p.setRenderHint(QPainter.RenderHint.TextAntialiasing)

# 1. Subtle Scrapbook Grid
grid_pen = QPen(QColor(255, 180, 195, 65))
grid_pen.setWidth(1)
p.setPen(grid_pen)
for x in range(0, w, 32):
    p.drawLine(x, 0, x, h)
for y in range(0, h, 32):
    p.drawLine(0, y, w, y)

# 2. Musical notes floating in background
note_font = QFont("Segoe UI Symbol", 38, QFont.Weight.Bold)
p.setFont(note_font)
p.setPen(QColor(183, 105, 53, 38))
notes = [("♪", 65, 65), ("♫", 1120, 100), ("♬", 560, 68), ("♩", 1100, 580), ("♪", 540, 580), ("♫", 55, 595)]
for sym, nx, ny in notes:
    p.drawText(nx, ny, sym)

# 3. Decorative Doodles
p.save()
p.translate(1130, 25)
p.rotate(35)
p.setPen(Qt.PenStyle.NoPen)
p.setBrush(QColor(255, 107, 139, 160))
p.drawRect(-40, -12, 80, 24)
p.restore()

# ================= LEFT: FLAPPY ARCADE GAME VIEWPORT =================
gx, gy, gw, gh = 48, 38, 475, 554

# Shadow behind arcade screen
p.setPen(Qt.PenStyle.NoPen)
p.setBrush(QColor("#2B1810"))
p.drawRoundedRect(QRectF(gx + 12, gy + 14, gw, gh), 26, 26)

# Main arcade screen with clipping
game_path = QPainterPath()
game_path.addRoundedRect(QRectF(gx, gy, gw, gh), 26, 26)
p.save()
p.setClipPath(game_path)

# Warm Sky Gradient
sky_grad = QLinearGradient(gx, gy, gx, gy + gh)
sky_grad.setColorAt(0.0, QColor("#FFF4E6"))
sky_grad.setColorAt(1.0, QColor("#FFE6C8"))
p.fillRect(QRectF(gx, gy, gw, gh), QBrush(sky_grad))

# Subtle drifting musical notes inside game canvas
p.setFont(QFont("Arial Rounded MT", 22, QFont.Weight.Bold))
p.setPen(QColor(183, 105, 53, 35))
p.drawText(gx + 40, gy + 110, "♪")
p.drawText(gx + 170, gy + 85, "♫")
p.drawText(gx + 60, gy + 430, "♩")

# Floating Clouds inside game (positioned nicely away from obstacles)
p.setPen(QPen(QColor("#2B1810"), 2.5))
p.setBrush(QColor("#FFFFFF"))
p.drawRoundedRect(QRectF(gx + 25, gy + 52, 110, 34), 17, 17)
p.drawRoundedRect(QRectF(gx + 45, gy + 420, 125, 36), 18, 18)

# SVG Instrument Renderers
guitar_renderer = QSvgRenderer(QByteArray(GUITAR_SVG.encode('utf-8')))
ukulele_renderer = QSvgRenderer(QByteArray(UKULELE_SVG.encode('utf-8')))

# Obstacle Pipes (Guitar & Ukulele)
pipe_x = gx + 345

# Top Pipe: Classical Guitar hanging down into viewport
# Tip around y = gy + 220
p.save()
p.translate(pipe_x, gy + 220)
p.rotate(180) # Pointing down towards player
guitar_renderer.render(p, QRectF(-65, -30, 130, 390))
p.restore()

# Bottom Pipe: Ukulele standing up from the ground
# Tip around y = gy + 348
p.save()
p.translate(pipe_x, gy + 348)
ukulele_renderer.render(p, QRectF(-58, 0, 116, 350))
p.restore()

# Floating Heart Bonus in the gap between instruments
heart_font = QFont("Segoe UI Emoji", 34)
p.setFont(heart_font)
p.drawText(pipe_x - 22, gy + 300, "💖")

# Flappy Player Avatar
avatar_orig = Image.open(r"A:\Koninika\photos of her\avatar_surprised.png")
face_box = (320, 150, 840, 670)
cropped_face = avatar_orig.crop(face_box).resize((320, 320), Image.Resampling.LANCZOS)
temp_avatar_path = r"A:\Koninika\temp_cropped_avatar.png"
cropped_face.save(temp_avatar_path)
face_qimg = QImage(temp_avatar_path)

px, py, pr = gx + 150, gy + 275, 56

# Speed/Flap motion sparkles & wing
p.setFont(QFont("Segoe UI Emoji", 24))
p.drawText(px - 95, py - 6, "✨")
p.drawText(px - 72, py + 34, "💨")
p.drawText(px - 85, py + 52, "💫")

# Circular Avatar clipping
p.save()
avatar_path = QPainterPath()
avatar_path.addEllipse(QPointF(px, py), pr, pr)
p.setClipPath(avatar_path)
p.drawImage(QRectF(px - pr, py - pr, pr * 2, pr * 2), face_qimg)
p.restore()

# Dark outline on circular avatar
p.setPen(QPen(QColor("#2B1810"), 4.5))
p.setBrush(Qt.BrushStyle.NoBrush)
p.drawEllipse(QPointF(px, py), pr, pr)

# Flappy Party Hat
hat_path = QPainterPath()
hat_path.moveTo(px - 22, py - pr + 5)
hat_path.lineTo(px + 22, py - pr + 5)
hat_path.lineTo(px, py - pr - 38)
hat_path.closeSubpath()
p.setPen(QPen(QColor("#2B1810"), 3))
p.setBrush(QColor("#FF1A75"))
p.drawPath(hat_path)

# Pom pom on hat
p.setBrush(QColor("#FFD23F"))
p.drawEllipse(QPointF(px, py - pr - 42), 9, 9)

# "TAP TO FLAP" indicator sticker below avatar (ample width so text never cuts off)
tap_rect = QRectF(px - 68, py + pr + 14, 136, 28)
p.setPen(QPen(QColor("#2B1810"), 2))
p.setBrush(QColor("#FFFFFF"))
p.drawRoundedRect(tap_rect, 14, 14)
p.setFont(QFont("Arial Rounded MT", 11, QFont.Weight.Bold))
p.setPen(QColor("#2B1810"))
p.drawText(tap_rect, Qt.AlignmentFlag.AlignCenter, "👆 TAP TO FLAP")

# Bottom Ground Bar (Retro Candy Stripes)
ground_y = gy + gh - 32
p.setPen(QPen(QColor("#2B1810"), 3.5))
p.setBrush(QColor("#D9822B"))
p.drawRect(QRectF(gx, ground_y, gw, 32))
p.setPen(QPen(QColor("#B8671B"), 3))
for sx in range(int(gx) - 40, int(gx + gw) + 40, 20):
    p.drawLine(sx, int(ground_y + 32), sx + 20, int(ground_y))

# HUD Elements (Score & Level)
# Top Left: Level Badge
p.setPen(QPen(QColor("#2B1810"), 2.5))
p.setBrush(QColor("#FFFFFF"))
p.drawRoundedRect(QRectF(gx + 18, gy + 18, 100, 34), 17, 17)
p.setFont(QFont("Arial Rounded MT", 12, QFont.Weight.Bold))
p.setPen(QColor("#2B1810"))
p.drawText(QRectF(gx + 18, gy + 18, 100, 34), Qt.AlignmentFlag.AlignCenter, "STAGE 1")

# Top Right: Score Badge
p.setPen(QPen(QColor("#2B1810"), 2.5))
p.setBrush(QColor("#FF1A75"))
p.drawRoundedRect(QRectF(gx + gw - 165, gy + 18, 148, 34), 17, 17)
p.setPen(QColor("#FFFFFF"))
p.drawText(QRectF(gx + gw - 165, gy + 18, 148, 34), Qt.AlignmentFlag.AlignCenter, "SCORE: 20 ⭐")

p.restore() # End game viewport clipping

# Dark Frame Border around arcade screen
p.setPen(QPen(QColor("#2B1810"), 4.5))
p.setBrush(Qt.BrushStyle.NoBrush)
p.drawRoundedRect(QRectF(gx, gy, gw, gh), 26, 26)

# Yellow Pinned Washi Tape on Top Center of Game Box
tape_w, tape_h = 240, 36
tape_x, tape_y = gx + (gw - tape_w) / 2, gy - 12
p.save()
p.translate(tape_x + tape_w / 2, tape_y + tape_h / 2)
p.rotate(-2)
p.setPen(QPen(QColor("#D49B00"), 2, Qt.PenStyle.DashLine))
p.setBrush(QColor("#FFD23F"))
p.drawRoundedRect(QRectF(-tape_w/2, -tape_h/2, tape_w, tape_h), 5, 5)
p.setFont(QFont("Arial Rounded MT", 14, QFont.Weight.Bold))
p.setPen(QColor("#5C4300"))
p.drawText(QRectF(-tape_w/2, -tape_h/2, tape_w, tape_h), Qt.AlignmentFlag.AlignCenter, "HAPPY JUMP! 🎈")
p.restore()


# ================= RIGHT: HIGH-CONVERTING LINK PREVIEW CARD =================
rx = 560
card_w = w - rx - 48 # around 592px

# 1. Top Pill Badge: "🎂 20TH BIRTHDAY SPECIAL EDITION"
pill_w, pill_h = 380, 42
pill_y = 48
p.setPen(Qt.PenStyle.NoPen)
p.setBrush(QColor("#2B1810"))
p.drawRoundedRect(QRectF(rx + 4, pill_y + 4, pill_w, pill_h), 21, 21)
p.setPen(QPen(QColor("#2B1810"), 3))
p.setBrush(QColor("#FFD23F"))
p.drawRoundedRect(QRectF(rx, pill_y, pill_w, pill_h), 21, 21)
p.setFont(QFont("Arial Rounded MT", 14, QFont.Weight.Bold))
p.setPen(QColor("#2B1810"))
p.drawText(QRectF(rx, pill_y, pill_w, pill_h), Qt.AlignmentFlag.AlignCenter, "🎂 20TH BIRTHDAY SPECIAL EDITION")

# 2. Subtitle: "PLAY THE RETRO MINI-GAME!"
sub_y = pill_y + 76
p.setFont(QFont("Arial Rounded MT", 18, QFont.Weight.Bold))
p.setPen(QColor("#FF1A75"))
p.drawText(rx + 2, sub_y, "PLAY THE BIRTHDAY MINI-GAME!")

# 3. Giant 3D Title: "FLAPPY" & "KONINIKA"
title_font = QFont("Arial Rounded MT", 54, QFont.Weight.Black)
p.setFont(title_font)

def draw_retro_3d(painter, text, x, y, fill_col, shadow_col="#FF1A75", stroke_col="#2B1810", depth=7):
    # Deep shadow
    painter.setPen(QColor(stroke_col))
    painter.drawText(x + depth + 3, y + depth + 3, text)
    # 3D Extrusion layers
    painter.setPen(QColor(shadow_col))
    for d in range(depth, 0, -2):
        painter.drawText(x + d, y + d, text)
    # Stroke contour
    painter.setPen(QPen(QColor(stroke_col), 7, Qt.PenStyle.SolidLine, Qt.PenCapStyle.RoundCap, Qt.PenJoinStyle.RoundJoin))
    for ox, oy in [(-2,0),(2,0),(0,-2),(0,2),(-2,-2),(2,2),(-2,2),(2,-2)]:
        painter.drawText(x + ox, y + oy, text)
    # Crisp Face
    painter.setPen(QColor(fill_col))
    painter.drawText(x, y, text)

draw_retro_3d(p, "FLAPPY", rx + 2, sub_y + 75, "#FFFDF9", "#FF1A75", "#2B1810", 7)
draw_retro_3d(p, "KONINIKA", rx + 2, sub_y + 148, "#FFE873", "#FF1A75", "#2B1810", 7)

# Draw cute decorative balloon vector next to title
balloon_x, balloon_y = rx + 380, sub_y + 100
p.save()
p.translate(balloon_x, balloon_y)
p.setPen(QPen(QColor("#2B1810"), 2.5))
p.setBrush(QColor("#FF1A75"))
p.drawEllipse(QRectF(-20, -26, 40, 50))
# Knot
knot_path = QPainterPath()
knot_path.moveTo(-5, 24)
knot_path.lineTo(5, 24)
knot_path.lineTo(0, 30)
knot_path.closeSubpath()
p.drawPath(knot_path)
# String
p.setPen(QPen(QColor("#2B1810"), 1.8))
p.drawLine(0, 30, 4, 52)
# Highlight reflection on balloon
p.setPen(Qt.PenStyle.NoPen)
p.setBrush(QColor(255, 255, 255, 180))
p.drawEllipse(QRectF(-12, -18, 12, 18))
p.restore()

# 4. Feature Card 1: Tap to Flap & Fly
fb1_y = sub_y + 172
fb_w = card_w
fb_h = 56

p.setPen(Qt.PenStyle.NoPen)
p.setBrush(QColor("#2B1810"))
p.drawRoundedRect(QRectF(rx + 4, fb1_y + 4, fb_w, fb_h), 16, 16)
p.setPen(QPen(QColor("#2B1810"), 3))
p.setBrush(QColor("#FFFFFF"))
p.drawRoundedRect(QRectF(rx, fb1_y, fb_w, fb_h), 16, 16)
p.setFont(QFont("Arial Rounded MT", 15, QFont.Weight.Bold))
p.setPen(QColor("#2B1810"))
p.drawText(rx + 20, fb1_y + 35, "🎮  Tap to Fly • Dodge the guitars & ukuleles!")

# 5. Feature Card 2: Goal Score 20
fb2_y = fb1_y + 68
p.setPen(Qt.PenStyle.NoPen)
p.setBrush(QColor("#2B1810"))
p.drawRoundedRect(QRectF(rx + 4, fb2_y + 4, fb_w, fb_h), 16, 16)
p.setPen(QPen(QColor("#2B1810"), 3))
p.setBrush(QColor("#FFFFFF"))
p.drawRoundedRect(QRectF(rx, fb2_y, fb_w, fb_h), 16, 16)
p.drawText(rx + 20, fb2_y + 35, "🎁  Score 20 • Unlock secret birthday gift card!")

# 6. Big Action CTA Button: "▶ PLAY NOW & UNLOCK GIFT"
btn_y = fb2_y + 78
btn_w, btn_h = 470, 60
p.setPen(Qt.PenStyle.NoPen)
p.setBrush(QColor("#2B1810"))
p.drawRoundedRect(QRectF(rx + 6, btn_y + 6, btn_w, btn_h), 20, 20)
p.setPen(QPen(QColor("#2B1810"), 3.5))
p.setBrush(QColor("#22C55E"))
p.drawRoundedRect(QRectF(rx, btn_y, btn_w, btn_h), 20, 20)
p.setFont(QFont("Arial Rounded MT", 19, QFont.Weight.Black))
p.setPen(QColor("#052E16"))
p.drawText(QRectF(rx, btn_y, btn_w, btn_h), Qt.AlignmentFlag.AlignCenter, "▶  PLAY NOW & UNLOCK GIFT")

# 7. Date Stamp (Scrapbook handwritten signature)
date_font = QFont("Segoe Print", 14, QFont.Weight.Bold)
p.setFont(date_font)
p.setPen(QColor("#8C5642"))
date_text = "Wednesday, 14.10.2026 • Made with ❤️"
p.drawText(QRectF(rx, btn_y + 68, card_w, 30), Qt.AlignmentFlag.AlignRight, date_text)

p.end()

# Save Master High Quality PNG (1200 x 630)
out_png = r"A:\Koninika\flappy-preview.png"
img.save(out_png)

# Open with PIL for optimization & conversion
pil_img = Image.open(out_png)
pil_img.save(out_png, "PNG", optimize=True)
print(f"Optimized PNG: {os.path.getsize(out_png) / 1024:.1f} KB")

# Also save JPEG (1200x630, ultra lightweight ~140KB for WhatsApp)
out_jpg = r"A:\Koninika\flappy-preview.jpg"
pil_img.convert("RGB").save(out_jpg, "JPEG", quality=92, optimize=True)
print(f"Optimized JPEG: {os.path.getsize(out_jpg) / 1024:.1f} KB")

# Square 600x600 thumbnail centered on game
square_crop = pil_img.crop((20, 16, 550, 596)).resize((600, 600), Image.Resampling.LANCZOS)
out_square = r"A:\Koninika\flappy-preview-square.png"
square_crop.save(out_square, "PNG", optimize=True)
print(f"Square PNG: {os.path.getsize(out_square) / 1024:.1f} KB")

# Generate Favicons & Touch Icons from the avatar with party hat
# 180x180 Apple touch icon
touch_icon = pil_img.crop((gx + 40, gy + 150, gx + 260, gy + 370)).resize((180, 180), Image.Resampling.LANCZOS)
touch_icon.save(r"A:\Koninika\apple-touch-icon.png", "PNG", optimize=True)

# 64x64 Favicon PNG & ICO
fav_icon = touch_icon.resize((64, 64), Image.Resampling.LANCZOS)
fav_icon.save(r"A:\Koninika\favicon.png", "PNG", optimize=True)
fav_icon.save(r"A:\Koninika\favicon.ico", "ICO")

# Clean temp file
if os.path.exists(temp_avatar_path):
    os.remove(temp_avatar_path)

print("Master Flappy preview and icons generated successfully!")
