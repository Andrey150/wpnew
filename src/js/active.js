const activityWrapper = document.querySelector('.select-activity');

if (!sessionStorage.getItem('activity')) {
  sessionStorage.setItem('activity', 'moderate')
}

if (activityWrapper) {
  activityWrapper.addEventListener('click', function(event) {
    if (event.target.tagName === 'INPUT' && event.target.type === 'radio') {
      const value = event.target.value;
      sessionStorage.setItem('activity', value);
    }
  });
}
