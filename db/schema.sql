DROP TABLE IF EXISTS folders CASCADE;
DROP TABLE IF EXISTS files;

CREATE TABLE folders(
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE files(
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    size INTEGER NOT NULL,
    folder_id INTEGER NOT NULL,
    FOREIGN KEY (folder_id) REFERENCES folders(id) ON DELETE CASCADE
    CONSTRAINT unique_name_folder UNIQUE (name, folder_id)
);