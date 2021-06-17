var arr = [2, 5, 4, 3, 1];

function bubbleSort(arr) {

  for (let j = arr.length -1; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
  }


  console.log(arr)
}

function selectSort(arr) {
  for(let j = 0; j < arr.length - 1; j++) {
    let minIndex = j;

    for(let i = j + 1; i < arr.length; i++ ) {
      if(arr[minIndex] > arr[i]) {
        minIndex = i;
      }
    }

    let temp = arr[j];
    arr[j] = arr[minIndex]
    arr[minIndex] = temp

  }


  console.log(arr)
}


function insertSort(arr) {
  for(let i = 1; i < arr.length; i++) {

    let temp = arr[i];
    let j = i;

    while (temp < arr[j - 1] && j > 0) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }

  console.log(arr)
}

// bubbleSort(arr)
insertSort(arr)

function run (arr) {
  quick(0, arr.length - 1)
}

quick(i, j) {
  while (i < j) {
    let left = i
    let right = j
    let poivt = arr[left]

    while (i < j && poivt >= arr[i]) {
      i++
    }
    if(i < j) {
      arr[j] = arr[i]
      j--
    }

    while (i<j && poivt <= arr[j]) {
      j--
    }

    if(i<j) {
      arr[i] = arr[j]
      i--
    }
  }
  arr[i] = poivt
  quick(left, i-1)
  quick( i+1, right)
}


