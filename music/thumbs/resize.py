from PIL import Image as im

while True:
    fp = input("name: ")
    size = 512, 512

    data = im.open(fp + ".png", mode="r")
    data.thumbnail(size, im.ANTIALIAS)
    data.save(fp + "_thumb.png")
