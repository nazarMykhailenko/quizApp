// burger
const $headerIcon = document.querySelector(`.header__icon`)
const $navigationBody = document.querySelector(`.navigation__body`)

$headerIcon.addEventListener(`click`, () => {
	$navigationBody.classList.toggle(`_active`)
	$headerIcon.classList.toggle(`_active`)
})
