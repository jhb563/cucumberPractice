Feature: Clearing the selection of the first square
	As a player
	When I have selected a first square, and I click that square again
	The selection should clear

	Scenario Outline:
		Given There is a board with <rows> rows and <cols> columns
		And The board has a previous selection at row <firstRow> column <firstCol>
		When I select a square at row <firstRow> column <firstCol>
		Then The game has 0 selected squares

		Examples:
			| rows | cols | firstRow | firstCol |
			|  3   |  3   |    1     |    1     |
			|  5   |  5   |    3     |    4     |
			|  5   |  5   |    2     |    1     |
			|  9   |  9   |    8     |    8     |
			|  9   |  9   |    4     |    6     |
