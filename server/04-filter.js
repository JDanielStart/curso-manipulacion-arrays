const words = ["spray", "elites", "limit", "apple", "exuberant"]

const newArray = [];
for(let i=0; i< words.length; i++){
    const word = words[i]
    if (word.length >= 6){
        newArray.push(word)
    }
}
console.log('newArray', newArray);
console.log('original', words);
const rta = words.filter(item => item.length >= 6);
console.log('rta', rta);
console.log('original', words);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Nicolas",
      total: 240,
      delivered: true,
    },
  ];

  const rta3 = orders.filter(item => item.delivered && item.total >= 100);
  console.log('rta3', rta3);

  const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    });
  }

  console.log(search('Nico'));

  //Se pueden hacer filtros con filter aunque si uno tiene una base de datos
  //lo mejor seria hacer los filtros por la base de datos
