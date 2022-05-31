<script lang="ts">
	let name = 'world';

	import Editor from '@tinymce/tinymce-svelte';
	export let value = 'some content';

	let conf = {
		base_url: "../node_modules/tinymce",
		menubar: false,
		height: '100%',
		// https://stackoverflow.com/questions/38165362/tinymce-stripping-style-tags NB
		extended_valid_elements: "+*[*]",
		// extended_valid_elements:"style,link[href|rel]",
    	custom_elements:"style,link,~link",
		convert_urls: false, // URL conversion fails completely on Windows
		indent: true,
		content_css_cors: true,
		content_security_policy: "default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';" ,
		allow_unsafe_link_target: true,
		allow_html_in_named_anchor: true,
		allow_script_urls: true,
		encoding: 'utf8',
		// plugins: 'advlist autolink lists link image charmap anchor pagebreak searchreplace wordcount visualblocks visualchars code importcss insertdatetime media nonbreaking table directionality emoticons template',
		element_format: "xhtml",
		// fix_list_elements: true,
		// file_picker_types: 'image',
		// entities: '160,#160', // # use &#160; instead of &nbsp;
		// importcss_append: true,
		// importcss_groups: [
		// 	{ title: "Figures", filter: /^(figure|figcaption)\./ },
		// 	{ title: "Sidebars", filter: /^aside\./ },
		// 	{ title: "Frames", filter: /.*frame./ },
		// ],
		// importcss_selector_filter: function (selector) {
		// 	let regex = /^[-_0-9a-zA-Z]+[.][-_0-9a-zA-Z]+$/; // only allow tag name + one class
		// 	return selector.match(regex) && selector != "div.nde-ed-edobjective" && selector != "div.nde-ed-review" && selector != "div.displaymath";

		// },
		// visualblocks_content_css: new URL("node_modules/tinymce/plugins/visualblocks/css/visualblocks.css", document.baseURI).href,
		// image_caption: true,  // enable image captioning
		// image_advtab: true,
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
	bind:value ={value}
	conf= {conf}
/>


