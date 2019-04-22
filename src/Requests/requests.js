const hostUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_API_URL
    : 'http://localhost:3001';


async function getHarvests() {
  const response = await fetch(`${hostUrl}/harvests`, {
    accept: 'application/json',
  });
  const checkedStatus = checkStatus(response);
  const parsedJson = await parseJSON(checkedStatus);
  return parsedJson;
}

async function createNewHarvest(harvestDTO) {
  const response = await fetch(`${hostUrl}/harvests/`, {
    accept: 'application/json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(harvestDTO),
  });
  const checkedStatus = checkStatus(response);
  const parsedJson = await parseJSON(checkedStatus);
  return parsedJson;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error, 'error'); // eslint-disable-line no-console
  throw error;
}

async function parseJSON(response) {
  return response.json();
}

export {
  getHarvests,
  createNewHarvest
};
