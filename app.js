$(()=>{

//Change Email Social Icon on hover
  $(document).ready(function(){
    $("#email-icon").mouseover(function(){
      $(this).attr("src", "images/social_icons/if_mail_email_envelope_send_message_blk.png");
    });
    $("#email-icon").mouseout(function(){
      $(this).attr("src", "images/social_icons/if_email_mail_envelope_send_message_1011336.png");
    });
  })


//Change GitHub Social Icon on hover
  $(document).ready(function(){
    $("#github-icon").mouseover(function(){
      $(this).attr("src", "images/social_icons/if_social_media_logo_github_blk.png");
    });
    $("#github-icon").mouseout(function(){
      $(this).attr("src", "images/social_icons/if_github_social_media_logo_1221583.png");
    });
  })

//Change LinkedIn Social Icon on hover
  $(document).ready(function(){
    $("#linkedin-icon").mouseover(function(){
      $(this).attr("src", "images/social_icons/if_linked_in_online_social_media_blk.png");
    });
    $("#linkedin-icon").mouseout(function(){
      $(this).attr("src", "images/social_icons/if_online_social_media_linked_in_734383.png");
    });
  })

//Change Instagram Social Icon on hover
  $(document).ready(function(){
    $("#instagram-icon").mouseover(function(){
      $(this).attr("src", "images/social_icons/if_instagram_online_social_media_photo_blk.png");
    });
    $("#instagram-icon").mouseout(function(){
      $(this).attr("src", "images/social_icons/if_instagram_online_social_media_734394.png");
    });
  })


//SMOOTH SCROLL
  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//ART MODAL 1
  const $openBtn1 = $('#open-art-modal-1');
  const $modal1 = $('#art-modal-1');
  const $closeBtn1 = $('#close-1');

  const openModal1 = () => {
    console.log('open modal');
    $modal1.css('display', 'block');
    $('.carousel1-images').children().eq(0).css('display', 'block');
  }

  const closeModal1 = () => {
    $modal1.css('display', 'none');
    event.preventDefault();
  }

  $openBtn1.on('click', openModal1);
  $closeBtn1.on('click', closeModal1);

//art carousel 1
    // keeping track of current image displaying
    let currentImgIndex1 = 0;
    // keeping track of how many images there are in the carousel
    const highestIndex1 = $('.carousel1-images').children().length - 1;
    // console.log(highestIndex);

    // when we click on the next button
    $('.next1').on('click', () => {
      console.log('clicked on next button');
      // we want the current image to hide
      $('.carousel1-images').children().eq(currentImgIndex1).css('display', 'none');

      if(currentImgIndex1 < highestIndex1) {
        currentImgIndex1++;
      } else {
        currentImgIndex1 = 0;
      }

      // we want the next image to show
      $('.carousel1-images').children().eq(currentImgIndex1).css('display', 'block');
    });

    // previous button
    $('.previous1').on('click', () => {
      // we want the current image to hide
      $('.carousel1-images').children().eq(currentImgIndex1).css('display', 'none');

      // decrement the counter
      if(currentImgIndex1 > 0) {
        currentImgIndex1--;
      } else {
        currentImgIndex1 = highestIndex1;
      }

      // we want the previous image to show
      $('.carousel1-images').children().eq(currentImgIndex1).css('display', 'block');
    });

//ART MODAL 2
  const $openBtn2 = $('#open-art-modal-2');
  const $modal2 = $('#art-modal-2');
  const $closeBtn2 = $('#close-2');

  const openModal2 = () => {
    console.log('open modal');
    $modal2.css('display', 'block');
    $('.carousel2-images').children().eq(0).css('display', 'block');
  }

  const closeModal2 = () => {
    $modal2.css('display', 'none');
    event.preventDefault();
  }

  $openBtn2.on('click', openModal2);
  $closeBtn2.on('click', closeModal2);

  //art carousel 2
      // keeping track of current image displaying
      let currentImgIndex2 = 0;
      // keeping track of how many images there are in the carousel
      const highestIndex2 = $('.carousel2-images').children().length - 1;
      // console.log(highestIndex);

      // when we click on the next button
      $('.next2').on('click', () => {
        console.log('clicked on next button');
        // we want the current image to hide
        $('.carousel2-images').children().eq(currentImgIndex2).css('display', 'none');

        if(currentImgIndex2 < highestIndex2) {
          currentImgIndex2++;
        } else {
          currentImgIndex2 = 0;
        }

        // we want the next image to show
        $('.carousel2-images').children().eq(currentImgIndex2).css('display', 'block');
      });

      // previous button
      $('.previous2').on('click', () => {
        // we want the current image to hide
        $('.carousel2-images').children().eq(currentImgIndex2).css('display', 'none');

        // decrement the counter
        if(currentImgIndex2 > 0) {
          currentImgIndex2--;
        } else {
          currentImgIndex2 = highestIndex2;
        }

        // we want the previous image to show
        $('.carousel2-images').children().eq(currentImgIndex2).css('display', 'block');
      });

//ART MODAL 3
  const $openBtn3 = $('#open-art-modal-3');
  const $modal3 = $('#art-modal-3');
  const $closeBtn3 = $('#close-3');

  const openModal3 = () => {
    console.log('open modal');
    $modal3.css('display', 'block');
    $('.carousel3-images').children().eq(0).css('display', 'block');
  }

  const closeModal3 = () => {
    $modal3.css('display', 'none');
    event.preventDefault();
  }

  $openBtn3.on('click', openModal3);
  $closeBtn3.on('click', closeModal3);

  //art carousel 3
      // keeping track of current image displaying
      let currentImgIndex3 = 0;
      // keeping track of how many images there are in the carousel
      const highestIndex3 = $('.carousel3-images').children().length - 1;
      // console.log(highestIndex);

      // when we click on the next button
      $('.next3').on('click', () => {
        console.log('clicked on next button');
        // we want the current image to hide
        $('.carousel3-images').children().eq(currentImgIndex3).css('display', 'none');

        if(currentImgIndex3 < highestIndex3) {
          currentImgIndex3++;
        } else {
          currentImgIndex3 = 0;
        }

        // we want the next image to show
        $('.carousel3-images').children().eq(currentImgIndex3).css('display', 'block');
      });

      // previous button
      $('.previous3').on('click', () => {
        // we want the current image to hide
        $('.carousel3-images').children().eq(currentImgIndex3).css('display', 'none');

        // decrement the counter
        if(currentImgIndex3 > 0) {
          currentImgIndex3--;
        } else {
          currentImgIndex3 = highestIndex3;
        }

        // we want the previous image to show
        $('.carousel3-images').children().eq(currentImgIndex3).css('display', 'block');
      });



}); //close on doc ready function
