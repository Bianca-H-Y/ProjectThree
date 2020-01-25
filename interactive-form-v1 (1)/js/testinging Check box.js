('.activities').change(function(event) {
    let checkedBox = event.target;
    const dateTimeSame = $(checkedBox).attr('data-day-and-time');
    const input = $('input[type="checkbox"]');
   input.each(function(index, value) {
       const checkedTime = $(value).attr('data-day-and-time');
       //use one statement with and operator being sure to note when items are like//
       if (dateTimeSame === checkedTime && checkedBox.name !== value.name) {
        if ($(checkedBox).prop('checked')) {
            $(checkedBox).attr('disabled');
           $(value).attr('disabled', true);
         
           
        } else {
         $(checkedBox).attr('disabled', false);
         $(value).attr('disabled', false);
         
        }
    }
    });
    
});



//at least 1 activity box checked message and red

const $errorDiv = $('<div id="error"></div>');
const $errorAdd = $('.activities').append($errorDiv);
const $errorMessage= $('#error').html('Please be sure at least one box is checked.').css({backgroundColor: '#f25124'});
const $error = $('#error');
//the error code is showing up so hide until action taken
$errorMessage.hide();
let $errorCheckBox = false;
const $input = $('input[type="checkbox"]');

('.activities').change(function(event) {
    let checkBoxValidate = event.target;
    if (checkBoxValidate .prop('checked')){
        $errorMessage.hide();
        $errorCheckBox = true;
       // if a checkbox are checked then don't display the warning
       
        } else {
        // if a checkbox is NOT checked display the warning
        } $errorMessage.show();
        $errorCheckBox = false;
    });

$input.change(function() {
    
    if ($(this).is('checked' === 1 )) {
        $errorMessage.show();
        $errorCheckBox = false;
        } else {
        $errorMessage.hide();
        $errorCheckBox = true;
        }  
    


