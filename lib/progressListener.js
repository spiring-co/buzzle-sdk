import io from "socket.io-client";
const socket = io.connect(process.env.REACT_APP_EVENTS_SOCKET_URL);

export default listenForProgress = socket.on;
