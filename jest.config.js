module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['<rootDir>/src/**/*.test.(js|jsx|ts|tsx)'],
  clearMocks: true,
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
  },
  testURL: 'http://localhost/',
};
