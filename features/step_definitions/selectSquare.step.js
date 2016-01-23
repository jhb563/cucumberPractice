'use strict';

var assert = require('assert');
var MathGame = require(process.cwd() + '/client/model/math-game');

module.exports = function () {

	var board;
	var succeeded;

	this.Given(/^There is a board with (.*) rows and (.*) columns$/, function(rows, cols, callback) {
		board = MathGame.create(rows, cols);
		callback();
	});

	this.Given(/^There is a board with (.*) rows and (.*) columns and no selections$/, function (rows, cols, callback) {
		board = MathGame.create(rows, cols);
		callback();
	});

	this.When(/^I select a square at row (.*) and column (.*)$/, function(row, col, callback) {
		succeeded = board.select(row, col);
		callback();
	});

	this.Then(/^the game accepts the move$/, function (callback) {
		assert(succeeded);
		callback();
	});

	this.Then(/^the game rejects the move$/, function (callback) {
		assert(!succeeded);
		callback();
	});

	this.Then(/^The game has (\d+) selected squares?$/, function (numSquares, callback) {
		assert(board.selectedSquares.length == numSquares);
		callback();
	});

	this.Then(/^The first selected square is at (\d+) (\d+)$/, function (row, col, callback) {
		assert(board.selectedSquares.length > 0);
		var firstSquare = board.selectedSquares[0];
		console.log(firstSquare.row);
		console.log(firstSquare.col);
		assert(firstSquare.row == row);
		assert(firstSquare.col == col);
		callback();
	});
	
	this.Given(/^The board has a previous selection at row (.*) column (.*)$/, function (firstRow, firstCol, callback) {
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
};
