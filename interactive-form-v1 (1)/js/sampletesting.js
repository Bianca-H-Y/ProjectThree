//Global variables//
const $newDiv = $('<div id="total"></div>');
const allClassSelected = $('.activities').append($newDiv);
let $classTotal= 0;
//test passed that JS is attached to HTML file: console.log('Hey');//
//used CDN link for minified version of jQuery.
//add style sheet successful:https://teamtreehouse.com/library/css-reset-with-normalize//


/*When the page loads the cursor is in the 'name' field: 
https://teamtreehouse.com/library/using-on-for-event-handling 
target the id 'namel' under input with jQuery .focus() */
$('#name').focus();

//use .hide() to hide the HTML add on line 38 of my HTML
    const $otherTitle = $('#other-title'); 
    $('#other-title').hide();

/**Create else if statement that will show the text field if other is selected. 
 * Use .val for input and bind with .change **/
$('#title').change(function(){
    if ($(this).val() === 'other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});


/***T-shirt section needs to hide color options until the 2 shirt options are selected. 
 * Then for "JS Puns" color options are cornflower blue, dark slate grey and gold
For I love JS color options are tomoato, steel blue, and dim grey.***/
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
        $themeColor.show();
        $('option[value="cornflowerblue"]').show();
        $('option[value="darkslategrey"]').show();
        $('option[value="gold"]').show();
        $('option[value="tomato"]').hide();
        $('option[value="steelblue"]').hide();
        $('option[value="dimgrey"]') .hide();
     } else if ($(this).val() === 'heart js') {
        $('#color').eq(1).hide();
        $themeColor.show();
        $('option[value="tomato"]').show();
        $('option[value="steelblue"]').show();
        $('option[value="dimgrey"]').show();
        $('option[value="cornflowerblue"]').hide();
        $('option[value="darkslategrey"]').hide();
        $('option[value="gold"]').hide(); 
    
     }
});
/*** activity Section 
 * create an element for total activity cost-it's at the top, tested with Dev tools
 * create a change event listener for .acitivties
 * same day and time
 * competing activities no longer disabled is unchecked
 * running total ***/

//event handler looks for checkbox clicks in activities class with the attribute data-day-and-time//


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
    //add classTotal concatenation with  Total: $ and show total with html jquery/
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
           if ($(checkedBox).prop(':checked')) {
               $(checkedBox).attr('disabled');
              $(value).attr('disabled', true);
           } else {
            $(checkedBox).attr('disabled', false);
            $(value).attr('disabled', true);
           }
       }
    });
});

/***payment Info section: Display payment sections based on payment options chosen
 * Selct CC by default: display the #credit-card div & hide the "paypal" & "Bitcoin" info.
 * Paypal should display if paypal is selected and CC and bitcoin hidden.
 * When Bitcoin is selected CC and paypal should be hidden. 
 */

//Hide payment selection:
$('#payment option:first-child').hide();
//auto select CC
$('#payment option[value="credit card"]').attr('selected', true);
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

/***Form validation: prevent the user from submitting the form if:
  * name field is blank
  * correct email format added
  * at least 1 checkbox under activities
  * CC section must include a cc #, zip code, and 3 CVV
  */

  /***Messages Validation: 
   * add indication that there's a validation error for
   * name
   * email
   * at least 1 activity box checked
   * CC card number
   * zip code
   * Cvv
   * empty form 
   */