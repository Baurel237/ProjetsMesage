// import { Mic, Square } from "lucide-react";
// import React, { useState, useRef } from "react";

// export default function VoiceRecorder({ onSend }) {
//   const [recording, setRecording] = useState(false);
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

//       mediaRecorderRef.current = new MediaRecorder(stream, {
//         mimeType: "audio/webm"
//       });

//       audioChunksRef.current = [];

//       mediaRecorderRef.current.ondataavailable = (event) => {
//         audioChunksRef.current.push(event.data);
//       };

//       mediaRecorderRef.current.onstop = () => {
//         const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
//         const audioUrl = URL.createObjectURL(blob);

//         onSend({
//           id: Date.now(),
//           type: "voice",
//           audioUrl,
//           time: Date.now(),
//         });
//       };

//       mediaRecorderRef.current.start();
//       setRecording(true);
//     } catch (err) {
//       console.error("Micro error:", err);
//       alert("Micro non autorisé.");
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current) {
//       mediaRecorderRef.current.stop();
//       setRecording(false);
//     }
//   };

//   return (
//     <button
//       onMouseDown={startRecording}
//       onMouseUp={stopRecording}
//       onTouchStart={startRecording}
//       onTouchEnd={stopRecording}
//       className={`p-3 rounded-full ${
//         recording ? "bg-red-600" : "bg-gray-700"
//       } text-white`}
//     >
//       {recording ? <Square /> : <Mic />}
//     </button>
//   );
// }
