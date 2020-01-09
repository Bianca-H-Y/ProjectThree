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
//Hide color options until theme selected:

const $themeColor = $('#color');
$themeColor.hide();
//add select theme message//
const $messageTheme = $('#color').prepend('<option>Please Select Theme</option>');
  
    
//Show correct colors when JS Puns selected-targeting the attrides of the color ID 
$('#design').change(function(){
    const $designTheme =  $('#design');
    if ($(this).val() === 'js puns') {
        $themeColor.show();
        $('option[value="cornflowerblue"]').show();
        $('option[value="darkslategrey"]').show();
        $('option[value="gold"]').show();
        $('option[value="tomato"]').hide();
        $('option[value="steelblue"]').hide();
        $('option[value="dimgrey"]') .hide();
     } else if ($(this).val() === 'heart js') {
        $('option[value="cornflowerblue"]').hide();
        $('option[value="darkslategrey"]').hide();
        $('option[value="gold"]').hide();
        $('option[value="tomato"]').show();
        $('option[value="steelblue"]').show();
        $('option[value="dimgrey"]').show();
    } else {
        $themeColor.hide();
    
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
    const $checkedBox = $(event.target);
    //data cost attribute value of clicked check box element above//
    let $checkedClassesTotal = $checkedBox.attr('data-cost')
    //change string above into a number-jquery fit parsetInt//
    let $checkedClassTotalNumber = parseInt($checkedClassesTotal.replace('$', ''));
    //test with type of operator to log out the datta type: test working//
    console.log(typeof $checkedClassTotalNumber);
   // log out the cost variable//
    console.log($checkedClassesTotal);
    /*** 
    const $dateTimeSame = $(checkedBox).attr('data-day-and-time');
    //let $classTotal=0 above)
    
   //if $dateTimeSame (day and time) is the same limit other options//
   //2 tuesday 9a-12pm; 2 Tuesday 1pm//
   //usefule htmlElement.disabled (for check boxes, boolen treu false)//
    if ($checkedBox.prop('checked')) {

        ($checkedBox).attr('disabled', true);

    } else {
         ($checkedBox).attr('disabled', false);
    }

    
    //unsure if falase is needed above
   //if $dateTimeSame === ''//
    
    console.log($dateTimeSame);
    */
    
});


/*** Register section: Adjust like/same-time workshop events. 
 * Hide options that conflict 
 * (disable the checkbox and create a notice that the workshop competes with another) */
//If a user unchecks an activity any confliting ones become viable again
//Total should appears as users add classes

/***payment Info section: Display payment sections based on payment options chosen
 * Selct CC by default: display the #credit-card div & hide the "paypal" & "Bitcoin" info.
 * Paypal should display if paypal is selected and CC and bitcoin hidden.
 * When Bitcoin is selected CC and paypal should be hidden. 
 */

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

   /***extras:
    * adjust colors and style to custyomize the form 
    * Hide the "Color" label and select menu until a T-shirt design is selected 
    * Make a least one conditional and detailed message-ex CC error "please enter a cc #"
    * One real-time error message that comes up before submit. 
    */