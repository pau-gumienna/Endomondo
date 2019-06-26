const baseUrl = 'http://localhost:4000';

const getChallenge = async args => {
  const response = await $.get({
    url: baseUrl + args.url + '/?width=' + args.width,
    params: args.width
  });
  return response;
};
