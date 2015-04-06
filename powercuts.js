// List of:
// latitude (float), longitude (float), start_ts (int), end_ts (int), comment (string), moderated

function getPowerCuts() {
  // Generate some powercuts at random.
  var center = [ 4.044, 9.732 ];
  var count = 100

  function randLoc() { return (Math.random() - 0.7) * 0.04 }

  var powercuts = new Array(count);
  for (var n = 0; n < count; n++) {
    start = 1425218354 + Math.random()*3600*24*10;
    stop = start + Math.random()*3600*10;
    powercuts[n] = [
      center[0] + randLoc(),
      center[1] + randLoc(),
      start, stop,
      'PowerCut #'+n,
      true
    ];
  }

  return powercuts;
}

