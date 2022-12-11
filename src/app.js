// constants for extra-classes
const LOCKED = `_locked`
const ACTIVE = `_active`

// burger
const $headerIcon = document.querySelector(`.header__icon`)
const $navigationBody = document.querySelector(`.navigation__body`)
const $body = document.body

$headerIcon.addEventListener(`click`, () => {
	$navigationBody.classList.toggle(ACTIVE)
	$headerIcon.classList.toggle(ACTIVE)
	$body.classList.toggle(LOCKED)
})
