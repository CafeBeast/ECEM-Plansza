
window.onload = plansza;

 

var pola = [

  ["A1","B1","C1","D1","E1","F1","G1","H1"],
  ["A2","B2","C2","D2","E2","F2","G2","H2"],
  ["A3","B3","C3","D3","E3","F3","G3","H3"],
  ["A4","B4","C4","D4","E4","F4","G4","H4"],
  ["A5","B5","C5","D5","E5","F5","G5","H5"],
  ["A6","B6","C6","D6","E6","F6","G6","H6"],
  ["A7","B7","C7","D7","E7","F7","G7","H7"],
  ["A8","B8","C8","D8","E8","F8","G8","H8"]

];

var pozycjapoczatkowa=[     ["w", "s", "g", "d", "k", "g", "s", "w"],
							["p", "p", "p", "p", "p", "p", "p", "p"],
							["", "", "", "", "", "", "", ""],
							["", "", "", "", "", "", "", ""],
							["", "", "", "", "", "", "", ""],
							["", "", "", "", "", "", "", ""],
							["P", "P", "P", "P", "P", "P", "P", "P"],
							["W", "S", "G", "D", "K", "G", "S", "W"]];
const ruchydlaskoczka=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
const kierunki=[[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]];
const ruchydlapionka=[[1,-1],[1,1],[1,0],[2,0]];
var zapispartii=[];
var Figury=["w","s","g","d","k","p","W","S","G","D","K","P",""];
var Figurybiale=["w","s","g","d","k","p"];
var Figuryczarne=["W","S","G","D","K","P"];
var tabszach=[];
var uzytabierka="";
var bierkawuzyciu="";
var zagrozonykrol="";
var polepodbiem=false;
var dlaczego="";
xu=0;
yu=0;
var mat=0;
var zoltepole=0;
var szach=false;
var move=false;
var ruchbialymkrolem = true;
var ruchczarnymkrolem = true;
var Gracz1zbite=[];
var Gracz2zbite=[];
var tura=0;
var x=0;
var y=0;
function plansza() {

  var tresc_diva = "";

  for (i = 0; i <= 7; i++) {

    for (k = 0; k <= 7; k++) {

      tresc_diva = tresc_diva + '<div class="pole" onclick="ruch('+i+','+k+')"  id="' + pola[i][k] + '"></div>';

    }

    tresc_diva = tresc_diva + '<div style="clear:both"></div>';

  }

  document.getElementById("board").innerHTML = tresc_diva;

             

              var menu_diva="";

              for (let b = 0; b <= 5; b++) {

                            var kafeleki ="menu"+b;

      menu_diva = menu_diva + '<div class="button1" id="' + kafeleki + '"></div>';

                 menu_diva = menu_diva + '<div style="clear:both"></div>';

    }

  

  document.getElementById("okno1").innerHTML = menu_diva;

  document.getElementById("menu0").innerHTML= "Gracz1";

  document.getElementById("menu5").innerHTML= "Gracz2";

  kolorplanszy();

 

}

function kolorplanszy(){

  for (let h = 0; h <= 7; h++) {

    for (w = 0; w <= 7; w++) {

      if ((h + w) % 2 !== 0) {

        document.getElementById(pola[h][w]).style.backgroundColor = "gray";

                           

      } else {

        document.getElementById(pola[h][w]).style.backgroundColor = "darkgray";

      }

    }

  }


  pozycjastartowa();

}

function pozycjastartowa(){

              for(m=0;m<=7;m++){

                            for(p=0;p<=7;p++){

                                          if(pozycjapoczatkowa[m][p]=="s"){

                                                        document.getElementById(pola[m][p]).innerHTML="<img src=\"figury/s.png\"/>";

                                          }

                                          else if(pozycjapoczatkowa[m][p]=="S"){

                                                        document.getElementById(pola[m][p]).innerHTML="<img src=\"figury/bS.png\"/>";

                                          }

                                          else if(pozycjapoczatkowa[m][p]=="w"){

                                                        document.getElementById(pola[m][p]).innerHTML= "<img src=\"figury/w.png\"/>";

                                          }

                                          else if(pozycjapoczatkowa[m][p]=="W"){

                                                        document.getElementById(pola[m][p]).innerHTML= "<img src=\"figury/bW.png\"/>";

                                          }

                                          else if(pozycjapoczatkowa[m][p]=="g"){

                                                        document.getElementById(pola[m][p]).innerHTML= "<img src=\"figury/g.png\"/>";

                                          }

                                          else if(pozycjapoczatkowa[m][p]=="G"){

                                                        document.getElementById(pola[m][p]).innerHTML= "<img src=\"figury/bG.png\"/>";

                                          }

                                          else if(pozycjapoczatkowa[m][p]=="d"){

                                                        document.getElementById(pola[m][p]).innerHTML= "<img src=\"figury/d.png\"/>";

                                          }

                                          else if(pozycjapoczatkowa[m][p]=="D"){

                                                        document.getElementById(pola[m][p]).innerHTML= "<img src=\"figury/bD.png\"/>";

                                          }

                                          else if(pozycjapoczatkowa[m][p]=="k"){

                                                        document.getElementById(pola[m][p]).innerHTML= "<img src=\"figury/k.png\"/>";

                                          }

                                          else if(pozycjapoczatkowa[m][p]=="K"){

                                                        document.getElementById(pola[m][p]).innerHTML= "<img src=\"figury/bK.png\"/>";

                                          }

                                          else if(pozycjapoczatkowa[m][p]=="p"){

                                                        document.getElementById(pola[m][p]).innerHTML= "<img src=\"figury/p.png\"/>";

                                          }

                                          else if(pozycjapoczatkowa[m][p]=="P"){

                                                        document.getElementById(pola[m][p]).innerHTML= "<img src=\"figury/bP.png\"/>";

                                          }
										   else if(pozycjapoczatkowa[m][p]=="x"){

                                                        document.getElementById(pola[m][p]).innerHTML= "X";

                                          }

                                          else{

                                                        document.getElementById(pola[m][p]).innerHTML="";

                                          }

                            }

 

              }

             

             

              if(Gracz2zbite.length-1>=0){

                                                        document.getElementById("menu4").innerHTML="";

              for(let j=0; j<=Gracz2zbite.length-1;j++){

                                          if(Gracz2zbite[j]=="S"){

                                          document.getElementById("menu4").innerHTML=document.getElementById("menu4").innerHTML+"<img src=\"figury/bS.png\"/>";

                                          }

                                          else if(Gracz2zbite[j]=="P"){

                                          document.getElementById("menu4").innerHTML=document.getElementById("menu4").innerHTML+"<img src=\"figury/bP.png\"/>";

                                          }

                                          else if(Gracz2zbite[j]=="W"){

                                          document.getElementById("menu4").innerHTML=document.getElementById("menu4").innerHTML+"<img src=\"figury/bW.png\"/>";

                                          }

                                          else if(Gracz2zbite[j]=="G"){

                                          document.getElementById("menu4").innerHTML=document.getElementById("menu4").innerHTML+"<img src=\"figury/bG.png\"/>";

                                          }

                                         

                                          else if(Gracz2zbite[j]=="D"){

                                          document.getElementById("menu4").innerHTML=document.getElementById("menu4").innerHTML+"<img src=\"figury/bD.png\"/>";

                                          }

                                          else if(Gracz2zbite[j]=="K"){

                                          document.getElementById("menu4").innerHTML=document.getElementById("menu4").innerHTML+"<img src=\"figury/bK.png\"/>";

                                          }

                                         

                                          else{

                                                         continue;

                                          }

                                         

                           

                           

              }

	
}

if(Gracz1zbite.length-1>=0){

 

document.getElementById("menu1").innerHTML="";

 

              for(let j=0; j<=Gracz1zbite.length-1;j++){

                                          if(Gracz1zbite[j]=="s"){

                                          document.getElementById("menu1").innerHTML=document.getElementById("menu1").innerHTML+"<img src=\"figury/s.png\"/>";

                                          }

                                          else if(Gracz1zbite[j]=="p"){

                                          document.getElementById("menu1").innerHTML=document.getElementById("menu1").innerHTML+"<img src=\"figury/p.png\"/>";

                                          }

                                          else if(Gracz1zbite[j]=="w"){

                                          document.getElementById("menu1").innerHTML=document.getElementById("menu1").innerHTML+"<img src=\"figury/w.png\"/>";

                                          }

                                          else if(Gracz1zbite[j]=="g"){

                                          document.getElementById("menu1").innerHTML=document.getElementById("menu1").innerHTML+"<img src=\"figury/g.png\"/>";

                                          }

                                         

                                          else if(Gracz1zbite[j]=="d"){

                                          document.getElementById("menu1").innerHTML=document.getElementById("menu1").innerHTML+"<img src=\"figury/d.png\"/>";

                                          }

                                          else if(Gracz1zbite[j]=="k"){

                                          document.getElementById("menu1").innerHTML=document.getElementById("menu1").innerHTML+"<img src=\"figury/k.png\"/>";

                                          }

                                         

                                          else{

                                                         continue;

                                          }

                                         

                           

                           

              }

}
	zapisruchu();
}
function zapisruchu(){
	var zruch=uzytabierka+pola[x][y];
	zapispartii.push(zruch);
	document.getElementById("menu2").innerHTML=zapispartii[zapispartii.length-1]+zapispartii[zapispartii.length-2];
}

