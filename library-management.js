class LibraryItem {
    constructor(title, id, isAvailable = true){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;

    }
    checkout() {
    this.isAvailable = false;

    console.log(`${this.title} has been checked out`);

}

    returnItem() {
        this.isAvailable = true;

        console.log(`${this.title} has been Returned`);

    }

}

// Step 2: Create the Child Classes

class Book extends LibraryItem {
    constructor(title, id, author, genre){
        super(title, id);
        this.author = author;
        this.genre = genre;
    }
}


class DVD extends LibraryItem {
    constructor(title, id, director, duration){
        super(title, id);
        this.director = director;
        this.duration = duration;
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, IssueNumber, publisher){
        super(title, id);
        this.IssueNumber = IssueNumber;
        this.publisher = publisher;
    }
}

//Step 3: Create Objects

const book1 = new Book(
    "The Great Gatsby",
    101,
    "F. Scott Fitzgerald",
    "Fiction"
);

const dvd2 = new DVD(
    "Inception",
    102,
    "Christopher Nolan",
    148
);

const Magazine1 = new Magazine(
    "National Geographic",
    103,
    20,
    "National Geographic Partners"
);


//Step 4: Test the Inheritance

book1.checkout();


book1.returnItem();


dvd2.checkout();


Magazine1.checkout();









// ● Books have an author and a genre.
// ● DVDs have a director and duration.
// ● Magazines have an issueNumber and publisher.
// Tasks
// 1. Step 1: Create a Base Class
// ○ Define a class LibraryItem to represent shared properties
// (title, id, isAvailable) and methods (e.g., checkOut() and
// returnItem()).
// 2. Step 2: Extend the Base Class
// ○ Create child classes Book, DVD, and Magazine that inherit from
// LibraryItem.
// ○ Add unique properties and methods for each child class:
// ■ Book: Add properties like author and genre.
// ■ DVD: Add properties like director and duration.
// ■ Magazine: Add properties like issueNumber and publisher.
// 3. Step 3: Instantiate Objects
// ○ Create instances of each class and test the shared and unique
// methods.
// 1
// 4. Step 4: Test the Inheritance
// ○ Use inherited methods like checkOut() and returnItem() to
// manage the availability of items.
// ○ Test accessing and displaying unique properties of each child
// class.
