## Readme for the **Beep Boop Loop** program.
#### By Noah Horwitz

---

###### Description of program:
  * This is a web application that takes a number inputted by a user and returns a range of numbers from 0 to the user inputted number with unique rules applied:
    * Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
    * Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
    * Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

---

###### Program setup instructions:
  * This project should be viewable with an internet connection and web browser.
    * The repository of files can be downloaded using the link below, then:
      * Clicking on the green "Clone or download" button.
      * Select the blue "Download ZIP" button.
      * Save and uncompress the resulting ZIP file.
      * Open the index.html file in a web browser.
    * The file can also be cloned then edited with a (GitHub) "GIT CLONE " script command referencing the link below.

###### Link to GitHub Repository:
  * [Click here](https://github.com/00noah/beep-boop-loop) to view the _Beep Boop Loop program_ GitHub repository.
  <!-- * [Click here](https://00noah.github.io/beep-boop-loop) to view my _Beep Boop Loop program_ GH-Pages site. -->

---

###### Specifications:
  * **Spec:** The program returns a range of numbers from 0 to the user's inputted number.
    * Input: "`4`"
    * Output: "`0, 1, 2, 3, 4`"
  * **Spec:** The program returns for any resulting 1: all digits are replaced (all digits) with "Beep!".
    * Input: "`5`"
    * Output: "`0, "Beep!", 2, 3, 4, 5`"
  * **Spec:** The program returns for any resulting 2: all digits are replaced (all digits) with "Boop!".
    * Input: "`6`"
    * Output: "`0, "Beep!", "Boop!", 3, 4, 5, 6`"
    * **Spec:** The program returns for any resulting 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that.".
      * Input: "`7`"
      * Output: "`0, "Beep!"", "Boop!"", "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7`"
    * **Spec:** The program returns for any number including a 1 AND a 2 (in either order): the number 2 rule above takes priority for that number.
      * Input: "`12`"
      * Output: "`..., "Boop!, ...`
    * **Spec:** The program returns for any number including a 3 AND a 1 AND/OR a 2 (in any order): the number 3 rule above takes priority for that number.
      * Input: "`132`"
      * Output: "`..., "I'm sorry, Dave. I'm afraid I can't do that.", ...`
    * **Spec:** The program returns an error for negative numbers.
      * Input: "`-5`"
      * Output: "`"That's a negative number, silly. Please try again!"`
    * **Spec:** The program returns an error for a blank input.
      * Input: "` `"
      * Output: "`"Please fill out this field."`

---

This repository is copyright (C) 2019 by **_Noah Horwitz_** and licensed under the GNU General Public License v3.0 [(gpl-3.0)](https://www.gnu.org/licenses/gpl-3.0.en.html)