function ruch(r,c){

              x=r;

              y=c;

             

             

              if(Gracz1zbite.includes("k")==true || Gracz2zbite.includes("K")==true){

                            alert("Ktoś wygrał");

              }

              else{

             

              if(move==false){

                           

                            if(document.getElementById(pola[r][c]).innerHTML==""){

                                                         move=false;

                                          }

                                          else{

                                                        

                                                         if(tura%2==0){

                                                                      

                                                                       if(Figurybiale.includes(pozycjapoczatkowa[r][c])==true){

                                                                                    

                                                                                     dostepnyruch(pozycjapoczatkowa[r][c]);

                                                                                    uzytabierka=pozycjapoczatkowa[r][c];

                                                                                     xu=r;

                                                                                     yu=c;

                                                                                   document.getElementById(pola[r][c]).style.backgroundColor="blue";             

                           move= true;

                                                                       }                                        

                                                                       else{

                                                                                     move=false;

                                                                       }

                                                         }

                                                         else{

                                                                       if(Figuryczarne.includes(pozycjapoczatkowa[r][c])==true){

                                                                                    

                                                                                     dostepnyruch(pozycjapoczatkowa[r][c]);

                                                                                     uzytabierka=pozycjapoczatkowa[r][c];

                                                                                     xu=r;

                                                                                     yu=c;

                                                                                    

                                                                                    document.getElementById(pola[r][c]).style.backgroundColor="red";             

                           move= true;

                                                                       }                          

                                                                       else{

                                                                                     move=false;

                                                                                     }

                                                                       }

 

                                                         }          

 

              }

 

              else{

                                                         if(document.getElementById(pola[r][c]).style.backgroundColor=="yellow"){

                                                                                    

                                                                                                   if(pozycjapoczatkowa[r][c]!=""){

                                                                                                                 if((uzytabierka=="p" && x==7) || (uzytabierka=="P" && x==0)){

                                                                                                                

                                                                                                                 alert("Kurama ma boy, We got this");

                                                                                                                 transformacjapionka(1);

                                                                                                                 }

                                                                                                                 else{

                                                                                                                               zbicie();

                                                                                                                 }            

                                                                                                                

                                                                                                   }

                                                                       else{

                                                                                                   if(uzytabierka=="k" ){

                                                                                                                 if(xu == r && yu+2==c && ruchbialymkrolem == true){

                                                                                                                 alert("coś  coś");

                                                                                                                               pozycjapoczatkowa[xu][yu]="";

                                                                                                                               pozycjapoczatkowa[xu][yu+1]="w";

                                                                                                                               pozycjapoczatkowa[xu][yu+2]="k";

                                                                                                                               pozycjapoczatkowa[xu][yu+3]="";

                                                                                                                               tura++;

                                                                                                                               ruchbialymkrolem=false;

                                                                                                                               move=false;

                                                                                                                               kolorplanszy();

                                                                                                                 }

                                                                                                                 else if(xu == r && yu-3==c && ruchbialymkrolem == true){

                                                                                                                               pozycjapoczatkowa[xu][yu]="";

                                                                                                                               pozycjapoczatkowa[xu][yu-1]="w";

                                                                                                                               pozycjapoczatkowa[xu][yu-2]="k";

                                                                                                                               pozycjapoczatkowa[xu][yu-4]="";

                                                                                                                               tura++;

                                                                                                                               ruchbialymkrolem=false;

                                                                                                                               move=false;

                                                                                                                               kolorplanszy();

                                                                                                                 }

                                                                                                                 else{

                                                                                                                 wykonanyruch();

                                                                                                                 ruchbialymkrolem=false;

                                                                                                                 }

                                                                                                                

                                                                                                   }

                                                                                                   else if(uzytabierka=="K" ){

                                                                                                                 if(xu == r && yu-3==c && ruchczarnymkrolemy == true){

                                                                                                                               pozycjapoczatkowa[xu][yu]="";

                                                                                                                               pozycjapoczatkowa[xu][yu-1]="W";

                                                                                                                               pozycjapoczatkowa[xu][yu-2]="K";

                                                                                                                               pozycjapoczatkowa[xu][yu-4]="";

                                                                                                                               tura++;

                                                                                                                               ruchczarnymkrolem=false;

                                                                                                                               move=false;

                                                                                                                               kolorplanszy();

                                                                                                                 }

                                                                                                                 else if(xu == r && yu+2==c && ruchczarnymkrolem == true){

                                                                                                                 alert("coś  coś");

                                                                                                                               pozycjapoczatkowa[xu][yu]="";

                                                                                                                               pozycjapoczatkowa[xu][yu+1]="W";

                                                                                                                               pozycjapoczatkowa[xu][yu+2]="K";

                                                                                                                               pozycjapoczatkowa[xu][yu+3]="";

                                                                                                                               tura++;

                                                                                                                               ruchczarnymkrolem=false;

                                                                                                                               move=false;

                                                                                                                               kolorplanszy();

                                                                                                                 }

                                                                                                  

                                                                                                                 else{

                                                                                                                               wykonanyruch();

                                                                                                                               ruchczarnymkrolem=false;

                                                                                                                               }

                                                                                                   }

                                                                                                   else if((uzytabierka=="p" && x==7) || (uzytabierka=="P" && x==0)){

                                                                                                                 alert("Kurama ma boy, We got this");

                                                                                                                 transformacjapionka(2);

                                                                                                   }

                                                                                                   else{

                                                                                                                

                                                                                                                 wykonanyruch();

 

                                                                                                   }

                                                                                    

                                                                       }

                                                                       }

                                                                       else{

                                                                                                   if(pozycjapoczatkowa[r][c]==""){

                                                                                                                 move=true;

                                                                                                   }

                                                                                                   else{

                                                                                                                 kolorplanszy();

                                                                                                                 move=false;

                                                                                                   }

                                                                                     }

                                                                                    

                                                         }

 

              }

             }

