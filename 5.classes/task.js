// Задание 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state *= 1.5;
	}
	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;

		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}


class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}


class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}


class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}


class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

//   Задание 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		for (let book of this.books) {
			if (book[type] === value) {
				return book;
			}
		}
		return null;
	}
	giveBookByName(bookName) {
		for (let book of this.books) {
			if (book.name === bookName) {
				this.books.splice(this.books.indexOf(book), 1);
				return book
			}
		}
		return null
	}
}

// Задание 3

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}
	addMark(mark, lesson) {
		if (mark <= 5 && mark >= 2) {
			if (!Object.keys(this.marks).includes(lesson)) {
				this.marks[lesson] = [];
			}
			this.marks[lesson].push(mark);
		} else {
			return
		}

	}
	getAverageBySubject(subject) {
		if (!Object.keys(this.marks).includes(subject)) {
			return 0
		} else {
			return this.marks[subject].reduce((a, b) => a + b, 0) / this.marks[subject].length;
		}


	}
	getAverage() {
		let summa = 0;
		for (let subject of Object.keys(this.marks)) {
			summa += this.getAverageBySubject(subject);
		}
		return summa / (Object.keys(this.marks).length !== 0 ? Object.keys(this.marks).length : 1);
	}
}