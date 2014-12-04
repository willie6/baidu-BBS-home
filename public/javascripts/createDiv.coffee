$(->
  $('.left-category-group').on({
  mouseenter: ->
    $('.tip-layer-container').css('display', 'block')
    $('.tip-layer-container').css({'position': 'static', 'left': '100px', 'top': '100px'})

  mouseover: ->
    $('.tip-layer-container').css('display', 'block')
    $('.tip-layer-container').css({'position': 'static', 'left': '100px', 'top': '100px'})

  mouseout: ->
    $('.tip-layer-container').css('display', 'none')

  }, $('.left-group-item'))
)