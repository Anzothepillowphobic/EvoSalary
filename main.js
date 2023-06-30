const A = document.getElementById('working_hours'); //working hours
const B = document.getElementById('sgc');           //sgc
const C = document.getElementById('reaction_time'); //reaction time
const D = document.getElementById('pa');            //pa
const E = document.getElementById('game_speed');    //game speed
const F = document.getElementById('button');        //button
const G = document.getElementById('stage');         //stage
const H = document.getElementById('shift');         //shift
const I = document.getElementById('roulette_cooperation')//roulette cooperation
const out1 = document.getElementById('output');

F.addEventListener('click', (ev)=>{
    
    const working_hours = parseFloat(A.value);
    const sgc = parseInt(B.value);
    const reaction_time = parseFloat(C.value);
    const pa = parseFloat(D.value);
    const game_speed = parseFloat(E.value);
    const roulette_cooperation = parseFloat(I.value);
    const button = F.value;
    const stage = G.value;
    const shift = H.value;
    let total_gross = 0;
    let total = 0;
    

    function stage1_morning_minimum(){
        let anhr=7.1
        if(pa>=85){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         if(sgc>=1000){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         if(reaction_time>=65){
             anhr = Math.round((anhr+0.2)*100)/100
         }
         if(game_speed>=70){
             anhr = Math.round((anhr+0.4)*100)/100
         }
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        //alert(anhr)
        //alert(working_hours)
        //alert(total_gross)
        //alert(total)
        ev.preventDefault();
        out1.textContent=total;

         
    }
    function stage1_morning_avarage(){
        let anhr=7.1
        if(pa>=91){
            anhr = Math.round((anhr+0.9)*100)/100
        }
        else if(pa>=85 && pa<91){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(sgc>=1500){
            anhr = Math.round((anhr+0.9)*100)/100
        }
        else if(sgc>=1000 && sgc<1500){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(reaction_time>=70){
             anhr = Math.round((anhr+0.4)*100)/100
        }
        else if(reaction_time>=65 && reaction_time<70){
            anhr = Math.round((anhr+0.2)*100)/100
       }
       
        if(game_speed>=75){
             anhr = Math.round((anhr+0.6)*100)/100
        }
        else if(game_speed>=70 && game_speed<75){
             anhr = Math.round((anhr+0.4)*100)/100
        }
    
        if(roulette_cooperation>=85 && roulette_cooperation<95){
            anhr = Math.round((anhr+0.2)*100)/100
        }
    
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        
        ev.preventDefault();
        out1.textContent=total;
    }
    function stage1_morning_overachiever(){
        let anhr=7.1
        if(pa>=97){
            anhr = Math.round((anhr+1.2)*100)/100
         }
         else if(pa>=91 && pa<97){
            anhr = Math.round((anhr+0.9)*100)/100
         }
         else if(pa>=85 && pa<91){
            anhr = Math.round((anhr+0.6)*100)/100
         }
    
         if(sgc>=2000){
            anhr = Math.round((anhr+1.2)*100)/100
         }
         else if(sgc>=1000 && sgc<1500){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         else if(sgc>=1500 && sgc<2000){
            anhr = Math.round((anhr+0.9)*100)/100
         }
    
         if(reaction_time>=80){
             anhr = Math.round((anhr+0.6)*100)/100
         }
         else if(reaction_time>=70 && reaction_time<80){
            anhr = Math.round((anhr+0.4)*100)/100
        }
    
        else if(reaction_time>=65 && reaction_time<70){
            anhr = Math.round((anhr+0.2)*100)/100
        }
    
         if(game_speed>=85){
             anhr = Math.round((anhr+0.8)*100)/100
         }
         else if(game_speed>=70 && game_speed<75){
            anhr = Math.round((anhr+0.4)*100)/100
         }
         else if(game_speed>=75 && game_speed<85){
            anhr = Math.round((anhr+0.6)*100)/100
         }
    
        if(roulette_cooperation>=85 && roulette_cooperation<95){
            anhr = Math.round((anhr+0.2)*100)/100    
        }
        else if(roulette_cooperation>=95){
            anhr = Math.round((anhr+0.4)*100)/100
        }
    
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        
        ev.preventDefault();
        out1.textContent=total;
        
    }
    
    function stage1_night_minimum(){
        let anhr=10.65
        if(pa>=85){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         if(sgc>=1000){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         if(reaction_time>=65){
             anhr = Math.round((anhr+0.2)*100)/100
         }
         if(game_speed>=70){
             anhr = Math.round((anhr+0.4)*100)/100
         }
         total_gross = Math.round((anhr*working_hours)*100/100)
         total = Math.round((total_gross*0.784)*100)/100
         ev.preventDefault();
         out1.textContent=total;
    }
    function stage1_night_avarage(){
        let anhr=10.65
        if(pa>=91){
            anhr = Math.round((anhr+0.9)*100)/100
        }
        else if(pa>=85 && pa<91){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(sgc>=1500){
            anhr = Math.round((anhr+0.9)*100)/100
        }
        else if(sgc>=1000 && sgc<1500){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(reaction_time>=70){
             anhr = Math.round((anhr+0.4)*100)/100
        }
        else if(reaction_time>=65 && reaction_time<70){
            anhr = Math.round((anhr+0.2)*100)/100
       }
       
        if(game_speed>=75){
             anhr = Math.round((anhr+0.6)*100)/100
        }
        else if(game_speed>=70 && game_speed<75){
             anhr = Math.round((anhr+0.4)*100)/100
        }
    
        if(roulette_cooperation>=85 && roulette_cooperation<95){
            anhr = Math.round((anhr+0.2)*100)/100
        }
    
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        ev.preventDefault();
        out1.textContent=total;
    }
    function stage1_night_overachiever(){
        let anhr=10.65
        if(pa>=97){
            anhr = Math.round((anhr+1.2)*100)/100
         }
         else if(pa>=91 && pa<97){
            anhr = Math.round((anhr+0.9)*100)/100
         }
         else if(pa>=85 && pa<91){
            anhr = Math.round((anhr+0.6)*100)/100
         }
    
         if(sgc>=2000){
            anhr = Math.round((anhr+1.2)*100)/100
         }
         else if(sgc>=1000 && sgc<1500){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         else if(sgc>=1500 && sgc<2000){
            anhr = Math.round((anhr+0.9)*100)/100
         }
    
         if(reaction_time>=80){
             anhr = Math.round((anhr+0.6)*100)/100
         }
         else if(reaction_time>=70 && reaction_time<80){
            anhr = Math.round((anhr+0.4)*100)/100
        }
    
        else if(reaction_time>=65 && reaction_time<70){
            anhr = Math.round((anhr+0.2)*100)/100
        }
    
         if(game_speed>=85){
             anhr = Math.round((anhr+0.8)*100)/100
         }
         else if(game_speed>=70 && game_speed<75){
            anhr = Math.round((anhr+0.4)*100)/100
         }
         else if(game_speed>=75 && game_speed<85){
            anhr = Math.round((anhr+0.6)*100)/100
         }
    
        if(roulette_cooperation>=85 && roulette_cooperation<95){
            anhr = Math.round((anhr+0.2)*100)/100    
        }
        else if(roulette_cooperation>=95){
            anhr = Math.round((anhr+0.4)*100)/100
        }
    
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        ev.preventDefault();
        out1.textContent=total;
    }
    
    function stage2_morning_minimum(){
        let anhr=7.6
        if(pa>=85){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         if(sgc>=1000){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         if(reaction_time>=65){
             anhr = Math.round((anhr+0.2)*100)/100
         }
         if(game_speed>=70){
             anhr = Math.round((anhr+0.4)*100)/100
         }
         total_gross = Math.round((anhr*working_hours)*100/100)
         total = Math.round((total_gross*0.784)*100)/100
         ev.preventDefault();
         out1.textContent=total;
    }
    function stage2_morning_avarage(){
        let anhr=7.6
        if(pa>=91){
            anhr = Math.round((anhr+0.9)*100)/100
        }
        else if(pa>=85 && pa<91){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(sgc>=1500){
            anhr = Math.round((anhr+0.9)*100)/100
        }
        else if(sgc>=1000 && sgc<1500){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(reaction_time>=70){
             anhr = Math.round((anhr+0.4)*100)/100
        }
        else if(reaction_time>=65 && reaction_time<70){
            anhr = Math.round((anhr+0.2)*100)/100
       }
       
        if(game_speed>=75){
             anhr = Math.round((anhr+0.6)*100)/100
        }
        else if(game_speed>=70 && game_speed<75){
             anhr = Math.round((anhr+0.4)*100)/100
        }
    
        if(roulette_cooperation>=85 && roulette_cooperation<95){
            anhr = Math.round((anhr+0.2)*100)/100
        }
    
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        ev.preventDefault();
        out1.textContent=total;
    }
    function stage2_morning_overachiever(){
        let anhr=7.6
        if(pa>=97){
            anhr = Math.round((anhr+1.2)*100)/100
         }
         else if(pa>=91 && pa<97){
            anhr = Math.round((anhr+0.9)*100)/100
         }
         else if(pa>=85 && pa<91){
            anhr = Math.round((anhr+0.6)*100)/100
         }
    
         if(sgc>=2000){
            anhr = Math.round((anhr+1.2)*100)/100
         }
         else if(sgc>=1000 && sgc<1500){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         else if(sgc>=1500 && sgc<2000){
            anhr = Math.round((anhr+0.9)*100)/100
         }
    
         if(reaction_time>=80){
             anhr = Math.round((anhr+0.6)*100)/100
         }
         else if(reaction_time>=70 && reaction_time<80){
            anhr = Math.round((anhr+0.4)*100)/100
        }
    
        else if(reaction_time>=65 && reaction_time<70){
            anhr = Math.round((anhr+0.2)*100)/100
        }
    
         if(game_speed>=85){
             anhr = Math.round((anhr+0.8)*100)/100
         }
         else if(game_speed>=70 && game_speed<75){
            anhr = Math.round((anhr+0.4)*100)/100
         }
         else if(game_speed>=75 && game_speed<85){
            anhr = Math.round((anhr+0.6)*100)/100
         }
    
        if(roulette_cooperation>=85 && roulette_cooperation<95){
            anhr = Math.round((anhr+0.2)*100)/100    
        }
        else if(roulette_cooperation>=95){
            anhr = Math.round((anhr+0.4)*100)/100
        }
    
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        ev.preventDefault();
        out1.textContent=total;
    }
    
    function stage2_night_minimum(){
        let anhr=11.15
        if(pa>=85){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         if(sgc>=1000){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         if(reaction_time>=65){
             anhr = Math.round((anhr+0.2)*100)/100
         }
         if(game_speed>=70){
             anhr = Math.round((anhr+0.4)*100)/100
         }
         total_gross = Math.round((anhr*working_hours)*100/100)
         total = Math.round((total_gross*0.784)*100)/100
         ev.preventDefault();
         out1.textContent=total;
    }
    function stage2_night_avarage(){
        let anhr=11.15
        if(pa>=91){
            anhr = Math.round((anhr+0.9)*100)/100
        }
        else if(pa>=85 && pa<91){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(sgc>=1500){
            anhr = Math.round((anhr+0.9)*100)/100
        }
        else if(sgc>=1000 && sgc<1500){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(reaction_time>=70){
             anhr = Math.round((anhr+0.4)*100)/100
        }
        else if(reaction_time>=65 && reaction_time<70){
            anhr = Math.round((anhr+0.2)*100)/100
       }
       
        if(game_speed>=75){
             anhr = Math.round((anhr+0.6)*100)/100
        }
        else if(game_speed>=70 && game_speed<75){
             anhr = Math.round((anhr+0.4)*100)/100
        }
    
        if(roulette_cooperation>=85 && roulette_cooperation<95){
            anhr = Math.round((anhr+0.2)*100)/100
        }
    
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        ev.preventDefault();
        out1.textContent=total;
    }
    function stage2_night_overachiever(){
        let anhr=11.15
        if(pa>=97){
            anhr = Math.round((anhr+1.2)*100)/100
         }
         else if(pa>=91 && pa<97){
            anhr = Math.round((anhr+0.9)*100)/100
         }
         else if(pa>=85 && pa<91){
            anhr = Math.round((anhr+0.6)*100)/100
         }
    
         if(sgc>=2000){
            anhr = Math.round((anhr+1.2)*100)/100
         }
         else if(sgc>=1000 && sgc<1500){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         else if(sgc>=1500 && sgc<2000){
            anhr = Math.round((anhr+0.9)*100)/100
         }
    
         if(reaction_time>=80){
             anhr = Math.round((anhr+0.6)*100)/100
         }
         else if(reaction_time>=70 && reaction_time<80){
            anhr = Math.round((anhr+0.4)*100)/100
        }
    
        else if(reaction_time>=65 && reaction_time<70){
            anhr = Math.round((anhr+0.2)*100)/100
        }
    
         if(game_speed>=85){
             anhr = Math.round((anhr+0.8)*100)/100
         }
         else if(game_speed>=70 && game_speed<75){
            anhr = Math.round((anhr+0.4)*100)/100
         }
         else if(game_speed>=75 && game_speed<85){
            anhr = Math.round((anhr+0.6)*100)/100
         }
    
        if(roulette_cooperation>=85 && roulette_cooperation<95){
            anhr = Math.round((anhr+0.2)*100)/100    
        }
        else if(roulette_cooperation>=95){
            anhr = Math.round((anhr+0.4)*100)/100
        }
    
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        ev.preventDefault();
        out1.textContent=total;
    }
    
    function stage3_morning_minimum(){
        let anhr=8.4
        if(pa>=85){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         if(sgc>=1000){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         if(reaction_time>=65){
             anhr = Math.round((anhr+0.2)*100)/100
         }
         if(game_speed>=70){
             anhr = Math.round((anhr+0.4)*100)/100
         }
         total_gross = Math.round((anhr*working_hours)*100/100)
         total = Math.round((total_gross*0.784)*100)/100
         ev.preventDefault();
         out1.textContent=total;
    }
    function stage3_morning_avarage(){
        let anhr=8.4
        if(pa>=91){
            anhr = Math.round((anhr+0.9)*100)/100
        }
        else if(pa>=85 && pa<91){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(sgc>=1500){
            anhr = Math.round((anhr+0.9)*100)/100
        }
        else if(sgc>=1000 && sgc<1500){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(reaction_time>=70){
             anhr = Math.round((anhr+0.4)*100)/100
        }
        else if(reaction_time>=65 && reaction_time<70){
            anhr = Math.round((anhr+0.2)*100)/100
       }
       
        if(game_speed>=75){
             anhr = Math.round((anhr+0.6)*100)/100
        }
        else if(game_speed>=70 && game_speed<75){
             anhr = Math.round((anhr+0.4)*100)/100
        }
    
        if(roulette_cooperation>=85 && roulette_cooperation<95){
            anhr = Math.round((anhr+0.2)*100)/100
        }
    
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        ev.preventDefault();
        out1.textContent=total;
    }
    function stage3_morning_overachiever(){
        let anhr=8.4
        if(pa>=97){
            anhr = Math.round((anhr+1.2)*100)/100
         }
         else if(pa>=91 && pa<97){
            anhr = Math.round((anhr+0.9)*100)/100
         }
         else if(pa>=85 && pa<91){
            anhr = Math.round((anhr+0.6)*100)/100
         }
    
         if(sgc>=2000){
            anhr = Math.round((anhr+1.2)*100)/100
         }
         else if(sgc>=1000 && sgc<1500){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         else if(sgc>=1500 && sgc<2000){
            anhr = Math.round((anhr+0.9)*100)/100
         }
    
         if(reaction_time>=80){
             anhr = Math.round((anhr+0.6)*100)/100
         }
         else if(reaction_time>=70 && reaction_time<80){
            anhr = Math.round((anhr+0.4)*100)/100
        }
    
        else if(reaction_time>=65 && reaction_time<70){
            anhr = Math.round((anhr+0.2)*100)/100
        }
    
         if(game_speed>=85){
             anhr = Math.round((anhr+0.8)*100)/100
         }
         else if(game_speed>=70 && game_speed<75){
            anhr = Math.round((anhr+0.4)*100)/100
         }
         else if(game_speed>=75 && game_speed<85){
            anhr = Math.round((anhr+0.6)*100)/100
         }
    
        if(roulette_cooperation>=85 && roulette_cooperation<95){
            anhr = Math.round((anhr+0.2)*100)/100    
        }
        else if(roulette_cooperation>=95){
            anhr = Math.round((anhr+0.4)*100)/100
        }
    
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        ev.preventDefault();
        out1.textContent=total;
    }
    
    function stage3_night_minimum(){
        let anhr=11.95
        if(pa>=85){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         if(sgc>=1000){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         if(reaction_time>=65){
             anhr = Math.round((anhr+0.2)*100)/100
         }
         if(game_speed>=70){
             anhr = Math.round((anhr+0.4)*100)/100
         }
         total_gross = Math.round((anhr*working_hours)*100/100)
         total = Math.round((total_gross*0.784)*100)/100
         ev.preventDefault();
         out1.textContent=total;
    }
    function stage3_night_avarage(){
        let anhr=11.95
        if(pa>=91){
            anhr = Math.round((anhr+0.9)*100)/100
        }
        else if(pa>=85 && pa<91){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(sgc>=1500){
            anhr = Math.round((anhr+0.9)*100)/100
        }
        else if(sgc>=1000 && sgc<1500){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(reaction_time>=70){
             anhr = Math.round((anhr+0.4)*100)/100
        }
        else if(reaction_time>=65 && reaction_time<70){
            anhr = Math.round((anhr+0.2)*100)/100
       }
       
        if(game_speed>=75){
             anhr = Math.round((anhr+0.6)*100)/100
        }
        else if(game_speed>=70 && game_speed<75){
             anhr = Math.round((anhr+0.4)*100)/100
        }
    
        if(roulette_cooperation>=85 && roulette_cooperation<95){
            anhr = Math.round((anhr+0.2)*100)/100
        }
    
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        ev.preventDefault();
        out1.textContent=total;
    }
    function stage3_night_overachiever(){
        let anhr=11.95
        if(pa>=97){
            anhr = Math.round((anhr+1.2)*100)/100
         }
         else if(pa>=91 && pa<97){
            anhr = Math.round((anhr+0.9)*100)/100
         }
         else if(pa>=85 && pa<91){
            anhr = Math.round((anhr+0.6)*100)/100
         }
    
         if(sgc>=2000){
            anhr = Math.round((anhr+1.2)*100)/100
         }
         else if(sgc>=1000 && sgc<1500){
            anhr = Math.round((anhr+0.6)*100)/100
         }
         else if(sgc>=1500 && sgc<2000){
            anhr = Math.round((anhr+0.9)*100)/100
         }
    
         if(reaction_time>=80){
             anhr = Math.round((anhr+0.6)*100)/100
         }
         else if(reaction_time>=70 && reaction_time<80){
            anhr = Math.round((anhr+0.4)*100)/100
        }
    
        else if(reaction_time>=65 && reaction_time<70){
            anhr = Math.round((anhr+0.2)*100)/100
        }
    
        if(game_speed>=85){
             anhr = Math.round((anhr+0.8)*100)/100
        }
        else if(game_speed>=70 && game_speed<75){
            anhr = Math.round((anhr+0.4)*100)/100
        }
        else if(game_speed>=75 && game_speed<85){
            anhr = Math.round((anhr+0.6)*100)/100
        }
    
        if(roulette_cooperation>=85 && roulette_cooperation<95){
            anhr = Math.round((anhr+0.2)*100)/100    
        }
        else if(roulette_cooperation>=95){
            anhr = Math.round((anhr+0.4)*100)/100
        }
    
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        ev.preventDefault();
        out1.textContent=total;
    }
    
    function no_bonus(){
        total_gross = Math.round((anhr*working_hours)*100/100)
        total = Math.round((total_gross*0.784)*100)/100
        ev.preventDefault();
        out1.textContent=total;
    }


    if(stage=='stage 1'){
        if(shift=='morning'){

            let anhr = 7.1;

            //stage 1 morning minimum
            if(working_hours>=96 && working_hours<120){ 
                stage1_morning_minimum()
            }
            //stage 1 morning avarge
            else if(working_hours>=120 && working_hours<144){ 
                stage1_morning_avarage()
            }

            //stage 1 morning overachiever 
             else if(working_hours>=144){
                 stage1_morning_overachiever()
            }

            else if(working_hours<96){
                no_bonus()
            }
        }
        if(shift=='night'){

            let anhr = 10.65;

            //stage 1 night minimum
            if(working_hours>=96 && working_hours<120){ 
                stage1_night_minimum()
            }
            //stage 1 night avarge
            else if(working_hours>=120 && working_hours<144){ 
                stage1_night_avarage()
            }

            //stage 1 night overachiever 
             else if(working_hours>=144){
                 stage1_night_overachiever()
            }

            else if(working_hours<96){
                no_bonus()
            }
        }
    }

    if(stage=='stage 2'){
        if(shift=='morning'){

            let anhr = 7.6;

            //stage 2 morning minimum
            if(working_hours>=96 && working_hours<120){ 
                stage2_morning_minimum()
            }
            //stage 2 morning avarge
            else if(working_hours>=120 && working_hours<144){ 
                stage2_morning_avarage()
            }

            //stage 2 morning overachiever 
             else if(working_hours>=144){
                 stage2_morning_overachiever()
            }

            else if(working_hours<96){
                no_bonus()
            }
        }
        if(shift=='night'){

            let anhr = 11.15;

            //stage 2 night minimum
            if(working_hours>=96 && working_hours<120){ 
                stage2_night_minimum()
            }
            //stage 2 night avarge
            else if(working_hours>=120 && working_hours<144){ 
                stage2_night_avarage()
            }

            //stage 2 night overachiever 
             else if(working_hours>=144){
                 stage2_night_overachiever()
            }

            else if(working_hours<96){
                no_bonus()
            }
        }
    }

    if(stage=='stage 3'){
        if(shift=='morning'){

            let anhr = 8.4;

            //stage 3 morning minimum
            if(working_hours>=96 && working_hours<120){ 
                stage3_morning_minimum()
            }
            //stage 3 morning avarge
            else if(working_hours>=120 && working_hours<144){ 
                stage3_morning_avarage()
            }

            //stage 3 morning overachiever 
             else if(working_hours>=144){
                 stage3_morning_overachiever()
            }

            else if(working_hours<96){
                no_bonus()
            }
        }
        if(shift=='night'){

            let anhr = 11.95;

            //stage 3 night minimum
            if(working_hours>=96 && working_hours<120){ 
                stage3_night_minimum()
            }
            //stage 3 night avarge
            else if(working_hours>=120 && working_hours<144){ 
                stage3_night_avarage()
            }

            //stage 3 night overachiever 
            else if(working_hours>=144){
                 stage3_night_overachiever()
            }

            else if(working_hours<96){
                no_bonus()
            }
        }
    }
})





function handlesubmit(ev){
    ev.preventDefault();
}
