function quizApp() {
  let again = 0;
  let correctAns = 0;
  do {
    console.log("Welcome to Quiz App!");
    const ps = require("prompt-sync");
    const prompt = ps({ sigint: true });

    let ans = prompt("Are you ready for the Quiz? ");
    ans = ans.toLowerCase();

    if (ans === "yes") {
      console.log(
        "Then lets begin!!\nThere will be five Questions .You have to answer at least 3 of them to pass this Quiz.\nQuestion No: 1\nChoose the correct Article:\n"
      );
      console.log("He is eating ___ apple.\n1) a , 2) an , 3) the\n");
      let ans1 = prompt("Your Answer: ");
      ans1 = ans1.toLowerCase();
      if (ans1 === "an") {
        console.log("Correct answer!!");
        correctAns = correctAns + 1;
      } else
        console.log(
          "Incorrect answer\nDont worry,there are still four questions left."
        );

      console.log("\nQuestion No: 2\nChoose the correct Article:\n");
      console.log("I have ___ box.\n1) a , 2) an , 3) the\n");
      let ans2 = prompt("Your Answer: ");
      ans2 = ans2.toLowerCase();
      if (ans2 === "a") {
        console.log("Correct answer!!");
        correctAns = correctAns + 1;
      } else
        console.log(
          "Incorrect answer\nDont worry,there are still three questions left."
        );

      console.log("\nQuestion No: 3\nChoose the correct Article:\n");
      console.log("She opened ___ door..\n1) a , 2) an , 3) the\n");
      let ans3 = prompt("Your Answer: ");
      ans3 = ans3.toLowerCase();
      if (ans3 === "the") {
        console.log("Correct answer!!");
        correctAns = correctAns + 1;
      } else console.log("Incorrect answer\nOnly two more questions left.");

      console.log("\nQuestion No: 4\nChoose the correct Article:\n");
      console.log("Please hand me ___ envelope.\n1) a , 2) an , 3) the\n");
      let ans4 = prompt("Your Answer: ");
      ans4 = ans4.toLowerCase();
      if (ans4 === "an") {
        console.log("Correct answer!!");
        correctAns = correctAns + 1;
      } else console.log("Incorrect answer\nOnly one more question left.");

      console.log("\nQuestion No: 5\nChoose the correct Article:\n");
      console.log(" French is spoken by ___ French..\n1) a , 2) an , 3) the\n");
      let ans5 = prompt("Your Answer: ");
      ans5 = ans5.toLowerCase();
      if (ans5 === "the") {
        console.log("Correct answer!!");
        correctAns = correctAns + 1;
      } else console.log("Incorrect answer\nEnd of Quiz!.");
      if (correctAns >= 3)
        console.log(
          "Congratulation You passed the Quiz. You answered " +
            correctAns +
            " out of five question right.\nYour Score: " +
            correctAns
        );
      else
        console.log(
          "Oh!You failed the Quiz. You answered " +
            correctAns +
            " out of five questions right.\nYour Score: " +
            correctAns
        );
    } else console.log("No problem come back when you are prepared.");
    let attempAgain = prompt(
      "Do you want to attempt the quiz again?(yes or no) "
    );
    attempAgain.toLowerCase();
    if (attempAgain === "yes") {
      again = 0;
      correctAns = 1;
    } else again = 0;
  } while (again === 1);
}

quizApp();
