from PIL import Image, ImageDraw

img = Image.open('public/hero_composite.png')
draw = ImageDraw.Draw(img)

corners = [
    (510, 485), # Top-left
    (865, 605), # Top-right
    (865, 755), # Bottom-right
    (510, 740)  # Bottom-left
]

for idx, (x, y) in enumerate(corners):
    draw.ellipse((x-5, y-5, x+5, y+5), fill='red')
    draw.text((x+10, y-10), str(idx), fill='red')
    
draw.polygon(corners, outline='green')

img.save('corners_test.png')
print("Corners saved to corners_test.png")
