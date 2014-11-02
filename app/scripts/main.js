Reveal.initialize({
    controls: false,
    progress: true,
    history: true,
    center: true,

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'none', // default/cube/page/concave/zoom/linear/none
//    backgroundTransition: 'none',

    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'bower_components/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'bower_components/reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js', condition: function() { return !!document.body.classList; } }
    ]

});

// highlight
$(document).ready(function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});



