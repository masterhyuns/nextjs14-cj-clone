// jest.config.ts (확장자를 .ts로 변경)
import nextJest from 'next/jest';

const createJestConfig = nextJest({
    // Next.js 애플리케이션의 디렉토리 경로를 지정합니다.
    dir: './',
});

// Jest 설정
const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // 추가적인 설정 파일
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1', // 절대 경로 alias 설정
    },
};

export default createJestConfig(customJestConfig);
