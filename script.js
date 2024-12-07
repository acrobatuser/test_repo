const container = document.querySelector(".container");

const video = document.createElement('video');
video.src = 'url';
video.controls = true;
const track = document.createElement('track');
track.kind = 'subtitles';
track.label = 'fr';
track.srclang = 'fr';
track.mode = 'showing';

            track.src = URL.createObjectURL(new Blob(
                [\`WEBVTT

00:00.000 --> 00:02.000
Bonjour

00:02.000 --> 00:05.000
le monde\`], 
                { type: 'text/vtt' }
            ));
            video.appendChild(track);
            
const track = document.createElement('track');
track.kind = 'subtitles';
track.label = 'en';
track.srclang = 'en';
track.mode = 'showing';

            track.src = URL.createObjectURL(new Blob(
                [\`WEBVTT

00:00.000 --> 00:02.000
hello

00:02.000 --> 00:05.000
world\`], 
                { type: 'text/vtt' }
            ));
            video.appendChild(track);
            
container.appendChild(video);
const video = document.createElement('video');
video.src = 'url';
video.controls = true;
const track = document.createElement('track');
track.kind = 'subtitles';
track.label = 'fr';
track.srclang = 'fr';
track.mode = 'showing';

            track.src = URL.createObjectURL(new Blob(
                [\`WEBVTT

00:00.000 --> 00:02.000
Bonjour

00:05.000 --> 00:10.000
le monde\`], 
                { type: 'text/vtt' }
            ));
            video.appendChild(track);
            
const track = document.createElement('track');
track.kind = 'subtitles';
track.label = 'de';
track.srclang = 'de';
track.mode = 'showing';

            track.src = URL.createObjectURL(new Blob(
                [\`WEBVTT

00:00.000 --> 00:10.000
Hallo

00:11.000 --> 00:20.000
Welt\`], 
                { type: 'text/vtt' }
            ));
            video.appendChild(track);
            
container.appendChild(video);