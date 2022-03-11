
// dataTable


let currentPage = 1;
let maxRows = 10;
let dataRender = [...dataSet];

// const $ = (el) => {
// 	return document.querySelectorAll(el);
// }


const renderDataTable = (data) => {
	let htmlTable = "";
	data.forEach(element => {
	  var str = "<tr>";
	  element.forEach((field) => {
		var tr = `<td>${field}</td>`
		str += tr;
	  })
	  str += "</tr>"
	  htmlTable += str;
	});
	return document.querySelectorAll('#table-body')[0].innerHTML = htmlTable;
} 

const renderAll = (dataRender, dataTotal, maxRow, currentPage) => {
	renderDataTable(dataRender);
	renderPagination(dataTotal, maxRow, currentPage);
	renderInfoData(dataTotal, currentPage, maxRow);
}


window.onload = () => {
// 	//render when load dom
	let DataDisplay = dataRender.slice(0, maxRows);
	renderAll(DataDisplay, dataRender, maxRows, currentPage);
}










