
$("#bootstrapForm").submit(function(event) {

    // make selected form variable
    var vForm = $(this);
    if (vForm[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
     
      // Replace alert with ajax submit here...
      alert("your form is valid and ready to send");
      
    }
    
    // Add bootstrap 4 was-validated classes to trigger validation messages
    vForm.addClass('was-validated');
});

function getTextBoxValue() {
  var st,st1,st2;
  st = document.getElementById("myTextBox").value;
  st1 = document.getElementById("input2").value;
  // alert(st1);
  st2 = document.getElementById("input3").value;
  document.getElementById("myTextBoxResult").value=st+"#src="+st1+"&team="+st2;
  }


  function copyText() { 
    /* Get the text field */
    var copyTextbox = document.getElementById("myTextBoxResult"); 
    /* Select the text field */
    copyTextbox.select(); 
    
    /* Copy the text inside the text field */
    document.execCommand("copy"); 
    
    /* Alert the copied text */
    alert("Copied the URL: " + copyTextbox.value); 
  }  