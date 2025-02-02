import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server=http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: ["https://localhost:5173"]
    }
});

io.on("connection", (socket) => {
    console.log("Some user connected", socket.id);
    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
    });
});

export {io, app, server}; 