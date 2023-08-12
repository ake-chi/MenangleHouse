// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    filter: '*',
    percentPosition: true,    
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-sizer'
    }
  });

  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  // bind filter on select change
$('.filters-select').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
  // use filterFn if matches value
  // filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
  











// var $grid = $('.grid').isotope({
//     itemSelector : '.f-item'    
// });


// // bind filter button click
// $('.filters-button-group').on( 'click', 'button', function() {
//     var filterValue = $( this ).attr('data-filter');
//     // use filterFn if matches value
//     filterValue = filterFns[ filterValue ] || filterValue;
//     $grid.isotope({ filter: filterValue });
//   });
//   // change is-checked class on buttons
//   $('.button-group').each( function( i, buttonGroup ) {
//     var $buttonGroup = $( buttonGroup );
//     $buttonGroup.on( 'click', 'button', function() {
//       $buttonGroup.find('.is-checked').removeClass('is-checked');
//       $( this ).addClass('is-checked');
//     });
//   });
  

// // show all items
// $grid.isotope({ filter: '*' });

// // filter .kitchen items
// $grid.isotope({ filter: '.kitchen' });

// // filter .bedroom items
// $grid.isotope({ filter: '.bedroom' });

// // filter .bathroom items
// $grid.isotope({ filter: '.bathroom' });

// // filter .living-room items
// $grid.isotope({ filter: '.living-room' });

// // filter .commercial items
// $grid.isotope({ filter: '.commercial' });