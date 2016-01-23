Feature: Select second non-adjacent square
	As a user who has selected one square
	I want to second a non-adjacent square
	So that I can start a new chain

	Scenario Outline: Selecting a second square, not adjacent to the first.
		Given There is a board with <rows> rows and <cols> columns
		And The board has a previous selection at row <firstRow> column <firstCol>
		When I select a square at row <row> column <col>
		Then The game has 1 selected square
		And The first selected square is at <row> <col>

		Examples:
			| rows | cols | firstRow | firstCol | row | col |
			|  5   |  5   |    3     |     2    |  1  |  1  |
			|  3   |  4   |    0     |     0    |  2  |  0  |
			|  9   |  9   |    8     |     4    |  3  |  6  |
			|  9   |  9   |    7     |     8    |  5  |  8  |
			|  3   |  3   |    2     |     0    |  0  |  0  |
