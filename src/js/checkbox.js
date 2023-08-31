const checklistItems = document.querySelectorAll('.checklist__items');
const checkboxMarksElements = document.querySelectorAll('.checkbox__mark');
const checkboxToToggle11 = document.getElementById('11');
const checkboxToToggle12 = document.getElementById('12');
const checkboxToToggle13 = document.getElementById('13');
const checkboxToToggle1 = document.getElementById('1');
const checkboxToToggle21 = document.getElementById('21');
const checkboxToToggle22 = document.getElementById('22');
const checkboxToToggle23 = document.getElementById('23');
const checkboxToToggle2 = document.getElementById('2');
const checkboxToToggle31 = document.getElementById('31');
const checkboxToToggle32 = document.getElementById('32');
const checkboxToToggle33 = document.getElementById('33');
const checkboxToToggle3 = document.getElementById('3');
const createButton = document.querySelector('.create')
let checkedCheckboxes  = [];

if (checklistItems) {

  function addCheckboxEventListeners() {
    checkboxMarksElements.forEach(checkboxMark => {
      checkboxMark.addEventListener('click', function () {
        updateCheckedCheckboxes();
        const listItem = this.closest('.checklist__item');
        if (listItem) {
          const checkbox = listItem.querySelector('input[type="checkbox"]');
          const { textContent: labelText } = listItem.querySelector('.checklist__item-label');
          const checkboxId = checkbox.getAttribute('id');

          updateCheckedCheckboxes(checkboxId, labelText, checkbox.checked);
        }
      });
    });
  }

  function updateCheckedCheckboxes() {
    checkedCheckboxes = [];
    checkboxMarksElements.forEach(checkboxMark => {
      const listItem = checkboxMark.closest('.checklist__item');
      if (listItem) {
        const checkbox = listItem.querySelector('input[type="checkbox"]');
        const { textContent: labelText } = listItem.querySelector('.checklist__item-label');
        const checkboxId = checkbox.getAttribute('id');
        if (checkbox.checked) {
          checkedCheckboxes.push({ id: checkboxId, text: labelText });
        }
      }
    });
  }

  addCheckboxEventListeners();


  checklistItems.forEach(checklistItem => {

    const checklistItemsInner = checklistItem.querySelectorAll('.checklist__items');

    checklistItemsInner.forEach(checklistItemInner => {
      checklistItemInner.classList.add('hide');

      checklistItem.addEventListener('click', function () {
        checklistItemInner.classList.toggle('hide');
      });
    })
  });



  function updateCheckbox(targetCheckbox, ...sourceCheckboxes) {
    targetCheckbox.checked = sourceCheckboxes.every(checkbox => checkbox.checked);
  }

  function setupCheckboxGroup(groupCheckboxes, mainCheckbox, childCheckboxes) {
    mainCheckbox.addEventListener('change', function () {
      childCheckboxes.forEach(checkbox => (checkbox.checked = mainCheckbox.checked));
    });

    groupCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        updateCheckbox(mainCheckbox, ...childCheckboxes);
      });
    });
  }

  setupCheckboxGroup(
    [checkboxToToggle11, checkboxToToggle12, checkboxToToggle13],
    checkboxToToggle1,
    [checkboxToToggle11, checkboxToToggle12, checkboxToToggle13]
  );

  setupCheckboxGroup(
    [checkboxToToggle21, checkboxToToggle22, checkboxToToggle23],
    checkboxToToggle2,
    [checkboxToToggle21, checkboxToToggle22, checkboxToToggle23]
  );

  setupCheckboxGroup(
    [checkboxToToggle31, checkboxToToggle32, checkboxToToggle33],
    checkboxToToggle3,
    [checkboxToToggle31, checkboxToToggle32, checkboxToToggle33]
  );

  createButton.addEventListener('click', function () {
    updateCheckedCheckboxes();
    const resultContainer = document.querySelector('.result-container');
    resultContainer.innerHTML = '';
    const labelElement = document.createElement('h3');
    const correctString = checkedCheckboxes.map(item => item.text.toLowerCase());

    labelElement.textContent = `Ваше техническое задание включает в себя ${correctString.join(', ')}`;
    resultContainer.appendChild(labelElement);
  });

}
