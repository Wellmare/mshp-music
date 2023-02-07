const renderAlbum = (album, container) => {
	const { name, img, id } = album;
	const html = `
        <div class="col mr-5">
            <a href="./album.html?id=${id}" class="text-decoration-none">
                <div class="card">
                    <img
                        class="card-img-top"
                        src="${img}"
                        alt="Альбом"
                    />
                    <div class="card-body">
                        <p class="card-text text-black">${name}</p>
                    </div>
                </div>
            </a>
        </div>
    `;
	container.innerHTML += html;
};
