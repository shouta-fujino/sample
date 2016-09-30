window.addEventListener('load', function() {
  document.getElementById('register').addEventListener('click', register, false);
  document.getElementById('push').addEventListener('click', setPush , false);
  navigator.serviceWorker.ready.then(checkPush);
}, false);

function register() {
  navigator.serviceWorker.register('push.js').then(checkNotification);
}

function checkNotification() {
  Notification.requestPermission(function(permission) {
    if(permission !== 'denied')
      document.getElementById('push').disabled = false;
    else
      alert('プッシュ通知を有効にできません。ブラウザの設定を確認して下さい。');
  });
}