function wykonanyruch(){

              var oberyna=pozycjapoczatkowa[x][y];

                            sprawdzenieszacha();

              if(szach==false){

                            pozycjapoczatkowa[xu][yu]="";

                            pozycjapoczatkowa[x][y]=uzytabierka;

                            tura++;

                            move=false;

                            kolorplanszy();

                            }

              else{

                            pozycjapoczatkowa[xu][yu]="";

                            pozycjapoczatkowa[x][y]=uzytabierka;

                            sprawdzenieszacha();

                                          if(szach==false){

                                                         tura++;

                                                         move=false;

                                                         kolorplanszy(); 

                                          }            

                                          else{

                                                                       move=false;

                                                                       pozycjapoczatkowa[xu][yu]=uzytabierka;

                                                                       pozycjapoczatkowa[x][y]=oberyna;

                                                                       kolorplanszy();

                                                                       sprawdzeniemata();

                                                         if(mat==0){

                                                                       alert("mat");

                                                         }

                                          }

             

                            }

}

function zbicie(){

             

              var oberyn=pozycjapoczatkowa[x][y];

                            sprawdzenieszacha();

              if(szach==false){

                            pozycjapoczatkowa[xu][yu]="";

                            pozycjapoczatkowa[x][y]=uzytabierka;

                            if(Figurybiale.includes(oberyn)==true){

                            Gracz1zbite.push(oberyn);

                            }

              else{

                            Gracz2zbite.push(oberyn);

                            alert(oberyn);

                            }

             

                            tura++;

                            move=false;

                            kolorplanszy();

                            }

              else{

                            pozycjapoczatkowa[xu][yu]="";

                            pozycjapoczatkowa[x][y]=uzytabierka;

                            sprawdzenieszacha();

                            if(szach==false){

                            if(Figurybiale.includes(oberyn)==true){

                            Gracz1zbite.push(oberyn);

                            }

              else{

                            Gracz2zbite.push(oberyn);

                            alert(oberyn);

                            }

             

                            tura++;

                            move=false;

                            kolorplanszy();

                            }

              else{

                                          move=false;

                                          pozycjapoczatkowa[xu][yu]=uzytabierka;

                                          pozycjapoczatkowa[x][y]=oberyn;

                                          kolorplanszy();

              }

}

}

function sprawdzenieszacha(){

              szach=false;

for (let h = 0; h <= 7; h++) {

    for (let w = 0; w <= 7; w++) {

                            let fu = pozycjapoczatkowa[h][w];

                           

                            if(pozycjapoczatkowa[h][w]=="k" || pozycjapoczatkowa[h][w]=="K" ){

                                                        

for(let u=0;u<=7;u++){

newx = h + ruchydlaskoczka[u][0];

newy = w + ruchydlaskoczka[u][1];

              if(newx>=0 && newx<=7 && newy>=0 && newy<=7 && Figurybiale.includes(fu)!=true && pozycjapoczatkowa[newx][newy]=="s"){

             

                            return szach=true ;

              }

              if(newx>=0 && newx<=7 && newy>=0 && newy<=7 && Figuryczarne.includes(fu)!=true &&pozycjapoczatkowa[newx][newy]=="S" ){

 

                            return szach=true ;

              }

 

}

 

 

for(let u=0;u<=7;u++){

 

let n=1;

while(n<=7){

hewx=h+(n*kierunki[u][0]);

hewy=w+(n*kierunki[u][1]);

if(u<=3){

            if(hewx>=0 && hewx<=7 && hewy>=0 && hewy<=7 && pozycjapoczatkowa[hewx][hewy]!=""){

                                          if(Figuryczarne.includes(fu)==true){

                                          if(pozycjapoczatkowa[hewx][hewy]=="w"){

 

                                                         return szach=true;

                                          }

                                          else if( pozycjapoczatkowa[hewx][hewy]=="d"){

 

                                                         return szach=true;

                                          }

            else{

                break;

                }

           }

                               else{

                                          if(Figurybiale.includes(fu)==true){

                                          if(pozycjapoczatkowa[hewx][hewy]=="W"){

 

                                                         return szach=true;

                                          }

                                          else if(pozycjapoczatkowa[hewx][hewy]=="D"){

 

                                                         return szach;

                                          }

            else{

                break;

                }

                               }

                               }

}

}

else{

              if(hewx>=0 && hewx<=7 && hewy>=0 && hewy<=7 && pozycjapoczatkowa[hewx][hewy]!=""){

                                          if(Figuryczarne.includes(fu)==true){

                                          if(pozycjapoczatkowa[hewx][hewy]=="g"){

 

                                                         return szach=true;

                                          }

                                          else if( pozycjapoczatkowa[hewx][hewy]=="d"){

 

                                                         return szach=true;

                                          }

            else{

                break;

                }

           }

                               else{

                                          if(Figurybiale.includes(fu)==true){

                                          if(pozycjapoczatkowa[hewx][hewy]=="G"){

 

                                                         return szach=true;

                                          }

                                          else if(pozycjapoczatkowa[hewx][hewy]=="D"){

 

                                                         return szach=true;

                                          }

            else{

                break;

                }

                               }

                               }

          

}

}

n++;

}

 

}

 

for(let u=0;u<=1;u++){

 

newx=h+(ruchydlapionka[u][0]);

newy=w+(ruchydlapionka[u][1]);

if(newx>=0 && newx<=7 && newy>=0 && newy<=7 && pozycjapoczatkowa[newx][newy]=="P" && Figurybiale.includes(fu)==true){

 

return szach=true ;

}

}

 

 


              }                          

                                                        

                                                        

                                         

                            }

                                         

      }      

    }

             

