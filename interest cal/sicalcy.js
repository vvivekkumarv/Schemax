  function simple_interest()
            {
            var p,t,r,si;
            p = document.getElementById ("row1").value;
            t = document.getElementById ("row2").value;
            r = document.getElementById ("row3").value;
            si = parseInt((p*t*r)/100 );
            document.getElementById ('num').innerHTML ="Simple interest : "+si;
            
            }
    