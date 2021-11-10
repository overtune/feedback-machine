const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
	prefix: '<rootDir>/',
});

module.exports = {
	preset: 'ts-jest',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
		...paths,
	},
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
		'^.+\\.svg$': '<rootDir>/test-utils/svgTransform.js',
	},
	transformIgnorePatterns: ['/node_modules/'],
};
