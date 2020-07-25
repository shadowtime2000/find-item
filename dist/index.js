module.exports = {
  linear (array, matchesCondition, type = "all") {
    if (typeof array != 'object') throw new TypeError("Expected array for array!");
    if (typeof matchesCondition != 'function') throw new TypeError("Expected function for matchesCondition!");

    if (type == "all") {
        var result = [];
        for (var i = 0; i < array.length; i++) {
          if (matchesCondition(array[i])) result.push(i);
        }
        return result;
    } else if (type == "first") {
      for (var i = 0; i < array.length; i++) {
        if (matchesCondition(array[i])) return i;
      }
      return -1;
    }
  },
  binary (array, number) {
    if (typeof array != 'object') throw new TypeError("Expected array for array!");
    if (typeof number != 'number') throw new TypeError("Expected number for number!");

    var start = 0;
    var end = array.length - 1;
    var result = -1;
    var found = false;
    var middle;

    while (!found && start <= end) {
      middle = Math.floor((start + end)/2);
      if (array[middle] == number) {
        return middle;
      } else if (array[middle] > number) {
        end = middle - 1;
      } else if (array[middle] < number) {
        start = middle + 1;
      }
    }
    return result;
  }
}
