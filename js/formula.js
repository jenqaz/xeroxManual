
function submitFormula(){
	var yourFormula = "";
	var countOfPage = Form.page.value + "p ";
	var countOfCopy = ' ';
	var cover=''; //Обложки
	var checkDuplex = document.getElementById('chkDuplex');
	var checkCover = document.getElementById('chkCover');

	if (checkDuplex.checked){
		countOfPage = Form.page.value + "p duplex ";
	}
	if (checkCover.checked){
		cover = "2p A4-200 + ";
		if(Form.FormatList.value == "SRA3") cover = "1p SRA3-200 + ";
	}
	if (document.getElementById("copy").value != 0){
		countOfCopy = " * " + document.getElementById("copy").value;
	} 

	yourFormula = cover + countOfPage + Form.FormatList.options[Form.FormatList.selectedIndex].value +
					    	  Form.WeightList.options[Form.WeightList.selectedIndex].value +
					    " " + Form.FinishList.options[Form.FinishList.selectedIndex].value + countOfCopy;

	document.getElementById("forCopy").value = yourFormula;
	document.getElementById("forCopy").focus();
	document.getElementById("forCopy").select();
	init();
}

function init(){
	duplex = false;
}
window.onload = init();