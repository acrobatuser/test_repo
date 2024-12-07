const container = document.querySelector(".container");

const video1 = document.createElement('video');
video1.src = 'url';
video1.controls = true;
const track1_1 = document.createElement('track');
track1_1.kind = 'subtitles';
track1_1.label = 'fr';
track1_1.srclang = 'fr';
track1_1.mode = 'showing';

            track1_1.src = URL.createObjectURL(new Blob(
                [`WEBVTT

00:00.000 --> 00:02.000
Bonjour

00:02.000 --> 00:05.000
le monde`], 
                { type: 'text/vtt' }
            ));
            video1.appendChild(track1_1);
            
const track1_2 = document.createElement('track');
track1_2.kind = 'subtitles';
track1_2.label = 'en';
track1_2.srclang = 'en';
track1_2.mode = 'showing';

            track1_2.src = URL.createObjectURL(new Blob(
                [`WEBVTT

00:00.000 --> 00:02.000
hello

00:02.000 --> 00:05.000
world`], 
                { type: 'text/vtt' }
            ));
            video1.appendChild(track1_2);
            
container.appendChild(video1);
const video2 = document.createElement('video');
video2.src = 'url';
video2.controls = true;
const track2_1 = document.createElement('track');
track2_1.kind = 'subtitles';
track2_1.label = 'fr';
track2_1.srclang = 'fr';
track2_1.mode = 'showing';

            track2_1.src = URL.createObjectURL(new Blob(
                [`WEBVTT

00:00.000 --> 00:02.000
Bonjour

00:05.000 --> 00:10.000
le monde`], 
                { type: 'text/vtt' }
            ));
            video2.appendChild(track2_1);
            
const track2_2 = document.createElement('track');
track2_2.kind = 'subtitles';
track2_2.label = 'de';
track2_2.srclang = 'de';
track2_2.mode = 'showing';

            track2_2.src = URL.createObjectURL(new Blob(
                [`WEBVTT

00:00.000 --> 00:10.000
Hallo

00:11.000 --> 00:20.000
Welt`], 
                { type: 'text/vtt' }
            ));
            video2.appendChild(track2_2);
            
container.appendChild(video2);