//C. Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet from a-z)

public class Pangram{
    public static void main(String[] args) {
        String input = "Five or six big jet planes zoomed quickly by the tower.";
        boolean isPangram = isPangram(input);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        // Create a boolean array to represent the 26 letters (a-z)
        boolean[] letters = new boolean[26];

        // Convert the input to lowercase for case-insensitivity
        input = input.toLowerCase();

        // Iterate through the characters in the input
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);

            // Check if the character is a lowercase letter
            if (ch >= 'a' && ch <= 'z') {
                // Mark the letter as seen
                letters[ch - 'a'] = true;
            }
        }

        // Check if all letters have been seen
        for (boolean letter : letters) {
            if (!letter) {
                return false; // Not a pangram
            }
        }

        return true; // It's a pangram
    }
}
