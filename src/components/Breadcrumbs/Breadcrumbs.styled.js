import styled from 'styled-components'


export const WrapperBreadcrumbs = styled.div`
display: flex;
flex-direction: column;
align-items: start;
& ul {
    padding-left: -40px;
    list-style-type: none;
    display: flex;
    align-items: center;
    font-size: 19px;
}
& ul a{
    padding-left: -40px;
    color: #fff;
    font-style: italic;
    font-weight: 500;

}
& ul li a:hover{
    padding-left: -40px;
    color: #785627;
}
@media screen and (max-width: 500px) {
        display: none;
}
`

export const BreadcrumbsActive = styled.li`
color: #785627;
font-style: italic;
font-weight: bold;
`


