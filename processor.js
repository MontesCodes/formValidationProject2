let queryString = window.location.search;
let queryStringParams = new URLSearchParams(queryString);

document.write('Student Name: ' + queryStringParams.get('txtStudentName'));
