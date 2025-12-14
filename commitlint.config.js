const DISABLED = [0]

module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-case': DISABLED,
		'header-case': DISABLED,
		'header-max-length': DISABLED,
		'body-max-line-length': DISABLED,
	},
}
