const test = require('ava')
const isBrowserHack = require('.')

const hacks = [
	'* html .selector',
	'*:first-child + html .selector',
	'*:first-child+html .selector',
	'* + html .selector',
	'*+html .selector',
	'body*.selector',
	'html > body .selector',
	'html>body .selector',
	'.selector\\',
	':root .selector',
	'body:last-child .selector',
	'body:nth-of-type(1) .selector',
	'body:first-of-type .selector',
	".selector:not([attr*=''])",
	'.selector:not([attr*=""])',
	'.selector:not(*:root)',
	'body:empty .selector',
	'x:-moz-any-link',
	'body:not(:-moz-handler-blocked) .selector',
	'_::-moz-progress-bar',
	'_::-moz-range-track',
	'_:-moz-tree-row(hover)',
	'_::selection',
	'x:-IE7',
	'_:-ms-fullscreen',
	'_:-ms-input-placeholder',
	'html:first-child .selector',
	'_:-o-prefocus',
	'*|html[xmlns*=""] .selector',
	'html[xmlns*=""] body:last-child .selector',
	'html[xmlns*=""]:root .selector ',
	'_::-moz-svg-foreign-content'
]

const notHacks = [
	'html',
	'.my-selector',
	'tbody:first-child',
	'.slds-card__body:empty',
	'html *',
	'.rw-hero-body:last-child',
	'.hero-body:last-child',
	'head + body:last-child'
]

test('It reports selectors with browser hacks', t => {
	t.plan(hacks.length)

	hacks.map(hack => t.true(isBrowserHack(hack)))
})

test('It does not report non-hacky selectors as being hacks', t => {
	t.plan(notHacks.length)

	notHacks.map(notAHack => t.false(isBrowserHack(notAHack)))
})
