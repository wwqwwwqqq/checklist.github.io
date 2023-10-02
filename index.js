const btn = document.querySelector('.takeImageBtn');

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.general_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.homepage_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.landingpage_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.productpage_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.categorypage_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.promotion_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.gwppromotion_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.cartpage_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.navigation_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.footer_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})
btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.productoffline_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})