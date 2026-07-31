const STORAGE_KEY = "second-brain-items";

export function getBrainItems() {
    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
}

export function saveBrainItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function addBrainItem(item) {
    const items = getBrainItems();

    items.unshift(item);

    saveBrainItems(items);
}

export function deleteBrainItem(id) {
    const items = getBrainItems().filter(item => item.id !== id);

    saveBrainItems(items);
}