var login = "";
var name1 = "";
var password1 = "";
var obj = "";
$(document).ready(function(){
	   
	$("#button").click(function(){
		
		$("#form1").validate({
			rules: {
				name: "required",
				password: {
					required: true,
					minlength: 4
				     }
				},
				messages: {
					name: "enter username...",
					password: {
						required: "enter password...",
						minlength: "enter atleast 4 letters."
					}
				},
				submitHandler: function(form){
               		login = {
                   		username: $("#name").val(),
                   		password:$("#password").val()
              		 }
               		$.post("http://59f1d52ea118a000126fbe49.mockapi.io/login",login,function(){
               			$("#name").val(""),
               			$("#password").val("")
               	
               		})
               		console.log(login);
               
               		document.getElementById('submitmsg').innerHTML = "successful login...";
				}
           	   
	    });
      
	});
	
    $("form").click(function(){
    	document.getElementById('submitmsg').innerHTML = "";
    }); 
	
});