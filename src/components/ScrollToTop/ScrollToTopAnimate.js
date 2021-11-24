import  { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import styled from 'styled-components'
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const Wrapper = styled.div`
position: fixed;
bottom: 11%;
left: 5%;
width: 35px;
height: 35px;
cursor: pointer;
background-color: #3e220b;
border-radius: 50%;
color: #fff;
transition: 0.3s;
z-index: 1;
animation: scrollToTop 1s 1 forwards;
&:hover {
    color: green;
    transition: 0.3s;
};
@keyframes scrollToTop {
    0%{transform: translateX(-70px);}
    100%{transform: translateX(0px);}
  };
`


const ScrollToTopAnimate = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <Wrapper onClick={scrollToTop}        >
            <BsFillArrowUpCircleFill size="35"  />
        </Wrapper>
    );
};

export default ScrollToTopAnimate;