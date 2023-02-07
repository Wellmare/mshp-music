// const currentAlbumContainer = document.querySelector('#current-album');
const albumInfoContainer = document.querySelector('#album-info');
const albumMusicsContainer = document.querySelector('#album-musics');

const renderAlbum = (album) => {
	renderAlbumInfo(album, albumInfoContainer);
	renderAlbumMusics(album.musics, albumMusicsContainer);
};
