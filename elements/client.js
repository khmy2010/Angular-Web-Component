
let array = [];

$(function() {
  // attach event listener to the button
  $('button').on('click', function() {
    let invalid = false;
    array = [];

    $('input').each(function(index, element) {
      const val = $(element).val();
      if (!val || val && val.toString().trim().length === 0) {
        invalid = true;
      }

      array.push(parseInt(val, 10));
    });

    if (invalid) {
      $('#error').addClass('d-block');
      return;
    }

    $('#error').removeClass('d-block');
    console.log('array of data: ', array);
    $('ng-web-component').attr('chartData', JSON.stringify(array));
    
  });
});
