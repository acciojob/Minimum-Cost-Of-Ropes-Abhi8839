function calculateMinCost() {
  //your code here
	let ropes=document.getElementsById("rope-lengths").value;
	let arr=ropes.split(",");
	let finalValue=0;
	while(arr.length >1){
		arr.sort((a,b)=>{return (a-b)});
		let value=parseInt(arr.shift());
		let value1=parseInt(arr.shift());
		let mainValue=value+value1;
		finalValue=finalvalue+ mainValue;
		arr.push(mainValue);
		
	}
  let result=document.getElemetsById("result");
	result.innerText=finalValue;
	return finalValue;
  
  
}  
