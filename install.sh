######### vars
software_dir=$(pwd)
######### vars end

echo "[Desktop Entry]
Name=TinyMCE HTML Editor
Exec="${software_dir}/out/el-tiny-editor-linux-x64/el-tiny-editor" %u
Terminal=false
Type=Application
Icon="${software_dir}/tinymce.png"
Comment=HTML Editor
Categories=Office;" > ~/.local/share/applications/TinyMCE.desktop
