var a = "";
var b = "";
var c = "";
function calculate() {
  a = parseInt(document.getElementById('fees').value);
  b = parseInt(document.getElementById('initpay').value);
  c = a - b;
  document.getElementById('ans').value = c;
  console.log(c)
}
$(document).ready(function(){
	
           $("#submit1").click(function(){
		   		var billpay = {
				date: $("#date1").val(),
				name: $("#name1").val(),
				totalfee: $("#fees").val(),
				initialfee: $("#initpay").val(),
				bendingfee: $("#ans").val()
				}
				$.post("https://59f1870fa118a000126fbe11.mockapi.io/bill",billpay,function(){
				$("#date1").val(""),
				$("#name1").val(""),
				$("#fees").val(""),
				$("#initpay").val(""),
				$("#ans").val("")
				})
				console.log(billpay);
			});
		
		
	
	
	
});