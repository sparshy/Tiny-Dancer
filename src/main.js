import App from './App.svelte';

const btn = document.getElementById('btn')
const filePathElement = document.getElementById('filePath')


var app = new App({
	target: document.getElementById('tiny-mce-holder'),
	props : {value: 'Load a file'}
});


btn.addEventListener('click', async () => {
    const filePath = await window.electronAPI.openFile()
    filePathElement.innerText = filePath
	let data = window.electronAPI.fs.readFileSync(filePath, {encoding: 'utf8'})

	app.$set({value: data})

})




// export default app;

