const localStorageLinksKey = "_leetLinks";

function saveLinksToLocalStorage(links) {
  localStorage.setItem(localStorageLinksKey, JSON.stringify(links));
}

function getLinksFromLocalStorage(links) {
  if (localStorage.getItem(localStorageLinksKey)) {
    try {
      return JSON.parse(localStorage.getItem(localStorageLinksKey));
    } catch (e) {
      localStorage.removeItem(localStorageLinksKey);
    }
  }
}

export {
  saveLinksToLocalStorage,
  getLinksFromLocalStorage,
}
