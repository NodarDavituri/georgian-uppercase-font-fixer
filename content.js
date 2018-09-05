if(document.body) {
	var docText = document.body.innerHTML;
	if(docText && docText.match(/ა|ო|ი|ე|უ/)){
		document.querySelectorAll('body *').forEach(function(node) {
	    	var thisStyle = window.getComputedStyle(node),
	    		tt = thisStyle.textTransform;
	    	if(typeof tt == 'string' && tt.toLowerCase() == 'uppercase'){
	    		node.style.textTransform = 'initial';
	    	}
		});
	}
}