    // deposite-widthow section-1
    document.getElementById('click-button').addEventListener('click', function(){
        const useremailFild = document.getElementById('mail');
        const userEmail = useremailFild.value;
    
        const userpasswordFild  = document.getElementById('pass');
        const userPassword = userpasswordFild.value;
    
        if(userEmail == 'mdmorslainislam027@gmail.com' && userPassword == 'morsalin'){
            window.location.href = 'banking-system.html';
        }
        else{
            console.log('not valid')
        }
    })
    
    