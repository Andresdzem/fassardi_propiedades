document.getElementById('botonDolar').addEventListener('click', () =>{

fetch('https://dolarapi.com/v1/dolares/oficial')
  .then(response => response.json())
  .then(data => {
    try {
      console.log(data);  
      const valor = data.venta;
    } catch(error){
      console.error('Error:',error);
    }

document.getElementById("dolar").innerHTML = 
  `<small class="text-center">El valor actual del USD es <br> 1USD = $${data.venta}</small>`;
})})
