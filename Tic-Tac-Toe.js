function modal() {
	document.getElementsByTagName("html")[0].classList.add("is-clipped");
   document.getElementById("modal").classList.add("is-active");
}

function modal_close(){
	document.getElementsByTagName("html")[0].classList.remove("is-clipped");
   document.getElementById("modal").classList.remove("is-active");
}

let count = 0;
let size;
function checkStatus(trio){
	const set = new Set(trio);
	if(set.size > 1){
		return false;
	}
	if(set.size == 1 && set.has('')){
		return false;
	}
	document.getElementById('result').innerHTML = set.values().next().value + ' wins the game';
	modal();
	return true;
	
}

function checkWinner(){
	let fdiag = [];
	let bdiag = [];
	let row = [];
	let col = [];
	for(i = 0; i < size; i++){
		row = [];
		col = [];
		console.log(i);
		for(j=0;j<size;j++){	
			row.push(document.getElementById(`cell${i}${j}`).innerText);
			col.push(document.getElementById(`cell${j}${i}`).innerText);
			if(i+j == size-1){
				bdiag.push(document.getElementById(`cell${i}${j}`).innerText);
			}
		}
		if(checkStatus(row) || checkStatus(col)){
			return true;
		}
		fdiag.push(document.getElementById(`cell${i}${i}`).innerText);
	}
	if(checkStatus(fdiag) || checkStatus(bdiag)){
		return true;
	}
	return false;
}

function myFunction(cell) {
	let id = `cell${cell}`
	let alredyPresentElement = document.getElementById(id).innerText;
	if(alredyPresentElement == 'X' || alredyPresentElement == 'O'){

	}else{
		if(count % 2 == 0){
			document.getElementById(id).innerHTML = 'X';
			document.getElementById("turn").innerHTML = "O's turn";

		}
		else{
			document.getElementById(id).innerHTML = 'O';
			document.getElementById("turn").innerHTML = "X's turn";
		}
		count++;
		
		if(!checkWinner() && count == size*size){
			document.getElementById('result').innerHTML = "Draw!!";
			modal();
		}
	}
}

function board(){
	size=document.getElementById("size").value;
	document.getElementById("turn").innerHTML = "X's turn";
	if(size < 3 || size > 9 ){
		alert("Enter valid input");
	}
	else{
		document.getElementById("input").remove();
		let cell = 1;
		for(i=0;i<size;i++){
			const tr = document.createElement("tr");
			for(j=0;j<size;j++){
				const td = document.createElement("td");
				td.setAttribute("id",`cell${i}${j}`);
				td.setAttribute("onclick" , `myFunction("${i}${j}")`);
				const node = document.createTextNode(" ");
				td.appendChild(node);
				tr.appendChild(td);
				cell++;
			}
			const element = document.getElementsByTagName("table")[0];
			element.appendChild(tr);
		}
	}
}
	