document.getElementById('pred').addEventListener("click", (e)=>{
    e.preventDefault();
    cc=document.getElementsByClassName('cc')[0];
    cf=document.getElementsByClassName('cf')[0];
    if (parseFloat(cc.value)==cc.value && parseFloat(cf.value)==cf.value)
    {
        alert('Enter only one rating as numerical value');
    }
    else if(parseFloat(cc.value)==cc.value)
    {
        cf.value=(cc.value - 1012.22482268)/0.50743633;
    }
    else if(parseFloat(cf.value)==cf.value)
    {
        cc.value=(cf.value*0.50743633 + 1012.22482268);
    }
    else
    {
        cc.value='Codechef Rating';
        cf.value='Codeforces Rating'
    }
})