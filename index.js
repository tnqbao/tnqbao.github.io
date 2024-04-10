var vehicles = [
  {
    type : "2 wheels vehicle",
    information : [
      {
        id: 1,
        name: "Ultra Bicycle",
        price: 50
      },
      {
        id: 2,
        name: "V.I.P MotorBike",
        price: 100
      }
    ]
  },
  {
    type : "4 wheels vehicle",
    information : [
      {
        id: 3,
        name: "Audi A6",
        price: 50
      },
      {
        id: 4,
        name: "Mercedes S450",
        price: 100
      }
    ]
  }
];

var listVehicle = vehicles.reduce(function getVehicle(information,vehicle){
  return information.concat(vehicle.information)
}, [])


var htmls  = listVehicle.map(function(information)
{
  return `
    <div> 
    <h2>  ${information.name} </h2>
    <p> id: ${information.id}</p>
    <p> price: ${information.price} </p>
    </div>
  `;
})

function display() {
  return htmls.join('')
}
