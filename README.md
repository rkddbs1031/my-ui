# My UI Library

재사용 가능한 React UI 컴포넌트와  
전역 상태 기반 UI 시스템(Toast, Modal 등)을 구현하는 라이브러리입니다. </br>

단순한 컴포넌트 모음이 아니라,  
**Queue / Stack 자료구조를 기반으로 한 UI 상태 관리 패턴을 구현하는 것이 목표**입니다.

## 기술 스택

- React 19
- TypeScript
- Tailwind CSS
- Zustand
- Vite

## 개발

\`\`\`bash
npm install
npm run dev
\`\`\`

## 빌드

\`\`\`bash
npm run build
\`\`\`

## 컴포넌트

- [✅] Toast
- [ ] Modal
- [ ] Button
- [✅] Input
- [ ] Checkbox
- [ ] Select
- [ ] MultiLevelSelect

## 커밋 타입 구분

### feat (새 기능)

- 새로운 컴포넌트
- 새로운 기능 추가

### fix (버그 수정)

- 코드의 결함이나 잘못된 동작 수정
- UI 렌더링 오류 수정
- 타입 정의 오류 및 콘솔 경고 해결

### style(스타일)

- 코드 포맷팅 (세미콜론, 들여쓰기 등)
- 로직 변경 없는 순수 스타일 속성 변경 (색상, 간격 조정 등)

### refactor (코드 개선)

- 로직 변경 (기능은 동일)
- 성능 개선
- 코드 구조 변경

### chore (설정/구조 변경)

- 파일 이름 변경
- 폴더 구조 정리
- 설정 파일 수정
- 의존성 추가/제거
- 빌드 설정 및 README 등 문서 수정
