const albumsContainer = document.querySelector('#albums');

const renderAlbums = () => {
    albumsContainer.innerHTML = ``
	albums.forEach((album) => {
		renderAlbum(album, albumsContainer);
	});
};
