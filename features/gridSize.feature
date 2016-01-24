Feature: Grid Size
	As a user with a created grid
	I want the size of the game's number grid to match the specified rows and columns
	So that the squares I click will always correspond to numbers in the grid

	Scenario Outline:
		Given There is a board with <rows> rows and <cols> columns
		Then The game's numbers grid should have <rows> rows and <cols> cols

		Examples:
			| rows | cols |
			|  5   |   5  |
			|  4   |   6  |
			|  7   |   4  |
			|  9   |   9  |
			|  3   |   3  |
