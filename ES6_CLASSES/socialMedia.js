class User {
    constructor(name, email, password) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._posts = [];
    }

    // Getters and Setters
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        this._email = newEmail;
    }

    get password() {
        return this._password;
    }

    set password(newPassword) {
        this._password = newPassword;
    }

    // Methods
    addPost(post) {
        this._posts.push(post);
    }

    deletePost(post) {
        const index = this._posts.indexOf(post);
        if (index !== -1) {
            this._posts.splice(index, 1);
        }
    }

    displayPosts() {
        this._posts.forEach(post => {
            console.log(post.title);
        });
    }
}

class Post extends User {
    constructor(ownerName, ownerEmail, ownerPassword, title, content, date) {
        super(ownerName, ownerEmail, ownerPassword);
        this._title = title;
        this._content = content;
        this._date = date;
        this._likeCount = 0;
    }

    // Getters and Setters
    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get content() {
        return this._content;
    }

    set content(newContent) {
        this._content = newContent;
    }

    get date() {
        return this._date;
    }

    set date(newDate) {
        this._date = newDate;
    }

    // Methods
    addLike() {
        this._likeCount++;
    }

    displayDetails() {
        console.log("Owner's Name:", this._name);
        console.log("Title:", this._title);
        console.log("Content:", this._content);
        console.log("Date:", this._date);
        console.log("Like Count:", this._likeCount);
    }
}

// Example usage:
const user1 = new User("John Doe", "john@example.com", "password123");
const post1 = new Post("John Doe", "john@example.com", "password123", "First Post", "This is the content of my first post.", "2024-04-24");

user1.addPost(post1);
user1.displayPosts();
post1.addLike();
post1.displayDetails();
