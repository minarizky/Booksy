CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    book_id VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    authors TEXT[],
    thumbnail TEXT,
    description TEXT
);

CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    book_id VARCHAR(255) REFERENCES books(book_id) ON DELETE CASCADE
);

CREATE TABLE done_reading (
    id SERIAL PRIMARY KEY,
    book_id VARCHAR(255) REFERENCES books(book_id) ON DELETE CASCADE
);