function sprawdzeniebiciapola(t,f,kru){

              polepodbiem=false;

if(kru=="k"){                   

for(let u=0;u<=7;u++){

sewx = t + ruchydlaskoczka[u][0];

sewy = f + ruchydlaskoczka[u][1];

              if(sewx>=0 && sewx<=7 && sewy>=0 && sewy<=7 && pozycjapoczatkowa[sewx][sewy]=="S" ){

              polepodbiem=true;

              }

}

for(let u=0;u<=1;u++){

 

pewx=t+(ruchydlapionka[u][0]);

pewy=f+(ruchydlapionka[u][1]);

if(newx>=0 && newx<=7 && newy>=0 && newy<=7 && pozycjapoczatkowa[pewx][pewy]=="P"){

polepodbiem=true;

}

}

for(let u=0;u<=7;u++){

 

let n=1;

while(n<=7){

hewx=t+(n*kierunki[u][0]);

hewy=f+(n*kierunki[u][1]);

if(u<=3){

            if(hewx>=0 && hewx<=7 && hewy>=0 && hewy<=7 && pozycjapoczatkowa[hewx][hewy]!=""){

                                          if(pozycjapoczatkowa[hewx][hewy]=="W"){

                polepodbiem=true;

                                                         break;

                                          }

                                          else if( pozycjapoczatkowa[hewx][hewy]=="D"){

                polepodbiem=true;

                                                         break;

                                          }

            else{

                break;

                }

           }

             

 

}

else{

              if(hewx>=0 && hewx<=7 && hewy>=0 && hewy<=7 && pozycjapoczatkowa[hewx][hewy]!=""){

                                          if(pozycjapoczatkowa[hewx][hewy]=="G"){

                polepodbiem=true;

                                                         break;

                                          }

                                          else if( pozycjapoczatkowa[hewx][hewy]=="D"){

                polepodbiem=true;

                                                         break;

                                          }

            else{

                break;

                }

           }

}

n++;

}

 

}

}

 

if(kru=="K"){                   

for(let u=0;u<=7;u++){

sewx = t + ruchydlaskoczka[u][0];

sewy = f + ruchydlaskoczka[u][1];

              if(sewx>=0 && sewx<=7 && sewy>=0 && sewy<=7 && pozycjapoczatkowa[sewx][sewy]=="s" ){

              polepodbiem=true;

              }

 

}

for(let u=0;u<=1;u++){

 

pewx=t-(ruchydlapionka[u][0]);

pewy=f-(ruchydlapionka[u][1]);

if(newx>=0 && newx<=7 && newy>=0 && newy<=7 && pozycjapoczatkowa[pewx][pewy]=="p"){

polepodbiem=true;

}

}

for(let u=0;u<=7;u++){

 

let n=1;

while(n<=7){

hewx=t+(n*kierunki[u][0]);

hewy=f+(n*kierunki[u][1]);

if(u<=3){

            if(hewx>=0 && hewx<=7 && hewy>=0 && hewy<=7 && pozycjapoczatkowa[hewx][hewy]!=""){

                                          if(pozycjapoczatkowa[hewx][hewy]=="w"){

                polepodbiem=true;

                                                         break;

                                          }

                                          else if( pozycjapoczatkowa[hewx][hewy]=="d"){

                polepodbiem=true;

                                                         break;

                                          }

            else{

                break;

                }

           }

             

 

}

else{

              if(hewx>=0 && hewx<=7 && hewy>=0 && hewy<=7 && pozycjapoczatkowa[hewx][hewy]!=""){

                                          if(pozycjapoczatkowa[hewx][hewy]=="g"){

                polepodbiem=true;

                                                         break;

                                          }

                                          else if( pozycjapoczatkowa[hewx][hewy]=="d"){

                polepodbiem=true;

                                                         break;

                                          }

            else{

                break;

                }

           }

}

n++;

}

 

}

}

/*

 

for(let u=0;u<=1;u++){

 

newx=h-(ruchydlapionka[u][0]);

newy=w-(ruchydlapionka[u][1]);

if(newx>=0 && newx<=7 && newy>=0 && newy<=7 && pozycjapoczatkowa[newx][newy]=="p" && Figuryczarne.includes(kru)==true){

alert("szach p");

}

}

for(let u=0;u<=1;u++){

 

newx=h+(ruchydlapionka[u][0]);

newy=w+(ruchydlapionka[u][1]);

if(newx>=0 && newx<=7 && newy>=0 && newy<=7 && pozycjapoczatkowa[newx][newy]=="P" && Figurybiale.includes(kru)==true){

alert("szach P");

}

}

 

 


              }                          

                                                        

                                                        

                                         

                            }

                                         

      }       */

    }

             

