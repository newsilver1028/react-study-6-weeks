# (5주차) 리액트 과제

## 요구사항

### Basic

- `로그인 & 로그아웃` 기능
    - 텍스트 인풋과 로그인 버튼이 존재
    - 임의의 텍스트 입력후 로그인 버튼 클릭시 ⇒ `로그인`
    - 로그인 상태인 경우 입력한 텍스트가 `유저 네임`으로 쓰이고 `로그아웃` 버튼이 나타남
    - 로그아웃 클릭시 다시 처음 상태로 전환

    ![image](https://user-images.githubusercontent.com/79626675/153983450-c25025dc-1841-4bfc-9e8c-f3e1c9939a0d.png)
    ![image](https://user-images.githubusercontent.com/79626675/153983474-1a03bdc9-9920-4e58-a6a7-e737c5bfa1c3.png)


- 댓글 목록 & 댓글 입력 기능
    - 로그인 상태에서만 입력 가능
    
    ![image](https://user-images.githubusercontent.com/79626675/153983517-b28e649b-4e8e-4a76-bfdb-62f1add130f1.png)
    ![image](https://user-images.githubusercontent.com/79626675/153983596-92a3b188-a025-4727-89a2-794f42028007.png)


    - 댓글은 유저이름, 댓글 내용, 작성시간이 나타난다.

    - 댓글에서 삭제 버튼은 로그인한 유저이름이 같은사람만 보인다. 삭제 기능은 로그인한 유저이름이 같은사람만 가능하다.
    
    ![image](https://user-images.githubusercontent.com/79626675/153983644-6907b184-ae11-4b2b-90ee-b36134cb196c.png)



### Hard

- 새로 고침해도 로그인을 유지 하기
- 만들어진 댓글은 30초가 지나면 사라지게 하기
- 이쁘게 꾸며보기
    
    css animation
    
    box-shadow
    

### 참고 사항

- 원하는 컴포넌트 라이브러리나 스타일 도구는 자유롭게 사용
    - `tailwind`, `styled-component` 등등
- 디자인은 임의로 작성한것 뿐입니다 자유롭게 하셔도 됩니다