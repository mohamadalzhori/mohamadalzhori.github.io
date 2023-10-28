var Typer = {
    text: '<span id="a">zhori@eniac</span>:<span id="b">~</span><span id="c">$</span> cd vault/me\n' +
          '<span id="a">zhori@eniac</span>:<span id="b">~</span><span id="c">$</span> echo "Press Spacebar to FastForward"\n' + 
          '<span id="a">zhori@eniac</span>:<span id="b">~</span><span id="c">$</span> cat Mohamad_Alzhori.txt<br/><br/>\n' +
          
          'Hola! I am Mohamad Alzhori. \n\n' +

          'I am a student at the Lebanese American University, pursuing a Bachelor of Engineering in Electrical Engineering, with an expected graduation date of May 2025.\n\n'+
          
          'My passion for electrical engineering sparked my journey, and I havee honed my skills in programming and software development. \n\n' +
          
          'I am driven by the desire to consistently improve and have a meaningful impact in the world.\n\n' + 
          
          'I am also proud to be a recipient of the prestigious USAID Higher Education Scholarship Program (HES) at the Lebanese American University, which has provided me with invaluable educational opportunities.\n\n' + 
          
          'I am eagerly seeking software engineering opportunities that will allow me to boost and apply my knowledge and skills to solve real-world problems.\n\n' + 
          
          'If you are interested in learning more about how I can contribute to your organization, please feel free to reach out to me via <a href="https://www.linkedin.com/in/mohamadalzhori">LinkedIn</a> or <a href="mailto:mohamadalzhori01@gmail.com">mohamadalzhori01@gmail.com</a> \n\n' +
          
          'Have a look at my codes on <a href="https://github.com/mohamadalzhori">GitHub</a>. \n\n' + 

          '<span id="a">zhori@eniac</span>:<span id="b">~</span><span id="c">$</span>'
          ,

    index: 0,
    speed: 10,

    typeText: function () {
        if (Typer.index <= Typer.text.length) {
            $('#terminal').html(Typer.text.substring(0, Typer.index).replace(/\n/g, '<br/>'));;
            window.scrollBy(0, 50);
            Typer.index++;
            setTimeout(Typer.typeText, Typer.speed);
        } else {
            // Add the blinking cursor after the text is done
            $('#terminal').append('<span class="cursor">|</span>');
        }
    }
};

Typer.typeText();

document.onkeydown = function (e) {
    if (e.keyCode === 32) {
        Typer.index = Typer.text.length;
        Typer.typeText();
    }
};
