list=[];
function submit(){
    for(var i=1;i<=4;i++)
    {
        var name=document.getElementById("name_of_the_student_"+i).value;
        list.push(name);
        console.log(name);
    }
    console.log(list);
    var length1=list.length;
    console.log(length1);
    var display=[];
    for(var j=0;j<length1;j++)
    {
        display.push("<h4>name-"+list[j]+"</h4>");
        console.log(display);
    }
    document.getElementById("display_name_with_commas").innerHTML=display;
    var removecomma=display.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=removecomma;
    console.log(removecomma);
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    list.sort();
    var length1=list.length;
    console.log(length1);
    var sortname=[];
    for(var j=0;j<length1;j++)
    {
        sortname.push("<h4>name-"+list[j]+"</h4>");
        console.log(sortname);
    }
    var removecomma=sortname.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=removecomma;
    console.log(removecomma);
}