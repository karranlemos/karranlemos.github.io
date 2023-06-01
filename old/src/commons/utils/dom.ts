export const setPageScrollBehavior = (scrollBehavior: 'auto' | 'smooth') => {
  const htmlTag = document.querySelector('html')
  if (!htmlTag)
    return
  htmlTag.style.scrollBehavior = scrollBehavior
}