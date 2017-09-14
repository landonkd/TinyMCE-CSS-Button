(function() {
    tinymce.PluginManager.add( 'custom_class', function( editor, url ) {
        // Add Button to Visual Editor Toolbar
        editor.addButton('custom_class', {
            title: 'Insert Button',
            cmd: 'custom_class',
            icon: 'wp_code',
        });

        // Add Command when Button Clicked
        editor.addCommand('custom_class', function() {
			// Check we have selected some text selected
            var text = editor.selection.getContent({
                'format': 'html'
            });
            if ( text.length === 0 ) {
                alert( 'Please select some text.' );
                return;
            }

            // Insert selected text back into editor, wrapping it in a span tag
            editor.execCommand('mceReplaceContent', false, '<span class="btn">' + text + '</span>');
        });
    });
})();