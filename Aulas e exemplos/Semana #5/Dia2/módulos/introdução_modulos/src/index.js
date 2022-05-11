function formatDate() { 
    const date = new Date(); 
    const formatDate = date.toLocaleString('br', { timeZone: 'UTC' }); 
    return formatDate; 
} 

alert(formatDate())

console.log('teste')