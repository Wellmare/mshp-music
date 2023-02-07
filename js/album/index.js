const id = new URL(document.location).searchParams.get('id');

if (id) {
	const albumIndex = albums.findIndex(({ id: albumId }) => +id === albumId);
	if (albumIndex !== -1) {
		renderAlbum(albums[albumIndex]);
	} else {
		window.location.pathname = 'index.html';
        window.location.search = ''
	}
} else {
	window.location.pathname = 'index.html';
    window.location.search = ''
}
