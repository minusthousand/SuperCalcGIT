const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let languageWindow;
let mainWindow;
let mainWindowLv;
let resultWindow;

app.on('ready', function () {
    languageWindow = new BrowserWindow({
        width: 600,
        height: 200,
    });
    languageWindow.setResizable(false)
    languageWindow.setMenu(null);
    languageWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'languageSelect.html'),
        protocol: 'file',
        slashes: true
    }));
});

ipcMain.on('button:eng', function () {
    mainWindow = new BrowserWindow({});
    mainWindow.setMenu(null);
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));
    mainWindow.on('closed', function () {
        app.quit();
    });
    languageWindow.close();
});

ipcMain.on('button:lv', function () {
    mainWindowLv = new BrowserWindow({});
    mainWindowLv.setMenu(null);
    mainWindowLv.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindowLv.html'),
        protocol: 'file',
        slashes: true
    }));
    mainWindowLv.on('closed', function () {
        app.quit();
    });
    languageWindow.close();
});

ipcMain.on('button:clicked', function (e, data) {
    resultWindow = new BrowserWindow({
        width: 700,
        height: 500,
        title: 'Results'
    });
    resultWindow.setMenu(null);
    resultWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'resultWindow.html'),
        protocol: 'file',
        slashes: true
    }));
    resultWindow.webContents.on('dom-ready', function () {
        resultWindow.webContents.send('data', data);
        mainWindow.webContents.send('rWindow:opened');
    });
    resultWindow.on('close', function () {
        resultWindow = null;
        mainWindow.webContents.send('rWindow:closed');
    });
});

ipcMain.on('button2:clicked', function (e, data) {
    resultWindow = new BrowserWindow({
        width: 700,
        height: 500,
        title: 'Results'
    });
    resultWindow.setMenu(null);
    resultWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'resultWindow.html'),
        protocol: 'file',
        slashes: true
    }));
    resultWindow.webContents.on('dom-ready', function () {
        resultWindow.webContents.send('data2', data);
        mainWindow.webContents.send('rWindow:opened');
    });
    resultWindow.on('close', function () {
        resultWindow = null;
        mainWindow.webContents.send('rWindow:closed');
    });
})

ipcMain.on('button3:clicked', function (e, data) {
    resultWindow = new BrowserWindow({
        width: 700,
        height: 500,
        title: 'Results'
    });
    resultWindow.setMenu(null);
    resultWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'resultWindow.html'),
        protocol: 'file',
        slashes: true
    }));
    resultWindow.webContents.on('dom-ready', function () {
        resultWindow.webContents.send('data3', data);
        mainWindow.webContents.send('rWindow:opened');
    });
    resultWindow.on('close', function () {
        resultWindow = null;
        mainWindow.webContents.send('rWindow:closed');
    });
})

ipcMain.on('buttonLv:clicked', function (e, data) {
    resultWindow = new BrowserWindow({
        width: 700,
        height: 500,
        title: 'Rezultāts'
    });
    resultWindow.setMenu(null);
    resultWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'resultWindowLv.html'),
        protocol: 'file',
        slashes: true
    }));
    resultWindow.webContents.on('dom-ready', function () {
        resultWindow.webContents.send('data', data);
        mainWindowLv.webContents.send('rWindow:opened');
    });
    resultWindow.on('close', function () {
        resultWindow = null;
        mainWindowLv.webContents.send('rWindow:closed');
    });
});

ipcMain.on('button2Lv:clicked', function (e, data) {
    resultWindow = new BrowserWindow({
        width: 700,
        height: 500,
        title: 'Rezultāts'
    });
    resultWindow.setMenu(null);
    resultWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'resultWindowLv.html'),
        protocol: 'file',
        slashes: true
    }));
    resultWindow.webContents.on('dom-ready', function () {
        resultWindow.webContents.send('data2', data);
        mainWindowLv.webContents.send('rWindow:opened');
    });
    resultWindow.on('close', function () {
        resultWindow = null;
        mainWindowLv.webContents.send('rWindow:closed');
    });
})

ipcMain.on('button3Lv:clicked', function (e, data) {
    resultWindow = new BrowserWindow({
        width: 700,
        height: 500,
        title: 'Rezultāts'
    });
    resultWindow.setMenu(null);
    resultWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'resultWindowLv.html'),
        protocol: 'file',
        slashes: true
    }));
    resultWindow.webContents.on('dom-ready', function () {
        resultWindow.webContents.send('data3', data);
        mainWindowLv.webContents.send('rWindow:opened');
    });
    resultWindow.on('close', function () {
        resultWindow = null;
        mainWindowLv.webContents.send('rWindow:closed');
    });
})
