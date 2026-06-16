import numpy
from PIL import Image, ImageDraw, ImageChops

def find_coeffs(pa, pb):
    # pa is source, pb is target.
    # We want a matrix that maps pb to pa for Image.transform, so the arguments are swapped in the call.
    matrix = []
    for p1, p2 in zip(pa, pb):
        matrix.append([p1[0], p1[1], 1, 0, 0, 0, -p2[0]*p1[0], -p2[0]*p1[1]])
        matrix.append([0, 0, 0, p1[0], p1[1], 1, -p2[1]*p1[0], -p2[1]*p1[1]])

    A = numpy.matrix(matrix, dtype=numpy.float64)
    B = numpy.array(pb).reshape(8)
    res = numpy.dot(numpy.linalg.inv(A.T * A) * A.T, B)
    return numpy.array(res).reshape(8)

# Load images
bg = Image.open('public/hero_composite.png').convert('RGBA')
logo = Image.open('public/logo.jpeg').convert('RGBA')

target_corners = [
    (512, 488), # Top-left
    (862, 608), # Top-right
    (862, 752), # Bottom-right
    (512, 737)  # Bottom-left
]

# Draw a patch over the old text.
draw = ImageDraw.Draw(bg)
draw.polygon(target_corners, fill=(234, 238, 243, 255))

w, h = logo.size
source_corners = [(0, 0), (w, 0), (w, h), (0, h)]

# To map FROM source TO target using Image.transform(target_size, PERSPECTIVE, coeffs),
# coeffs must be calculated from target to source.
# So we pass target_corners as pa, and source_corners as pb!
coeffs = find_coeffs(target_corners, source_corners)

# Transform logo
warped_rgba = logo.transform((bg.width, bg.height), Image.PERSPECTIVE, coeffs, Image.BICUBIC)

bg_rgb = bg.convert('RGB')
warped_rgb = warped_rgba.convert('RGB')

# Multiply the background with the warped logo
multiplied = ImageChops.multiply(bg_rgb, warped_rgb)

# Paste the multiplied result back onto the background
bg.paste(multiplied, (0, 0), mask=warped_rgba)

bg.save('public/hero_composite.png')
print("Successfully baked logo into hero_composite.png")
