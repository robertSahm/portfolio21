/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
module.exports = {
	siteMetadata: {
		title: 'portfolio21'
	},
	plugins: [
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				cssLoaderOptions: {
					camelCase: false
				}
			}
		},
		{
			resolve: 'gatsby-plugin-layout',
			options: {
				component: require.resolve('./src/components/layout.js')
			}
		},
		{
			resolve: 'gatsby-plugin-prettier-eslint',
			options: {
				// eslint-disable-next-line no-undef
				cwd: process.cwd(), // path to a directory that should be considered as the current working directory
				watch: true, // format/lint on save
				initialScan: true, // if true, will format/lint the whole project on Gatsby startup
				onChangeFullScanLint: false, // if true, on file save always perform full scan lint
				onChangeFullScanFormat: false, // if true, on file save always perform full scan format
				prettierLast: false, // if true, will run Prettier after ESLint
				ignorePatterns: ['**/node_modules/**/*', '**/.git/**/*', '**/dist/**/*', '.cache/**/*', 'public/**/*'], // string or array of paths/files/globs to ignore
				// prettier: {
				// 	patterns: [
				// 		// the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
				// 		'**/*.{css,scss,less}',
				// 		'**/*.{json,json5}',
				// 		'**/*.{graphql}',
				// 		'**/*.{md,mdx}',
				// 		'**/*.{html}',
				// 		'**/*.{yaml,yml}'
				// 	],
				// 	ignorePatterns: [], // string or array of paths/files/globs to exclude related only to Prettier
				// 	customOptions: {} // see: https://prettier.io/docs/en/options.html
				// },
				eslint: {
					// string or array of paths/files/globs to include related only to ESLint
					patterns: '**/*.{js,jsx,ts,tsx}',
					customOptions: {
						fix: true,
						cache: true
					},
					ignorePatterns: [], // string or array of paths/files/globs to exclude related only to ESLint
					formatter: 'stylish', // set custom or third party formatter
					maxWarnings: undefined, // number of max warnings allowed, when exceed it will fail Gatsby build
					emitWarning: true, // if true, will emit lint warnings
					failOnError: false, // if true, any lint error will fail the build, you may set true only in your prod config
					failOnWarning: false, // same as failOnError but for warnings
					plugins: [] // an array of plugins to load for ESLint
				}
			}
		}
	]
};
