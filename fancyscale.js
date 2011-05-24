(function($) {
  $.fn.fancyscale = function(options) {
    var elements = this;

    $(window).resize(function() { $(elements).fancyscaleResize(options); });
    setTimeout(function() { $(elements).fancyscaleResize(options); }, 10);
    setTimeout(function() { $(elements).fancyscaleResize(options); }, 30);
    return this;
  };
  $.fn.fancyscaleResize = function(options) {
    this.each(function() {
      $(this).height($(window).height());

      var container = this;
      $(container).find('img:not(.no-scale)').each(function() {
        var image = this;
        var height = $(image).height();
        var width = $(image).width();
        var ratio = (height / width).toFixed(2);
        var containerHeight = $(container).height();
        var containerWidth = $(container).width();
        var containerRatio = containerHeight / containerWidth;

        $(container).css('position', 'relative');
        $(image).css('position', 'absolute');

        if (containerRatio > ratio) {
          $(image).height(containerHeight);
          $(image).width(containerHeight / ratio);
        }
        else {
          $(image).width(containerWidth);
          $(image).height(containerWidth * ratio);
        }

        if ($(image).hasClass('center')) {
          $(image).css('left', (containerWidth - width) / 2);
        }
        else if ($(image).hasClass('right')) {
          $(image).css('right', 0);
        }

        if ($(image).hasClass('middle')) {
          $(image).css('top', (containerHeight - height) / 2);
        }
        else if ($(image).hasClass('bottom')) {
          $(image).css('bottom', 0);
        }
      });
    });
    return this;
  };
})(jQuery);
