# My Online Portfolio

## This Portfolio is meant to be MINIMAL and EFFECTIVE

It only uses one simple JavaScript function

    let index = 0;
    const speed = 10;
    function type() {
        if (index < text.length) {
            terminal.innerHTML = text.substring(0, index);
            index++;
            setTimeout(() => {
                type();
            }, speed);
        }
    }

- "text" is a variable that has all the content of the page
- Everytime I just update the content of the HTML element of ID=terminal and increment the index
