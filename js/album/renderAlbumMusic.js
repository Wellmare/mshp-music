const renderAlbumMusic = (music, container) => {
    const {name, author, duration} = music
	const html = `
        <li class="list-group-item album-music-card">
            <div
                class="d-flex justify-content-between align-items-center"
            >
                <div class="d-flex align-items-center">
                    <img
                        src="./assets/non-played.png"
                        class="play-button"
                        alt="icon"
                    />
                    <div>
                        <h5 class="mb-0 fw-normal">
                            ${name}
                        </h5>
                        <small class="text-muted"
                            >${author}</small
                        >
                    </div>
                </div>
                <div>
                    <span>${duration}</span>
                </div>
            </div>
        </li>
    `;
	container.innerHTML += html;
};
