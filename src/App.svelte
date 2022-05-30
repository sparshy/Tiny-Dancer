<script lang="ts">
	let name = 'world';

	import Editor from '@tinymce/tinymce-svelte';

	let conf = {
		base_url: "../node_modules/tinymce"
	}

</script>

<h1>Heo {name}!</h1>

<Editor 
	conf= {conf}
/>


