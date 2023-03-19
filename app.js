
        let nickname = prompt("Please enter your name: ");
        let gender = prompt("please select your gender: (male/female)");


            while(gender != "male" && gender != "female"){
                gender = prompt("please select your gender: (male/female)");
            }
            if(gender =="male"){

            alert("Hello, MR." + nickname + "!");
            }
            else if(gender == "female"){
            alert("Hello, Mrs." + nickname + "!");
        }
        
        let typeOfDrink = prompt("please choose what you wonna drink Hot or cold drink!!","hot");
        let drink = prompt("Enter the name of the drink you like ... ");

        alert("your drink " + drink + " is getting prepared !");

        console.log("Hello " + nickname + " your order is "+ drink);

        let arr = [nickname , gender , typeOfDrink , drink]
        for(let i =0 ; i<arr.length;i++){
            
            console.log(arr[i])
        }
   