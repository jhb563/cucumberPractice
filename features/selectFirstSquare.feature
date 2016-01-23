Feature: Player selects their first square
	As a player facing a board with no selections
	I want to be able to select a first square
	So that I can begin forming combos

	Scenario Outline: Selecting In Bounds Squares
		Given There is a board with <rows> rows and <cols> columns and no selections
		When I select a square at row <row> column <col>
		Then The game has 1 selected square
		And The first selected square is at <row> <col>

		Examples:
			| rows | cols | row | col |
			|  3   |  3   |  0  |  0  |
			|  3   |  3   |  2  |  2  |
			|  3   |  3   |  2  |  0  |
			|  3   |  3   |  0  |  2  |
			|  9   |  8   |  4  |  5  |

	Scenario Outline: Select Out of Bounds Squares
		Given There is a board with <rows> rows and <cols> columns and no selections
		When I select a square at row <row> column <col>
		Then The game has 0 selected squares

		Examples:
			| rows | cols | row | col |
			|  3   |  3   | -1  |  0  |
			|  3   |  3   |  2  |  3  |
			|  3   |  3   |  2  | -1  |
			|  3   |  3   |  3  |  2  |
			|  9   |  8   | 10  | 10  |
