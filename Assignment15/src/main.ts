//Part A

//1
class User {
  public id: number;
  public name: string;
  public email: string;
  private password: string;
  protected phone: string;
  private age: number;

  constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;

    if (age < 18 || age > 60) {
      throw new Error("Age must be between 18 and 60");
    }
    this.age = age;
  }

  displayInfo(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.phone}`);
    console.log(`Age: ${this.age}`);
  }
}

// const user1 = new User(1, "John", "johnremoun789@gmail.com", "123456", "01202020202", 20);
// user1.displayInfo();
// console.log("________________________________________________");


//2
class Admin extends User {

  constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
    super(id, name, email, password, phone, age);
  }

  manageNotes() {
    console.log("Admin is managing notes...");
  }
}

// const admin1 = new Admin(2, "Admin", "admin", "123321", "0111111111", 30);
// admin1.displayInfo(); 
// admin1.manageNotes();
// console.log("________________________________________________");


//3
class Note {
  public id: number;
  public title: string;
  public content: string;
 //6
  public userId: number;

  constructor(id: number, title: string, content: string, userId: number) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.userId = userId;
  }

  preview(): string {
    return this.content.substring(0, 20) + "...";
  }
}

// const note1 = new Note(1, "1", "This is my first note about lol and lol", user1.id);
// console.log(note1.preview());
// console.log("________________________________________________");


//4
class NoteBook {
  private notes: Note[] = [];

  addNote(note: Note): void {
    this.notes.push(note);
  }

  removeNote(noteId: number): void {
    this.notes = this.notes.filter(note => note.id !== noteId);
  }

  getAllNotes(): Note[] {
    return this.notes;
  }
}

// const notebook1 = new NoteBook();

// notebook1.addNote(note1);
// console.log("All Notes:", notebook1.getAllNotes());

// notebook1.removeNote(1);
// console.log("All Notes:", notebook1.getAllNotes());
// console.log("________________________________________________");

//5
class UserWithNotebooks extends User {
  public notebooks: NoteBook[] = [];

  addNotebook(notebook: NoteBook) {
    this.notebooks.push(notebook);
  }
}

//7
class Storage<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  getAllItems(): T[] {
    return this.items;
  }
}

// const numberStorage = new Storage<number>();
// numberStorage.addItem(10);
// numberStorage.addItem(20);
// console.log("Numbers:", numberStorage.getAllItems());


// const stringStorage = new Storage<string>();
// stringStorage.addItem("john");
// stringStorage.addItem("peter");
// console.log("Strings:", stringStorage.getAllItems());


// stringStorage.removeItem(0);
// console.log("All Items After Delete:", stringStorage.getAllItems());