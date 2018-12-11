const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let resultWindow;

app.on('ready', function () {
    mainWindow = new BrowserWindow({});
    //    mainWindow.setMenu(null);
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));
    mainWindow.on('closed', function () {
        app.quit();
    })
});

ipcMain.on('button:clicked', function (e, data) {
    resultWindow = new BrowserWindow({
        width: 600,
        height: 400,
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
        width: 600,
        height: 400,
        title: 'Results'
    });
    //    resultWindow.setMenu(null);
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
        width: 600,
        height: 400,
        title: 'Results'
    });
    //   resultWindow.setMenu(null);
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