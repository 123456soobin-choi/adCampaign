module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'linebreak-style': 0, // 개행
    'import/prefer-default-export': 0, // export default prefer 규칙 해제
    'import/extensions': 0, // ts 파일을 불러오기 위해
    'no-use-before-define': 0, // 정의 전에 사용 금지
    'import/no-unresolved': 0, // import로 가져온 파일 혹은 모듈이 unresolved가 되지 않도록 하는 옵션
    'react/react-in-jsx-scope': 0, // React를 import하지 않고 사용하려고 할 때 경고하는 규칙 해제
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-shadow': 0, // 상위에 선언된 변수 사용하지 못하는 규칙 해제
    'react/prop-types': 0, // props의 타입체크를 처리에 proptypes가 아닌 typescript 사용 예정
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ], // 확장자 설정
    'jsx-a11y/no-noninteractive-element-interactions': 0, // div 나 span 등 의미 없는 태그 role 속성 추가 강제 규칙 해제
    '@typescript-eslint/explicit-module-boundary-types': 'off', // function에 return 타입을 명시해야하는 rule 해제
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
