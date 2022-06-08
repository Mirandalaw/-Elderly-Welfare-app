Elderly-Welfare-app

1. Main Client  : 30대 직장인 층
2. UI 설계
3. 요구사항 명세서
4. Class Diagram 설계 
5. DB설계(mysql- RDB) 

 기능 
1. 내 현재 위치와 근처 병원 위치 비교해서 m,km로 보여주기
   -  kakao map api 이용
   -  A의 위도,경도와 B의 위도,경도 비교로 직선거리는 알 수 있으나, 도로간의 거리?
2. 병원 나열 및 분류 
   - DB에 현재 지역 병원만 넣어주기
   - 병원별 특징 구분짓기
3. 아픈 곳 입력 -> 해당 진료를 보는 가까운 병원 추천
4. 현재 위치 전송 -> 구급차 호출?
   - 새로운 api를 만들어서 현재 위치 및 사용자 정보 만들어서 해당 웹사이트로 신고 요청
5. 검색 시스템은 어떻게 구현할것인가?
    검색 엔진 사용
