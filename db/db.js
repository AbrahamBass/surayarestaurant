let db;

const request = indexedDB.open("app", 1);

request.onsuccess = (event) => {
    db = event.target.result;
};

request.onupgradeneeded = (event) => {
    db = event.target.result;

    if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: 'id' });
    }

};
