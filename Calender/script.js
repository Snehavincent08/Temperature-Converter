function loadCalander(){

    let currentDate = new Date();
    console.log(currentDate)
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth()
    let date = currentDate.getDate()
    let lastDate = new Date(year, month+1, 0).getDate()
    let lastDay = new Date(year, month+1, 0).getDay()
    let firstDay = new Date(year, month).getDay()
    
    let monthTitle = document.getElementById("month")
    let table = document.getElementById("table")
 



    monthTitle.textContent = (currentDate.toLocaleString('default', {month:'long'}))

    let tdAfter = (7 - (lastDay + 1)); // returns the number of table data that should not be filled in with date after the last date
    let tdBefore = firstDay; // returns the number of table data that should not be filled in with date before the start date
    let totalRows = (tdBefore + lastDate + tdAfter)/7 //Calculates the total rows
    let totalTd = (tdBefore + lastDate + tdAfter) //returns total number of table date that need to be created

    let x = 0 //counts how much td created 
    let c = 1 //starting date

    //This loop creates a row using the calculated total rows
    for(let i = 0; i < totalRows; i++){

        let tr = document.createElement("tr")
        //This loop creates a table data element 
        for(let i = 1 ; i <= totalTd; i++){

            let td = document.createElement("td")
            tr.appendChild(td)

            // this if statement declares which table data are filled in with date and which table data are not filled in with a date
                if(x < tdBefore){
                        td.classList.add("notFilled")
                        x++
                        
                    }
                else if (x === tdBefore && c <= lastDate ){
                    td.classList.add("filled")
                    td.textContent = c

                    c++
                }
                else{
                    td.classList.add("notFilled")
                }
                
             // This if statement breaks into a new row after 7 td are added                  
                if(i == 7){
                break
                }   
        }
        table.append(tr)
    }
    let filled = Array.from(document.getElementsByClassName("filled"));
    //Selects Specific Day   
    for(i in filled){
        if (date-1 == i){
            filled[i].style.backgroundColor = "rgb(36, 113, 149)"
            filled[i].style.border = "1px solid rgb(4, 46, 65)"
            filled[i].style.color = "white"
        }
    }
    console.log(filled)



    
}