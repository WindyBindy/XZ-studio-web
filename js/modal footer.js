;(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-footer-open]'),
		closeModalBtn: document.querySelector('[data-modal-footer-close]'),
		modal: document.querySelector('[data-modal-footer]'),
	}

	refs.openModalBtn.addEventListener('click', toggleModal)
	refs.closeModalBtn.addEventListener('click', toggleModal)

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden')
		document.body.classList.toggle('no-scroll')
	}
})()
