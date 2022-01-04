//
// 	CAMPAIGN INPUT BEHAVIOR
//
let label = document.getElementById('label');
let campaign =document.getElementById('campaign-input');


campaign.addEventListener("focusout",()=>{
	if(campaign.value != "" && campaign.value.length <=15){
		label.textContent=campaign.value;
		campaign.value="";
	} else if (campaign.value.length >=15){
		console.log(campaign.value.length);
		label.textContent="Campaign";
		campaign.value=""
		alert("Campaign name should be shorter than 15 characters :-(")
	}else{
		label.textContent="Campaign";
		campaign.value=""
	}
})


// ~~~~~~~~~~  ~~~~~~~~~~ ~~~~~~~~~~  ~~~~~~~~~~  ~~~~~~~~~~  ~~~~~~~~~~ ~~~~~~~~~~  ~~~~~~~~~~

//
// 	ADD & SUBSTRACT BEHAVIOR
//

let lead  = 0,
	   ni = 0,
	   cb = 0,
	   wn = 0,
	   na = 0,
	   vm = 0;


// FUNCTIONS 

function add(target,variable) {
	// setting placeholder
	let placeholder 	= document.getElementById(target).placeholder;
	let placeholderLen  = placeholder.split(" ", 2);

	// console.log(placeholder);
	// console.log(placeholderLen);
	// console.log(placeholderLen.length);
	
	if (variable === 0){
		// console.log('entra en el if');
		document.getElementById(target).placeholder= `${placeholderLen[0]} ${placeholderLen[1]} ${"1"}`; 
		return variable +=1;
	}else{
		// console.log("entra en el else");
		document.getElementById(target).placeholder =`${placeholderLen[0]} ${placeholderLen[1]} ${variable+1}`;
		return variable+=1;
	}
}

function substract(target,variable) {
	// setting placeholder
	let placeholder 	= document.getElementById(target).placeholder;
	let placeholderLen  = placeholder.split(" ", 2);

	// console.log(placeholder);
	// console.log(placeholderLen);
	// console.log(placeholderLen.length);
	
	if (variable <= 1){
		document.getElementById(target).placeholder= `${placeholderLen[0]} ${placeholderLen[1]}`; 
		return 0;
	}else{
		document.getElementById(target).placeholder =`${placeholderLen[0]} ${placeholderLen[1]} ${variable-1}`;
		return variable-=1;
	}
}



// ADD BUTTONS

document.getElementById('lead+').addEventListener('click',e=>{
	let placeholder 	= document.getElementById('lead').placeholder;
	let placeholderLen  = placeholder.split(" ", 2);
	
	if (lead === 0){
		document.getElementById('lead').placeholder += " "+String(lead+1); 
		lead +=1;
	}else{
		document.getElementById('lead').placeholder =`${placeholderLen[0]} ${lead+1}`;
		lead+=1;
	}
})

document.getElementById('ni+').addEventListener('click',e=>{
	ni = add("ni",ni);
})

document.getElementById('cb+').addEventListener('click',e=>{
	cb = add("cb",cb);
})

document.getElementById('wn+').addEventListener('click',e=>{
	wn = add("wn",wn);
})

document.getElementById('na+').addEventListener('click',e=>{
	na = add("na",na);
})

document.getElementById('vm+').addEventListener('click',e=>{
	vm = add("vm",vm);
})




// SUBSTRACT BUTTONS

document.getElementById('lead-').addEventListener('click',e=>{
	let placeholder 	= document.getElementById('lead').placeholder;
	let placeholderLen  = placeholder.split(" ", 2);
	
	if (lead <= 1){
		document.getElementById('lead').placeholder = "Lead";
		lead=0;
		
	}else{
		document.getElementById('lead').placeholder =`${placeholderLen[0]} ${lead-1}`;
		lead-=1;
	}
})

document.getElementById('ni-').addEventListener('click',e=>{
	ni = substract("ni",ni);
})

document.getElementById('cb-').addEventListener('click',e=>{
	cb = substract("cb",cb);
})

document.getElementById('wn-').addEventListener('click',e=>{
	wn = substract("wn",wn);
})

document.getElementById('na-').addEventListener('click',e=>{
	na = substract("na",na);
})

document.getElementById('vm-').addEventListener('click',e=>{
	vm = substract("vm",vm);
})

// ~~~~~~~~~~  ~~~~~~~~~~ ~~~~~~~~~~  FOOTER BUTTONS BEHAVIOR  ~~~~~~~~~~  ~~~~~~~~~~ ~~~~~~~~~~  

function logFunction() {

	let amountOfCalls = 0;

	let content = ""
	const items=[
		[lead,"Lead"],
	   	[ni,"No Interest"],
	   	[cb,"Call Back"],
	   	[wn,"Wrong Number"],
	   	[na,"No Available"],
	   	[vm,"Voice Mail"]
	];

	items.forEach(cal =>{
		if(cal[0] != 0){
			content += `<b>${cal[1]} ${cal[0]}<b><br>`;
			amountOfCalls+= cal[0];
		}
	})

	if(amountOfCalls!=0){
		content += `<br><br>Amount of calls: <b>${amountOfCalls}<b>`;
	}

	return content;
}




let log = document.getElementById('log');
let reload = document.getElementById('reload');

log.addEventListener("click",()=>{
	document.getElementById('subtitle').textContent = label.innerHTML;
	document.getElementById('second-section').style = "display: block;"
	document.getElementById('card-body').innerHTML = logFunction()
});


reload.addEventListener("click",()=>{
	location.reload();
})

