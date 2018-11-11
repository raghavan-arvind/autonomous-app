function showDanger() {
  document.getElementById('danger-container').style.display = 'block';
  document.getElementById('laws-container').style.display = 'none';
  document.getElementById('local-container').style.display = 'none';
  document.getElementById('personal-container').style.display = 'none';
}

function showLaws() {
  document.getElementById('danger-container').style.display = 'none';
  document.getElementById('laws-container').style.display = 'block';
  document.getElementById('local-container').style.display = 'none';
  document.getElementById('personal-container').style.display = 'none';
}

function showLocal() {
  document.getElementById('danger-container').style.display = 'none';
  document.getElementById('laws-container').style.display = 'none';
  document.getElementById('local-container').style.display = 'block';
  document.getElementById('personal-container').style.display = 'none';
}

function showPersonal() {
  document.getElementById('danger-container').style.display = 'none';
  document.getElementById('laws-container').style.display = 'none';
  document.getElementById('local-container').style.display = 'none';
  document.getElementById('personal-container').style.display = 'block';
}

function hideAll() {
  document.getElementById('danger-container').style.display = 'none';
  document.getElementById('laws-container').style.display = 'none';
  document.getElementById('local-container').style.display = 'none';
  document.getElementById('personal-container').style.display = 'none';
}
