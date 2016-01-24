'use strict';

var assert = require('assert');
var MathGame = require(process.cwd() + '/client/model/math-game');

module.exports = function () {

	var board;

	this.Given(/^There is a board with (.*) rows and (.*) columns$/, function(rows, cols, callback) {
		board = MathGame.create(rows, cols);
		callback();
	});

	this.Then(/^The game's numbers grid should have (\d+) rows and (\d+) cols$/, function(rows, cols, callback) {
		assert(board.numbers.length == rows);
		for (var i = 0; i < board.numbers.length; i += 1) {
			assert(board.numbers[i].length == cols);
		}
		callback();
	});

	this.Given(/^There is a board with (.*) rows and (.*) columns and no selections$/, function (rows, cols, callback) {
		board = MathGame.create(rows, cols);
		callback();
	});

	this.When(/^I select a square at row (\-?\d+) column (\-?\d+)$/, function(row, col, callback) {
		board.select(row, col);
		callback();
	});

	this.Then(/^The game has (\d+) selected squares?$/, function (numSquares, callback) {
		assert(board.selectedSquares.length == numSquares);
		callback();
	});

	this.Then(/^The first selected square is at (\d+) (\d+)$/, function (row, col, callback) {
		assert(board.selectedSquares.length > 0);
		var firstSquare = board.selectedSquares[0];
		assert(firstSquare.row == row);
		assert(firstSquare.col == col);
		callback();
	});
	
	this.Given(/^The board has a previous selection at row (\d+) column (\d+)$/, function (firstRow, firstCol, callback) {
		board.select(firstRow, firstCol);
		callback();
	});

	this.Then(/^The game forms a line of three squares with square one at (\d+), (\d+), square two at (\d+), (\d+) and square three at (\d+), (\d+)$/, function (firstRow, firstCol, row, col, thirdRow, thirdCol, callback) {
		var threeSquares = board.correctSquares;
		assert(threeSquares.length == 3);
		var square1 = threeSquares[0];
		var square2 = threeSquares[1];
		var square3 = threeSquares[2];
		assert(square1.row == firstRow);
		assert(square1.col == firstCol);
		assert(square2.row == row);
		assert(square2.col == col);
		assert(square3.row == thirdRow);
		assert(square3.col == thirdCol);
		callback();
	});

	this.Then(/^The game does not form a line$/, function (callback) {
		assert(board.correctSquares.length == 0);
		callback();
	});
	
	this.Then(/^The board's selected numbers are at squares \((\d+), (\d+)\), \((\d+), (\d+)\), and \((\d+), (\d+)\)$/, function(firstRow, firstCol, secondRow, secondCol, thirdRow, thirdCol, callback) {
		assert(board.selectedNumbers.length == 3);
		assert(board.selectedNumbers[0] == board.numbers[firstRow][firstCol]);
		assert(board.selectedNumbers[1] == board.numbers[secondRow][secondCol]);
		assert(board.selectedNumbers[2] == board.numbers[thirdRow][thirdCol]);
		callback();
	});
};
