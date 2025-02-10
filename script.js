const display = document.getElementById('display');

function Display(input) {
  let words = {
    A: ["Apple", "Airplane", "Ant", "Apricot"],
    B: ["Banana", "Butterfly", "Boat", "Bottle"],
    C: ["Cat", "Carrot", "Castle", "Cloud"],
    D: ["Dog", "Dragon", "Diamond", "Door"],
    E: ["Elephant", "Egg", "Engine", "Earth"],
    F: ["Fish", "Fire", "Feather", "Forest"],
    G: ["Giraffe", "Guitar", "Globe", "Garden"],
    H: ["House", "Horse", "Hammer", "Heart"],
    I: ["Ice", "Island", "Igloo", "Insect"],
    J: ["Jacket", "Jelly", "Jungle", "Juice"],
    K: ["Kangaroo", "Kite", "Keyboard", "King"],
    L: ["Lion", "Lamp", "Leaf", "Ladder"],
    M: ["Monkey", "Mountain", "Moon", "Mango"],
    N: ["Nest", "Notebook", "Needle", "Necklace"],
    O: ["Orange", "Ocean", "Octopus", "Owl"],
    P: ["Penguin", "Piano", "Pizza", "Pumpkin"],
    Q: ["Queen", "Quail", "Quilt", "Quartz"],
    R: ["Rabbit", "Rainbow", "Rocket", "River"],
    S: ["Sun", "Star", "Snake", "Strawberry"],
    T: ["Tiger", "Train", "Tree", "Tomato"],
    U: ["Umbrella", "Unicorn", "Uniform", "Urchin"],
    V: ["Violin", "Volcano", "Vacuum", "Vanilla"],
    W: ["Water", "Whale", "Window", "Wolf"],
    X: ["Xylophone", "X-ray", "Xenon", "Xylem"],
    Y: ["Yacht", "Yellow", "Yoyo", "Yogurt"],
    Z: ["Zebra", "Zoo", "Zucchini", "Zipper"]
  };

  if (words[input]) {
    let randomWord = words[input][Math.floor(Math.random() * words[input].length)];
    display.innerHTML = randomWord + " ";

    // Call the text-to-speech function
    speak(randomWord);
  }
}

function speak(text) {
  let speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.lang = "en-US"; 
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
