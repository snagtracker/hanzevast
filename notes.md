resize image to inner square

`convert blue-moon.jpg -set option:distort:viewport "%[fx:min(w,h)]x%[fx:min(w,h)]+%[fx:max((w-h)/2,0)]+%[fx:max((h-w)/2,0)]" -filter point -distort SRT 0 -resize 1024x1024\> +repage  square_blue-moon.jpg`
