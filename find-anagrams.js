// Simple JavaScript job to get the word's hash key
// The key will consist of the word's letters (sorted alphabetically): example: "salt" -> alst, "team" -> aemt
function getHash(word) {
  return word.split("").sort().join("");
}

// Creates a hashed map of the Dictionary
function hashDictionary(words) {
  var hdic = {};
  for (var i=0; i<words.length; i++) {
    var word = words[i];
    var alphabet_key = getHash(word);
    if (!hdic[alphabet_key]) hdic[alphabet_key] = [];
    hdic[alphabet_key].push(word);
  }

  return hdic;
}

// Once the hashed dictionary is set up, we simply look up the word
function findWord(hdic, word) {
  var alphabet_key = getHash(word);
  if (hdic[alphabet_key]) {
    console.log("Found anagrams for '" + word + "': " + hdic[alphabet_key].join(", "));
  } else {
    console.log("Dictionary has no anagrams for '" + word + "'");
  }
}

// Shows how to use the solution
function run() {
  var dictionary = "ape, meat, stakes, grease, won, soil, steaks, coal, cause, reap, last, pear, team, salt, lump, agrees, now, spit, pits, pea, cola, dell, plum, sauce, oils".split(", ");
  var needles = "tips, own, fail, pea".split(", ");

  var hdic = hashDictionary(dictionary);
  for (var i=0; i<needles.length; i++) {
    findWord(hdic, needles[i]);
  }
}

run();