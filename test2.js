
let furniture= ['Table', 'Chairs', 'Couch'];

furniture.forEach(item => {

  const letters = item.split('');

  letters.forEach(letter => {
    console.log(letter);
  });
});
