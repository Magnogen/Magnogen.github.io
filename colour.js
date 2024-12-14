on('load', () => {
  
    const headers = $$('article > header');
    
    const cols = [...Array(headers.length)].map((e, i) => {
        const hue = 360 * (i / headers.length)
        return chroma.oklch(0.5, 0.3, hue).alpha(0.25).hex()
    })
    
    headers.forEach((el, i) => {
        el.style.backgroundColor = cols[i];
    })
    
})  