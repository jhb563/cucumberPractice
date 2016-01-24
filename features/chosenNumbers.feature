Feature: Chosen Numbers
	As a user who has selected three squares in the grid
	I want the game to have the numbers at those places in the grid selected
	So that my choices can be evaluated

	Background:
		Given There is a board with 9 rows and 9 columns

	Scenario Outline:
		Given The board has a previous selection at row <firstRow> column <firstCol>
		When I select a square at row <secondRow> column <secondCol>
		Then The board's selected numbers are at squares (<firstRow>, <firstCol>), (<secondRow>, <secondCol>), and (<thirdRow>, <thirdCol>)

		Examples:
			| firstRow | firstCol | secondRow | secondCol | thirdRow | thirdCol |
		        |    5     |    5     |     6     |     6     |    7     |    7     |
		        |    2     |    8     |     1     |     8     |    0     |    8     |
		        |    7     |    0     |     6     |     1     |    5     |    2     |
		        |    3     |    4     |     3     |     5     |    3     |    6     |
		        |    6     |    2     |     7     |     2     |    8     |    2     |
		        |    0     |    7     |     1     |     6     |    2     |    5     |
		        |    4     |    5     |     4     |     4     |    4     |    3     |
		        |    5     |    7     |     4     |     6     |    3     |    5     |
