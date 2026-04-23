**"This is a portfolio project for educational purposes."**
* 이것은 교육 목적의 포트폴리오 프로젝트입니다.

# start 26.03.27 (8h(-1h))
* html 1차 작성 완료
* css
    * header 2Depth까지 완료
    * hero_bnr 완료
    * new container 작업중
* js
    * header on 완료
    * hero_bnr slide 완료
# 26.04.06 (2:20 ~ 18:15 4h)
* html 일부 수정
* css
    * header 완성
    * new 완료
    * best 작업중
* js
    * header 동적기능 완료
# 26.04.07 (2:20 ~ 18:30 4h)
* html 모바일 메뉴 태그 추가
* css
    * best 작업 완료
* js
    * best 슬라이드 작업 완료
# 26.04.08 (3:20 ~ 18:20 3h(-1h))
* css
    * 모바일 헤더 작업중(레이아웃 다듬기만 남음)
# 26.04.09 (10:20 ~ 13:20 / 14:20 ~ 18:20 (7h) (-1h))
* html 일부 수정 (클래스 이름)
* css
    * brand 완료
    * style 1차 완료 (슬라이드 크기 바꾸는게 자꾸 안됨....)
    * discover 작업중
* js
    * style 슬라이드 완료
# 26.04.10 (2:20 ~ 18:20 (4h))
* html 일부 수정 (location p>button)
* css
    * location까지 까지 작업 완료
    * style 슬라이드 크기 > 반응형 할 때 맞춰서 크기 재확인 후 재작업 예정
* js
    * location 까지 완료
# 26.04.13 (2:20 ~ 18:20 (4h))
* css
    * 반응형 일부 작업
* js
    * 해상도에 따른 슬라이드 갯수 변경
# 26.04.14 (2:20 ~ 18:20)
* css 반응형 작업 중
# 26.04.17 (2:20 ~ 16:00)
* css
    * 모바일까지 반응형 작업 완료
    * 오류 수정
    * 상품 이미지 호버기능 추가
* html, css, js 작업 완료

## 참고사항
* CSS
    * `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`
    * 글자 1줄로만 / 넘치는 글자 숨김 처리 / 넘친 글자 ...로 대체
* JS
    * `parentNode` 객체의 부모 찾을 때 사용
    * `renderFraction:function(){}` 사용자 함수
    * `formatFractionCurrent: function(number){}` 페이지번호에 0 붙일 때 사용
    * `pagination:{el:,type: 'progressbar',}` 페이지번호 대신 선으로 표시할 때
    * `forEach` : location 위치 보기 시 클래스 초기화를 위해 사용함
        * 배열(또는 NodeList)에 담긴 요소들을 하나씩 처음부터 끝까지 꺼내서 특정 동작을 시키는 반복문
        * 매개변수 순서: 배열명.forEach((요소, 번호) => { 실행할 코드 })에서 첫 번째는 실제 태그, 두 번째는 순서(0부터 시작)
        * 특징 1. 멈출 수 없음: 중간에 멈추는 기능(break)이 없고 무조건 상자 바닥까지 다 확인해야 끝남
        * 특징 2. 상자 전용: querySelectorAll로 가져온 뭉치나 [ ]로 만든 배열에만 사용 가능 (일반 변수에는 사용X)
    * `breakpoints` 해상도별 설정 기능
    * `classList.toggle` 클래스 이름 중 해당 클래스 이름이 없으면 추가 / 있으면 제거