const { app, BrowserWindow } = require('electron');
const path = require('path');
const http = require('http');

require('./app');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: false
    }
  });

  const loadApp = () => {
    http.get('http://localhost:3000', (res) => {
      if (res.statusCode === 200) {
        win.loadURL('http://localhost:3000');
      } else {
        console.log('Waiting for server...');
        setTimeout(loadApp, 500);
      }
    }).on('error', () => {
      console.log('Server not ready, retrying...');
      setTimeout(loadApp, 500);
    });
  };

  loadApp();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
