const trackList = [
  {
    id: '81',
    name: 'Header-1',
    descripcion: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    id: '87',
    name: 'Header-2',
    descripcion: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    id: '69',
    name: 'Header-3',
    descripcion: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    id: '65',
    name: 'Header-4',
    descripcion: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    id: '83',
    name: 'Clap',
    descripcion: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    id: '68',
    name: 'Open-HH',
    descripcion: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    id: '90',
    name: 'Kick-n-Hat',
    descripcion: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    id: '88',
    name: 'Kick',
    descripcion: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    id: '67',
    name: 'Closed-HH',
    descripcion: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

const reprStack = (url) => {
  let audio = new Audio(url);
  audio.play();
};

const buscarUrl = (id) => {
  let trackMusic = trackList.find((element) => element.id == id);
  return trackMusic.url !== '' ? trackMusic.url : '';
};
const buscarUrlLetra = (letra) => {
  letra = letra.toUpperCase();
  let trackMusic = '';
  try {
    trackMusic = trackList.find((element) => element.descripcion == letra);
    return trackMusic;
  } catch {
    return false;
  }
};

export { reprStack, buscarUrl, trackList, buscarUrlLetra };
