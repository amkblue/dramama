// REALTED VIDEOSSS typeright span
$(document).ready(function() {
  // Expand the horizontal tab
  $('.horizontal-tab').animate({
      width: '3%' 
  }, 1500, function() {
      // Start typewriting the text after the expansion is done
      $('.typewriter').text('C A S T');
  });
});

// =======================================  RATING  STAR    =====================================================
var current_star_statusses = [];

star_elements = $('.fa-star').parent();

star_elements.find(".fa-star").each(function(i, elem) {
  current_star_statusses.push($(elem).hasClass('yellow'));
});

star_elements.find(".fa-star").mouseenter(changeRatingStars);
star_elements.find(".fa-star").mouseleave(resetRatingStars);

// changes the rating star colors when hovering over it.
function changeRatingStars() {
  // Current star hovered
  var star = $(this);

  // Removes all colors first from all stars
  $('.fa-star').removeClass('gray').removeClass('yellow');

  // Makes the current hovered star yellow
  star.addClass('yellow');

  // Makes the previous stars yellow and the next stars gray
  star.parent().prevAll().children('.fa-star').addClass('yellow');
  star.parent().nextAll().children('.fa-star').addClass('gray');
}

/**
 * Resets the rating star colors when not hovered anymore.
 */
function resetRatingStars() {
  star_elements.each(function(i, elem) {
    $(elem).removeClass('yellow').removeClass('gray').addClass(current_star_statusses[i] ? 'yellow' : 'gray');
  });
}

// ============================== AUTOPLAY THE VIDEO ================================
$(document).ready(function() {
  var mainVideoContainer = $('.main-video');
  var playlist = $('.video-playlist');

  function switchVideos(videoElement, videoTitle) {
      var oldMainVideo = mainVideoContainer.find('video').first();
      var oldMainTitle = mainVideoContainer.find('.title').text();

      // Create the new main video with controls and autoplay
      var newMainVideo = videoElement.clone().attr('controls', true).prop('autoplay', true).attr('width', '960');

      // Replace the main video with the new video and title
      mainVideoContainer.empty().append(newMainVideo).append($('<h3>').addClass('title').text(videoTitle));

      var oldMainVidDiv = $('<div>').addClass('vid').append(
          oldMainVideo.clone().removeAttr('controls').removeAttr('autoplay').attr('width', '300'),
          $('<h3>').addClass('title').text(oldMainTitle)
      );

      // Append the old main video to the end of the playlist
      playlist.append(oldMainVidDiv);

      // Remove the video that became the new main video from the playlist
      videoElement.closest('.vid').remove();
  }

  // Event handler for when the main video ends
  mainVideoContainer.on('ended', 'video', function() {
      var nextVideoElement = playlist.find('.vid').first();
      var nextVideoTitle = nextVideoElement.find('.title').text();
      switchVideos(nextVideoElement.find('video'), nextVideoTitle);
  });

  // Event handler for clicking on a video in the playlist
  playlist.on('click', '.vid video', function() {
      var clickedVideoTitle = $(this).siblings('.title').text();
      switchVideos($(this), clickedVideoTitle);
  });
});

// ==================== SEARCHHH BARRRRR ========================

const searchBtn = document.querySelector('.search-btn');
const closeBtn = document.querySelector('.close-btn');
const searchBox = document.querySelector('.search-box');

searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    closeBtn.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    closeBtn.classList.toggle('active');
});






