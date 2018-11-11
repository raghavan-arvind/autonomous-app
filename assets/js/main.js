function showCritical() {
  document.getElementById('critical-container').style.display = 'block';
  document.getElementById('major-container').style.display = 'none';
  document.getElementById('moderate-container').style.display = 'none';
  document.getElementById('minor-container').style.display = 'none';
}

function showMajor() {
  document.getElementById('critical-container').style.display = 'none';
  document.getElementById('major-container').style.display = 'block';
  document.getElementById('moderate-container').style.display = 'none';
  document.getElementById('minor-container').style.display = 'none';
}

function showModerate() {
  document.getElementById('critical-container').style.display = 'none';
  document.getElementById('major-container').style.display = 'none';
  document.getElementById('moderate-container').style.display = 'block';
  document.getElementById('minor-container').style.display = 'none';
}

function showMinor() {
  document.getElementById('critical-container').style.display = 'none';
  document.getElementById('major-container').style.display = 'none';
  document.getElementById('moderate-container').style.display = 'none';
  document.getElementById('minor-container').style.display = 'block';
}
