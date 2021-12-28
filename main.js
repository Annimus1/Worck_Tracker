
let label = document.getElementById('label');
let campaign =document.getElementById('campaign-input');


campaign.addEventListener("focusout",()=>{
	if(campaign.value != ""){
		label.textContent=campaign.value;
		campaign.value="";
	} else {label.textContent="Campaign";}
})