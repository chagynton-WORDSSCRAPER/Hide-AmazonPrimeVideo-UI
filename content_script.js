
let hidden = false;


// Wind back 1 second if not at beginning
function windBack() {
  const player = document.getElementsByTagName('video')[0];
  if(player.currentTime > 1) {
    player.currentTime -= 1;
  }
}

// Wind forward 1 second if not at end
function windForward() {
  const player = document.getElementsByTagName('video')[0];
  if(player.currentTime < player.duration - 1) {
    player.currentTime += 1;
  }
}

function runContentScript() {
  // Listen for keypresses
  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    // On right arrow, wind 1 second forward
    if (keyName === 'PageDown' || keyName === 'ArrowDown') {
      windForward();
    }
    // On left arrow, wind 1 second back
    else if (keyName === 'PageUp' || keyName === 'ArrowUp') {
      windBack();
    }
    // On z, hide or show the UI
    else if (keyName === 'z') {
      if (hidden) {
        document.querySelector('.webPlayerUIContainer').classList.remove('disappeared');
        
        hidden = false;
      }
      else {
        document.querySelector('.webPlayerUIContainer').classList.add('disappeared');
        hidden = true;
      }
    }
  });
}
