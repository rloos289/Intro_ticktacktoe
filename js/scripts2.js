function removeThing(array, id) {
  for (var i = 0; i < array.length; i++) {
console.log('first loop');
    for (var i2 = 0; i2 < array[i].length; i2++) {
console.log('second loop')
      if (id === array[i][i2]) {
console.log('popped');
        array.splice(i, i + 1);

      }
    }
  }
return array;
}