function sprawdzeniemata(){

              mat=0;

sprawdzeniezagrozonegokrola();

alert(zagrozonykrol);

for (let v = 0; v <= 7; v++) {

    for (let l = 0; l <= 7; l++) {

                            let gu = pozycjapoczatkowa[v][l];

if(zagrozonykrol=="k"){

                            if(gu=="k"){

                            Ruchdlakrola(v,l,"k");

                            sprawdzeniekoloruzoltegonaplanszy();

                            if(zoltepole!=0){

                            kolorplanszy();

                            return mat=1;

                            }

                            }

                            if(gu=="s"){

                                          for(let u=0;u<=7;u++){

                                                         gewx = v + ruchydlaskoczka[u][0];

                                                         gewy = l + ruchydlaskoczka[u][1];

                                                        

 

                                                         if(gewx>=0 && gewx<=7 && gewy>=0 && gewy<=7){

                                                                      

                                                                        let oberysan=pozycjapoczatkowa[gewx][gewy];

                                                                       pozycjapoczatkowa[v][l]="";

                                                                       pozycjapoczatkowa[gewx][gewy]=gu;

                                                                       sprawdzenieszacha();

                                                                      

                                                                                     if(szach==false){

                                                                                     mat++;

                                                                                     dlaczego="skoczek";

                                                                                     }

 

                                                                         pozycjapoczatkowa[v][l]=gu;

                                                                         pozycjapoczatkowa[gewx][gewy]=oberysan;

                                                                         kolorplanszy();

                                                                       }

                                                                      

                                          }

                            }

if(gu=="d"){

              for(let uw=0;uw<=7;uw++){

              let na=1;

                            while(na<=7){

                            heewx=v+(na*kierunki[uw][0]);

                            heewy=l+(na*kierunki[uw][1]);

                            if(heewx>=0 && heewx<=7 && heewy>=0 && heewy<=7){

                                          if(pozycjapoczatkowa[heewx][heewy]=="" || Figuryczarne.includes(pozycjapoczatkowa[heewx][heewy])==true){

                                                         let oberysan=pozycjapoczatkowa[heewx][heewy];

                                                         pozycjapoczatkowa[v][l]="";

                                                         pozycjapoczatkowa[heewx][heewy]=gu;

                                                         sprawdzenieszacha();

                                                                      

                                                                       if(szach==false){

                                                                                     mat++;

                                                                                       dlaczego="dama";

                                                                                     }

 

                                                         pozycjapoczatkowa[v][l]=gu;

                                                        pozycjapoczatkowa[heewx][heewy]=oberysan;

                                                         kolorplanszy();

            }

            else{    

                                                        if(Figuryczarne.includes(pozycjapoczatkowa[heewx][heewy])==true && pozycjapoczatkowa[heewx-kierunki[uw][0]][heewy-kierunki[uw][1]]==""){

                                                                       let oberysan=pozycjapoczatkowa[heewx][heewy];

                                                                                     pozycjapoczatkowa[v][l]="";

                                                                                     pozycjapoczatkowa[heewx][heewy]=gu;

                                                                                     sprawdzenieszacha();

                                                                                    

                                                                                     if(szach==false){

                                                                                                   mat++;

                                                                                                     dlaczego="dama";

                                                                                                   }

 

                                                                                       pozycjapoczatkowa[v][l]=gu;

                                                                                       pozycjapoczatkowa[heewx][heewy]=oberysan;

                                                                                       kolorplanszy();

                                                                                       break;

                                                         }                                        

                                                         else{

                                                                       break;

                                                         }

                                          }

                            }

                            na++;   

                            }

 

 

}

}

if(gu=="w"){

              for(let uw=0;uw<=3;uw++){

              let na=1;

                            while(na<=7){

                            heewx=v+(na*kierunki[uw][0]);

                            heewy=l+(na*kierunki[uw][1]);

                            if(heewx>=0 && heewx<=7 && heewy>=0 && heewy<=7){

                                          if(pozycjapoczatkowa[heewx][heewy]=="" || Figuryczarne.includes(pozycjapoczatkowa[heewx][heewy])==true){

                                                         let oberysan=pozycjapoczatkowa[heewx][heewy];

                                                         pozycjapoczatkowa[v][l]="";

                                                         pozycjapoczatkowa[heewx][heewy]=gu;

                                                         sprawdzenieszacha();

                                                                      

                                                                       if(szach==false){

                                                                                     mat++;

                                                                                     }

 

                                                         pozycjapoczatkowa[v][l]=gu;

                                                        pozycjapoczatkowa[heewx][heewy]=oberysan;

                                                         kolorplanszy();

            }

            else{    

                                                        if(Figuryczarne.includes(pozycjapoczatkowa[heewx][heewy])==true && pozycjapoczatkowa[heewx-kierunki[uw][0]][heewy-kierunki[uw][1]]==""){

                                                                       let oberysan=pozycjapoczatkowa[heewx][heewy];

                                                                                     pozycjapoczatkowa[v][l]="";

                                                                                     pozycjapoczatkowa[heewx][heewy]=gu;

                                                                                     sprawdzenieszacha();

                                                                                    

                                                                                     if(szach==false){

                                                                                                   mat++;

                                                                                                   }

 

                                                                                       pozycjapoczatkowa[v][l]=gu;

                                                                                       pozycjapoczatkowa[heewx][heewy]=oberysan;

                                                                                       kolorplanszy();

                                                                                       break;

                                                         }                                        

                                                         else{

                                                                       break;

                                                         }

                                          }

                            }

                            na++;   

                            }

 

 

}

}

if(gu=="g"){

              for(let uw=4;uw<=7;uw++){

              let na=1;

                            while(na<=7){

                            heewx=v+(na*kierunki[uw][0]);

                            heewy=l+(na*kierunki[uw][1]);

                            if(heewx>=0 && heewx<=7 && heewy>=0 && heewy<=7){

                                          if(pozycjapoczatkowa[heewx][heewy]=="" || Figuryczarne.includes(pozycjapoczatkowa[heewx][heewy])==true){

                                                         let oberysan=pozycjapoczatkowa[heewx][heewy];

                                                         pozycjapoczatkowa[v][l]="";

                                                         pozycjapoczatkowa[heewx][heewy]=gu;

                                                         sprawdzenieszacha();

                                                                      

                                                                       if(szach==false){

                                                                                     mat++;

                                                                                     }

 

                                                         pozycjapoczatkowa[v][l]=gu;

                                                        pozycjapoczatkowa[heewx][heewy]=oberysan;

                                                         kolorplanszy();

            }

            else{    

                                                        if(Figuryczarne.includes(pozycjapoczatkowa[heewx][heewy])==true && pozycjapoczatkowa[heewx-kierunki[uw][0]][heewy-kierunki[uw][1]]==""){

                                                                       let oberysan=pozycjapoczatkowa[heewx][heewy];

                                                                                     pozycjapoczatkowa[v][l]="";

                                                                                     pozycjapoczatkowa[heewx][heewy]=gu;

                                                                                     sprawdzenieszacha();

                                                                                    

                                                                                     if(szach==false){

                                                                                                   mat++;

                                                                                                   }

 

                                                                                       pozycjapoczatkowa[v][l]=gu;

                                                                                       pozycjapoczatkowa[heewx][heewy]=oberysan;

                                                                                       kolorplanszy();

                                                                                       break;

                                                         }                                        

                                                         else{

                                                                       break;

                                                         }

                                          }

                            }

                            na++;   

                            }

 

 

}

}

if(gu=="p"){

for(let u=0;u<=1;u++){

 

pewx=v+(ruchydlapionka[u][0]);

pewy=l+(ruchydlapionka[u][1]);

if(pewx>=0 && pewx<=7 && pewy>=0 && pewy<=7 && pozycjapoczatkowa[pewx][pewy]!="" && Figuryczarne.includes(pozycjapoczatkowa[pewx][pewy])==true){

 

let oberysan=pozycjapoczatkowa[pewx][pewy];

                                                                                     pozycjapoczatkowa[v][l]="";

                                                                                     pozycjapoczatkowa[pewx][pewy]=gu;

                                                                                     sprawdzenieszacha();

                                                                                    

                                                                                     if(szach==false){

                                                                                                   mat++;

                                                                                                     dlaczego="pionek";

                                                                                                   }

 

                                                                                       pozycjapoczatkowa[v][l]=gu;

                                                                                       pozycjapoczatkowa[pewx][pewy]=oberysan;

                                                                                       kolorplanszy();

}

}

}            

}                                                                                                                             

              if(zagrozonykrol=="K"){

                            if(gu=="K"){

                            Ruchdlakrola(v,l,"K");

                            sprawdzeniekoloruzoltegonaplanszy();

                            if(zoltepole!=0){

                            kolorplanszy();

                            return mat=1;

                            }

                            }

                            if(gu=="S"){

                                          for(let u=0;u<=7;u++){

                                                         gewx = v + ruchydlaskoczka[u][0];

                                                         gewy = l + ruchydlaskoczka[u][1];

                                                        

 

                                                         if(gewx>=0 && gewx<=7 && gewy>=0 && gewy<=7){

                                                                      

                                                                        let oberysan=pozycjapoczatkowa[gewx][gewy];

                                                                       pozycjapoczatkowa[v][l]="";

                                                                       pozycjapoczatkowa[gewx][gewy]=gu;

                                                                       sprawdzenieszacha();

                                                                      

                                                                       if(szach==false){

                                                                                     mat++;

                                                                                     }

 

                                                                         pozycjapoczatkowa[v][l]=gu;

                                                                         pozycjapoczatkowa[gewx][gewy]=oberysan;

                                                                         kolorplanszy();

                                                                       }

                                                                      

                                          }

                            }

             

if(gu=="D"){

              for(let uw=0;uw<=7;uw++){

              let na=1;

                            while(na<=7){

                            heewx=v+(na*kierunki[uw][0]);

                            heewy=l+(na*kierunki[uw][1]);

                            if(heewx>=0 && heewx<=7 && heewy>=0 && heewy<=7){

                                          if(pozycjapoczatkowa[heewx][heewy]=="" || Figurybiale.includes(pozycjapoczatkowa[heewx][heewy])==true){

                                                         let oberysan=pozycjapoczatkowa[heewx][heewy];

                                                         pozycjapoczatkowa[v][l]="";

                                                         pozycjapoczatkowa[heewx][heewy]=gu;

                                                         sprawdzenieszacha();

                                                                      

                                                                       if(szach==false){

                                                                                     mat++;

                                                                                     }

 

                                                         pozycjapoczatkowa[v][l]=gu;

                                                        pozycjapoczatkowa[heewx][heewy]=oberysan;

                                                         kolorplanszy();

            }

            else{    

                                                        if(Figurybiale.includes(pozycjapoczatkowa[heewx][heewy])==true && pozycjapoczatkowa[heewx-kierunki[uw][0]][heewy-kierunki[uw][1]]==""){

                                                                       let oberysan=pozycjapoczatkowa[heewx][heewy];

                                                                                     pozycjapoczatkowa[v][l]="";

                                                                                     pozycjapoczatkowa[heewx][heewy]=gu;

                                                                                     sprawdzenieszacha();

                                                                                    

                                                                                     if(szach==false){

                                                                                                   mat++;

                                                                                                   }

 

                                                                                       pozycjapoczatkowa[v][l]=gu;

                                                                                      pozycjapoczatkowa[heewx][heewy]=oberysan;

                                                                                       kolorplanszy();

                                                                                       break;

                                                         }                                        

                                                         else{

                                                                       break;

                                                         }

                                          }

                            }

                            na++;   

                            }

 

 

}

}

if(gu=="W"){

              for(let uw=0;uw<=3;uw++){

              let na=1;

                            while(na<=7){

                            heewx=v+(na*kierunki[uw][0]);

                            heewy=l+(na*kierunki[uw][1]);

                            if(heewx>=0 && heewx<=7 && heewy>=0 && heewy<=7){

                                          if(pozycjapoczatkowa[heewx][heewy]=="" || Figurybiale.includes(pozycjapoczatkowa[heewx][heewy])==true){

                                                         let oberysan=pozycjapoczatkowa[heewx][heewy];

                                                         pozycjapoczatkowa[v][l]="";

                                                         pozycjapoczatkowa[heewx][heewy]=gu;

                                                         sprawdzenieszacha();

                                                                      

                                                                       if(szach==false){

                                                                                     mat++;

                                                                                     }

 

                                                         pozycjapoczatkowa[v][l]=gu;

                                                        pozycjapoczatkowa[heewx][heewy]=oberysan;

                                                         kolorplanszy();

            }

            else{    

                                                        if(Figurybiale.includes(pozycjapoczatkowa[heewx][heewy])==true && pozycjapoczatkowa[heewx-kierunki[uw][0]][heewy-kierunki[uw][1]]==""){

                                                                       let oberysan=pozycjapoczatkowa[heewx][heewy];

                                                                                     pozycjapoczatkowa[v][l]="";

                                                                                     pozycjapoczatkowa[heewx][heewy]=gu;

                                                                                     sprawdzenieszacha();

                                                                                    

                                                                                     if(szach==false){

                                                                                                   mat++;

                                                                                                   }

 

                                                                                       pozycjapoczatkowa[v][l]=gu;

                                                                                       pozycjapoczatkowa[heewx][heewy]=oberysan;

                                                                                       kolorplanszy();

                                                                                       break;

                                                         }                                        

                                                         else{

                                                                       break;

                                                         }

                                          }

                            }

                            na++;   

                            }

 

 

}

}

if(gu=="G"){

              for(let uw=4;uw<=7;uw++){

              let na=1;

                            while(na<=7){

                            heewx=v+(na*kierunki[uw][0]);

                            heewy=l+(na*kierunki[uw][1]);

                            if(heewx>=0 && heewx<=7 && heewy>=0 && heewy<=7){

                                          if(pozycjapoczatkowa[heewx][heewy]=="" || Figurybiale.includes(pozycjapoczatkowa[heewx][heewy])==true){

                                                         let oberysan=pozycjapoczatkowa[heewx][heewy];

                                                         pozycjapoczatkowa[v][l]="";

                                                         pozycjapoczatkowa[heewx][heewy]=gu;

                                                         sprawdzenieszacha();

                                                                      

                                                                       if(szach==false){

                                                                                     mat++;

                                                                                     }

 

                                                         pozycjapoczatkowa[v][l]=gu;

                                                        pozycjapoczatkowa[heewx][heewy]=oberysan;

                                                         kolorplanszy();

            }

            else{    

                                                        if(Figurybiale.includes(pozycjapoczatkowa[heewx][heewy])==true && pozycjapoczatkowa[heewx-kierunki[uw][0]][heewy-kierunki[uw][1]]==""){

                                                                       let oberysan=pozycjapoczatkowa[heewx][heewy];

                                                                                     pozycjapoczatkowa[v][l]="";

                                                                                     pozycjapoczatkowa[heewx][heewy]=gu;

                                                                                     sprawdzenieszacha();

                                                                                    

                                                                                     if(szach==false){

                                                                                                   mat++;

                                                                                                   }

 

                                                                                       pozycjapoczatkowa[v][l]=gu;

                                                                                       pozycjapoczatkowa[heewx][heewy]=oberysan;

                                                                                       kolorplanszy();

                                                                                       break;

                                                         }                                        

                                                         else{

                                                                       break;

                                                         }

                                          }

                            }

                            na++;   

                            }

 

 

}

}

if(gu=="P"){

for(let u=0;u<=1;u++){

 

pewx=v+(ruchydlapionka[u][0]);

pewy=l+(ruchydlapionka[u][1]);

if(pewx>=0 && pewx<=7 && pewy>=0 && pewy<=7 && pozycjapoczatkowa[pewx][pewy]!="" && Figurybiale.includes(pozycjapoczatkowa[pewx][pewy])==true){

 

let oberysan=pozycjapoczatkowa[pewx][pewy];

                                                                                     pozycjapoczatkowa[v][l]="";

                                                                                     pozycjapoczatkowa[pewx][pewy]=gu;

                                                                                     sprawdzenieszacha();

                                                                                    

                                                                                     if(szach==false){

                                                                                                   mat++;

                                                                                                   }

 

                                                                                       pozycjapoczatkowa[v][l]=gu;

                                                                                       pozycjapoczatkowa[pewx][pewy]=oberysan;

                                                                                       kolorplanszy();

}

}

}            

 

}

}

}

}

