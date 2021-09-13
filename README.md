## HackerNews
HN API(https://github.com/HackerNews/API) 를 통해 category 별 뉴스 목록을 보여줍니다.

## Getting Started
`yarn && yarn start`

## Project Stack
<ul>
  <li>React</li>
  <li>React Router</li>
  <li>TypeScript</li>
  <li>Material-UI</li>
  <li>ESLint</li>
  <li>Prettier</li>
</ul>

## Description
<ul>
  <li>
    /, /news/:category 페이지
    <ul>
      <li>category 값에 따른 뉴스 목록을 보여줍니다. (default: "topstories")</li>
    </ul>
  </li>
  <li>
    /news/:category/:id 페이지
    <ul>
      <li>id 값에 해당하는 뉴스의 상세 정보를 보여줍니다.</li>
      <li>LINK 버튼 클릭 시 출처로 이동합니다.</li>
      <li>출처가 존재하지 않는 경우 LINK 버튼이 노출되지 않습니다.</li>
    </ul>
  </li>
</ul>
