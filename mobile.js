function mobile_check() {
    if(navigator.userAgent.toLowerCase().match(/mobile/i)) { return true; }
    return false;
  };

var UserIsOnMobile = mobile_check();