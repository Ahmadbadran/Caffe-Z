
        let nickname = prompt("Please enter your name: ");
        let gender = prompt("please select your gender: ");

        if(nickname != null){

        if(gender =="male"){

            document.getElementById("home").innerText = "Hello, MR." + nickname + "!";
            }
            else if(gender == "female"){
                document.getElementById("home").innerText = "Hello, Mrs." + nickname + "!";
            }
            else {
                document.getElementById("home").innerText = "Hello, " + nickname + "!";
            }
        }
        let temp = prompt("please choose what you wonna drink Hot or cold drink!!","hot");
        let drink = prompt("Enter the name of the drink you like ... ");

        alert("your drink " + drink + " is getting prepared !");

        console.log("Hello " + nickname + " your order is "+ drink);

        let num = prompt("enter a number berween 0 - 100");

        for(i=1;num >100 || num<0;i++){
             num = prompt("enter a number berween 0 - 100");

        }
        alert("the number you entered is " + num)
    
        
        
    