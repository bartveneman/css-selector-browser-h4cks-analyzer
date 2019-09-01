const regexes = [
	/^\*\s*html/,
	/^\*:first-child\s?\+\s?html/,
	/^\*\s?\+\s?html/,
	/^body\*.+/,
	/^html\s?>\s?body/,
	/\\$/,
	/^:root\s/,
	/^body:first-child\b/,
	/^body:last-child\b/,
	/^body:nth-of-type\(1\)/,
	/^body:first-of-type\b/,
	/^body:empty/,
	/:not\(\[attr\*=["\\']{2}]\)/,
	/:not\(\*:root\)/,
	/x:-moz-any-link/,
	/body:not\(:-moz-handler-blocked\)/,
	/_::selection/,
	/x:-IE7/,
	/html:first-child/,
	/html\[xmlns\*=['"]{2}]/,
	/_::?-(?:moz|o|ms)-/
]

module.exports = selector => regexes.some(regex => regex.test(selector))
