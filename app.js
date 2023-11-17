const puzzleBoard = document.querySelector('#puzzle');
const solveButton = document.querySelector('#solve-button');
const squares = 81;
const submission = [];

for (let i = 0; i < squares; i++) {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'number');
  inputElement.setAttribute('min', '1');
  inputElement.setAttribute('max', '9');
  puzzleBoard.appendChild(inputElement);
}

const joinValues = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    if (input.value) {
      submission.push(input.value);
    } else {
      submission.push('.');
    }
  });

  const solve = async () => {
    const options = {
      method: 'POST',
      url: 'https://solve-sudoku.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '563c3c4d0emsh821e54ec409ce25p19f2a6jsn2295db93ea91',
        'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com',
      },
      data: {
        puzzle:
          '2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
};
