/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	appDirectory: './src',
	cacheDirectory: './node_modules/.cache/remix',
	// watchPaths: ["../../libs/"],
	serverModuleFormat: 'cjs',
	tailwind: true,
	postcss: true,
	// See https://remix.run/docs/en/v1/api/conventions#serverdependenciestobundle
	serverDependenciesToBundle: [  
		// These are dependencies of react-markdown.
		/^(comma|space)-separated-tokens/,
		/^bail$/,
		/^ccount$/,
		/^character-entities$/,
		/^decode-named-character-reference$/,
		/^escape-string-regexp$/,
		/^hast-util-whitespace$/,
		/^is-plain-obj$/,
		/^markdown-table$/,
		/^mdast.*/,
		/^micromark.*/,
		/^property-information$/,
		/^react-markdown$/,
		/^remark.*/,
		/^trim-lines$/,
		/^trough$/,
		/^unified$/,
		/^unist.*/,
		/^vfile.*/,
  
		// These are dependencies of react-dnd.
		/^@react-dnd\/.*/,
		/^dnd-core$/,
		/^react-dnd/,
	],
}