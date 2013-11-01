//signup.js 
// add your JavaScript code to this file

// forms-demo.js
// script for in-class HTML forms demo
//

//function that will be called when the 
//document is ready for manipulation

$(function(){
	//document is now ready for manipulation
	var stateSelect = $('.us-states');
    var option;
	var idx;
	var state;
	for (idx = 0; idx < usStates.length; ++idx) {
        state = usStates[idx];
        option = $(document.createElement('option'));
        option.attr('value', state.abbreviation);
        option.html(state.name);
        stateSelect.append(option);
	}
          

    $('.signup-form').submit(function(){
        var signupForm = $(this);
        var addr1Input = signupForm.find('input[name="addr-1"]');
    	var addr1Value = addr1Input.val();
    	var zipInput = signupForm.find('input[name="zip"]');
    	var zipValue = zipInput.val();
        if (addr1Value.length > 0 && zipValue.length == 0){
        	alert("Please Enter ZIP CODE!!!");
        	return false;
        }
    });
    $('.cancel-signup').click(function(){
    //code to run when user clicks "No Thanks!" button
    	window.location = 'http://www.google.com';
	}); //cancel-signup click
}); //on document ready 