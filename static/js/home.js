$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat archivedsites<br/>" +
      "><span class='caret'>$</span> Are you or your company looking for a new look?<br/> ^100" +
      "><span class='caret'>$</span> Well look no further.<br/> ^100" +
      "><span class='caret'>$</span> I'm here to help you create your web presence.<br/> ^300" +
      "><span class='caret'>$</span> Let's stand out amongst billions in the cyber world and real world.<br/> ^300" +
      "><span class='caret'>$</span> I'm Destiny Jones. Let's talk.<br/> ^300"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
