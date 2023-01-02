var csvFileData = [];
i = 0;
function getRndInteger(min, max) {
    
    csvFileData[i] = Math.floor(Math.random() * (max - min + 1) ) + min;
    i++;
}

function download_csv_file() {  
  
    //define the heading for each row of the data  
    var csv = 'Number\n';  
      
    //merge the data with CSV  
    csvFileData.forEach((row) => {  
            csv += row;  
            csv += "\n";  
    });  
   
    //display the created CSV data on the web browser   
    document.write(csv);  
  
     
    var hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
    hiddenElement.target = '_blank';  
      
    //provide the name for the CSV file to be downloaded  
    hiddenElement.download = 'Numbers.csv';  
    hiddenElement.click();  
}  



