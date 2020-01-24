//Global variables//
const $newDiv = $('<div id="total"></div>');
const allClassSelected = $('.activities').append($newDiv);
let $classTotal= 0;
//test passed that JS is attached to HTML file: console.log('Hey');//
//used CDN link for minified version of jQuery.
//add style sheet successful:https://teamtreehouse.com/library/css-reset-with-normalize//


//https://teamtreehouse.com/library/using-on-for-event-handling 
//target the id 'name' under input with jQuery .focus()
$('#name').focus();

//use .hide() to hide the HTML add on line 38 of my HTML
    const $otherTitle = $('#other-title'); 
    $('#other-title').hide();

//Create else if statement that will show the text field if other is selected. 

$('#title').change(function(){
    if ($(this).val() === 'other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});

//Tshirt section hide color options until the 2 shirt options are selected//
//add select theme message//
const $selectDesignTheme = $('#color').prepend('<option>Please Select a T-shirt theme:</option>');

// if the first child of id design "select them" is selected show the "please select theme message
//save: const $emptyTheme = $('#design option').first(); 
//save: $emptyTheme.hide();

//Hide color options until theme selected:
const $themeColor = $('#color');
$themeColor.hide();

  
//Show correct colors when JS Puns selected-targeting the attrides of the color ID 
$('#design').change(function(){
    const $designTheme =  $('#design');
    if ($(this).val() === 'js puns') {
        $('#color option:first-child').hide();
        $('#color').val("cornflowerblue", "darkslategrey", "gold");
        $themeColor.show();
        $('option[value="cornflowerblue"]').show();
        $('option[value="darkslategrey"]').show();
        $('option[value="gold"]').show();
        $('option[value="tomato"]').hide();
        $('option[value="steelblue"]').hide();
        $('option[value="dimgrey"]') .hide();
     } else if ($(this).val() === 'heart js') {
        $('#color').val("tomato", "steelblue", "dimgrey");
        $themeColor.show();
        $('option[value="tomato"]').show();
        $('option[value="steelblue"]').show();
        $('option[value="dimgrey"]').show();
        $('option[value="cornflowerblue"]').hide();
        $('option[value="darkslategrey"]').hide();
        $('option[value="gold"]').hide(); 
    
     }
});

//activity Section:event handler looks for checkbox clicks in activities class with the attribute data-day-and-time//


$('.activities').change(function(event) {
   let $checkedBox = ($(event.target));
    const $dateTimeSame = $checkedBox.attr('data-day-and-time');


    //data cost attribute value of clicked check box element above//
    let $checkedClassesTotal = $checkedBox.attr('data-cost')
    //change string above into a number-jquery fit parsetInt//
    let $checkedClassTotalNumber = parseInt($checkedClassesTotal.replace('$', ''));
    //test with type of operator to log out the datta type: test working//
    console.log(typeof $checkedClassTotalNumber);
   // log out the cost variable:working//
    console.log($checkedClassesTotal);
    // log out the dayinfo variable:working//
    console.log($dateTimeSame);
    

    //Add if else statement to handler to add the cost if checkbox is clicked and to subtract if not//
    //if ($checkedBox.prop('checked', true)){
    if ($checkedBox.prop('checked')){
    $classTotal = $classTotal + $checkedClassTotalNumber;
    //add classTotal concatenation with  Total: $ and show total with html jquery//
    $('#total').html('Total: $'+ $classTotal);
    } else {
    $classTotal = $classTotal - $checkedClassTotalNumber;
    }
    //add classTotal concatenation with  Total: $ and show total with html jquery//
    $('#total').html('Total: $'+ $classTotal);
    //const $dateTimeSame = $checkedBox.attr('data-day-and-time');--added above//
    //use bracket notation to loop through the checkboxes wihtout disabling activity just checked//
         
});
 
//target activity input elements--catch conflicting checkboxes//
$('.activities').change(function(event) {
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

//Hide payment selection:
$('#payment option:first-child').hide();
//auto select CC
$('#payment option[value="credit card"]').attr('selected', true);

$('#payment').is(function(){
    if ($(this).val() === 'credit card') {
        $('#credit-card').show();
        $('#paypal').hide();
        $('#bitcoin').hide();
    }
});
//Hide credit card section & Hide paypal & Bitcoin based on which is picked:
$('#payment').change(function(){
    if ($(this).val() === 'credit card') {
        $('#credit-card').show();
        $('#paypal').hide();
        $('#bitcoin').hide();
//Hide payment selections based on options//
     } else if ($(this).val() === 'paypal') {
        $('#paypal').show();
        $('#credit-card').hide();
        $('#bitcoin').hide();
    } else if ($(this).val() === 'bitcoin') {
        $('#bitcoin').show();
        $('#credit-card').hide();
        $('#paypal').hide();
        
    }
     
});

//Form validation: 

  //name message: blank: working
  // color choices using hex; google search: red = #750904 and green = #1d5e04
const $name = $('#name');
let $nameValid = false;
//Create a function that executes each time the event is triggerd: .focusout()
$name.focusout(function(event) {
    if ($name.val() === "") {
    $nameValid = false; //this is the error flag
     //background turns red and asks for a name
    $name.css({backgroundColor: '#f25124'}).attr({placeholder: 'Please enter your name'});
    } else { 
    $nameValid = true;
     //background turns green with a name
    $name.css({backgroundColor: '#1d5e04'}).removeAttr({placeholder: 'Please enter your name'});
   }

});
//email message: working
const $email = $('#mail');
let $emailValid = false;
//Create a function that executes each time the event is triggerd: .focusout()
$email.focusout(function(event) {
    let $emailValue = $('#mail').val();
    //Validate the correct layout of an e-mail using text and test from http://regexpal.com.s3-website-us-east-1.amazonaws.com/?_ga=2.234780446.103822050.1497920061-848749570.1493938714
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    let $emailReg = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{3,7}$');
    if (!$emailReg.test($emailValue)) {
        $emailValid = false; //this is the error flag
        //background turns red and asks for correct email
        $email.css({backgroundColor: '#f25124'}).attr({placeholder: 'Please enter a full email'});
    } else { 
        $emailValid = true;
           //background turns green and with correct email
        $email.css({backgroundColor: '#1d5e04'}).removeAttr({placeholder: 'Please enter a full email'});
   }
});




// CC card number 13-16 digits message
const $creditLength = $('#cc-num');
let $creditValid = false;

//Create a function that executes each time the event is triggerd: .focusout()
$creditLength.focusout(function(event) {
    let $creditValue = $('#cc-num').val();
    //Validate the correct layout of a CC using text and test
    let $creditReg = new RegExp('^\\d{13,16}$'); 
    if (!$creditReg .test($creditValue )) {
        $creditValid = false; //this is the error flag 
        //background turns red and asks for correct cc digits
        $creditLength.css({backgroundColor: '#f25124'}).attr({placeholder: 'Please enter 13-16 digits'});
    } else { 
        $creditValid = true; //input correct
           //background turns green and with correct cc digits
        $creditLength.css({backgroundColor: '#1d5e04'}).removeAttr({placeholder: 'Please enter 13-16 digits'});
   }
});

// 5 digit zip code message
const $zipCodeLength = $('#zip');
let $zipCodeValid = false;
//Create a function that executes each time the event is triggerd: .focusout()
$zipCodeLength.focusout(function(event) {
    let $zipCodeValue = $('#zip').val();
    //Validate the correct layout of a zipcode using text and test
    let $zipCodeReg = new RegExp('^\\d{5}$'); 
    if (!$zipCodeReg .test($zipCodeValue)) {
        $zipCodeValid  = false; //this is the error flag 
        //background turns red and asks for correct zipcode digits
        $zipCodeLength.css({backgroundColor: '#f25124'}).attr({placeholder: '5 digit Zipcode'});
    } else { 
        $zipCodeValid = true; 
        //zipcode is correct remove attached attribute
           //background turns green and with correct zipcode digits
        $zipCodeLength.css({backgroundColor: '#1d5e04'}).removeAttr({placeholder: '5 digit Zipcode'});
   }
});

// 3-5 digit Cvv message
const $cvvCodeLength = $('#cvv');
let $cvvCodeValid = false;
//Create a function that executes each time the event is triggerd: .focusout()
$cvvCodeLength .focusout(function(event) {
    let $ccvCodeValue = $('#cvv').val();
    //Validate the correct layout of a zipcode using text and test
    let $ccvCodeReg = new RegExp('^\\d{3}$'); 
    if (!$ccvCodeReg.test($ccvCodeValue)) {
        $cvvCodeValid   = false; //this is the error flag 
        //background turns red and asks for correct zipcode digits
        $cvvCodeLength .css({backgroundColor: '#f25124'}).attr({placeholder: '3 digit CVV'});
    } else { 
        $cvvCodeValid  = true;
        //CVV is correct remove attached attribute
        //background turns green and with correct zipcode digits
        $cvvCodeLength .css({backgroundColor: '#1d5e04'}).removeAttr({placeholder: '3 digit CVV'});
   }
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
$input.change(function() {
    
    if ($(this).is('checked' === 1 )) {
        $errorMessage.show();
        $errorCheckBox = false;
        } else {
        $errorMessage.hide();
        $errorCheckBox = true;
        }  
    
});

//Stop page from reloading if form not filled and add warnings
$('form').submit( (e) => {
    if ($nameValid === false) {
        $name.css({backgroundColor: '#f25124'}).attr({placeholder: 'Please enter your name'});
        e.preventDefault();}
        else { 
            $nameValid  = true;}


    if ($emailValid === false) {
        $email.css({backgroundColor: '#f25124'}).attr({placeholder: 'Please enter a full email'});
        e.preventDefault();
    } else { 
        $emailValid  = true;
       
    }


    if ($cvvCodeValid === false) {
        e.preventDefault();
        $cvvCodeLength .css({backgroundColor: '#f25124'}).attr({placeholder: '3 digit CVV'});
    } else { 
        $cvvCodeValid  = true;
    }


    if ($errorCheckBox === false) {
        $errorMessage.show();
        e.preventDefault();
   } else { 
    $errorCheckBox = true;
   } 


});



$('#payment').is(function(){
    if ($('#payment option[value="credit card"]').attr('selected', true));{
        if ($creditValid === false) {
            $creditLength.css({backgroundColor: '#f25124'}).attr({placeholder: 'Please enter 13-16 digits'});
            e.preventDefault();
        } else { 
            $creditValid  = true;
        } if ($zipCodeValid === false){
            $zipCodeLength.css({backgroundColor: '#f25124'}).attr({placeholder: '5 digit Zipcode'});
            e.preventDefault();
        } else { 
            $zipCodeValid  = true;
        }
    
    
        if ($cvvCodeValid === false) {
            e.preventDefault();
            $cvvCodeLength .css({backgroundColor: '#f25124'}).attr({placeholder: '3 digit CVV'});
        } else { 
            $cvvCodeValid  = true;
        }
    
   
} 
if ($('select option[value="paypal"]').attr('selected', true)) { 
    return true; 
}
    if  ($('select option[value="bitcoin"]').attr('selected',true)); {
        return true; 
     
    }


});
