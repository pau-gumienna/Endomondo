const framesWidth = document.getElementById('frames').offsetWidth;
const partialWidth = Math.round((framesWidth - 24) / 3);
const iframeWidth = 380 > partialWidth ? framesWidth : partialWidth;
const interval = 60000;
const checkNames = innerText => {
  names = innerText.split(' ');
  if (names[1] == undefined) {
    return names;
  } else if (names.includes('provided)')) {
    return '';
  } else if (names[1].includes('-')) {
    splitSurnames = names[1].split('-');

    return `${names[0]} ${splitSurnames[0].substring(
      1,
      0
    )}.-${splitSurnames[1].substring(1, 0)}.`;
  } else {
    return `${names[0]} ${names[1].substring(1, 0)}.`;
  }
};

const getChallenges = () => {
  getChallenge({
    url: '/bikingChallenge',
    width: iframeWidth
  }).then(
    response => (
      $('#iframe1').html(response),
      $("td[class*='name'] a span").each(
        (index, element) => (
          (splitNames = checkNames(element.innerText)),
          (element.textContent = splitNames)
        )
      )
    )
  );
  getChallenge({
    url: '/runningChallenge',
    width: iframeWidth
  }).then(
    response => (
      $('#iframe2').html(response),
      $("td[class*='name'] a span").each(
        (index, element) => (
          (splitNames = checkNames(element.innerText)),
          (element.textContent = splitNames)
        )
      )
    )
  );
  getChallenge({
    url: '/othersChallenge',
    width: iframeWidth
  }).then(
    response => (
      $('#iframe3').html(response),
      $("td[class*='name'] a span").each(
        (index, element) => (
          (splitNames = checkNames(element.innerText)),
          (element.textContent = splitNames)
        )
      )
    )
  );
};
getChallenge({
  url: '/bikingChallenge',
  width: iframeWidth
}).then(
  response => (
    $('#iframe1').html(response),
    $("td[class*='name'] a span").each(
      (index, element) => (
        (splitNames = checkNames(element.innerText)),
        (element.textContent = splitNames)
      )
    )
  )
);
getChallenge({
  url: '/runningChallenge',
  width: iframeWidth
}).then(
  response => (
    $('#iframe2').html(response),
    $("td[class*='name'] a span").each(
      (index, element) => (
        (splitNames = checkNames(element.innerText)),
        (element.textContent = splitNames)
      )
    )
  )
);
getChallenge({
  url: '/othersChallenge',
  width: iframeWidth
}).then(
  response => (
    $('#iframe3').html(response),
    $("td[class*='name'] a span").each(
      (index, element) => (
        (splitNames = checkNames(element.innerText)),
        (element.textContent = splitNames)
      )
    )
  )
);

setInterval(() => getChallenges(), interval);

const bikingUrl =
  'https://www.endomondo.com/embed/challenge?id=40181526&user=15299150&measure=0&width=' +
  iframeWidth +
  '&height=600';

const runningUrl =
  'https://www.endomondo.com/embed/challenge?id=40181532&user=15299150&measure=0&width=' +
  iframeWidth +
  '&height=600';

const otherUrl =
  'https://www.endomondo.com/embed/challenge?id=40181520&user=15299150&measure=0&width=' +
  iframeWidth +
  '&height=600';
