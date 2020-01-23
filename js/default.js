let lps = [];
let results = [];
let pattern;
let randomString="Transandinomys talamancae is a widespread and common rodent in the genus Transandinomys that occurs from Costa Rica to southwestern Ecuador and northern Venezuela. Its habitat is lowland forests up to an altitude of 1,500 m (5,000 ft). It is a medium-sized rice rat with soft fur, reddish to brownish on the overparts and whitish on the underparts. The ears and feet are long, and the tail is dark brown above and lighter below. The whiskers are very long. The species was first described in 1891 by Joel Asaph Allen. It was considered to be conspecific with what is now Hylaeamys megacephalus from the 1960s until the 1980s and was then placed in the genus Oryzomys until 2006, when it was moved to its current genus. This is a terrestrial nocturnal rat that eats plants and insects. It breeds throughout the year, but few individuals survive for more than a year. After a gestation of about 28 days, two to five young are born, which reach sexual maturity within two months. Part of the Transandinomys featured topic."



function kmp_lps_building(pattern)
{   lps = [];
    for(let x in pattern)
        lps.push(0);
    let l=0;
    for(let i=1;i<pattern.length;){
        if(pattern[i]==pattern[l]){
            l++;
            lps[i]=l;
            i++;
        }
        else
            if(l>0)
                l=lps[l-1];
            else{
                lps[l]=0;
                i++;
            }           
    }
}

function kmp_search(string,pattern){
    kmp_lps_building(pattern);
    let i=0,j=0;
    results=[];
    
    while(i<string.length){
        if(string[i]==pattern[j]){
            i++;
            j++;
        }
        if(j==pattern.length){
            results.push(i-j);
            j=lps[j-1];
        }
        else{
            if(i<string.length && pattern[j] != string[i])
            {
                if(j>0)
                    j=lps[j-1];
                else
                    i++;
            }
        }
    }
}
function createSpanNodesOnClick(){
    document.getElementById("textArea").innerHTML=randomString;
    createSpanNodes(randomString,"textOutput");
    getSpanNodesAndSerch();
}
function createSpanNodes(text,elemId){
    let parent=document.getElementById(elemId);

    parent.innerHTML="";
    for(let i=0;i<text.length;i++){
        let spanNode=document.createElement("span");
        spanNode.id=i;
        spanNode.innerHTML=text[i];
        parent.appendChild(spanNode);
    }
}
function addClassToNodes(){
    if(pattern=="")
        results=[];
    for(let i of results){
        for(let j=0;j<pattern.length;j++){
            let id=""+(i+j);
            document.getElementById(id).className="pattern-found";
        }
    }
    //Update the matches 
    document.getElementById("score").innerHTML=results.length+" matches";

}
function getSpanNodesAndSerch(){
    let text=document.getElementById("textArea").textContent;
    pattern=document.getElementById("pattern").textContent;
    kmp_search(text,pattern);
    createSpanNodes(text,"textOutput");
    addClassToNodes();
    
}


let patternNode=document.getElementById("pattern");
patternNode.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        return false;
    }
});