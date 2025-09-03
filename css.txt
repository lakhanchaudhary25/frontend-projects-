TAGS AND PROPERTIES USED:
Things written in '*' will be applied to everything.

Things done on #nav:

used 'justify-content:flex start' to arrange nav elements at the start horizontally.
used 'position:fixed' to keep nav all the time while scrolling also.
used 'z-index:99' to keep nav above the video and everything all the time. 
used 'object-fit:cover' to properly place video.
also used "z-index:-1" to keep video at the back all the time.

Things done on #main:
Used 'position:relative' to keep the childern div inside the container main div.


Things done on page1:
'#page' was gievn height:100vh, 'vh' stands for viewport height , it is used to give height according to the size of screen.
now intead of using '%' i used 'vh' because our main parent class wasnt given any parameters howcome child can implement it , as it will only work if parent has a fixed height.
used 'text-transform:uppercase" to change the text into upper case.
used 'flex-direction:column' to arrange all the headings and paragraph tags in column format along with aligning them at the center 

Used 'psuedo elements' , which is basically used to write elements using css.
like- #page h1::befor{
    content: "EAT .DRINK . PLAY"
    position:absolute . 
    //For lifting it up , but has to give its   parent   'h1'  postiton relative
    top:-4px;
    left:-4px;
    //for adjusting it over h1
    webkit-text-stroke:1px black;
    // this is used to create a border for not whole boxxy style for h1 but instead , for border surrounding text EAT  
}


