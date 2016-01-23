Feature: Select second adjacent square
	As a user
	After selecting a first square, I want to select a second square next to it
	So that I can form a group of 3 numbers

	Scenario Outline: Selecting Adjacent Square with Third Square in line
		Given There is a board with <rows> rows and <cols> columns
		And The board has a previous selection at row <firstRow> column <firstCol>
		When I select a square at row <row> column <col>
		Then The game forms a line of three squares with square one at <firstRow>, <firstCol>, square two at <row>, <col> and square three at <thirdRow>, <thirdCol>
		And The game has 0 selected squares

		Examples:
			| rows | cols | firstRow | firstCol | row | col | thirdRow | thirdCol |
			|  9   |  9   |    0     |    0     |  1  |  1  |    2     |    2     |
			|  9   |  9   |    4     |    5     |  4  |  6  |    4     |    7     |
			|  8   |  8   |    7     |    0     |  6  |  1  |    5     |    2     |
			|  8   |  8   |    6     |    3     |  5  |  3  |    4     |    3     |
			|  10  |  11  |    9     |   10     |  8  |  9  |    7     |    8     |
			|  3   |  5   |    1     |    3     |  1  |  2  |    1     |    1     |
			|  3   |  3   |    0     |    2     |  1  |  1  |    2     |    0     |
			|  3   |  3   |    0     |    2     |  1  |  2  |    2     |    2     |


	Scenario Outline: Selecting Adjacent Square with no Third Square (end of the board)
		Given There is a board with <rows> rows and <cols> columns
		And The board has a previous selection at row <firstRow> column <firstCol>
		When I select a square at row <row> column <col>
		Then The game does not form a line
		And The game has 0 selected squares

		Examples:
			| rows | cols | firstRow | firstCol | row | col |
			|  9   |  9   |    7     |    7     |  8  |  8  |
			|  9   |  9   |    7     |    7     |  7  |  8  |
			|  9   |  9   |    7     |    7     |  8  |  7  |
			|  9   |  9   |    1     |    7     |  0  |  7  |
			|  9   |  9   |    1     |    7     |  0  |  8  |
			|  9   |  9   |    1     |    7     |  1  |  8  |
			|  9   |  9   |    1     |    1     |  0  |  0  |
			|  9   |  9   |    1     |    1     |  1  |  0  |


