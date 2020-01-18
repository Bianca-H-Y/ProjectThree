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
     if ($(checkedBox).prop('not:checked')) {
        $(checkedBox).attr('not: disabled');
        $(value).attr('not:disabled');
     }
       
    };

})
});