var tindex=2;


function OnAwake()
{
    Theme(tindex);
}

function Theme(theme)
{
    switch(theme)
    {
        case 1:
            tindex=1;
            DefaultTheme();
            break;
        case 2:
            tindex=2;
            DarkTheme();
            break;
        case 3:
            tindex=3;
            PinkTheme();
            break;
        default:
            break;
    }
}
function DefaultTheme()
{
    document.body.style.backgroundColor="#D8F0E9";
}
function DarkTheme()
{
    document.body.style.backgroundColor="#babec5";
}
function PinkTheme()
{
    document.body.style.backgroundColor="#ffccff";
}