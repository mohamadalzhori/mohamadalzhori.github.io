var Typer = {
    text: '<span id="a">zhori@eniac</span>:<span id="b">~</span><span id="c">$</span> cd vault/me\n' +
          '<span id="a">zhori@eniac</span>:<span id="b">~</span><span id="c">$</span> echo "Press Spacebar to FastForward"\n' + 
          '<span id="a">zhori@eniac</span>:<span id="b">~</span><span id="c">$</span> cat Mohamad_Alzhori.txt<br/><br/>\n' +
          
          'Hola! I am Mohamad Alzhori. \n\n' +

          'I am a student at the Lebanese American University, pursuing a Bachelor of Engineering in Electrical Engineering, with an expected graduation date of May 2025.\n\n'+
          
          'My passion for electrical engineering sparked my journey, and I have honed my skills in programming and software development. \n\n' +
          
          'I am driven by the desire to consistently improve and have a meaningful impact in the world.\n\n' + 
          
          'I am also proud to be a recipient of the prestigious USAID Higher Education Scholarship Program (HES) at the Lebanese American University, which has provided me with invaluable educational opportunities.\n\n' + 
          
          'I am eagerly seeking software engineering opportunities that will allow me to boost and apply my knowledge and skills to solve real-world problems.\n\n' + 
          
          'If you are interested in learning more about how I can contribute to your organization, please feel free to reach out to me via <a href="https://www.linkedin.com/in/mohamadalzhori">LinkedIn</a> or <a href="mailto:mohamadalzhori01@gmail.com">mohamadalzhori01@gmail.com</a> \n\n' +
          
          'Have a look at my codes on <a href="https://github.com/mohamadalzhori">GitHub</a>. \n\n' + 

          '<span id="a">zhori@eniac</span>:<span id="b">~</span><span id="c">$</span> cat Tech_Skills.txt\n\n'+
          
          'Skill Tree \n├── C++\n├── Java\n├── Frontend \n│   ├── React\n├── Backend \n│   ├── Node.js\n├── DB\n│  ├── SQL\n├── DSA\n├── CLI\n│   ├── Bash\n│   ├── Linux\n│   ├── Git\n├── Extras\n│   ├── Touch Typing\n\n' +
          
          '<span id="a">zhori@eniac</span>:<span id="b">~</span><span id="c">$</span> cat Experience.txt\n\n'+
          '<span id="space">---</span>┌───── Personal Project: Arduino-based Temp and Hum Controller ───────┐\n <span id="space">---</span>│<span id="space">---------------------------------------------------------------------</span>│\n <span id="a">Jul 2019</span> <span id="space">---</span> <span id="a">Mar 2023</span> <span id="space">--------------------------</span> <span id="a">May 2023</span> <span id="space">-----------</span> <span id="a">Present</span> \n' + 
          '<span id="space">----------------</span>│<span id="space">-----------------------------------</span>│                         \n <span id="space">----------------</span>└─── Embedded Systems Internship ───┘\n\n'+
          '<span id="a">zhori@eniac</span>:<span id="b">~</span><span id="c">$</span> cat Projects.txt\n\n'+
          '┌────────────────────────────────────────────────────────────────────┐\n│ Project 1: <span id="a">Learning Management System for an Elementary School NGO </span>│\n│ Aug 2023 – Oct 2023 <span id="space">----------------------------------------------</span>  │\n│ Skills: [React] [Node.js] [SQL] [Git] <span id="space">----------------------------</span> │\n└────────────────────────────────────────────────────────────────────┘\n'+
        
          '┌────────────────────────────────────────────────────────────────────┐\n│ Project 2: <span id="a">Calendar Widget for Qtile Window Manager <span id="space">--------------</span> </span>│\n│ Aug 2023 – Sept 2023  <span id="space">---------------------------------------------</span>  │\n│ Skills: [Python] [Linux] [Qtile] [Google Calendar API] <span id="space">-----------</span> │\n└────────────────────────────────────────────────────────────────────┘\n'+
        

          '┌────────────────────────────────────────────────────────────────────┐\n│ Project 3: <span id="a">IOT-based Home Automation Solution <span id="space">--------------------</span> </span>│\n│ Mar 2023 – May 2023  <span id="space">----------------------------------------------</span>  │\n│ Skills: [C++] [Arduino] [Blynk Software]  <span id="space">-------------------------</span> │\n└────────────────────────────────────────────────────────────────────┘\n'+
        
          '<span id="a">zhori@eniac</span>:<span id="b">~</span><span id="c">$</span> '
        
        
       
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

// A click event listener to skip the animation on mobile
document.addEventListener("click", function () {
    Typer.index = Typer.text.length;
    Typer.typeText();
});
