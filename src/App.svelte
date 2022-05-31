<script lang="ts">
	let name = 'world';

	import Editor from '@tinymce/tinymce-svelte';




	let conf = {
		base_url: "../node_modules/tinymce",
		menubar: false,
		height: '100%',
		setup: function (editor) {
			editor.on('change', function (e) {
			this.contentState = 'changed'
			console.log(this.contentState)
			})

			// Initialization
			// editor.on('init', function (e) {
			// 	var argv_array = require('electron').remote.process.argv;
			// 	console.log(argv_array)
			// 	if (argv_array.length >= 2) {
			// 		console.log("argv[2] is:");
			// 		console.log(argv_array[1]);
			// 		var filepath = path.resolve(argv_array[1]);
			// 		filename = path.basename(filepath); // set global
			// 		change_working_directory(path.dirname(filepath));
			// 		console.log('calling readFile()');
			// 		console.log(filepath);
			// 		fs.readFile(filepath, 'utf8', (err, data) => {
			// 		if (err) throw err;
			// 		editor.setContent(data);
			// 	});

			// 	} else {

			// 	}
			// });
		},
		init_instance_callback : function(editor) {
				var freeTiny = document.querySelector('.tox .tox-notification--in');
				freeTiny.style.display = 'none';
		},

	}

</script>


<Editor 
	conf= {conf}
/>


