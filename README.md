# EXP-MISSION-Netflix
React를 이용하여 넷플릭스 클론 만들기.

### 사용기술
- React
- React Router Dom
- Axios
- swiper
- styled components
- css
  
<br>

### 구현 기능
- 모든 영화 데이터는 tmdb api 영화 데이터 활용 
- 메인 페이지
  - 로고 클릭 시 첫 화면으로 이동
  - 검색 기능
  - 재생 버튼 클릭 시 예고편 재생 (유튜브 공식 예고편 활용)
  - 메인 배너 상세 정보 클릭, 카테고리 영화 포스터 클릭 시 상세 정보 모달 (예고편이 있으면 영상 자동 재생)
- 검색 기능
  - 키워드 입력 시 키워드에 맞는 영화 데이터 생성
  - 영화 포스터 클릭 시 영화 이미지 및 제목, 설명 생성
- 반응형

<br>

## 결과물
### 메인 페이지
![스크린샷 2025-05-29 오후 5 03 06](https://github.com/user-attachments/assets/18032891-8b38-4319-b285-9ac4c0430687)
![스크린샷 2025-05-29 오후 5 04 46](https://github.com/user-attachments/assets/365eff9c-0676-4691-9356-97a7599725c3)
![스크린샷 2025-05-29 오후 5 05 20](https://github.com/user-attachments/assets/0c7dcdda-4916-46af-9183-b5cfac57dfbb)

### 상세 정보 모달
![스크린샷 2025-05-29 오후 5 06 53](https://github.com/user-attachments/assets/7270123d-efe6-40ff-bb3b-e27eb83dec9f)
![스크린샷 2025-05-29 오후 5 07 31](https://github.com/user-attachments/assets/f77dd84a-e219-4fa8-af32-55433803de99)

### 검색
![스크린샷 2025-05-29 오후 5 08 35](https://github.com/user-attachments/assets/39905d06-dbca-4afe-a021-9221976fbfe1)
![스크린샷 2025-05-29 오후 5 10 02](https://github.com/user-attachments/assets/b938fba2-63b8-4a2d-8769-a85375becef6)

### 파일 구조

- api : API를 활용한 콘텐츠 데이터 가져오기
  - axios.js : tmdb API 요청을 위한 axios 인스턴스를 설정
  - requests.js : 각종 콘텐츠 카테고리에 대한 API 요청 URL 객체

components
- MovieModel
  - index.js : 상세 정보 모달
  - MovieModal.css : 상세 정보 모달 스타일
  
- Row
  - Row.js : 카테고리 별 영화 포스터 생성
  - Row.css : Row.js 스타일
    
- Banner
  - Banner.js : 메인 페이지 배너
  - Banner.css : 메인 페이지 배너 스타일

- Nav
  - Nav.js : 메인 페이지 상단 헤더 구성
  - Nav.css : 헤더 스타일

- Footer
  - Footer.js : 하단 넷플릭스 정보 구성 (styled components를 활용하여 스타일)

pages
- MainPage : 메인 페이지
- DetailPage : 검색 후 상세 정보 페이지
- SearchPage : 검색 페이지

hooks
- useDebounce.js : 검색 결과 데이터 전송 커스텀 훅
- useOnClickOutside.js : 외부 클릭 이벤트 커스텀 훅
