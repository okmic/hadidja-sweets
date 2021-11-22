import styled from 'styled-components'

export const WrapperPreloading = styled.div`
position: fixed;
width: 100%;
height: 100%;
background-color: rgb(22, 10, 10);
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
-webkit-animation: preloading 2.5s 1 forwards ;
-ms-animation: preloading 2.5s 1 forwards ;
-moz-animation: preloading 2.5s 1 forwards ;
animation: preloading 2.5s 1 forwards ;
@keyframes preloading {
  90%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    }
}
`
export const PreloadingItem = styled.div`
max-height: 100%;
width: 100%;
max-width: 500px;
display: flex;
flex-direction: column;
align-items: center;
& img {
  width: 55vw;
  max-width: 500px;
  margin-bottom: -1vh;
}
`

/* .preloader_cotnainer_hesh {

}
.preloading,  .preloading div{

  }
  .preloading img {

  }
  .preloading div {
    width: 90vw;
    max-width: 500px;
  }
 */