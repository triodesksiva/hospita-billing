var selectvalue = "";
var getanswer = "";
var txt = "";
$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "https://59f1870fa118a000126fbe11.mockapi.io/bill",
		dataType: "json",
		success:function(result) {
			var parientdetails = "<option value=''>" + "choose Patient name" + "</option>";
			getanswer = result
			for(var i = 0; i < getanswer.length; i++) {
                parientdetails += "<option>" + getanswer[i].name + "</option>";
			}
			$("select").html(parientdetails);
		}
	});
	$("select").change(function(){
           selectvalue = $("select").val();
           for(i = 0; i < getanswer.length; i++){
           	if(getanswer[i].name == selectvalue) {
                     txt = "<thead><tr><th>"+ "Admission Date"+"</th><th>"+ "PatientName" + "</th><th>" + "Paid"+ "</th><th>" + "Due" + "</th></tr></thead><tbody><tr><td>" + getanswer[i].date + "</td><td>" + getanswer[i].name + "</td><td>" + getanswer[i].initialfee + "</td><td>" + getanswer[i].bendingfee + "</td></tr></tbody>"; 
           	}
           	$("table").html(txt);
           }
	});
	

	
});