function Validation()
{
    if(Name())
        if(PassCheck())
            if(NumCheck())
                alert("با موفقیت انجام شد.");
            else
                alert("شماره تلفن اشتباه است.");
        else
            alert("رمز های عبور با یکدیگر مطابقت ندارند.");
    else
        alert("نام و نام خانوادگی با شرایط مطابقت ندارند.");
}
function CheckName(name)
{
    for(var i=0;i<name.length;i++)
        if((name[i]<"a" || name[i]>"z") && (name[i]<"A" || name[i]>"Z") && name[i]!=" ")
            return false;
    return true;
}
function Name()
{
    if(CheckName(document.getElementById("fname").value) && CheckName(document.getElementById("lname").value))
            return true;
    return false;
}
function NumCheck()
{
    var pnum=document.getElementById("pnum").value;
    if(pnum.length==0)
        return true;
    if(pnum.length==11)
        if(pnum[1]=="9" && pnum[0]=="0")
            return true;
    return false;
}
function PassCheck()
{
    var pass=document.getElementById("password");
    var repass=document.getElementById("re-password");
    if(pass.value==repass.value)
        return true;
    else
        return false
}
function Reset()
{
    var form=document.getElementsByTagName("input");
    
    for(var i=0; i<form.length-2; i++)
        form[i].value="";
}