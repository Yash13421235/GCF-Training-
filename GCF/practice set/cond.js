body{
    text-align: center;
    margin-top: 100px;
    font-family: 'Times New Roman', Times, serif;
}

#title {
    font: size 40px;
    transition: 0.5s;
}

/*Animation Class*/
.animation{
    animation: translateY(0);
}

/*Key frames*/
@keyframes bounceGlow {
    0%{
        transform: translateY(0);
        color: red;
    }
    50%{
        transform: translateY(-30px);
        color: blue;
    }
    100%{
        transform: translateY(0);
        color: green;
    }
}