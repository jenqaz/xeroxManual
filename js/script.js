
function submitFormula(){
	var yourFormula = "";
	var countOfPage = Form.page.value + "p ";
	var countOfCopy = ' ';
	var cover=''; //Обложки
	var checkDuplex = document.getElementById('chkDuplex');
	var checkCover = document.getElementById('chkCover');

	if (checkDuplex.checked){
		countOfPage = Math.ceil(Form.page.value / 2) + "p duplex ";
	}
	if (checkCover.checked){
		cover = "2p A4-200 + ";
	}
	if (document.getElementById("copy").value != 0){
		countOfCopy = " * " + document.getElementById("copy").value;
	} 

	yourFormula = cover + countOfPage + Form.FormatList.options[Form.FormatList.selectedIndex].value +
					    	  Form.WeightList.options[Form.WeightList.selectedIndex].value +
					    " " + Form.FinishList.options[Form.FinishList.selectedIndex].value + countOfCopy;

	document.getElementById("forCopy").innerHTML = yourFormula;
	init();
}

function init(){
	duplex = false;
}
window.onload = init();