//nativo do JS acima da versao 6
// import moment from "moment/src/moment"

// alert(moment().format("HH:mm:ss"))

function formatDate() { 
    const date = new Date(); 
    const formatDate = date.toLocaleString(); 
    return formatDate; 
}  

alert(formatDate())