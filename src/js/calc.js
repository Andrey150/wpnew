import {incorrectDogWeight} from './weight'

const formButton = document.querySelector('.calc-form__button');
const outputValue = document.querySelector('.feed-weight');
const dogData = {
  shepherd: {
    'less-than-1': 600,
    '1-to-5': 800,
    'more-than-5': 700
  },
  labrador: {
    'less-than-1': 500,
    '1-to-5': 700,
    'more-than-5': 400
  }
}

function takeSessionValue(value) {
  return sessionStorage.getItem(value);
}

if (formButton) {
  formButton.addEventListener('click', function () {
    const activity = takeSessionValue('activity');
    const dogBreed = takeSessionValue('dogBreed');
    const dogAge = takeSessionValue('dogAge');
    const dogWeight = takeSessionValue('dogWeight');

    if (+dogWeight < 1 || +dogWeight > 30) {
      return incorrectDogWeight('Вес долен быть в диапазоне от 1 до 30 килограмм')
    }

    if (dogBreed && dogAge && activity && dogWeight) {
      outputValue.innerHTML = calculateFoodAmount(dogBreed, dogAge, activity, dogWeight)
    } else {
      outputValue.innerHTML = 'Для рассчета заполните все поля';
      setTimeout(() => {
        outputValue.innerHTML = '';
      }, 3000)
    }
  })
}

export function calculateFoodAmount(dogBreed, dogAge, activity, dogWeight ) {
  let baseAmount = dogData[dogBreed][dogAge];
  const dogWeightToNumber = +dogWeight;
  let feedWeight;

  if (dogWeightToNumber > 5 && dogWeightToNumber < 10) {
    feedWeight = baseAmount * 1.2
  } else if (dogWeightToNumber >= 10 && dogWeightToNumber <= 20) {
    feedWeight = baseAmount * 1.3
  } else {
    feedWeight = baseAmount * 1.4
  }
  if (activity === 'active') {
    feedWeight *= 1.3
  }
  return `На один прием пищи следует давать вашему питомцу ${Math.ceil(feedWeight)} грамм корма`
}

if (sessionStorage.getItem('activity')) {
  sessionStorage.clear();
}