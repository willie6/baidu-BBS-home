// Generated by CoffeeScript 1.7.1
$(function() {
  return $('.left-category-group').on({
    mouseenter: function() {
      $('.tip-layer-container').css('display', 'block');
      return $('.tip-layer-container').css({
        'position': 'static',
        'left': '100px',
        'top': '100px'
      });
    },
    mouseover: function() {
      $('.tip-layer-container').css('display', 'block');
      return $('.tip-layer-container').css({
        'position': 'static',
        'left': '100px',
        'top': '100px'
      });
    },
    mouseout: function() {
      return $('.tip-layer-container').css('display', 'none');
    }
  }, $('.left-group-item'));
});
