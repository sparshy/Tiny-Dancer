const { app, BrowserWindow, ipcMain, dialog } = require('electron')

const path = require('path')


require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  awaitWriteFinish: true,
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // TODO: Run single instance.
  // https://stackoverflow.com/questions/35916158/how-to-prevent-multiple-instances-in-electron

  win.loadFile(path.join(__dirname, './public/index.html'));
}


async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog()
  if (canceled) {
    return
  } else {
    return filePaths[0]
  }
}



app.whenReady().then(() => {


  ipcMain.handle('dialog:openFile', handleFileOpen)
  
  createWindow()
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})