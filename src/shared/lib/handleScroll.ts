const handleScroll = (callback: (page: number) => void, page: number, isLoading: boolean) => {
  if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
    return;
  }
  callback(page);
};