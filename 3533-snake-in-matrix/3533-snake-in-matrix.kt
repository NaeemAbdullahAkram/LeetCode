class Solution {

    fun finalPositionOfSnake(sideOfSquareMatrix: Int, commands: List<String>): Int {
        var horizontalPosition = 0
        var verticalPosition = 0

        for (command in commands) {
            when (command) {
                "LEFT" -> --horizontalPosition
                "RIGHT" -> ++horizontalPosition
                "DOWN" -> ++verticalPosition
                "UP" -> --verticalPosition
            }
        }
        return verticalPosition * sideOfSquareMatrix + horizontalPosition
    }
}