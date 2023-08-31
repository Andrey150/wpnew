const weightInput = document.querySelector('.weight-input');
const outputValue = document.querySelector('.feed-weight');

if (weightInput) {
  weightInput.addEventListener('change', function (e) {
    const value = e.target.value;

    if (+value < 1 || +value > 30) {
      incorrectDogWeight('Вес долен быть в диапазоне от 1 до 30 килограмма')
    } else {
      sessionStorage.setItem('dogWeight', value)
      outputValue.innerHTML = '';
    }
  });
}

export function incorrectDogWeight(text = 'Введите подходящий вес') {
  outputValue.innerHTML = text

  setTimeout(() => {
    outputValue.innerHTML = '';
  }, 3000)
}
