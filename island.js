function getNeighbors(row, col, matrix) {
  let validNeighbors = [];
  let matrixRowLength = matrix.length;
  let matrixColumnLength = matrix[0].length;
  // Check top
  if (row - 1 >= 0 && row - 1 < matrixRowLength & col >= 0 && matrix[row - 1][col] === 1) validNeighbors.push([row - 1, col]);
  // Check top right
  if (row - 1 >= 0 && row - 1 < matrixRowLength & col + 1 >= 0 && col + 1 < matrixColumnLength && matrix[row - 1][col + 1] === 1) validNeighbors.push([row - 1, col + 1]);
  // Check right
  if (row >= 0 && col + 1 >= 0 && col + 1 < matrixColumnLength && matrix[row][col + 1] === 1) validNeighbors.push([row, col + 1]);
  // Check bottom right
  if (row + 1 >= 0 && row + 1 < matrixRowLength & col + 1 >= 0 && col + 1 < matrixColumnLength && matrix[row + 1][col + 1] === 1) validNeighbors.push([row + 1, col + 1]);
  // Check bottom
  if (row + 1 >= 0 && row + 1 < matrixRowLength & col >= 0 && matrix[row + 1][col] === 1) validNeighbors.push([row + 1, col]);
  // Check bottom left
  if (row + 1 >= 0 && row + 1 < matrixRowLength & col - 1 >= 0 && col - 1 < matrixColumnLength && matrix[row + 1][col - 1] === 1) validNeighbors.push([row + 1, col - 1]);
  // Check left
  if (row >= 0 && col - 1 >= 0 && col - 1 < matrixColumnLength && matrix[row][col - 1] === 1) validNeighbors.push([row, col - 1]);
  // Check top left
  if (row - 1 >= 0 && row - 1 < matrixRowLength & col - 1 >= 0 && col - 1 < matrixColumnLength && matrix[row - 1][col - 1] === 1) validNeighbors.push([row - 1, col - 1]);
  // Return neighbors
  return validNeighbors;
  // Your code here
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited,
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count

  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