function sprawdzeniezagrozonegokrola(){

              szach=false;

for (let h = 0; h <= 7; h++) {

    for (let w = 0; w <= 7;w++) {

                           

                            if(pozycjapoczatkowa[h][w]=="k" ){

                                          sprawdzeniebiciapola(h,w,"k");

                                          if(polepodbiem==true){

                                                         zagrozonykrol="k";

                                          }

                            }

                            if(pozycjapoczatkowa[h][w]=="K" ){

                                          sprawdzeniebiciapola(h,w,"K");

                                          if(polepodbiem==true){

                                                         zagrozonykrol="K";

                                          }

                            }

              }

}

}

 

function sprawdzeniekoloruzoltegonaplanszy(){

              zoltepole=0;

for (let h = 0; h <= 7; h++) {

    for (let w = 0; w <= 7;w++) {

                            if(document.getElementById(pola[h][w]).style.backgroundColor=="yellow" ){

                                                         zoltepole++;

                                          }

                            }

              }

}

 function Ruchdlaskoczka(sx,sy,bierka){         

 

 

     

for(let u=0;u<=7;u++){

newx = sx + ruchydlaskoczka[u][0];

newy = sy + ruchydlaskoczka[u][1];

if(bierka=="s"){

              if(newx>=0 && newx<=7 && newy>=0 && newy<=7 && Figurybiale.includes(pozycjapoczatkowa[newx][newy])!=true){

              document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

              }

}

if(bierka=="S"){

if(newx>=0 && newx<=7 && newy>=0 && newy<=7 && Figuryczarne.includes(pozycjapoczatkowa[newx][newy])!=true){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

}

}

}

}

