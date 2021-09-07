const checkAir = function (samples, threshold) {
  let maxDirtySamples = Math.floor(threshold * samples.length);
  let dirtyCount = 0;

  for (let sample of samples) {
    if (sample === 'dirty') {
      dirtyCount++
    }
    if (dirtyCount > maxDirtySamples) {
      return 'Polluted';
    }
  }
  return 'Clean';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));

console.log(checkAir(
  ['clean', 'clean', 'clean', 'clean', 'clean', 'clean', 'clean', 'clean','clean'],
  0.1
));