const renderAlbumInfo = (info, container) => {
    const {name, description, img, date} = info
	const html = `
        <div class="card d-flex">
            <div class="d-flex">
                <div class="">
                    <img src="${img}" alt="album" />
                </div>
                <div class="">
                    <div class="card-body">
                        <h4 class="card-title">
                            ${name}
                        </h4>
                        <p class="card-text">
                            ${description}
                        </p>
                        <small class="text-muted">
                            Год выпуска: ${date}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    `;
	container.innerHTML += html;
};