function Ruchdlawiezy(bierka){

 

 

for(let u=0;u<=3;u++){

 

let n=1;

while(n<=7){

newx=x+(n*kierunki[u][0]);

newy=y+(n*kierunki[u][1]);

if(bierka=="w"){

if(newx>=0 && newx<=7 && newy>=0 && newy<=7){

            if(pozycjapoczatkowa[newx][newy]==""){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

            }

            else{

                if(Figuryczarne.includes(pozycjapoczatkowa[newx][newy])==true && pozycjapoczatkowa[newx-kierunki[u][0]][newy-kierunki[u][1]]==""){

                    document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

break;

                }

else{

break;

}

           }

 

}

}

if(bierka=="W"){

if(newx>=0 && newx<=7 && newy>=0 && newy<=7){

if(pozycjapoczatkowa[newx][newy]==""){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

}

else{

if(Figurybiale.includes(pozycjapoczatkowa[newx][newy])==true && pozycjapoczatkowa[newx-kierunki[u][0]][newy-kierunki[u][1]]==""){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

break;

}

else{

break;

}

}

}

}

n++;

}

 

}

}

function Ruchdlagonca(bierka){

 

 

for(let u=4;u<=7;u++){

 

let n=1;

while(n<=7){

newx=x+(n*kierunki[u][0]);

newy=y+(n*kierunki[u][1]);

if(bierka=="g"){

if(newx>=0 && newx<=7 && newy>=0 && newy<=7){

            if(pozycjapoczatkowa[newx][newy]==""){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

            }

            else{

                if(Figuryczarne.includes(pozycjapoczatkowa[newx][newy])==true && pozycjapoczatkowa[newx-kierunki[u][0]][newy-kierunki[u][1]]==""){

                    document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

break;

                }

else{

break;

}

           }

 

}

}

if(bierka=="G"){

if(newx>=0 && newx<=7 && newy>=0 && newy<=7){

if(pozycjapoczatkowa[newx][newy]==""){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

}

else{

if(Figurybiale.includes(pozycjapoczatkowa[newx][newy])==true && pozycjapoczatkowa[newx-kierunki[u][0]][newy-kierunki[u][1]]==""){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

break;

}

else{

break;

}

}

}

}

n++;

}

 

}

}

function Ruchdladamy(bierka){

 

 

for(let u=0;u<=7;u++){

 

let n=1;

while(n<=7){

newx=x+(n*kierunki[u][0]);

newy=y+(n*kierunki[u][1]);

if(bierka=="d"){

if(newx>=0 && newx<=7 && newy>=0 && newy<=7){

            if(pozycjapoczatkowa[newx][newy]==""){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

            }

            else{

                if(Figuryczarne.includes(pozycjapoczatkowa[newx][newy])==true && pozycjapoczatkowa[newx-kierunki[u][0]][newy-kierunki[u][1]]==""){

                    document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

break;

                }

else{

break;

}

           }

 

}

}

if(bierka=="D"){

if(newx>=0 && newx<=7 && newy>=0 && newy<=7){

if(pozycjapoczatkowa[newx][newy]==""){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

}

else{

if(Figurybiale.includes(pozycjapoczatkowa[newx][newy])==true && pozycjapoczatkowa[newx-kierunki[u][0]][newy-kierunki[u][1]]==""){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

break;

}

else{

break;

}

}

}

}

n++;

}

 

}

}

function Ruchdlakrola(kx,ky,bierka){

 

 

for(let u=0;u<=7;u++){

 

let n=1;

while(n<=1){

newx=kx+(n*kierunki[u][0]);

newy=ky+(n*kierunki[u][1]);

if(bierka=="k"){

if(newx>=0 && newx<=7 && newy>=0 && newy<=7){

            if(pozycjapoczatkowa[newx][newy]==""){

sprawdzeniebiciapola(newx,newy,bierka);

              if(polepodbiem==false){

              document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

              }

            }

            else{

                if(Figuryczarne.includes(pozycjapoczatkowa[newx][newy])==true){

                    document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

break;

                }

else{

break;

}

           }

 

}

}

if(bierka=="K"){

if(newx>=0 && newx<=7 && newy>=0 && newy<=7){

if(pozycjapoczatkowa[newx][newy]==""){

sprawdzeniebiciapola(newx,newy,bierka);

              if(polepodbiem==false){

              document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

              }

}

else{

if(Figurybiale.includes(pozycjapoczatkowa[newx][newy])==true){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

break;

}

else{

break;

}

}

}

}

n++;

}

 

}

}

 

