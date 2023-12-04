# Vanilla JavaScript SPA

## 프로젝트 소개

이 프로젝트는 [토스 기술 블로그](https://toss.tech/tech)를 프레임워크나 라이브러리를 사용하지 않고 Vanilla JavaScript만을 사용하여 구축한 Single Page Application(SPA)입니다.

## 프로젝트 목표

- SPA 프레임워크나 라이브러리의 동작 원리를 직접 만들어보면서 이해하기

## 실행 방법

```
$npm install
$node server.js
```

## Router

### `/routers/index.js`

- 애플리케이션의 path와 각 path경로에 연결된 View를 정의합니다.
- ex: `{ path: "/", view: Home }` 는 루트 경로(`/`)에 Home View를 연결합니다.

### 경로 정규 표현식 변환

```js
const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// `/tech/article/:id` === `/tech/article/123`
```

- `path` 문자열을 정규 표현식으로 변환하여 동적 URL 파라미터를 처리합니다.

### 라우터 실행

- 페이지 로드 시 router 함수가 실행되어 현재 URL의 경로와 일치하는 라우트를 찾습니다.
- `window.addEventListener("popstate", router)` 로 브라우저의 뒤로 가기/앞으로 가기를 처리합니다.
- [Window: popstate event](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event)

### 라우트 매칭 및 뷰 렌더링

- URL과 일치하는 라우트를 찾아 해당 View 인스턴스를 생성합니다.
- `document.querySelector("#app").innerHTML = await view.render()` 를 통해 생성된 View를 페이지에 렌더링합니다.

### 내비게이션 이벤트 처리

- `navigateTo()` 함수는 새로운 경로로 이동하며, [history.pushState](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)를 사용하여 브라우저 히스토리를 업데이트합니다.
- 사용자가 링크를 클릭하면 `navigateTo()` 함수가 호출되어 라우팅 처리합니다.

## State

### 상태 생성

- `createState()` 함수는 초기 상태 값을 받아 새로운 상태를 생성합니다.

### 상태 구독 및 렌더 함수 연결

- `PostFeedbackState.subscribe(render)` 를 통해 상태 변화 시 호출될 `render()` 함수를 상태 객체에 구독시킵니다.

### 상태 변경

- 사용자 인터랙션(ex: 버튼 클릭)을 통해 `PostFeedbackState.setState(...)` 가 호출됩니다.
- 이 호출은 상태를 변경하고 모든 구독된 함수를 호출합니다.

### 상태 기반 UI 업데이트

- `render()` 함수는 현재 상태에 따라 DOM을 업데이트합니다.
- ex: 상태가 `true`면 긍정적인 피드백을 나타내는 요소의 불투명도를 조정합니다.

## reference

- [프레임워크 없는 프론트엔드 개발](https://www.yes24.com/Product/Goods/96639825)
- [Build a Single Page Application with JavaScript (No Frameworks)](https://dcode.domenade.com/tutorials/build-a-single-page-app-with-javascript-no-frameworks)
