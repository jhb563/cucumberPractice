'use strict';

function MathGame(rows, cols) {
	this.numRows = rows;
	this.numCols = cols;
	this.selectedSquares = [];
	this.correctSquares = [];
	this.incorrectSquares = [];
};

MathGame.prototype.isValidSquare = function(square) {
	var isValidRow = square.row >= 0 && square.row < this.numRows;
	var isValidCol = square.col >= 0 && square.col < this.numCols;
	return isValidRow && isValidCol;
};

MathGame.prototype.select = function(row, col) {
	var newSquare = {row: Number(row), col: Number(col)};
	if (!this.isValidSquare(newSquare)) {
		return; 
	}
	if (this.selectedSquares.length == 0) {
		this.selectedSquares.push(newSquare);
		return;
	} else {
		var square1 = this.selectedSquares[0];
		var resultingList = this.squareListAfterTwoSelections(square1, newSquare);
		if (resultingList.length == 3) {
			this.correctSquares = resultingList;
			this.incorrectSquares = [];
			this.selectedSquares = [];
		} else if (resultingList.length == 2) {
			this.correctSquares = [];
			this.incorrectSquares = resultingList;
			this.selectedSquares = [];
		} else if (resultingList.length == 1) {
			this.correctSquares = [];
			this.incorrectSquares = [];
			this.selectedSquares = resultingList;
		}
	}
	return;
};

// If the squares are not adjacent, returns a list containing just square2, signifying
// that square2 will be the only selected square. 
//
// If the squares are adjacent and there is no third square, returns a list with square1
// and square2, indicating that the match cannot be completed
//
// Otherwise, returns a list with square1, square2, and the third square in the line
MathGame.prototype.squareListAfterTwoSelections = function(square1, square2) {
	var row1 = square1.row;
	var row2 = square2.row;
	var col1 = square1.col;
	var col2 = square2.col;
	var square3;
	if (row1 == row2) {
		if (col1 == col2) {
			return [square2];
		} else if (col1 == col2 + 1) {
			square3 = {row: row1, col: col1 - 2};
		} else if (col1 == col2 - 1) {
			square3 = {row: row1, col: col1 + 2};
		} else {
			return [square2];
		}
	} else if (row1 == row2 + 1) {
		if (col1 == col2) {
			square3 = {row: row1 - 2, col: col1};
		} else if (col1 == col2 + 1) {
			square3 = {row: row1 - 2, col: col1 - 2};
		} else if (col1 == col2 - 1) {
			square3 = {row: row1 - 2, col: col1 + 2};
		} else {
			return [square2];
		}
	} else if (row1 == row2 - 1) {
		if (col1 == col2) {
			square3 = {row: row1 + 2, col: col1};
		} else if (col1 == col2 + 1) {
			square3 = {row: row1 + 2, col: col1 - 2};
		} else if (col1 == col2 - 1) {
			square3 = {row: row1 + 2, col: col1 + 2};
		} else {
			return [square2];
		}
	} else {
		return [square2];
	}
	if (this.isValidSquare(square3)) {
		return [square1, square2, square3];
	} else {
		return [square1, square2];
	}
};

module.exports = {
	create: function(rows, cols) {
		return new MathGame(rows, cols);
	}
};