function Ruchdlapionka(bierka){

 

 

for(let u=0;u<=3;u++){

 

if(bierka=="p"){

newx=x+(ruchydlapionka[u][0]);

newy=y+(ruchydlapionka[u][1]);

if(newx>=0 && newx<=7 && newy>=0 && newy<=7){

            if(pozycjapoczatkowa[newx][newy]=="" && u==2){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

            }

if(pozycjapoczatkowa[newx][newy]=="" && u==3 && x==1 ){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

            }

            if(u==0 && Figuryczarne.includes(pozycjapoczatkowa[newx][newy])==true){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

            }

if(u==1 && Figuryczarne.includes(pozycjapoczatkowa[newx][newy])==true){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

            }

 

}

}

if(bierka=="P"){

newx=x-(ruchydlapionka[u][0]);

newy=y-(ruchydlapionka[u][1]);

if(newx>=0 && newx<=7 && newy>=0 && newy<=7){

            if(pozycjapoczatkowa[newx][newy]=="" && u== 2){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

            }

if(pozycjapoczatkowa[newx][newy]=="" && u== 3 && x==6){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

            }

            if(u==0 && Figurybiale.includes(pozycjapoczatkowa[newx][newy])==true){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

            }

if(u==1 && Figurybiale.includes(pozycjapoczatkowa[newx][newy])==true){

document.getElementById(pola[newx][newy]).style.backgroundColor="yellow";

            }

 

}

}

 

}

}

 

function transformacjapionka(zbiciee){

              var wyb_diva="";

              for (let l = 0; l <= 3; l++) {

                            var kafelek="select"+l;

      wyb_diva = wyb_diva + '<div class="pole" onclick="wybor('+l+')" id="' + kafelek + '"></div>';

                

    }

  

  document.getElementById("menu3").innerHTML = wyb_diva;

  document.getElementById("menu2").innerHTML= "Choooose the path";

  document.getElementById("select0").innerHTML= "<img src=\"figury/d.png\"/>";

  document.getElementById("select1").innerHTML= "<img src=\"figury/w.png\"/>";

  document.getElementById("select2").innerHTML= "<img src=\"figury/s.png\"/>";

  document.getElementById("select3").innerHTML= "<img src=\"figury/g.png\"/>";

              wybor(l,zbiciee);

                                                                                    

}

function wybor(hah,heh){

              pozycjapoczatkowa[xu][yu]="";

              var biciepionkatrans=pozycjapoczatkowa[x][y];

              if(uzytabierka=="p"){

              if(hah==0){

                            pozycjapoczatkowa[x][y]="d";

              }

              else if(hah==1){

                            pozycjapoczatkowa[x][y]="w";

              }

              else if(hah==2){

                            pozycjapoczatkowa[x][y]="s";

              }

              else if(hah==3){

                            pozycjapoczatkowa[x][y]="g";

              }

             

              if(heh!=1){

                            if(biciepionkatrans==""){

                                          pozycjapoczatkowa[xu][yu]="";

                                          tura++;

                                          move=false;

                                          kolorplanszy();

                            }

                            else{

                            if(Figurybiale.includes(biciepionkatrans)==true){

                                          Gracz1zbite.push(biciepionkatrans);

                            }

                            else{

                                          Gracz2zbite.push(biciepionkatrans);

                            }

                            pozycjapoczatkowa[xu][yu]="";

                            tura++;

                            move=false;

                            document.getElementById("menu1").innerHTML = String(Gracz1zbite);

                            document.getElementById("menu4").innerHTML = String(Gracz2zbite);

                            kolorplanszy();

              }

              }

              if(pozycjapoczatkowa[x][y]!="p"){

                            document.getElementById("okno1").innerHTML.clear;

              }

              }

              else{

                            if(hah==0){

                            pozycjapoczatkowa[x][y]="D";

              }

              else if(hah==1){

                            pozycjapoczatkowa[x][y]="W";

              }

              else if(hah==2){

                            pozycjapoczatkowa[x][y]="S";

              }

              else if(hah==3){

                            pozycjapoczatkowa[x][y]="G";

              }

              tura++;

              if(heh!=1){

                            if(biciepionkatrans==""){

                                          pozycjapoczatkowa[xu][yu]="";

                                          tura++;

                                          move=false;

                                          kolorplanszy();

                            }

                            else{

                            if(Figurybiale.includes(biciepionkatrans)==true){

                                          Gracz1zbite.push(biciepionkatrans);

                            }

                            else{

                                          Gracz2zbite.push(biciepionkatrans);

                            }

                            pozycjapoczatkowa[xu][yu]="";

                            tura++;

                            move=false;

                            document.getElementById("menu1").innerHTML = String(Gracz1zbite);

                            document.getElementById("menu4").innerHTML = String(Gracz2zbite);

                            kolorplanszy();

              }

              }

              }

              if(hah<=3){

               document.getElementById("menu2").innerHTML="";            

              document.getElementById("menu3").innerHTML="";

              }

}

function menuboczne(){

              var menu_diva="";

              for (let i = 0; i <= 5; i++) {

                            var kafeleki ="menu"+i;

      menu_diva = menu_diva + '<div class="button1" id="' + kafeleki + '"></div>';

                 menu_diva = menu_diva + '<div style="clear:both"></div>';

    }

  

  document.getElementById("okno1").innerHTML = menu_diva;

  document.getElementById("menu0").innerHTML = "Gracz1";

  document.getElementById("menu1").innerHTML = String(Gracz1zbite);

  document.getElementById("menu4").innerHTML = String(Gracz2zbite);

  document.getElementById("menu5").innerHTML = "Gracz2";

 

}
        
		function dostepnyruch(bierka){

              sprawdzenieszacha();

              if(bierka=="s" || bierka=="S"){

                            Ruchdlaskoczka(x,y,bierka);

              }

              else if(bierka=="w" || bierka=="W"){

                            Ruchdlawiezy(bierka);

              }

              else if(bierka=="g" || bierka=="G"){

                           Ruchdlagonca(bierka);

              }

              else if(bierka=="d" || bierka=="D"){

                          Ruchdladamy(bierka);

              }

              else if(bierka=="k" || bierka=="K"){

                           Ruchdlakrola(bierka);

             }

              else if(bierka=="p" || bierka=="P"){

                            Ruchdlapionka(bierka);

              }

                                         

}
